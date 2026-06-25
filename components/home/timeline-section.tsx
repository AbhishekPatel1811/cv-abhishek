import { SectionShell } from "@/components/section-shell";
import { SectionHeading, Accent } from "@/components/section-heading";
import { Pill } from "@/components/pill";
import { Reveal } from "@/components/reveal";
import { timeline } from "@/lib/content/timeline";

export function TimelineSection() {
  return (
    <SectionShell id="journey" padding="lg" className="scroll-mt-24">
      <SectionHeading
        index="02"
        kicker="The journey"
        title={
          <>
            From founding-day intern to shipping for clients across{" "}
            <Accent>two countries.</Accent>
          </>
        }
      />

      <ol className="relative mt-4 border-l border-line pl-8 sm:pl-10">
        {timeline.map((e, i) => (
          <li
            key={e.period}
            className="relative border-line py-10 first:pt-0 last:pb-0 [&:not(:last-child)]:border-b"
          >
            {/* node */}
            <span
              aria-hidden
              className="absolute -left-[calc(2rem+1px)] top-[calc(2.5rem+0.55rem)] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ink ring-4 ring-bg first:top-[0.55rem] sm:-left-[calc(2.5rem+1px)]"
            />

            <Reveal delay={Math.min(i * 0.05, 0.25)}>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                {e.period}
              </div>

              <h3 className="mt-2.5 text-xl font-semibold tracking-tight text-ink">
                {e.title}
              </h3>

              <div className="mt-1.5 text-sm text-muted">
                {e.org} <span className="text-faint">/ {e.location}</span>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {e.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {e.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-muted">
                    <span
                      aria-hidden
                      className="mt-[0.45rem] h-1 w-1 shrink-0 bg-ink"
                    />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
