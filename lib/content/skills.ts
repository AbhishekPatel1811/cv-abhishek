import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Where I am strongest. Architecture, motion, performance.",
    skills: [
      "React",
      "Next.js (App Router, SSR)",
      "TypeScript",
      "Tailwind CSS",
      "Motion / Framer Motion",
      "Vite",
      "Radix / shadcn",
    ],
  },
  {
    title: "AI & ML",
    blurb: "Production AI: RAG, voice, generation, evaluation.",
    skills: [
      "OpenAI APIs",
      "RAG systems",
      "Embeddings & vector search",
      "Google Gemini",
      "VAPI voice AI",
      "AI evaluation & rubric design",
    ],
  },
  {
    title: "Backend",
    blurb: "Functional and growing - real APIs in production.",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Server Actions",
      "Drizzle ORM",
      "JWT auth",
    ],
  },
  {
    title: "Databases",
    blurb: "Multi-platform, including dual-DB application joins.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "ConvexDB",
    ],
  },
  {
    title: "DevOps & Infra",
    blurb: "Shipped a full Vercel to GCP Cloud Run migration.",
    skills: [
      "Docker",
      "Google Cloud Run",
      "GitHub Actions CI/CD (OIDC)",
      "GCP Load Balancer + SSL",
      "Artifact Registry",
    ],
  },
  {
    title: "Analytics, SEO & GEO",
    blurb: "A rare edge: making products discoverable to people and AI.",
    skills: [
      "GA4 (custom taxonomy)",
      "PostHog",
      "Schema.org / JSON-LD",
      "GEO / AEO (llms.txt, AI crawlers)",
      "Mapbox GL",
      "i18n (en/es/zh, RTL)",
    ],
  },
];
