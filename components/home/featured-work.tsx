import { SectionShell } from "@/components/section-shell";
import { SectionHeading, Accent } from "@/components/section-heading";
import { AnchorButton } from "@/components/anchor-button";
import { Reveal } from "@/components/reveal";
import { FeaturedCard } from "@/components/featured-card";
import { featuredProjects } from "@/lib/content/projects";

export function FeaturedWork() {
  return (
    <SectionShell id="work" padding="lg">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          index="03"
          kicker="Selected work"
          title={<>Live products and real client systems, built <Accent>end to end.</Accent></>}
          className="mb-0"
        />
        <Reveal>
          <AnchorButton href="/work" variant="outline" size="sm" arrow>
            All 9 projects
          </AnchorButton>
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
    </SectionShell>
  );
}
