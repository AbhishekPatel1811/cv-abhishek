import type { TimelineEntry } from "./types";

// Career arc, public + positive framing only.
export const timeline: TimelineEntry[] = [
  {
    period: "2018 - 2024",
    title: "Engineering education",
    org: "Diploma (MSBTE) + B.E. Electronics & Computer Science",
    location: "Mumbai, India",
    summary:
      "Six structured years of engineering. Built the fundamentals - DSA, OOP, software engineering - then layered NLP, Machine Learning, DBMS and Networks on top.",
    highlights: [
      "Diploma in Computer Engineering - 90.74%",
      "B.E. Electronics & Computer Science - 8.5/10 GPA",
      "NLP & ML coursework that became useful within months of graduating",
    ],
    tags: ["Foundations", "NLP", "ML"],
  },
  {
    period: "Jul 2024",
    title: "Founding-day engineer",
    org: "Apex36 Technologies",
    location: "Ghatkopar, Mumbai",
    summary:
      "Joined Apex36 on the day it opened its doors - employee number one, treated as a core operator from day one. Started as a frontend engineer on Mappie.ai.",
    highlights: [
      "First engineer on Mappie.ai - an AI SaaS that turns ideas into structured specs",
      "Built embeddings-based vector search and a Notion-like inline AI editor",
    ],
    tags: ["Apex36", "Mappie.ai", "AI SaaS"],
  },
  {
    period: "Oct 2024 - Jan 2025",
    title: "Frontend to full-stack",
    org: "Apex36 Technologies",
    location: "Mumbai, India",
    summary:
      "Grew from frontend into full AI-integrated systems. Took on team-lead responsibilities - agile sprints, code reviews, guiding four developers - and built the Apex36 marketing site end to end.",
    highlights: [
      "First production CI/CD ownership (dev to staging to prod)",
      "Apex36 website from scratch - 90+ SEO score, Firebase-backed blog pipeline",
    ],
    tags: ["Full-stack", "Team lead", "SEO"],
  },
  {
    period: "Mar - Jun 2025",
    title: "Trusted to represent the company externally",
    org: "Vedteq (via Apex36)",
    location: "Remote - Oman partner",
    summary:
      "Redesigned the PiSolved platform and architected its admin dashboard, then solo-built an end-to-end RAG chatbot delivering a ChatGPT-like experience over domain knowledge.",
    highlights: [
      "PiSolved platform redesign + admin dashboard, leading a team of four",
      "PiSolved Chat - solo RAG chatbot: streaming, threads, quotas, OpenAI Assistants",
    ],
    tags: ["RAG", "Team lead", "PostgreSQL"],
  },
  {
    period: "Jul - Dec 2025",
    title: "International client delivery",
    org: "Basira (via Apex36)",
    location: "Remote - Oman",
    summary:
      "Placed with real paying Omani clients. Sole developer on two production systems: Sayyar, the country's first transportation SaaS (frontend and backend), and StarTech, an automated-trading control room.",
    highlights: [
      "Sayyar - sole FE + BE: dual MySQL, Mapbox routes, Arabic/English RTL i18n",
      "StarTech - sole Next.js dashboard over 12+ MongoDB collections, 40+ metrics",
      "Completed a deep Node.js internals course + shipped a full-stack capstone (DevTinder)",
    ],
    tags: ["Oman", "Sayyar", "StarTech", "Full-stack"],
  },
  {
    period: "Jan 2026 - present",
    title: "Back at Apex36, building new AI products",
    org: "Apex36 Technologies",
    location: "Mumbai, India",
    summary:
      "Returned and shipped from day one. Built BrandGen (brand-aligned AI image generation) from a 12-day solo POC to a marketed product, and the core app for ConvoAI, a multi-persona voice receptionist.",
    highlights: [
      "BrandGen - solo POC in 12 days, landing page, and 100% organic growth marketing",
      "ConvoAI - sole core-app developer, voice protection system built from scratch",
    ],
    tags: ["BrandGen", "ConvoAI", "Voice AI"],
  },
  {
    period: "2026 - ongoing",
    title: "Frontier AI evaluation & systems study",
    org: "Scale AI platforms + Namaste Frontend System Design",
    location: "Remote",
    summary:
      "Contributing to frontier AI model evaluation - rubric design, golden-trajectory methodology, and SFT training data - while deepening system-design fundamentals through structured study.",
    highlights: [
      "Implementation-agnostic rubric design and trajectory evaluation",
      "Building personal playbooks for every new domain I enter",
    ],
    tags: ["AI evaluation", "System design", "Learning"],
  },
];
