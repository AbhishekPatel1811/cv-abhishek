import { SectionHeading, Accent } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { skillGroups } from "@/lib/content/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-24 border-t border-line bg-bg-2 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          kicker="Capabilities"
          title={<>Full-stack range, with real depth in <Accent>frontend and AI.</Accent></>}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-bg p-6 transition-colors hover:border-accent/50">
                <h3 className="font-clash text-lg font-semibold text-ink">{g.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{g.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-ink-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
