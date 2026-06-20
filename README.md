# Abhishek Patel - AI Portfolio

A "wow" but knowledge-heavy personal portfolio for an AI-native full-stack engineer. Scroll-driven
career narrative, 9 full case studies, and a first-person **"Ask my AI"** assistant grounded in real
work - all static, no database.

## Stack

- **Next.js (App Router) + React + TypeScript**
- **Tailwind v4** - every color/typography token lives in `app/globals.css` (retheme by editing tokens)
- **Motion** (motion.dev) + **Lenis** smooth scroll + **GSAP** available
- Typography: **Clash Display + General Sans** (Fontshare) + Instrument Serif + Geist
- **OpenAI** powers the chat (text) and the **Realtime** voice mode (funded by OpenAI API credits)

## The AI chat

- Floating, first-person "Ask Abhishek" widget on every page (open it from any "Ask my AI" button).
- **In-process RAG, no database.** `lib/ai/retrieval.ts` runs BM25-style hybrid keyword retrieval
  over a static knowledge base (`lib/ai/knowledge-base.ts`) built at compile time from the content
  layer. The corpus is tiny, so a vector DB would be pure overhead.
- **Boundaried to portfolio data only.** System prompt + guardrails (`lib/ai/persona.ts`) refuse
  salary/compensation/private topics and anything outside the corpus, and redirect hiring to email.
- **Model:** OpenAI (`OPENAI_API_KEY`, `gpt-4o-mini`). Rate-limited (20 msgs/min/IP) + 500-token cap.
- **Graceful without a key:** with no key set, the chat returns grounded snippets from the KB.
  Add `OPENAI_API_KEY` for streamed conversational answers.
- **Voice mode** uses the OpenAI Realtime API over WebRTC (`/api/voice-token` mints an ephemeral key,
  `components/ai/use-voice.ts` connects). Lazy + rate-limited; uses `OPENAI_API_KEY`.

## Content (single source of truth, sanitized)

All copy/data lives in `lib/content/` (`profile`, `projects`, `timeline`, `skills`). Private items
(compensation, etc.) are intentionally excluded from both the site and the chat corpus.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000 (uses webpack; see note below)
pnpm build
pnpm start
pnpm lint
pnpm typecheck
```

> Windows note: dev/build are pinned to `--webpack` because Tailwind v4 + Turbopack can crash the
> PostCSS worker on Windows.

Copy `.env.example` to `.env.local` and add `OPENAI_API_KEY` to enable the live chat + voice (optional).

## SEO / GEO / AEO

Person + WebSite JSON-LD (`lib/seo.ts`), per-project CreativeWork schema, dynamic OG image
(`app/opengraph-image.tsx`), `app/sitemap.ts`, `app/robots.ts` (explicit AI-crawler allowlist),
and `public/llms.txt` + `public/llms-full.txt`.

## Deploy

Deploys to Vercel as-is (static pages + serverless routes, no DB). Set `NEXT_PUBLIC_SITE_URL` and,
optionally, `OPENAI_API_KEY`.

## Make it yours

- **Recolor/retheme:** edit the tokens at the top of `app/globals.css` (e.g. swap the lime accent
  for amber - the amber token is already defined).
- **Hero video:** drop a Higgsfield clip at `public/hero.mp4` (+ `public/hero-poster.jpg`) and set
  `HERO_VIDEO` in `components/home/hero.tsx`.
- **Photo:** drop `public/abhishek.jpg` and swap the monogram in `app/about/page.tsx`.
