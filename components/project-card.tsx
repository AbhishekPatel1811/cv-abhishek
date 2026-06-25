import Link from "next/link";
import Image from "next/image";
import { Lock } from "lucide-react";
import { Pill } from "@/components/pill";
import type { Project } from "@/lib/content/types";
import { cn } from "@/lib/utils";

const SHOTS: Record<string, string> = {
  brandgen: "/shots/brandgen.png",
  convoai: "/shots/convoai.png",
  "mappie-ai": "/shots/mappie-ai.png",
  "pisolved-platform": "/shots/pisolved-platform.png",
  "apex36-website": "/shots/apex36-website.png",
};

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="hover"
      className={cn(
        "group flex h-full flex-col rounded-xl border border-line bg-bg-2 p-6 transition-colors duration-300 hover:border-ink/40 sm:p-7",
      )}
    >
      {/* top meta row */}
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-faint">
          {project.category}
        </span>
        <Pill dot={!project.isPrivate}>
          {project.isPrivate ? "Private" : project.status}
        </Pill>
      </div>

      {/* screenshot thumbnail / NDA placeholder */}
      {SHOTS[project.slug] ? (
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-lg border border-line">
          <Image
            src={SHOTS[project.slug]}
            alt={`${project.name} screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      ) : project.isPrivate ? (
        <div className="mt-6 flex aspect-[16/9] w-full items-center justify-center rounded-lg border border-line bg-bg">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            <Lock className="size-3" /> NDA
          </span>
        </div>
      ) : null}

      {/* body */}
      <div className="mt-8 flex flex-1 flex-col">
        <h3
          className={cn(
            "font-semibold tracking-tight text-ink",
            large ? "text-3xl" : "text-2xl",
          )}
        >
          {project.name}
        </h3>
        <p
          className={cn(
            "mt-2 text-muted",
            large ? "max-w-xl text-base" : "text-sm",
          )}
        >
          {project.tagline}
        </p>

        {/* stack chips */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.slice(0, large ? 7 : 4).map((s) => (
            <span
              key={s}
              className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>

        {/* footer */}
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
          <span className="truncate font-mono text-[11px] uppercase tracking-wider text-faint">
            {project.role}
          </span>
          <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink">
            Case study
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
