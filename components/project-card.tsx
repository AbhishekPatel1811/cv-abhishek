import Link from "next/link";
import type { Project } from "@/lib/content/types";
import { cn } from "@/lib/utils";

const statusStyles: Record<Project["status"], string> = {
  Live: "text-accent border-accent/40",
  "Open source": "text-ink-soft border-line",
  "Private client": "text-amber border-amber/40",
  Internal: "text-ink-soft border-line",
};

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-bg-2 p-6 transition-all duration-300 hover:border-accent/60 hover:bg-surface sm:p-8",
        large && "lg:col-span-2"
      )}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/10" />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-faint">{project.category}</span>
          <span
            className={cn(
              "rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
              statusStyles[project.status]
            )}
          >
            {project.status}
          </span>
        </div>

        <h3 className={cn("mt-5 font-clash font-semibold text-ink", large ? "text-4xl" : "text-2xl")}>
          {project.name}
        </h3>
        <p className={cn("mt-3 text-muted", large ? "max-w-xl text-lg leading-snug" : "text-sm leading-relaxed")}>
          {project.tagline}
        </p>

        {large && (
          <div className="mt-6 flex flex-wrap gap-4">
            {project.results.slice(0, 3).map((r) => (
              <div key={r.label} className="rounded-xl border border-line bg-bg px-4 py-3">
                <div className="font-clash text-xl font-semibold text-ink">{r.value}</div>
                <div className="text-[11px] leading-tight text-muted">{r.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative mt-6">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, large ? 6 : 4).map((s) => (
            <span key={s} className="rounded-md border border-line px-2 py-0.5 text-[11px] text-ink-soft">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <span className="text-xs text-muted">{project.role}</span>
          <span className="flex items-center gap-1.5 text-sm font-medium text-accent">
            Case study
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
