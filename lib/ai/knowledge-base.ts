import { projects } from "@/lib/content/projects";
import { timeline } from "@/lib/content/timeline";
import { skillGroups } from "@/lib/content/skills";
import { profile } from "@/lib/content/profile";

export type KbChunk = {
  id: string;
  title: string;
  source: string;
  text: string;
};

/*
  The chatbot's ONLY knowledge source. Built from the already-sanitized content layer.
  The raw career playbook is never ingested. No salary, no off-boarding, no failures,
  no "gaps" content can appear here because none of it exists in the content layer.
*/

const bio: KbChunk[] = [
  {
    id: "bio-summary",
    title: "Summary",
    source: "About",
    text: `${profile.name} is an ${profile.role} based in ${profile.location}. ${profile.intro} ${profile.subhead} He is currently ${profile.available.toLowerCase()}.`,
  },
  {
    id: "bio-positioning",
    title: "How Abhishek works",
    source: "About",
    text: "Abhishek operates like a founding team member: starter instinct (builds the POC that does not exist yet), works out of his lane on purpose (frontend, backend APIs, infra migrations, analytics, SEO/GEO, growth), builds written playbooks for every new domain, and uses AI tools like Cursor, Claude Code and Codex as force multipliers without mistaking AI output for engineering judgment. He has worked directly with founders since day one.",
  },
  {
    id: "bio-education",
    title: "Education",
    source: "About",
    text: "Diploma in Computer Engineering (MSBTE, 90.74%) followed by a B.E. in Electronics & Computer Science (8.5/10 GPA). Coursework included NLP, Machine Learning, DBMS and Computer Networks, which became directly useful when he started building AI systems.",
  },
  {
    id: "bio-contact",
    title: "Contact & availability",
    source: "Contact",
    text: `Abhishek is ${profile.available.toLowerCase()} - both full-time product-engineering roles and freelance/contract. The best way to reach him is email at ${profile.email}, or via LinkedIn and GitHub linked on the site. You can also download his resume from the site.`,
  },
];

const projectChunks: KbChunk[] = projects.flatMap((p) => {
  const head = `${p.name} (${p.category}, ${p.period}). Role: ${p.role}. Status: ${p.status}.${p.liveUrl ? ` Live at ${p.liveUrl}.` : ""}${p.repoUrl ? ` Code at ${p.repoUrl}.` : ""} Stack: ${p.stack.join(", ")}.`;
  const body = `Problem: ${p.problem} Solution: ${p.solution} My role: ${p.roleNarrative} Results: ${p.results.map((r) => `${r.value} ${r.label}`).join("; ")}.`;
  return [
    { id: `proj-${p.slug}-overview`, title: p.name, source: `Project: ${p.name}`, text: `${head} ${p.tagline}` },
    { id: `proj-${p.slug}-detail`, title: `${p.name} - details`, source: `Project: ${p.name}`, text: body },
  ];
});

const timelineChunks: KbChunk[] = timeline.map((t) => ({
  id: `tl-${t.period.replace(/\s+/g, "-")}`,
  title: `${t.title} (${t.period})`,
  source: "Career timeline",
  text: `${t.period} - ${t.title} at ${t.org} (${t.location}). ${t.summary} Highlights: ${t.highlights.join("; ")}.`,
}));

const skillChunks: KbChunk[] = skillGroups.map((g) => ({
  id: `skill-${g.title.toLowerCase().replace(/\s+/g, "-")}`,
  title: `${g.title} skills`,
  source: "Capabilities",
  text: `${g.title}: ${g.blurb} Skills: ${g.skills.join(", ")}.`,
}));

export const knowledgeBase: KbChunk[] = [
  ...bio,
  ...projectChunks,
  ...timelineChunks,
  ...skillChunks,
];
