import type { Metadata } from "next";
import { Pill } from "@/components/pill";
import { Reveal } from "@/components/reveal";
import { Accent } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/content/projects";
import { workCollectionJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Work - Abhishek Patel",
  description:
    "Nine projects built end to end: live AI products, international client systems, and full-stack platforms. BrandGen, ConvoAI, Sayyar, StarTech and more.",
};

export default function WorkPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
  ]);

  return (
    <div className="bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workCollectionJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {/* hero header */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl border-x border-line px-5 pb-16 pt-32 sm:px-8 lg:pb-20 lg:pt-40">
          <Reveal>
            <Pill>Work</Pill>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
              Everything I&apos;ve built, <Accent>end to end.</Accent>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {projects.length} projects: live AI products, real paying client systems, and
              full-stack platforms - from 12-day solo POCs to dual-database backends. Private client
              work is linked where the product is public; implementation details are available under
              NDA.
            </p>
          </Reveal>
        </div>
      </section>

      {/* projects grid */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl border-x border-line px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={(i % 2) * 0.06}
                className={i === 0 ? "lg:col-span-2" : ""}
              >
                <ProjectCard project={p} large={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
