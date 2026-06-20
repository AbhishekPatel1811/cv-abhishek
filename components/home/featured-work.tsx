import Link from "next/link";
import { SectionHeading, Accent } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { FeaturedCard } from "@/components/featured-card";
import { featuredProjects } from "@/lib/content/projects";

export function FeaturedWork() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-bg px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="03"
            kicker="Selected work"
            title={<>Live products and real client systems, built <Accent>end to end.</Accent></>}
            className="mb-0"
          />
          <Reveal>
            <Link
              href="/work"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent"
            >
              All 9 projects &rarr;
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((p, i) => {
            const wide = i === 0 || i === featuredProjects.length - 1;
            return (
              <Reveal key={p.slug} delay={(i % 2) * 0.06} className={wide ? "lg:col-span-2" : ""}>
                <FeaturedCard project={p} large={i === 0} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
