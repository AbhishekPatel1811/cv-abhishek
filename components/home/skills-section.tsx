import { BarChart3, Brain, Cloud, Database, Layout, Server } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiOpenai,
  SiGooglegemini,
  SiVercel,
  SiGooglecloud,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import { SectionShell } from "@/components/section-shell";
import { SectionHeading, Accent } from "@/components/section-heading";
import { Pill } from "@/components/pill";
import { Reveal } from "@/components/reveal";
import { skillGroups } from "@/lib/content/skills";

// Map each group to a fitting lucide icon. Falls back to Layout if unmatched.
const ICONS: Record<string, typeof Layout> = {
  Frontend: Layout,
  "AI & ML": Brain,
  Backend: Server,
  Databases: Database,
  "DevOps & Infra": Cloud,
  "Analytics, SEO & GEO": BarChart3,
};

// Real brand logos for the stack wall, chosen to mirror the skills above.
// Color stays muted by default; pops only on hover.
const STACK: { name: string; Icon: IconType }[] = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "Gemini", Icon: SiGooglegemini },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Docker", Icon: SiDocker },
  { name: "Cloud Run", Icon: SiGooglecloud },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "Vercel", Icon: SiVercel },
];

export function SkillsSection() {
  return (
    <SectionShell id="skills" padding="lg">
      <SectionHeading
        index="04"
        kicker="Skills & Stack"
        title={
          <>
            Full-stack range, with real depth in <Accent>frontend and AI.</Accent>
          </>
        }
      />

      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = ICONS[g.title] ?? Layout;
          return (
            <Reveal key={g.title} delay={(i % 3) * 0.06} className="bg-bg-2">
              <div className="flex h-full flex-col p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-bg text-ink">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </div>

                <h3 className="mt-5 text-base font-semibold tracking-[-0.01em] text-ink">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.blurb}</p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <Pill key={s} className="normal-case tracking-normal">
                      {s}
                    </Pill>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-12">
        <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          <span className="rounded border border-line px-1.5 py-0.5 text-faint">Stack</span>
          <span>Tools I reach for</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4 lg:grid-cols-8">
          {STACK.map(({ name, Icon }) => (
            <div
              key={name}
              className="group flex aspect-square flex-col items-center justify-center gap-2.5 bg-bg px-2 text-muted transition-colors hover:text-ink"
            >
              <Icon className="h-6 w-6" aria-hidden />
              <span className="font-mono text-[10px] tracking-tight text-faint transition-colors group-hover:text-muted">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
