import { Check } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { SectionHeading, Accent } from "@/components/section-heading";
import { Pill } from "@/components/pill";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/content/timeline";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" padding="lg">
      <SectionHeading
        index="02"
        kicker="Experience"
        title={
          <>
            From founding-day engineer to <Accent>shipping AI products.</Accent>
          </>
        }
      />

      <div className="space-y-4">
        {experience.map((e, i) => (
          <Reveal key={e.period + e.title} delay={i * 0.05}>
            <article className="grid gap-6 rounded-xl border border-line bg-bg-2 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/30 sm:p-7 lg:grid-cols-[230px_1fr] lg:gap-10">
              <div className="lg:border-r lg:border-line lg:pr-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-3xl font-semibold tabular-nums text-ink/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {e.period}
                  </span>
                </div>
                <div className="mt-3 text-base font-semibold text-ink">{e.org}</div>
                <div className="mt-1 text-sm text-muted">{e.location}</div>
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink sm:text-xl">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{e.summary}</p>
                <ul className="mt-4 space-y-2">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-ink" strokeWidth={1.75} aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
