import Link from "next/link";
import { Pill } from "@/components/pill";
import type { Project } from "@/lib/content/types";
import { cn } from "@/lib/utils";

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
