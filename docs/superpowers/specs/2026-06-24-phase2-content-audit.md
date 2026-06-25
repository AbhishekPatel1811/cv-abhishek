# Phase 2 Content Audit — Abhishek Patel Portfolio

**Date:** 2026-06-24
**Scope:** Read-only audit of content/data layer, AI knowledge base, home sections, About page, and case studies.
**Ground truth:** `Abhishek_Patel_Career_Playbook.md`, `Abhishek_Patel_Resume.pdf` / `.docx`.
**Benchmark:** yashsoni.dev — knowledge/career-heavy, credible, scannable, metric-backed.

> Note on sources: where the **playbook** and the **resume** disagree on live numbers, the **resume is the more current ground truth** (the playbook's "current (May 2026)" growth figures are older than the resume's). This audit treats the resume as authoritative for live metrics and flags the playbook as needing a sync.

---

## 1. Executive Summary

### Overall verdict
The published content is in **strong shape** and notably disciplined. The privacy gate holds: there is **no leak** of salary, the Mercor off-boarding, Outlier failed assessments, or any "honest gaps" section anywhere in visitor-facing copy. The architecture (single sanitized content layer feeding both the site and the RAG/voice knowledge base) is the right design and is working as intended.

The content is already metric-backed and concrete in most places — it largely avoids AI-slop. The opportunity in Phase 2 is **not** a rewrite; it is **filling credible gaps the playbook supports**, **tightening a handful of consistency seams**, and **adding two or three high-credibility facts the site currently under-uses** (recognitions, AI-evaluation framing, system-design study).

### Top themes
1. **Privacy gate: PASS.** No P0 privacy leaks. The KB comment, persona guardrails, regex deflection, and voice-route instructions are all consistent and correct. (See §3.2.)
2. **Accuracy: high, with small drift.** A few stack/label mismatches between resume and site (BrandGen `ConvexDB`, ConvoAI `Radix UI`), and stale numbers in the playbook vs. the (correct) site. No exaggeration beyond what ground truth supports.
3. **Under-used credible material.** Apex36's accelerator recognitions (AWS Startups, Microsoft for Startups, NVIDIA Inception, Startup India, MSME), the StarTech market/broker specifics, the Namaste Node.js course credibility, and the system-design study are all real and under-surfaced.
4. **"Writing" removal is clean.** No orphaned route, nav link, content file, or component remains. Nothing to delete. (See §3.10.)
5. **Two metric integrity risks (P1, not P0).** BrandGen growth numbers are live/changing and currently duplicated across 3 files; and the contested numbers must always track the resume, not the (older) playbook.

### P0 issues
**None.** No privacy leak, no factual fabrication, no broken privacy guardrail.

---

## 2. Cross-Cutting Consistency Findings

### 2.1 Key-fact consistency table

| Fact | Resume (authoritative) | Playbook | Site value(s) | Where it appears | Verdict |
|---|---|---|---|---|---|
| Title | "AI-Native Full Stack Engineer" | "Full Stack Engineer / AI Builder" | "AI-Native Full-Stack Engineer" | profile.ts, hero, nav, persona, voice route | Consistent |
| Years of experience | "2 years" | "~2 years" | "Two years" / "in 2 years" | profile.ts subhead, hero, about | Consistent |
| Email | patelabhishek1811@gmail.com | — | patelabhishek1811@gmail.com | profile.ts | **Correct** (matches resume) |
| Location | "Mumbai, IN" | "Mumbai" | "Mumbai, India" | profile.ts | Consistent |
| Live AI products count | (implied via products) | "two internal AI products… two live Omani client products" | "4 live AI products" | profile.ts stats, hero | **Needs framing check** — see §2.2 |
| Projects count | — | 9 in Appendix C | "9 projects" / `projects.length` (=9) | profile.ts, featured-work, work page | Consistent (9 entries confirmed) |
| Countries shipped to | India + Oman | India + Oman | "2 countries" | profile.ts, timeline-section title | Consistent |
| Ad spend | "zero ad spend" | "zero ad spend" | "0 ad spend - 100% organic" | profile.ts, impact, timeline | Consistent |
| BrandGen users | **62** | 46 (older) | 62 | projects.ts results | Matches resume; playbook stale |
| BrandGen outputs | **700+** | 540 (older) | 700+ | projects.ts | Matches resume; playbook stale |
| BrandGen tokens | **1.1M+** | 772.7K (older) | 1.1M+ | projects.ts | Matches resume; playbook stale |
| BrandGen stack | Next.js, TS, Gemini, **ConvexDB**, Better-Auth, Supabase, Tailwind, FM | ConvexDB + Supabase | Next.js, TS, Gemini, Better-Auth, **Supabase** (no ConvexDB) | projects.ts, skills KB | **Drift** — ConvexDB dropped (§3.5) |
| ConvoAI stack | …+ **Radix UI** | …+ Radix UI | no Radix UI listed | projects.ts | Minor drift (§3.5) |
| Apex36 founded | Jul 1, 2024 | Jul 1, 2024 | "founding-day" (no date) | timeline, about | Consistent |
| Apex36 recognitions | (not on resume) | AWS Startups, MS for Startups, NVIDIA Inception, Startup India, MSME | **absent** | — | **Gap** (§3.6) |
| StarTech markets | Crypto, Forex, Stocks, Commodities (resume); +Indices, +Brokers (playbook) | 5 markets + BingX/MT5 | "5 markets" (no broker names) | projects.ts | Under-used (§3.5) |
| Vercel→GCP overage | 183 GB | 183.57 GB / 10 GB | "183 GB" | projects.ts, impact, about | Consistent |
| GA4 dimensions | 14 | 14 | 14 | projects.ts, skills, impact | Consistent |
| i18n keys | 230/lang | 230/lang | 230 | projects.ts, impact, skills | Consistent |
| Sayyar period | Jul 2024–Present (FT) / client via Basira | Jul–Dec 2025 | "Jul - Dec 2025" | projects.ts, timeline | Consistent |
| StarTech period | (Basira window) | Jul–Dec 2025 | "Jul - Dec 2025" | projects.ts | Consistent |

### 2.2 "4 live AI products" — framing check (P1)
The hero and `profile.stats` claim **"4 live AI products."** Ground truth supports four *live AI products* only if counted as: BrandGen, ConvoAI, Mappie.ai, and PiSolved/PiSharp **or** PiSolved Chat. But:
- The marquee + proof list shows **BrandGen, ConvoAI, Sayyar, StarTech, Mappie.ai, Apex36** — a 6-tile set mixing AI products, a transport SaaS, a trading dashboard, and a marketing site.
- Sayyar and StarTech are **not** "AI products"; Apex36 is a marketing site.
- The four genuinely-live, genuinely-AI products are **BrandGen, ConvoAI, Mappie.ai** (all live AI SaaS) + one of {PiSolved Chat (RAG, but private/no URL), PiSharp (live, but redesign not "AI product")}.

**This is defensible but slightly soft.** Recommendation (P1): either keep "4 live AI products" and ensure the four are unambiguous in the marquee/proof, **or** switch to a cleaner, fully-defensible split such as **"4 live AI products · 2 countries · 9 projects end to end"** where the 4 = BrandGen, ConvoAI, Mappie.ai, PiSharp(as live product). Document the canonical four in a code comment so it never drifts. Not a fabrication — just tighten so a sharp viewer can't poke it.

### 2.3 Single-source-of-truth gaps (P1)
- **BrandGen growth numbers (62 / 700+ / 1.1M+)** live only in `projects.ts.results`, but the *narrative* numbers ("100% organic", "zero ad spend") are echoed in `impact.tsx`, `timeline.ts`, `profile.ts`. These are living numbers; today they agree with the resume but **will drift** the moment the resume updates. Recommendation: add a `// SYNC: matches resume as of <date>` marker on the BrandGen `results` block and on `impact.tsx` so future edits stay coordinated.
- **183 GB / 14 dims / 230 keys / 40+ metrics / 12+ collections** are duplicated verbatim across `projects.ts` and `impact.tsx`. They currently agree. Low risk, but note it.

---

## 3. Per-Section Findings

### 3.1 Content layer — `lib/content/profile.ts`
**Current state:** Clean, public-credibility-only. Title, headline, subhead, intro, 4 stats, proof list. Email correct.
**Issues:**
- (P1) `stats` "4 live AI products" framing soft vs. the 6-tile proof list (see §2.2).
- (P2) `proof` array mixes AI products with non-AI systems (Sayyar/StarTech/Apex36), slightly undercutting "AI products" if a reader equates proof = products.
**Recommendations:**
- P1: Lock the canonical "four AI products" and align proof/marquee, or relabel the stat.
- P2: Consider a `recognitions` field (AWS Startups Partner, Microsoft for Startups, NVIDIA Inception, Startup India, MSME) to power a new credibility strip (see §3.6). Ground truth: playbook Appendix A.

### 3.2 AI knowledge base — `lib/ai/knowledge-base.ts`, `retrieval.ts`, `persona.ts`
**Current state:** KB is derived entirely from the sanitized content layer — the raw playbook is never ingested (verified). Persona guardrails block salary/compensation/weakness/fired/off-boarded via regex + system-prompt boundaries; voice route (`app/api/voice-token/route.ts`) repeats the same boundaries. Retrieval is a self-contained BM25 — no external data.
**Issues:**
- (PASS, no P0) Privacy gate intact across KB, persona, and voice.
- (P2) The KB has **no chunk for recognitions** or for the *system-design study / AI-evaluation* framing, so the chatbot can't speak to two of the strongest credibility points. It also can't answer "what awards/recognitions does Apex36 have" or "how do you keep learning."
- (P2) `bio-positioning` mentions "uses AI tools… without mistaking AI output for engineering judgment" — good, generic, safe. No leak. Keep.
- (P2) Retrieval stoplist + tokenizer are fine; `topK=4` is reasonable for a small KB. No action needed.
**Recommendations:**
- P2: After adding a `recognitions` field and a learning/timeline entry (below), they automatically flow into the KB via the existing `timelineChunks`/new bio chunk — add one `bio-recognitions` chunk and one `bio-learning` chunk so the assistant can speak to them.

### 3.3 Home — Hero (`components/home/hero.tsx`)
**Current state:** Strong. Rotating roles, "shipped 4 live AI products in 2 years - RAG chatbots, voice agents and brand-AI - built end to end, mostly solo." Avatar, Ask-AI CTA, View work.
**Issues:**
- (P1) "4 live AI products" — same framing note as §2.2.
- (P2) "mostly solo" is accurate and good; keep. The subline is one of the best on the site.
**Recommendations:**
- P1: Align "4 live AI products" with the canonical set.
- P2 (optional polish): add one concrete proof token under the CTA row (e.g., "Live: BrandGen · ConvoAI · Mappie.ai") to make the "4" immediately legible. Grounded in Appendix C.

### 3.4 Home — Product marquee (`components/home/product-marquee.tsx`)
**Current state:** 6 tiles, all flagged `live: true`, all linking to case studies. Header: "Shipped in production - real products, real users."
**Issues:**
- (P1) **Accuracy of the "Live" badge on Sayyar and StarTech.** Sayyar is `status: "Private client"` and StarTech has **no public URL** and `isPrivate: true`. Marquee marks both as **Live** with a green dot, but the case-study page renders them as "Private client — visuals under NDA" with no live link (StarTech). A viewer who clicks expecting a live product hits a private/NDA card. The "real products, real users" header over a tile that has no public link is a small credibility seam.
- (P2) `tag` for Mappie is "AI product specs" vs. case-study category "AI SaaS" — minor wording inconsistency.
**Recommendations:**
- P1: Either drop the green "Live" badge for Sayyar/StarTech (replace with "Client" / "NDA"), or restrict the marquee to genuinely-live, linkable products (BrandGen, ConvoAI, Mappie.ai, PiSharp, Apex36). Ground truth: Appendix C status column.
- P2: Standardize the tag taxonomy with the case-study `category`.

### 3.5 Home — Featured work + Case studies (`featured-work.tsx`, `app/work/[slug]/page.tsx`, `projects.ts`)
**Current state:** Excellent. Each project has problem/solution/architecture/features/results/role/lessons/FAQ. Private projects clearly marked, NDA framing handled well, JSON-LD `CreativeWork` per case study. This is the strongest part of the site and benchmarks well against yashsoni.dev's depth.
**Issues:**
- (P1) **BrandGen stack drift:** resume lists **ConvexDB** in the BrandGen stack; `projects.ts` omits it (lists Supabase only). The playbook confirms ConvexDB + Supabase. Add ConvexDB.
- (P2) **ConvoAI stack:** resume + playbook include **Radix UI**; `projects.ts` omits it.
- (P2) **StarTech under-uses ground truth:** resume/playbook name brokers (**BingX, MT5**) and the SIC/SICCS strategy-capsule detail and named metrics (Sharpe, Sortino, Calmar, SQN). The case study already lists metrics well; adding broker names + "5 markets: crypto, forex, stocks, indices, commodities" (currently "5 markets covered" with no names in results, though the problem text lists them) would add credibility. Minor.
- (P2) **JSON-LD `creator.url`** uses `https://abhishekpatel.dev` — confirm this domain is the live deploy target; if the site ships elsewhere, the structured data points at the wrong canonical. **Needs verification from user.**
- (P2) **CASE_IMAGES** has no entry for `convoai`→ wait, it does; but `startech`, `pisolved-chat`, `devtinder` correctly fall through to the NDA/placeholder card. Fine.
**Recommendations:**
- P1: Add `ConvexDB` to BrandGen `stack`.
- P2: Add `Radix UI` to ConvoAI `stack`; add broker/market names to StarTech results or architecture; verify `creator.url` domain.

### 3.6 Home — Impact / "By the numbers" (`components/home/impact.tsx`)
**Current state:** Six hard numbers, all accurate and well-chosen ("Outcomes, not adjectives"). 183 GB, 40+ metrics, 12 days, 6 personas, 2 MySQL DBs, 230 i18n keys.
**Issues:**
- (P2) **Under-uses two strong, credible numbers** the playbook provides: the **GEO composite score lift (48 → ~70 target)** and **BrandGen organic growth (62 users / 700+ outputs / 1.1M+ tokens, zero ad spend)**. The growth numbers are the single most "wow," recruiter-legible metric and currently only appear buried in the BrandGen case study results.
- (P2) **Missing the Apex36 recognitions** entirely (AWS Startups Partner, Microsoft for Startups, NVIDIA Inception, Startup India, MSME). These are third-party-validated credibility and ideal for a logo/badge strip near Impact or Story. Ground truth: Appendix A.
**Recommendations:**
- P2: Swap one weaker stat (or add a 7th) for **"1.1M+ tokens / 700+ AI creatives, zero ad spend"** to surface BrandGen growth on the home page.
- P2: Add a small **"Built inside an accelerator-recognized startup"** strip listing the 5 recognitions (text or logos). New `recognitions` field in `profile.ts` → render in a new strip and add to KB.

### 3.7 Home — Skills (`components/home/skills-section.tsx`, `skills.ts`)
**Current state:** Six well-organized groups with honest blurbs ("Functional and growing"). Maps cleanly to resume Technical Skills.
**Issues:**
- (P2) **AI & ML group omits "AI evaluation / rubric design / trajectory methodology"** beyond a single bullet — yet the timeline already references "frontier AI model evaluation." The playbook supports a *generic, positive* framing (rubric design, golden-trajectory methodology, SFT data) **without** naming Mercor/Outlier or any failure. This is a rare differentiator and is currently thin.
- (P2) **No "Voice AI / real-time" depth signal** beyond "VAPI voice AI" — the ConvoAI circuit-breaker work is a strong story that the skills section flattens.
- (P2) Blurbs are good and honest; "Functional and growing" on Backend is appropriately calibrated (avoids over-claiming, matches playbook's honest depth ratings) — keep.
**Recommendations:**
- P2: In AI & ML, expand the evaluation bullet to "AI evaluation: rubric design, golden-trajectory methodology, SFT data" (generic, no platform names). Already partially present in timeline; make skills agree.

### 3.8 Home — Story (`components/home/story.tsx`)
**Current state:** Four principles (Starter instinct, Out of lane, Playbook builder, AI as multiplier) drawn straight from the playbook's "Key Career Patterns." Tight, specific, non-slop.
**Issues:** None material. The "writing the onboarding doc… then executing the task" phrasing is the only `writing` grep hit and is unrelated to the removed Writing section — correct to keep.
**Recommendations:**
- P2 (optional): The playbook's "Founder Proximity" pattern (worked directly with two founders since day one, trusted with international clients and company infra) is a strong 5th principle that is currently only implied. Consider adding it.

### 3.9 Home — Ask-AI section (`components/home/ask-ai-section.tsx`) + Contact (`contact.tsx`)
**Current state:** Ask-AI is a highlight — "Don't read my CV. Interrogate it," RAG framing, voice mode, suggested prompts. Contact is clean, correct email, resume download, socials all match `profile.ts`.
**Issues:**
- (P2) Suggested prompts are good; none touch the strongest differentiators (international delivery, infra migration). Could add one like "How did you migrate Apex36 off Vercel?" to showcase depth.
- (PASS) "Is he open to roles?" prompt routes through KB `bio-contact` cleanly; no privacy risk.
**Recommendations:**
- P2: Add 1–2 prompts that steer toward the migration/Oman stories.

### 3.10 About page (`app/about/page.tsx`)
**Current state:** Three-paragraph narrative + "What I'm looking for" (4 role types straight from playbook Part 8) + reused Timeline, Skills, Contact. Strong, honest, no leaks.
**Issues:**
- (P2) The narrative omits the **education arc** (6 years, 90.74% diploma, 8.5 GPA, NLP/ML coursework) which the KB *has* (`bio-education`) and the timeline shows, but the About prose doesn't — a knowledge/career-heavy benchmark (yashsoni.dev) would surface it.
- (P2) No mention of **system-design study** (Namaste Frontend System Design) which is real, ongoing, and directly answers the "are you still leveling up" question recruiters ask. Timeline tag exists ("System design") but About prose doesn't reinforce it.
- (P2) No **recognitions** strip on About either.
**Recommendations:**
- P2: Add one sentence on the education-to-AI throughline and one on ongoing system-design study. Grounded in playbook Parts 2 and 10.

### 3.11 Timeline (`lib/content/timeline.ts`, `timeline-section.tsx`)
**Current state:** Seven entries, accurate, positively framed. The 2026 entry ("Frontier AI evaluation & systems study") handles the AI-eval work generically and positively — **no leak** of Mercor/Outlier/off-boarding/failures. Good.
**Issues:**
- (P2) The "Scale AI platforms" phrasing in the org line ("Scale AI platforms + Namaste Frontend System Design") is *technically* accurate (both Mercor and Outlier are Scale AI), but it slightly invites the question "which platforms?" Consider "Frontier AI evaluation platforms" to stay generic and avoid prompting follow-ups about specific platform outcomes. Low priority, judgment call.
- (P2) Mappie period shows "Jul 2024 - Jan 2025" in projects but timeline founding entry says "Jul 2024" only — consistent enough.
**Recommendations:**
- P2: Optionally generalize "Scale AI platforms" → "frontier AI evaluation platforms."

### 3.12 "Writing" section removal — orphan check
**Current state:** **Clean.** `writing.ts`, `writing.tsx` no longer exist (stale glob index aside). No nav link, no route under `app/`, no homepage import, no KB reference. Grep for `writing|Writing|/blog` returns only the unrelated "writing the onboarding doc" phrase in `story.tsx`.
**Recommendation:** **Nothing to delete.** Remove the audit item from the backlog.

---

## 4. Prioritized Phase 2 Work List

### P0 — none
No privacy leaks or fabrications found. Privacy gate confirmed intact across content layer, KB, persona, retrieval, and voice route.

### P1 — credibility seams (do first)
1. **Lock the canonical "4 live AI products"** and make it unambiguous. Decide the four (recommended: BrandGen, ConvoAI, Mappie.ai, PiSharp), add a code comment, and align hero + marquee + proof so a sharp viewer can't poke it.
   *Files:* `lib/content/profile.ts`, `components/home/hero.tsx`, `components/home/product-marquee.tsx`.
2. **Fix the marquee "Live" badge** on Sayyar and StarTech (private/no public URL). Relabel to "Client"/"NDA" or restrict marquee to linkable-live products.
   *File:* `components/home/product-marquee.tsx` (status sourced from `projects.ts`).
3. **Add `ConvexDB` to BrandGen stack** to match resume + playbook.
   *File:* `lib/content/projects.ts` (and it flows to the KB automatically).
4. **Add SYNC markers on living metrics** (BrandGen 62/700+/1.1M+) so site numbers always track the resume, not the older playbook.
   *Files:* `lib/content/projects.ts`, `components/home/impact.tsx`.

### P2 — credibility upgrades (high ROI, all playbook-grounded)
5. **Add Apex36 recognitions** (AWS Startups Partner, Microsoft for Startups, NVIDIA Inception, Startup India, MSME) as a new `profile.recognitions` field; render a credibility strip near Impact/Story and About; add a `bio-recognitions` KB chunk.
   *Files:* `lib/content/profile.ts`, new strip component, `app/about/page.tsx`, `lib/ai/knowledge-base.ts`. Ground truth: Appendix A.
6. **Surface BrandGen organic growth on the home page** (swap/add an Impact stat: "1.1M+ tokens · 700+ AI creatives · zero ad spend").
   *File:* `components/home/impact.tsx`. Ground truth: resume Projects / playbook Phase 5.
7. **Add ConvoAI `Radix UI`; enrich StarTech** with broker/market names (BingX, MT5; crypto/forex/stocks/indices/commodities).
   *File:* `lib/content/projects.ts`. Ground truth: resume + playbook Phase 4.
8. **Strengthen AI-evaluation framing in Skills** to match the timeline ("rubric design, golden-trajectory methodology, SFT data" — generic, no platform names).
   *File:* `lib/content/skills.ts`.
9. **Add education + system-design study to About prose** (6-year arc, NLP/ML throughline; ongoing Namaste FSD). Add `bio-learning` KB chunk so the chatbot can answer "how do you keep learning."
   *Files:* `app/about/page.tsx`, `lib/ai/knowledge-base.ts`. Ground truth: playbook Parts 2 & 10.
10. **Optional: add "Founder proximity" as a 5th Story principle**, and add 1–2 deeper Ask-AI prompts (migration, Oman delivery).
    *Files:* `components/home/story.tsx`, `components/home/ask-ai-section.tsx`.
11. **Verify `creator.url` domain** in case-study JSON-LD (`https://abhishekpatel.dev`) matches the live deploy domain.
    *File:* `app/work/[slug]/page.tsx`. **Needs verification from user.**
12. **Optional: generalize "Scale AI platforms"** → "frontier AI evaluation platforms" in the timeline org line to avoid prompting platform-specific follow-ups.
    *File:* `lib/content/timeline.ts`.

### Needs verification from user (not in ground truth)
- Canonical live/deploy domain (for JSON-LD `creator.url` and any canonical handling).
- Whether to count PiSharp vs. PiSolved Chat as the 4th "live AI product."
- Recognition logos (assets) if a logo strip is preferred over text.

---

*Audit complete. No source/content files were modified; this report is the only file written.*
