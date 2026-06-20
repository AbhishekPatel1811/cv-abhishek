import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content/types";
import { cn } from "@/lib/utils";

// real product shots captured from the live sites (in /public/marquee)
const IMAGES: Record<string, string> = {
  brandgen: "/marquee/brandgen.jpg",
  convoai: "/marquee/convoai.jpg",
  sayyar: "/marquee/sayyar.jpg",
  "mappie-ai": "/marquee/mappie.jpg",
  "apex36-website": "/marquee/apex36.jpg",
  "pisolved-platform": "/marquee/pisharp.jpg",
};

export function FeaturedCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const img = IMAGES[project.slug];

  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="hover"
      className={cn(
        "group relative block overflow-hidden rounded-3xl border border-line bg-bg-2",
        large ? "min-h-[460px]" : "min-h-[320px]",
        "h-full",
      )}
    >
      {/* media or fallback */}
      {img ? (
        <Image
          src={img}
          alt={`${project.name} - ${project.tagline}`}
          fill
          sizes={
            large
              ? "(min-width:1024px) 1100px, 100vw"
              : "(min-width:1024px) 560px, 100vw"
          }
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="accent-glow absolute inset-0 bg-gradient-to-br from-surface to-bg">
          <div className="bg-dotgrid absolute inset-0" />
        </div>
      )}

      {/* texture + legibility wash */}
      <div className="halftone absolute inset-0 opacity-20 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/20" />
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 100%, color-mix(in oklab, var(--color-accent) 16%, transparent), transparent 70%)",
        }}
      />

      {/* hover 'View' pill */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="accent-shimmer translate-y-2 rounded-full p-px opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="block rounded-full bg-bg/90 px-5 py-2 text-sm text-ink backdrop-blur">
            View{" "}
            <span className="font-serif italic text-accent">
              {project.name}
            </span>
          </span>
        </span>
      </div>

      {/* content */}
      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-faint">
            {project.category}
          </span>
          <span
            className={cn(
              "rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider backdrop-blur",
              project.isPrivate
                ? "border-amber/40 text-amber"
                : "border-accent/40 text-accent",
            )}
          >
            {project.status}
          </span>
        </div>

        <div>
          <h3
            className={cn(
              "font-clash font-semibold text-ink",
              large ? "text-4xl" : "text-2xl",
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

          {large && (
            <div className="mt-5 flex flex-wrap gap-3">
              {project.results.slice(0, 3).map((r) => (
                <div
                  key={r.label}
                  className="rounded-xl border border-line bg-bg/70 px-4 py-2.5 backdrop-blur"
                >
                  <div className="font-clash text-lg font-semibold text-ink">
                    {r.value}
                  </div>
                  <div className="text-[11px] leading-tight text-muted">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 flex items-center justify-between border-t border-line/70 pt-4">
            <span className="text-xs text-muted">{project.role}</span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-accent">
              Case study
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
