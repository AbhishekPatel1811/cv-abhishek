import { SectionHeading, Accent } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { timeline } from "@/lib/content/timeline";

export function TimelineSection() {
  return (
    <section id="journey" className="relative scroll-mt-24 border-t border-line bg-bg-2 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          kicker="The journey"
          title={<>From founding-day intern to shipping for clients across <Accent>two countries.</Accent></>}
        />

        <div className="relative mt-4">
          {/* spine */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line md:left-[calc(8rem+7px)]" />

          <ol className="space-y-12">
            {timeline.map((e, i) => (
              <li key={e.period} className="relative">
                <Reveal delay={Math.min(i * 0.04, 0.2)}>
                  <div className="grid gap-4 md:grid-cols-[8rem_1fr] md:gap-8">
                    <div className="hidden pt-0.5 text-right font-mono text-xs uppercase tracking-widest text-muted md:block">
                      {e.period}
                    </div>
                    <div className="relative pl-8 md:pl-8">
                      <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" />
                      <div className="font-mono text-xs uppercase tracking-widest text-accent md:hidden">
                        {e.period}
                      </div>
                      <h3 className="mt-1 text-xl font-semibold text-ink md:mt-0">{e.title}</h3>
                      <div className="mt-1 text-sm text-ink-soft">
                        {e.org} <span className="text-faint">/ {e.location}</span>
                      </div>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{e.summary}</p>
                      <ul className="mt-3 space-y-1.5">
                        {e.highlights.map((h) => (
                          <li key={h} className="flex gap-2.5 text-sm text-ink-soft">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {e.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-faint"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
