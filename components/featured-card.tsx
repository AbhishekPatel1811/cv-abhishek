import Link from "next/link";
import Image from "next/image";
import { Lock } from "lucide-react";
import { Pill } from "@/components/pill";
import { AppWindow } from "@/components/app-window";
import type { Project } from "@/lib/content/types";
import { cn } from "@/lib/utils";

const SHOTS: Record<string, string> = {
  // brandgen cover image intentionally omitted from the Selected Work section
  convoai: "/shots/convoai.png",
  "mappie-ai": "/shots/mappie-ai.png",
  "pisolved-platform": "/shots/pisolved-platform.png",
  "apex36-website": "/shots/apex36-website.png",
};

export function FeaturedCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
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

      {/* large: app-window with real screenshot, NDA panel, or faux mockup */}
      {large && (
        <div className="mt-6">
          {SHOTS[project.slug] ? (
            <AppWindow title={project.name} bodyClassName="p-0">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={SHOTS[project.slug]}
                  alt={`${project.name} screenshot`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </AppWindow>
          ) : project.isPrivate ? (
            <AppWindow title={project.name} bodyClassName="p-8">
              <div className="flex flex-col items-center text-center">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  <Lock className="size-3.5" /> Visuals under NDA
                </span>
                <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted">
                  {project.tagline}
                </p>
              </div>
            </AppWindow>
          ) : (
            <AppWindow title={project.name} bodyClassName="p-5">
              <div className="text-base font-semibold tracking-tight text-ink">
                {project.name}
              </div>
              <p className="mt-1.5 max-w-md text-xs leading-relaxed text-muted">
                {project.tagline}
              </p>
              <div className="mt-4 space-y-2">
                <div className="h-2 w-4/5 rounded-full border border-line" />
                <div className="h-2 w-3/5 rounded-full border border-line" />
              </div>
            </AppWindow>
          )}
        </div>
      )}

      {/* body */}
      <div className={cn("flex flex-1 flex-col", large ? "mt-6" : "mt-8")}>
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

        {/* large: results in a hairline-bordered mini-grid */}
        {large && (
          <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-lg border border-line">
            {project.results.slice(0, 3).map((r, i) => (
              <div
                key={r.label}
                className={cn(
                  "px-4 py-3",
                  i > 0 && "border-l border-line",
                )}
              >
                <div className="text-lg font-semibold tracking-tight text-ink">
                  {r.value}
                </div>
                <div className="mt-0.5 text-[11px] leading-tight text-faint">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        )}

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
