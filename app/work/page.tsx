import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Work - Abhishek Patel",
  description:
    "Nine projects built end to end: live AI products, international client systems, and full-stack platforms. BrandGen, ConvoAI, Sayyar, StarTech and more.",
};

export default function WorkPage() {
  return (
    <div className="bg-bg px-5 pb-24 pt-32 sm:px-8 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            <span className="text-accent">Work</span>
            <span className="h-px w-8 bg-line" />
            <span>{projects.length} projects, end to end</span>
          </div>
          <h1 className="mt-5 max-w-3xl font-clash text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink">
            Everything I&apos;ve built, <span className="text-accent">end to end.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Live AI products, real paying client systems, and full-stack platforms - from 12-day
            solo POCs to dual-database backends. Private client work is linked where the product is
            public; implementation details are available under NDA.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.05} className={i === 0 ? "lg:col-span-2" : ""}>
              <ProjectCard project={p} large={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
