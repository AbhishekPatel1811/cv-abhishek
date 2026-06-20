import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

// Editorial accent word, rendered in the serif italic display face.
export function Accent({ children }: { children: ReactNode }) {
  return <span className="font-serif font-normal italic tracking-normal text-accent">{children}</span>;
}

export function SectionHeading({
  index,
  kicker,
  title,
  className,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-12", className)}>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span>{kicker}</span>
      </div>
      <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-ink">
        {title}
      </h2>
    </Reveal>
  );
}
