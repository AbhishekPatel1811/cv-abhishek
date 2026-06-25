import { GraduationCap } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { SectionHeading } from "@/components/section-heading";
import { Pill } from "@/components/pill";
import { Reveal } from "@/components/reveal";
import { education } from "@/lib/content/timeline";

export function EducationSection() {
  const e = education[0];
  if (!e) return null;

  return (
    <SectionShell id="education" padding="default">
      <SectionHeading index="05" kicker="Education" title="Six years of engineering fundamentals." />

      <Reveal>
        <article className="grid gap-6 rounded-xl border border-line bg-bg-2 p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:gap-10">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-line">
            <GraduationCap className="size-6 text-ink" strokeWidth={1.5} aria-hidden />
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              {e.period} &middot; {e.location}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-ink sm:text-xl">{e.org}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{e.summary}</p>

            <ul className="mt-5 grid gap-2 sm:grid-cols-3">
              {e.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-lg border border-line bg-bg p-3 text-xs leading-relaxed text-muted"
                >
                  {h}
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
    </SectionShell>
  );
}
