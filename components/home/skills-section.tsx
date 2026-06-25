import { BarChart3, Brain, Cloud, Database, Layout, Server } from "lucide-react";
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

export function SkillsSection() {
  return (
    <SectionShell id="skills" padding="lg">
      <SectionHeading
        index="04"
        kicker="Capabilities"
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
    </SectionShell>
  );
}
