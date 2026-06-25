import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Capsule badge - 1px border, faint fill, mono micro-text, optional pulsing dot.
export function Pill({
  children,
  className,
  dot = false,
  icon,
  as: Tag = "span",
}: {
  children: ReactNode;
  className?: string;
  dot?: boolean;
  icon?: ReactNode;
  as?: ElementType;
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-bg-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted",
        className,
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/40" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
        </span>
      )}
      {icon}
      {children}
    </Tag>
  );
}
