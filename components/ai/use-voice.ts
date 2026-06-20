"use client";

import { useCallback, useRef, useState } from "react";

export type VoiceStatus = "idle" | "connecting" | "live" | "error";

// WebRTC voice mode against the OpenAI Realtime API.
// Requires OPENAI_API_KEY on the server (the /api/voice-token route mints an ephemeral key).
export function useVoice() {
  const [status, setStatus] = useState<VoiceStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const pcRef = useRef<RTCPeerConnection | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stop = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    pcRef.current?.close();
    pcRef.current = null;
    streamRef.current = null;
    setStatus("idle");
  }, []);

  const start = useCallback(async () => {
    setError(null);
    setStatus("connecting");
    try {
      const tokenRes = await fetch("/api/voice-token", { method: "POST" });
      const tokenData = await tokenRes.json();
      if (!tokenRes.ok || !tokenData.value) {
        setError(tokenData.error || "Voice mode is unavailable right now.");
        setStatus("error");
        return;
      }

      const ephemeral: string = tokenData.value;
      const model: string = tokenData.model || "gpt-realtime";

      const pc = new RTCPeerConnection();
      pcRef.current = pc;

      // remote audio
      const audioEl = audioRef.current ?? new Audio();
      audioEl.autoplay = true;
      audioRef.current = audioEl;
      pc.ontrack = (e) => {
        audioEl.srcObject = e.streams[0];
      };

      // mic
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      stream.getTracks().forEach((t) => pc.addTrack(t, stream));

      pc.createDataChannel("oai-events");

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      const sdpRes = await fetch(`https://api.openai.com/v1/realtime?model=${model}`, {
        method: "POST",
        body: offer.sdp,
        headers: {
          Authorization: `Bearer ${ephemeral}`,
          "Content-Type": "application/sdp",
        },
      });

      if (!sdpRes.ok) {
        setError("Could not establish the voice connection.");
        setStatus("error");
        stop();
        return;
      }

      const answer = { type: "answer" as const, sdp: await sdpRes.text() };
      await pc.setRemoteDescription(answer);

      pc.onconnectionstatechange = () => {
        if (pc.connectionState === "connected") setStatus("live");
        if (["failed", "disconnected", "closed"].includes(pc.connectionState)) stop();
      };
      setStatus("live");
    } catch {
      setError("Microphone access or the voice connection failed.");
      setStatus("error");
      stop();
    }
  }, [stop]);

  return { status, error, start, stop, audioRef };
}
