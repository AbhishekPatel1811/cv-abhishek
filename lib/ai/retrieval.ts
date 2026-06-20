import { knowledgeBase, type KbChunk } from "./knowledge-base";

const STOP = new Set([
  "the", "a", "an", "and", "or", "of", "to", "in", "on", "for", "is", "are", "was",
  "were", "be", "with", "his", "he", "him", "you", "your", "what", "who", "how",
  "tell", "me", "about", "did", "do", "does", "at", "it", "this", "that", "i",
]);

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s.+#]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t));
}

// Lightweight hybrid retrieval: BM25-style term scoring + phrase + title boosts.
// Runs in-process over the small KB - no vector DB required.
const docs = knowledgeBase.map((c) => ({
  chunk: c,
  tokens: tokenize(`${c.title} ${c.text}`),
  titleTokens: tokenize(c.title),
}));

const N = docs.length;
const df = new Map<string, number>();
for (const d of docs) {
  for (const t of new Set(d.tokens)) df.set(t, (df.get(t) || 0) + 1);
}
const avgLen = docs.reduce((a, d) => a + d.tokens.length, 0) / Math.max(N, 1);
const k1 = 1.5;
const b = 0.75;

function idf(term: string): number {
  const n = df.get(term) || 0;
  return Math.log(1 + (N - n + 0.5) / (n + 0.5));
}

export type RetrievedChunk = KbChunk & { score: number };

export function retrieve(query: string, topK = 4): RetrievedChunk[] {
  const qTokens = tokenize(query);
  if (qTokens.length === 0) return [];
  const qLower = query.toLowerCase();

  const scored = docs.map((d) => {
    const len = d.tokens.length;
    let score = 0;
    for (const term of new Set(qTokens)) {
      const tf = d.tokens.filter((t) => t === term).length;
      if (tf === 0) continue;
      const denom = tf + k1 * (1 - b + (b * len) / avgLen);
      score += idf(term) * ((tf * (k1 + 1)) / denom);
      if (d.titleTokens.includes(term)) score += 1.2; // title boost
    }
    // phrase boost: reward direct substring hits of multi-word queries
    if (qTokens.length > 1 && d.chunk.text.toLowerCase().includes(qLower)) score += 3;
    return { ...d.chunk, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}
