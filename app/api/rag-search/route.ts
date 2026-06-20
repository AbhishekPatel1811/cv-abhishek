import { retrieve } from "@/lib/ai/retrieval";
import { isPrivateQuestion } from "@/lib/ai/persona";

export const runtime = "nodejs";

// Used by voice-mode function calling (and available for debugging the RAG layer).
export async function POST(req: Request) {
  let body: { query?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "bad request" }, { status: 400 });
  }

  const query = (body.query || "").slice(0, 1000);
  if (!query.trim()) return Response.json({ results: [] });
  if (isPrivateQuestion(query)) return Response.json({ results: [], blocked: true });

  const results = retrieve(query, 4).map((c) => ({
    title: c.title,
    source: c.source,
    text: c.text,
  }));

  return Response.json({ results });
}
