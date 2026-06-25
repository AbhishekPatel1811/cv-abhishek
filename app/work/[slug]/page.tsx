import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects, getProject } from "@/lib/content/projects";
import { profile } from "@/lib/content/profile";
import { Reveal } from "@/components/reveal";
import { Pill } from "@/components/pill";
import { AppWindow } from "@/components/app-window";
import { AnchorButton } from "@/components/anchor-button";
import { AskButton } from "@/components/ai/ask-button";
import { Accent } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]">
      <span className="text-faint">{index}</span>
      <span className="h-px w-8 bg-line" />
      <span className="text-muted">{label}</span>
    </div>
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
    <Reveal className={className ?? "border-t border-line pt-12 mt-12"}>
      <SubHead index={index} label={label} />
      {children}
    </Reveal>
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
    <article className="bg-bg px-5 pb-24 pt-28 sm:px-8 lg:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-3" /> Work
        </Link>

        {/* header */}
        <header className="mt-8 border-b border-line pb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-faint">
            <span>{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-line" />
            <span>{project.period}</span>
            <span className="h-1 w-1 rounded-full bg-line" />
            <Pill className="py-0.5">{project.status}</Pill>
          </div>

          <h1 className="mt-5 text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-snug text-ink-soft">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Pill>{project.role}</Pill>
            <Pill>{project.org}</Pill>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <AnchorButton
                href={project.liveUrl}
                external
                size="default"
                variant="default"
              >
                Visit live <ExternalLink className="size-3.5" />
              </AnchorButton>
            )}
            {project.repoUrl && (
              <AnchorButton
                href={project.repoUrl}
                external
                size="default"
                variant="outline"
              >
                <FaGithub /> View code
              </AnchorButton>
            )}
            {project.isPrivate && (
              <span className="inline-flex items-center gap-2 rounded-md border border-line bg-bg-2 px-4 py-2 text-sm text-muted">
                <Lock className="size-3.5" /> Private client
              </span>
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-ink-soft"
              >
                {s}
              </span>
            ))}
          </div>
        </header>

        {/* hero: AppWindow live-preview mockup, or NDA panel for private */}
        <Reveal className="mt-10">
          {project.isPrivate ? (
            <div className="rounded-xl border border-line bg-bg-2 p-10 text-center">
              <div className="mx-auto inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                <Lock className="size-3.5" /> Visuals under NDA
              </div>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
                {project.name} is a private client engagement. The live platform
                is the proof; implementation details are available to walk
                through under NDA.
              </p>
            </div>
          ) : (
            <AppWindow title={project.name} bodyClassName="p-8">
              <div className="text-2xl font-semibold tracking-[-0.02em] text-ink">
                {project.name}
              </div>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                {project.tagline}
              </p>
              <div className="mt-7 space-y-2.5">
                <div className="h-2.5 w-3/4 rounded-full bg-surface" />
                <div className="h-2.5 w-1/2 rounded-full bg-surface" />
                <div className="h-2.5 w-2/3 rounded-full bg-surface" />
              </div>
            </AppWindow>
          )}
        </Reveal>

        {/* problem + solution */}
        <Section index="01" label="The problem">
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
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {project.architecture.map((a) => (
              <div key={a.area} className="bg-bg-2 p-5">
                <div className="font-mono text-xs uppercase tracking-wider text-muted">
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
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {project.features.map((f) => (
              <div key={f.title} className="bg-bg-2 p-5">
                <h3 className="text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* results */}
        <Section index="05" label="Results">
          <div className="overflow-hidden rounded-lg border border-line">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-5 font-mono text-xs uppercase tracking-wider text-faint">
                    Metric
                  </TableHead>
                  <TableHead className="px-5 text-right font-mono text-xs uppercase tracking-wider text-faint">
                    Value
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {project.results.map((r) => (
                  <TableRow key={r.label} className="border-line">
                    <TableCell className="px-5 py-3.5 text-sm leading-snug whitespace-normal text-muted">
                      {r.label}
                    </TableCell>
                    <TableCell className="px-5 py-3.5 text-right text-base font-semibold text-ink">
                      {r.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
          <Reveal className="mt-12 border-t border-line pt-12">
            <figure className="rounded-lg border border-line bg-bg-2 p-8 sm:p-10">
              <blockquote className="text-2xl font-medium leading-snug text-ink sm:text-3xl">
                <Accent>&ldquo;{project.testimonial.quote}&rdquo;</Accent>
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                <span className="font-semibold text-ink">
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
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* faq */}
        {project.faq.length > 0 && (
          <Section index="08" label="FAQ">
            <div className="rounded-lg border border-line px-5">
              <Accordion type="single" collapsible>
                {project.faq.map((f) => (
                  <AccordionItem
                    key={f.q}
                    value={f.q}
                    className="border-line"
                  >
                    <AccordionTrigger className="text-base font-semibold text-ink hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Section>
        )}

        {/* CTA */}
        <Reveal className="mt-14 border-t border-line pt-14">
          <div className="rounded-lg border border-line bg-bg-2 p-8 text-center sm:p-12">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink">
              Want the <Accent>deeper</Accent> story?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Ask my AI about {project.name} for specifics, or reach out
              directly.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <AskButton
                prompt={`Tell me about the ${project.name} project.`}
                label={`Ask about ${project.name}`}
              />
              <AnchorButton
                href={`mailto:${profile.email}`}
                external
                variant="outline"
                size="default"
              >
                Get in touch
              </AnchorButton>
            </div>
          </div>
        </Reveal>

        {/* next */}
        <Link
          href={`/work/${next.slug}`}
          className="group mt-6 flex items-center justify-between rounded-lg border border-line bg-bg-2 p-6 transition-colors hover:border-ink/40"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted">
              Next project
            </div>
            <div className="mt-1 text-xl font-semibold text-ink">
              {next.name}
            </div>
          </div>
          <ArrowUpRight className="size-5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
        </Link>
      </div>
    </article>
  );
}
