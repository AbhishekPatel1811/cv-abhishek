import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

// Editorial accent word - serif italic (Georgia) for elegant contrast inside the geometric sans.
// Monochrome: emphasis comes from the typeface switch, not color.
export function Accent({ children }: { children: ReactNode }) {
  return <span className="font-serif font-normal italic">{children}</span>;
}

export function SectionHeading({
  index,
  kicker,
  title,
  align = "left",
  className,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-12", align === "center" && "text-center", className)}>
      <div
        className={cn(
          "flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
          align === "center" && "justify-center",
        )}
      >
        <span className="rounded border border-line px-1.5 py-0.5 text-faint">{index}</span>
        <span>{kicker}</span>
      </div>
      <h2
        className={cn(
          "mt-4 text-[clamp(1.9rem,4.2vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink",
          align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl",
        )}
      >
        {title}
      </h2>
    </Reveal>
  );
}
