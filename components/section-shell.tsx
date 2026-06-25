import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const PAD = {
  none: "",
  sm: "py-14 sm:py-20",
  default: "py-20 sm:py-28",
  lg: "py-28 sm:py-36",
} as const;

// Standard framed section: full-bleed top hairline + centered column with 1px side rails.
// Stacking these builds the structural "blueprint" grid. Set bleed to drop the side rails.
export function SectionShell({
  children,
  id,
  className,
  innerClassName,
  padding = "default",
  bleed = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  padding?: keyof typeof PAD;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={cn("relative border-t border-line bg-bg", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-5 sm:px-8",
          !bleed && "border-x border-line",
          PAD[padding],
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
