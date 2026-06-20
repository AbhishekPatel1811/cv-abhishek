import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLock,
} from "react-icons/fa6";
import { projects, getProject } from "@/lib/content/projects";
import { Reveal } from "@/components/reveal";
import { AskButton } from "@/components/ai/ask-button";
import { profile } from "@/lib/content/profile";

// real product shots captured from the live sites (in /public/marquee)
const CASE_IMAGES: Record<string, string> = {
  brandgen: "/marquee/brandgen.jpg",
  convoai: "/marquee/convoai.jpg",
  sayyar: "/marquee/sayyar.jpg",
  "mappie-ai": "/marquee/mappie.jpg",
  "apex36-website": "/marquee/apex36.jpg",
  "pisolved-platform": "/marquee/pisharp.jpg",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.name} - Abhishek Patel`,
    description: p.tagline,
    openGraph: { title: `${p.name} - Abhishek Patel`, description: p.tagline },
  };
}

function SubHead({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-line" />
      <span>{label}</span>
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const img = CASE_IMAGES[project.slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: project.tagline,
    abstract: project.problem,
    creator: {
      "@type": "Person",
      name: profile.name,
      url: "https://abhishekpatel.dev",
    },
    keywords: project.stack.join(", "),
    ...(project.liveUrl ? { url: project.liveUrl } : {}),
    ...(project.year ? { dateCreated: String(project.year) } : {}),
  };

  return (
    <article className="relative bg-bg px-5 pb-24 pt-28 sm:px-8 lg:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="accent-glow pointer-events-none absolute inset-x-0 top-0 h-[460px]" />

      <div className="relative mx-auto max-w-4xl">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          <FaArrowLeft size={11} /> Work
        </Link>

        {/* header */}
        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-faint">
            <span>{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-faint" />
            <span>{project.period}</span>
            <span className="h-1 w-1 rounded-full bg-faint" />
            <span className={project.isPrivate ? "text-amber" : "text-accent"}>
              {project.status}
            </span>
          </div>

          <h1 className="mt-5 font-clash text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-snug text-ink-soft">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="rounded-full border border-line px-3 py-1">
              {project.role}
            </span>
            <span className="rounded-full border border-line px-3 py-1">
              {project.org}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[color:var(--color-accent-ink)] transition-transform hover:scale-[1.03]"
              >
                Visit live <FaArrowUpRightFromSquare size={12} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent"
              >
                <FaGithub /> View code
              </a>
            )}
            {project.isPrivate && (
              <span className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-2.5 text-sm text-amber">
                <FaLock size={11} /> Private client codebase - details under NDA
              </span>
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-ink-soft"
              >
                {s}
              </span>
            ))}
          </div>
        </header>

        {/* hero media (real product shot where public) */}
        {img ? (
          <Reveal className="mt-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line">
              <Image
                src={img}
                alt={`${project.name} - ${project.tagline}`}
                fill
                sizes="(min-width:1024px) 896px, 100vw"
                className="object-cover object-top"
              />
              <div className="halftone absolute inset-0 opacity-15 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
            </div>
          </Reveal>
        ) : (
          <Reveal className="mt-10">
            <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface to-bg">
              <div className="bg-dotgrid absolute inset-0" />
              <span className="relative font-clash text-5xl font-semibold text-line">
                {project.name}
              </span>
              <span className="absolute bottom-4 right-5 font-mono text-[11px] uppercase tracking-widest text-amber">
                Private client - visuals under NDA
              </span>
            </div>
          </Reveal>
        )}

        {/* problem + solution */}
        <Section index="01" label="The problem" className="mt-16">
          <p className="text-lg leading-relaxed text-ink-soft">
            {project.problem}
          </p>
        </Section>

        <Section index="02" label="The solution">
          <p className="text-lg leading-relaxed text-ink-soft">
            {project.solution}
          </p>
        </Section>

        {/* architecture */}
        <Section index="03" label="Architecture">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {project.architecture.map((a) => (
              <div key={a.area} className="bg-bg-2 p-5">
                <div className="font-mono text-xs uppercase tracking-wider text-accent">
                  {a.area}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {a.detail}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* features */}
        <Section index="04" label="Key features">
          <div className="grid gap-4 sm:grid-cols-2">
            {project.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-line bg-bg-2 p-5"
              >
                <h3 className="font-clash text-base font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* results */}
        <Section index="05" label="Results">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {project.results.map((r) => (
              <div key={r.label} className="bg-bg-2 p-5">
                <div className="font-clash text-3xl font-semibold text-accent">
                  {r.value}
                </div>
                <div className="mt-1.5 text-xs leading-snug text-muted">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* my role */}
        <Section index="06" label="My role">
          <p className="text-lg leading-relaxed text-ink-soft">
            {project.roleNarrative}
          </p>
        </Section>

        {/* testimonial */}
        {project.testimonial && (
          <Reveal className="my-14">
            <figure className="rounded-3xl border border-line bg-bg-2 p-8 sm:p-10">
              <blockquote className="font-clash text-2xl font-medium leading-snug text-ink sm:text-3xl">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                <span className="font-semibold text-accent">
                  {project.testimonial.author}
                </span>{" "}
                - {project.testimonial.role}
              </figcaption>
            </figure>
          </Reveal>
        )}

        {/* lessons */}
        <Section index="07" label="What I learned">
          <ul className="space-y-3">
            {project.lessons.map((l) => (
              <li
                key={l}
                className="flex gap-3 text-lg leading-relaxed text-ink-soft"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* faq */}
        {project.faq.length > 0 && (
          <Section index="08" label="FAQ">
            <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line">
              {project.faq.map((f) => (
                <div key={f.q} className="bg-bg-2 p-5">
                  <h3 className="text-base font-semibold text-ink">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* CTA */}
        <Reveal className="mt-16 rounded-3xl border border-line bg-bg-2 p-8 text-center sm:p-12">
          <h2 className="font-clash text-3xl font-semibold text-ink">
            Want the deeper story?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Ask my AI about {project.name} for specifics, or reach out directly.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <AskButton
              prompt={`Tell me about the ${project.name} project.`}
              label={`Ask about ${project.name}`}
            />
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-line px-6 py-3 text-base font-medium text-ink transition-colors hover:border-accent"
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        {/* next */}
        <Link
          href={`/work/${next.slug}`}
          className="group mt-10 flex items-center justify-between rounded-2xl border border-line bg-bg-2 p-6 transition-colors hover:border-accent/60"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted">
              Next project
            </div>
            <div className="mt-1 font-clash text-xl font-semibold text-ink">
              {next.name}
            </div>
          </div>
          <FaArrowRight className="text-accent transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

function Section({
  index,
  label,
  children,
  className,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={className ?? "mt-14"}>
      <SubHead index={index} label={label} />
      {children}
    </Reveal>
  );
}
