import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SectionHeading, Accent } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { writing } from "@/lib/content/writing";

export function Writing() {
  return (
    <section id="writing" className="relative scroll-mt-24 bg-bg px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="06"
          kicker="Writing"
          title={<>Notes, series and building <Accent>in public.</Accent></>}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {writing.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.06}>
              <a
                href={w.href}
                target="_blank"
                rel="noreferrer noopener"
                data-cursor="hover"
                className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-bg-2 p-6 transition-colors hover:border-accent/60 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-faint">
                      {w.platform}
                    </span>
                    <FaArrowUpRightFromSquare className="text-muted transition-colors group-hover:text-accent" size={12} />
                  </div>
                  <h3 className="mt-4 font-clash text-2xl font-semibold text-ink">{w.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{w.blurb}</p>
                </div>
                <span className="mt-6 flex items-center gap-1.5 text-sm font-medium text-accent">
                  Read on {w.platform.split(" ")[0]}
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
