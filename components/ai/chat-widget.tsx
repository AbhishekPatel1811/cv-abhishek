"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowUp, FaXmark, FaMicrophone, FaStop } from "react-icons/fa6";
import { profile } from "@/lib/content/profile";
import { CHAT_OPEN_EVENT } from "@/components/ai/chat-events";
import { useVoice } from "@/components/ai/use-voice";
import { cn } from "@/lib/utils";

type Source = { title: string; source: string };
type Message = { id: string; role: "user" | "assistant"; content: string; sources?: Source[] };

const QUICK_PROMPTS = [
  "What has Abhishek shipped end to end?",
  "Tell me about the Sayyar project",
  "What's his AI / RAG experience?",
  "Is he open to roles?",
];

const STORAGE_KEY = "abhishek-chat-v1";

function decodeSources(header: string | null): Source[] {
  if (!header) return [];
  try {
    const bytes = Uint8Array.from(atob(header), (c) => c.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return [];
  }
}

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <p key={i} className={line.trim() === "" ? "h-2" : "mb-1.5 last:mb-0"}>
          {line.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="font-semibold text-ink">
                {part.slice(2, -2)}
              </strong>
            ) : (
              <span key={j}>{part}</span>
            )
          )}
        </p>
      ))}
    </>
  );
}

export function ChatWidget() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const voice = useVoice();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const idRef = useRef(0);
  const nextId = () => `m${idRef.current++}`;

  useEffect(() => {
    // hydrate-safe mount flag + restore session history (client only)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) setMessages(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  const send = useCallback(
    async (text: string) => {
      const content = text.trim();
      if (!content || busy) return;

      const userMsg: Message = { id: nextId(), role: "user", content };
      const assistantId = nextId();
      const history = [...messages, userMsg];
      setMessages([...history, { id: assistantId, role: "assistant", content: "" }]);
      setInput("");
      setBusy(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: history.map((m) => ({ role: m.role, content: m.content })),
          }),
        });

        const sources = decodeSources(res.headers.get("X-Sources"));
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, sources } : m))
        );

        if (!res.body) throw new Error("no body");
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantId ? { ...m, content: acc } : m))
          );
        }
      } catch {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: `Something went wrong. Email me at ${profile.email}.` }
              : m
          )
        );
      } finally {
        setBusy(false);
      }
    },
    [busy, messages]
  );

  useEffect(() => {
    const handler = (e: Event) => {
      setOpen(true);
      const prompt = (e as CustomEvent<{ prompt?: string }>).detail?.prompt;
      if (prompt) setTimeout(() => send(prompt), 120);
    };
    window.addEventListener(CHAT_OPEN_EVENT, handler);
    return () => window.removeEventListener(CHAT_OPEN_EVENT, handler);
  }, [send]);

  if (!mounted) return null;

  return (
    <>
      <audio ref={voice.audioRef} hidden />

      {/* launcher */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(true)}
            aria-label="Ask my AI"
            className="fixed bottom-5 right-5 z-[110] flex items-center gap-3 rounded-full border border-line bg-surface/90 px-4 py-3 text-sm font-medium text-ink shadow-2xl backdrop-blur-xl transition-colors hover:border-accent"
          >
            <span className="relative h-9 w-9 overflow-hidden rounded-full">
              <Image src="/abhishek.jpeg" alt="Abhishek" fill sizes="36px" className="object-cover" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-surface" />
            </span>
            Ask my AI
          </motion.button>
        )}
      </AnimatePresence>

      {/* panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 bottom-3 z-[110] flex h-[78svh] flex-col overflow-hidden rounded-3xl border border-line bg-bg/95 shadow-2xl backdrop-blur-xl sm:inset-x-auto sm:right-5 sm:h-[600px] sm:w-[400px]"
          >
            {/* header */}
            <div className="flex items-center justify-between border-b border-line px-4 py-3.5">
              <div className="flex items-center gap-3">
                <span className="relative h-9 w-9 overflow-hidden rounded-full">
                  <Image src="/abhishek.jpeg" alt="Abhishek" fill sizes="36px" className="object-cover" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">Ask Abhishek</div>
                  <div className="flex items-center gap-1.5 text-[11px] text-muted">
                    <span className={cn("h-1.5 w-1.5 rounded-full", voice.status === "live" ? "bg-accent" : "bg-accent/70")} />
                    {voice.status === "live" ? "Voice live" : "Online - grounded in real work"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => (voice.status === "idle" || voice.status === "error" ? voice.start() : voice.stop())}
                  aria-label="Voice mode"
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent",
                    voice.status === "live" && "border-accent bg-accent text-[color:var(--color-accent-ink)]"
                  )}
                >
                  {voice.status === "live" ? <FaStop size={12} /> : <FaMicrophone size={12} />}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:text-ink"
                >
                  <FaXmark size={14} />
                </button>
              </div>
            </div>

            {/* body */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div className="rounded-2xl rounded-tl-sm border border-line bg-surface px-4 py-3 text-sm text-ink-soft">
                    Hi, I&apos;m Abhishek&apos;s AI - ask me anything about his projects, stack or
                    career. I answer in first person and cite where it comes from.
                  </div>
                  <div className="flex flex-col gap-2">
                    {QUICK_PROMPTS.map((p) => (
                      <button
                        key={p}
                        onClick={() => send(p)}
                        className="rounded-xl border border-line bg-bg-2 px-3.5 py-2.5 text-left text-sm text-ink-soft transition-colors hover:border-accent hover:text-ink"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <div key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                      m.role === "user"
                        ? "rounded-br-sm bg-accent text-[color:var(--color-accent-ink)]"
                        : "rounded-tl-sm border border-line bg-surface text-ink-soft"
                    )}
                  >
                    {m.role === "assistant" && m.content === "" ? (
                      <span className="inline-flex gap-1">
                        <Dot /> <Dot d={0.15} /> <Dot d={0.3} />
                      </span>
                    ) : (
                      <Rich text={m.content} />
                    )}
                    {m.sources && m.sources.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5 border-t border-line pt-2">
                        {dedupeSources(m.sources).map((s) => (
                          <span
                            key={s.source}
                            className="rounded-md bg-bg-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-faint"
                          >
                            {s.source}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {voice.status === "error" && voice.error && (
                <div className="rounded-xl border border-amber/40 bg-amber/10 px-3 py-2 text-xs text-amber">
                  {voice.error}
                </div>
              )}
              {voice.status === "connecting" && (
                <div className="rounded-xl border border-line bg-surface px-3 py-2 text-xs text-muted">
                  Connecting voice...
                </div>
              )}
            </div>

            {/* input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-line p-3"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-line bg-surface px-3 py-2 focus-within:border-accent">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  rows={1}
                  placeholder="Ask about my work..."
                  className="max-h-28 flex-1 resize-none bg-transparent py-1 text-sm text-ink outline-none placeholder:text-faint"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  aria-label="Send"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-[color:var(--color-accent-ink)] transition disabled:opacity-30"
                >
                  <FaArrowUp size={13} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Dot({ d = 0 }: { d?: number }) {
  return (
    <motion.span
      className="inline-block h-1.5 w-1.5 rounded-full bg-muted"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity, delay: d }}
    />
  );
}

function dedupeSources(sources: Source[]): Source[] {
  const seen = new Set<string>();
  return sources.filter((s) => (seen.has(s.source) ? false : (seen.add(s.source), true)));
}
