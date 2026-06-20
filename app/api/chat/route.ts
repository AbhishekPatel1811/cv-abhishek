import OpenAI from "openai";
import { retrieve } from "@/lib/ai/retrieval";
import {
  buildSystemPrompt,
  isPrivateQuestion,
  PRIVATE_DEFLECTION,
} from "@/lib/ai/persona";
import { profile } from "@/lib/content/profile";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

const encoder = new TextEncoder();

// crude in-memory rate limit per warm instance (cost guard)
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 20;
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_PER_WINDOW;
}

function encodeSources(sources: { title: string; source: string }[]): string {
  return Buffer.from(JSON.stringify(sources)).toString("base64");
}

function plain(text: string, sourcesHeader: string, status = 200): Response {
  const stream = new ReadableStream({
    start(c) {
      c.enqueue(encoder.encode(text));
      c.close();
    },
  });
  return new Response(stream, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Sources": sourcesHeader,
      "Cache-Control": "no-store",
    },
  });
}

export async function POST(req: Request) {
  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const messages = (body.messages || []).filter(
    (m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string"
  );
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const query = lastUser?.content?.slice(0, 1000) ?? "";
  if (!query.trim()) return new Response("Empty message", { status: 400 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) {
    return plain("You're going a bit fast - give me a few seconds and try again.", encodeSources([]), 429);
  }

  // hard-stop private topics before any model call
  if (isPrivateQuestion(query)) {
    return plain(PRIVATE_DEFLECTION, encodeSources([]));
  }

  const context = retrieve(query, 4);
  const sourcesHeader = encodeSources(context.map((c) => ({ title: c.title, source: c.source })));
  const apiKey = process.env.OPENAI_API_KEY;

  // No key: grounded retrieval fallback (still useful + private).
  if (!apiKey) {
    const top = context[0];
    const fallback = top
      ? `${top.text}\n\n(My live AI chat needs an OpenAI key to stream full answers - but that is straight from my work. For more, email ${profile.email}.)`
      : `Ask me about my projects (BrandGen, ConvoAI, Sayyar, StarTech and more), my stack, or my career - or email me at ${profile.email}.`;
    return plain(fallback, sourcesHeader);
  }

  const client = new OpenAI({ apiKey });
  const model = process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini";
  const history = messages.slice(-8).map((m) => ({ role: m.role, content: m.content }));

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const completion = await client.chat.completions.create({
          model,
          temperature: 0.5,
          max_tokens: 500,
          stream: true,
          messages: [{ role: "system", content: buildSystemPrompt(context) }, ...history],
        });
        for await (const chunk of completion) {
          const delta = chunk.choices[0]?.delta?.content;
          if (delta) controller.enqueue(encoder.encode(delta));
        }
      } catch {
        controller.enqueue(
          encoder.encode(`My AI hit a snag just now. Please try again, or email me at ${profile.email}.`)
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Sources": sourcesHeader,
      "Cache-Control": "no-store",
    },
  });
}
