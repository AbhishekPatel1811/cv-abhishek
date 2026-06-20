import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "brandgen",
    name: "BrandGen",
    tagline: "Brand-aligned AI image generation, from a 12-day solo POC to a marketed product.",
    category: "AI SaaS",
    role: "POC (solo) - Landing page - Growth - 3 production PRs",
    period: "Jan 2026 - present",
    year: 2026,
    status: "Live",
    featured: true,
    isPrivate: false,
    liveUrl: "https://www.getbrandgen.com",
    org: "Apex36 Technologies",
    stack: ["Next.js", "TypeScript", "Google Gemini", "Better-Auth", "Supabase", "Tailwind CSS", "Framer Motion"],
    problem:
      "Marketers and small teams want on-brand visuals but generic AI image tools ignore a brand's actual colors, style and composition. The result is output that looks impressive and off-brand at the same time.",
    solution:
      "A brand-aligned image generator. Users upload a brand image or write text guidelines, Gemini extracts the brand DNA, and the app generates creative that matches it across styles and aspect ratios. I shipped the public POC in 12 days, then drove the product forward through the landing page and a series of production PRs.",
    architecture: [
      { area: "Generation", detail: "Google Gemini for brand-DNA extraction and image generation" },
      { area: "App", detail: "Next.js App Router + TypeScript, Better-Auth (Google OAuth)" },
      { area: "Storage", detail: "Supabase storage with server-signed URLs" },
      { area: "Discoverability", detail: "Server-rendered JSON-LD, sitemap, llms.txt, AI-crawler allowlist" },
    ],
    features: [
      { title: "Brand DNA extraction", desc: "Upload an image or describe guidelines; the app infers colors, style and composition." },
      { title: "On-brand generation", desc: "Creative output across multiple styles and aspect ratios that stays on-brand." },
      { title: "SEO / GEO sprint", desc: "Fixed schema, unblocked 164 hidden images, enforced canonical host, deployed llms.txt." },
      { title: "i18n", desc: "Full English / Spanish / Mandarin support - 230 translation keys per language, server-side locale." },
    ],
    results: [
      { value: "12 days", label: "solo POC to public launch" },
      { value: "62", label: "users, zero ad spend" },
      { value: "700+", label: "AI creatives generated" },
      { value: "1.1M+", label: "tokens used" },
    ],
    roleNarrative:
      "I built the public POC solo in 12 days, then owned the landing page and three production PRs: an SEO sprint (schema fixes, canonical host, llms.txt), a GEO audit implementation (Organization/Person/WebSite schema, sitemap expanded 4 to 25 URLs), and full en/es/zh i18n. Post-launch growth was driven entirely by my content marketing - LinkedIn carousels, X, Product Hunt, YouTube - with no ad spend.",
    testimonial: {
      quote: "Kudos to Abhishek for his next level of brainstorming and one-shot implementation of BrandGen marketing.",
      author: "Yash Soni",
      role: "Founder & CEO, Apex36 Technologies",
    },
    lessons: [
      "A focused 12-day POC beats a 3-month plan - shipping early created the feedback loop.",
      "GEO/AEO is a real, underused growth lever: making a product legible to AI crawlers is a moat.",
    ],
    faq: [
      { q: "What was solo vs team?", a: "The 12-day POC, the landing page, the three technical PRs and all marketing were mine. The stepper-based MVP was built with the team." },
      { q: "How did it grow with no ads?", a: "Entirely through content - a Brand of the Week series, use-case posts, and LinkedIn PDF carousels built from real generated output." },
    ],
  },
  {
    slug: "convoai",
    name: "ConvoAI",
    tagline: "A multi-persona voice AI receptionist with a protection system built from scratch.",
    category: "Voice AI",
    role: "Sole core-app developer",
    period: "Jan - Feb 2026",
    year: 2026,
    status: "Live",
    featured: true,
    isPrivate: false,
    liveUrl: "https://www.heyyconvo.com",
    org: "Apex36 Technologies",
    stack: ["Next.js", "TypeScript", "VAPI Web SDK", "Deepgram", "Better-Auth", "PostgreSQL", "Framer Motion"],
    problem:
      "Businesses lose calls they cannot answer. A voice receptionist has to feel instant and human, work across very different industries, and fail gracefully when speech models hiccup - or it erodes trust on the first call.",
    solution:
      "A voice AI receptionist with six industry personas, each with its own prompts, greetings, voices and theme. I built the entire core application, including a voice protection system that keeps the experience stable when the underlying speech providers fail.",
    architecture: [
      { area: "Voice", detail: "VAPI Web SDK + Deepgram (Aura 2 voice, Flux transcriber)" },
      { area: "Resilience", detail: "Circuit breaker (3 errors / 60s), queue watchdog, start-call guards, provider fallback" },
      { area: "App", detail: "Next.js + TypeScript, Better-Auth, PostgreSQL, server-side route protection" },
      { area: "Feedback", detail: "Real-time transcript + AI-actions feed, WebGL-style audio visualizer" },
    ],
    features: [
      { title: "Six personas", desc: "Healthcare, Real Estate, Sales, HR, Restaurant and Financial Services - each fully themed." },
      { title: "Voice protection", desc: "Error-rate circuit breaker with auto-recovery and a 60s stuck-call watchdog." },
      { title: "Live transcript", desc: "Real-time transcript and an AI-actions feed during the call." },
      { title: "Audio visualizer", desc: "A WebGL-style waveform that reacts to the live audio." },
    ],
    results: [
      { value: "6", label: "industry personas" },
      { value: "3/60s", label: "circuit-breaker threshold" },
      { value: "100%", label: "of the core app, solo" },
      { value: "Live", label: "in production" },
    ],
    roleNarrative:
      "I was the sole developer of the core application: the call interface, the multi-persona system with per-persona overrides, the real-time transcript and actions feed, the audio visualizer, and authentication. The voice protection system - circuit breaker, watchdog, start-call guards and provider fallback UX - was designed and built from scratch. I then handed off cleanly to a developer who extended it to real telephony.",
    lessons: [
      "Real-time voice lives or dies on failure modes - the protection system mattered more than the happy path.",
      "Per-persona overrides kept one codebase serving six very different industries.",
    ],
    faq: [
      { q: "Did you build the telephony?", a: "I built the web voice app end to end. Real phone-number telephony was added by another developer after my clean handoff." },
      { q: "Why a circuit breaker?", a: "Speech providers fail intermittently. Without a breaker, a bad streak cascades into a broken call. With it, the app degrades gracefully and recovers." },
    ],
  },
  {
    slug: "sayyar",
    name: "Sayyar",
    tagline: "Oman's first transportation SaaS - built end to end, frontend and backend, solo.",
    category: "Transportation SaaS",
    role: "Sole frontend + backend developer",
    period: "Jul - Dec 2025",
    year: 2025,
    status: "Private client",
    featured: true,
    isPrivate: true,
    liveUrl: "https://sayyar.om",
    org: "Basira (Oman)",
    stack: ["Vite", "React", "TypeScript", "Express 5", "Drizzle ORM", "MySQL", "Mapbox GL", "i18next", "TanStack Table", "Zod", "JWT"],
    problem:
      "A real Omani transport startup needed to digitize bus fleet operations, passenger booking, route management and analytics - for multiple stakeholder types - on real contractual timelines.",
    solution:
      "A complete operator platform. I was the sole developer on both the frontend dashboard and the backend API: fleet, bookings, payments, live routes on Mapbox, and full Arabic/English RTL support, backed by a dual-database Express API.",
    architecture: [
      { area: "Frontend", detail: "Vite + React + TypeScript SPA, role-based routing, TanStack Table, Zod validation" },
      { area: "Backend", detail: "Express 5 + TypeScript, two MySQL databases via Drizzle ORM" },
      { area: "Cross-DB", detail: "Application-level joins across a fleet DB and a passenger DB; cascade deletes across both" },
      { area: "Maps & i18n", detail: "Mapbox GL route visualization, geolib trip matching, Arabic/English RTL via i18next" },
    ],
    features: [
      { title: "Operator dashboard", desc: "Passengers, owners, companies, captains, buses, routes, trips, bookings, payments, analytics." },
      { title: "Live route maps", desc: "Mapbox GL trip visualization with overlapping-marker handling." },
      { title: "RTL i18n", desc: "Full Arabic / English with right-to-left layout support." },
      { title: "Multi-modal booking", desc: "One-way, round-trip and day/week/month subscription flows." },
    ],
    results: [
      { value: "2", label: "MySQL databases, joined in app" },
      { value: "FE + BE", label: "delivered solo" },
      { value: "2", label: "languages, RTL" },
      { value: "Live", label: "real paying client" },
    ],
    roleNarrative:
      "I owned the whole stack. On the frontend: the full admin dashboard, Mapbox route visualization, RTL i18n, role-based protection, TanStack tables and Zod validation. On the backend: an Express 5 API over two MySQL databases with Drizzle, JWT auth with server-side invalidation, geolib-based trip matching, and cross-database join logic for subscription bookings.",
    lessons: [
      "Cross-database joins in application code are doable but demand careful, explicit sequencing.",
      "RTL is a layout discipline, not a translation step - it has to be designed in from the start.",
    ],
    faq: [
      { q: "Why is the code not public?", a: "This is a private client product. The live platform is the proof; implementation details are available under NDA in conversation." },
      { q: "You really did both FE and BE?", a: "Yes - sole developer on the frontend dashboard and the Express backend with the dual-MySQL architecture." },
    ],
  },
  {
    slug: "startech",
    name: "StarTech",
    tagline: "An automated-trading control room - the most architecturally complex frontend I have shipped.",
    category: "Trading systems",
    role: "Sole frontend dashboard developer",
    period: "Jul - Dec 2025",
    year: 2025,
    status: "Private client",
    featured: true,
    isPrivate: true,
    org: "Basira (Oman)",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    problem:
      "A Python trading engine executes and manages strategies automatically across crypto, forex, stocks, indices and commodities. It needed a control room: a way for operators to create requests, watch live trades, and monitor engine health in real time.",
    solution:
      "A Next.js operator dashboard sitting on top of a shared MongoDB command/state database. It surfaces everything the engine is doing - requests, live trades, positions, performance and health - across 12+ collections.",
    architecture: [
      { area: "Dashboard", detail: "Next.js + TypeScript control room, the operator-facing layer of a two-part system" },
      { area: "State", detail: "Shared MongoDB across 12+ collections, polled for near real-time visibility" },
      { area: "Lifecycle", detail: "Trade status tracking: active to paused to stopped to completed" },
      { area: "Analytics", detail: "Performance viewer with 40+ metrics - Sharpe, Sortino, Calmar, SQN, win ratio, drawdown" },
    ],
    features: [
      { title: "Request management", desc: "Backtest, livetest, livetrade and criteria requests from the dashboard." },
      { title: "Live trade tracking", desc: "Positions and orders with P&L, entry/close prices and durations." },
      { title: "Strategy browser", desc: "Browse Strategy Information Capsules and their configuration." },
      { title: "Engine health", desc: "Heartbeat and log monitoring for the trading engine." },
    ],
    results: [
      { value: "12+", label: "MongoDB collections" },
      { value: "40+", label: "performance metrics" },
      { value: "5", label: "markets covered" },
      { value: "Solo", label: "frontend developer" },
    ],
    roleNarrative:
      "I built the entire operator dashboard - the human window into an autonomous trading engine. That meant modeling 12+ MongoDB collections into a coherent UI: request flows, the live-trade lifecycle, positions and orders monitoring, a 40+ metric performance viewer, a strategy browser, and engine heartbeat/log health.",
    lessons: [
      "Visualizing an autonomous system is a data-modeling problem first and a UI problem second.",
      "Operators trust a control room only when state is consistent and the lifecycle is legible.",
    ],
    faq: [
      { q: "Is there a public link?", a: "No - it is an internal client system. Architecture and screenshots can be walked through under NDA." },
      { q: "Did you build the trading engine?", a: "No. The Python engine was separate; I built the Next.js control room over the shared MongoDB state." },
    ],
  },
  {
    slug: "mappie-ai",
    name: "Mappie.ai",
    tagline: "An AI SaaS that turns vague product ideas into structured features and specs.",
    category: "AI SaaS",
    role: "Core frontend architect",
    period: "Jul 2024 - Jan 2025",
    year: 2024,
    status: "Live",
    featured: false,
    isPrivate: false,
    liveUrl: "https://www.mappie.ai",
    org: "Apex36 Technologies",
    stack: ["Next.js", "TypeScript", "ConvexDB", "OpenAI", "Lexical Editor"],
    problem:
      "Product teams lose days converting fuzzy ideas into structured features, epics and documentation. The gap between a thought and a spec is mostly manual.",
    solution:
      "An AI platform that converts ideas into structured specs, with a Notion-like editing experience. As the first engineer on it, I built the core frontend architecture and the AI editing and search experience.",
    architecture: [
      { area: "App", detail: "Next.js + TypeScript core architecture" },
      { area: "Realtime", detail: "ConvexDB for state and real-time updates" },
      { area: "AI editing", detail: "Lexical-based inline AI editor for a Notion-like experience" },
      { area: "Search", detail: "Embeddings-based vector search over documents" },
    ],
    features: [
      { title: "Idea to spec", desc: "AI generation of features, epics and documentation from rough input." },
      { title: "Inline AI editor", desc: "Notion-like editing built on Lexical with AI assistance." },
      { title: "Vector search", desc: "Embeddings-based semantic search across documents." },
      { title: "Document workflows", desc: "File upload, parsing pipelines and context-aware AI chat." },
    ],
    results: [
      { value: "First", label: "engineer on the product" },
      { value: "~6.5 mo", label: "of active development" },
      { value: "Beta", label: "live, 1000 spots" },
      { value: "Live", label: "in production" },
    ],
    roleNarrative:
      "I was the first engineer on Mappie. I built the core frontend architecture, the AI prompt-generation system, the Lexical-based inline AI editor, embeddings-based vector search on ConvexDB, and the document-generation workflows. This was my first end-to-end production AI product.",
    lessons: [
      "Real-time state (ConvexDB) changes how you design collaborative AI UX.",
      "A great editor is the product - the AI has to feel inline, not bolted on.",
    ],
    faq: [
      { q: "What was your scope?", a: "Core frontend architecture and the AI editing/search experience as the first engineer on the product." },
    ],
  },
  {
    slug: "pisolved-chat",
    name: "PiSolved Chat",
    tagline: "A solo, end-to-end RAG chatbot with a ChatGPT-like experience over domain knowledge.",
    category: "AI / RAG",
    role: "Sole end-to-end developer",
    period: "Apr - Jun 2025",
    year: 2025,
    status: "Private client",
    featured: false,
    isPrivate: true,
    org: "Vedteq (Oman)",
    stack: ["Next.js", "TypeScript", "OpenAI Assistants API", "PostgreSQL", "Drizzle ORM", "Resend"],
    problem:
      "Users needed domain-specific answers with the fluency of ChatGPT, but grounded in a specific knowledge base - with persistent threads and sensible usage limits.",
    solution:
      "An end-to-end RAG chatbot I built entirely solo: real-time streaming chat, thread-based persistent sessions, daily quotas, and an email workflow for quota upgrades.",
    architecture: [
      { area: "Chat", detail: "Real-time streaming interface, thread-based persistent sessions" },
      { area: "AI", detail: "Context-aware responses via the OpenAI Assistants API" },
      { area: "Data", detail: "Full schema in PostgreSQL with Drizzle ORM" },
      { area: "Ops", detail: "Daily quota management + Resend email workflow for upgrade requests" },
    ],
    features: [
      { title: "Streaming chat", desc: "Real-time token streaming with auto-scroll and loading states." },
      { title: "Persistent threads", desc: "Thread-based sessions that survive reloads." },
      { title: "Quota system", desc: "Daily quota management with a Resend-powered upgrade flow." },
      { title: "Grounded answers", desc: "Domain-specific responses via the Assistants API." },
    ],
    results: [
      { value: "6-7 wk", label: "solo build" },
      { value: "100%", label: "end to end, solo" },
      { value: "Under 1yr", label: "experience at the time" },
      { value: "Prod", label: "grade delivery" },
    ],
    roleNarrative:
      "I built this entirely solo in 6-7 weeks: the streaming chat UX, thread persistence, the OpenAI Assistants integration, the full PostgreSQL/Drizzle schema, the daily quota system, and the Resend email workflow. This was the project that confirmed my transition from frontend to genuinely full-stack.",
    lessons: [
      "RAG quality is mostly retrieval and grounding discipline, not model choice.",
      "Quotas and upgrade flows are part of the product, not an afterthought.",
    ],
    faq: [
      { q: "Why no public link?", a: "It is an internal Vedteq product. The architecture is available to discuss under NDA." },
    ],
  },
  {
    slug: "pisolved-platform",
    name: "PiSolved Platform",
    tagline: "A full platform redesign and admin dashboard, leading a team of four.",
    category: "Platform redesign",
    role: "Lead - redesign + admin architecture",
    period: "Mar - Apr 2025",
    year: 2025,
    status: "Live",
    featured: false,
    isPrivate: false,
    liveUrl: "https://www.pisharp.com",
    org: "Vedteq (Oman)",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    problem:
      "The PiSolved landing page and platform needed a redesign for responsiveness and engagement, plus an admin surface to manage it - delivered on a real timeline with a small team.",
    solution:
      "I led the full redesign for responsiveness and engagement, architected an intuitive admin dashboard, and added a comments system to drive interaction - managing CI/CD and a team of four through the delivery. The platform was later revamped and rebranded as PiSharp.",
    architecture: [
      { area: "Frontend", detail: "Responsive redesign of the landing page and platform" },
      { area: "Admin", detail: "Architected an intuitive admin dashboard" },
      { area: "Engagement", detail: "Comments system for user interaction" },
      { area: "Delivery", detail: "CI/CD across dev/staging/prod, leading a team of four" },
    ],
    features: [
      { title: "Responsive redesign", desc: "Rebuilt for responsiveness and user engagement." },
      { title: "Admin dashboard", desc: "An intuitive admin surface to run the platform." },
      { title: "Comments", desc: "User interaction via a comments system." },
      { title: "Team delivery", desc: "Agile sprints, code reviews and CI/CD for four developers." },
    ],
    results: [
      { value: "4", label: "developers led" },
      { value: "3", label: "environments (dev/stg/prod)" },
      { value: "Rebrand", label: "lives on as PiSharp" },
      { value: "Live", label: "in production" },
    ],
    roleNarrative:
      "I led the redesign and architected the admin dashboard, implemented the comments system, and managed CI/CD across three environments while guiding four developers through agile sprints and code reviews. The platform was subsequently revamped and rebranded as PiSharp.",
    lessons: [
      "Leading four developers taught me that review cadence is the real throughput lever.",
      "An admin dashboard is where a platform becomes operable - design it like a product.",
    ],
    faq: [
      { q: "Is pisharp.com your work?", a: "PiSharp is the rebranded successor of the PiSolved platform I redesigned; the original redesign and admin dashboard were mine." },
    ],
  },
  {
    slug: "devtinder",
    name: "DevTinder",
    tagline: "A full-stack social platform for developers - my Node.js internals capstone.",
    category: "Full-stack",
    role: "Full-stack developer",
    period: "Aug - Oct 2025",
    year: 2025,
    status: "Open source",
    featured: false,
    isPrivate: false,
    repoUrl: "https://github.com/AbhishekPatel1811/DevTinder",
    org: "Personal (Namaste Node.js capstone)",
    stack: ["React (Vite)", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "WebSockets", "socket.io", "AWS EC2", "Nginx", "PM2"],
    problem:
      "I needed to ground a deep Node.js internals curriculum in something real - a full-stack app deployed end to end, not a toy.",
    solution:
      "A Tinder-for-developers: profiles, swipe/match logic, real-time chat and a paginated feed - built end to end and deployed on AWS EC2 with Nginx and PM2. This is the public codebase behind the backend foundations I applied on client work.",
    architecture: [
      { area: "Frontend", detail: "React (Vite) SPA with full JWT auth flow" },
      { area: "Backend", detail: "Node.js + Express, MongoDB via Mongoose, compound indexes, pagination" },
      { area: "Realtime", detail: "WebSockets + socket.io for live chat" },
      { area: "Deploy", detail: "AWS EC2 (ap-south-1) with Nginx reverse proxy + PM2" },
    ],
    features: [
      { title: "Swipe / match", desc: "Developer profiles with swipe and match logic." },
      { title: "Live chat", desc: "Real-time messaging over socket.io." },
      { title: "Feed API", desc: "Paginated feed with compound indexes." },
      { title: "Full auth", desc: "Complete JWT authentication flow." },
    ],
    results: [
      { value: "Public", label: "open-source repo" },
      { value: "AWS", label: "EC2 + Nginx + PM2" },
      { value: "Realtime", label: "socket.io chat" },
      { value: "Capstone", label: "Node.js internals" },
    ],
    roleNarrative:
      "Built end to end as the capstone for a deep Node.js internals course (V8, libuv, the event loop, Express, MongoDB, JWT, WebSockets, deployment). The Express, MySQL/Drizzle, JWT and API patterns I later applied on Sayyar were grounded in the understanding I built here.",
    lessons: [
      "Deploying it yourself (EC2, Nginx, PM2) teaches what a platform hides.",
      "Compound indexes and pagination are where a feed API lives or dies.",
    ],
    faq: [
      { q: "Can I read the code?", a: "Yes - it is open source on GitHub. It is the public proof behind my backend work." },
    ],
  },
  {
    slug: "apex36-website",
    name: "Apex36 Website",
    tagline: "A marketing site built from scratch, then migrated Vercel to GCP and tuned for AI search.",
    category: "Marketing site + Infra",
    role: "Sole developer, all phases",
    period: "Dec 2024 - present",
    year: 2025,
    status: "Live",
    featured: false,
    isPrivate: false,
    liveUrl: "https://www.apex36tech.com",
    org: "Apex36 Technologies",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Firebase", "Docker", "Google Cloud Run", "GitHub Actions", "GA4", "PostHog"],
    problem:
      "Apex36 needed a fast, well-ranked marketing site with a real blog pipeline. Later, 40+ blog posts on Vercel triggered large bandwidth overages, forcing an infrastructure migration - and AI crawlers could not see the structured data.",
    solution:
      "I built the site from scratch (90+ SEO score, Firebase-backed blog), then migrated it end to end from Vercel to Google Cloud Run, and ran a GEO/AEO overhaul so the site is legible to both Google and AI crawlers.",
    architecture: [
      { area: "Site", detail: "Next.js + Tailwind + Framer Motion, Firebase/Firestore blog pipeline" },
      { area: "Migration", detail: "Multi-stage Docker standalone app, GCP Artifact Registry, Cloud Run, External Load Balancer + managed SSL" },
      { area: "CI/CD", detail: "GitHub Actions with OIDC / Workload Identity - no stored service-account keys" },
      { area: "Analytics & GEO", detail: "GA4 (14 custom dimensions, funnels), PostHog, server-rendered JSON-LD, llms.txt, AI-crawler allowlist" },
    ],
    features: [
      { title: "From-scratch build", desc: "Full marketing site, 90+ SEO score, 30% faster load times." },
      { title: "Vercel to GCP", desc: "Resolved 183 GB bandwidth overages with a Cloud Run migration." },
      { title: "GEO/AEO overhaul", desc: "Server-rendered structured data, sitemap expansion, AI-crawler allowlists." },
      { title: "Analytics taxonomy", desc: "GA4 with 14 custom dimensions and lead/blog/chat conversion funnels." },
    ],
    results: [
      { value: "90+", label: "SEO score" },
      { value: "183 GB", label: "overage resolved" },
      { value: "14", label: "GA4 custom dimensions" },
      { value: "OIDC", label: "keyless CI/CD" },
    ],
    roleNarrative:
      "Sole developer across every phase: the original from-scratch build, the Firebase blog pipeline, the Vercel to GCP Cloud Run migration (Docker, Artifact Registry, Load Balancer, managed SSL, OIDC CI/CD), the GA4 + PostHog analytics taxonomy, and the GEO/AEO implementation that made the site's structured data visible to AI crawlers.",
    lessons: [
      "NEXT_PUBLIC vars inline at build time - silent analytics breakage taught me that the hard way.",
      "GEO is code-level: JSON-LD has to be server-rendered or AI crawlers never see it.",
    ],
    faq: [
      { q: "Why migrate off Vercel?", a: "40+ blog posts drove 183 GB of bandwidth overages. Cloud Run with a proper Docker build and CDN fixed the economics." },
      { q: "What is GEO/AEO?", a: "Optimizing for AI answer engines and crawlers - server-rendered schema, llms.txt, and explicit allowlists for GPTBot, ClaudeBot and others." },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
