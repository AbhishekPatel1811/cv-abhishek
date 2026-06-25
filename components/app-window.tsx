import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// macOS-style window frame (traffic-light dots + title bar) to contain UI mockups / terminals.
// The 3 dots are the ONLY sanctioned pop of color in the monochrome system.
export function AppWindow({
  title,
  children,
  className,
  bodyClassName,
  toolbar,
}: {
  title?: string;
  children?: ReactNode;
  className?: string;
  bodyClassName?: string;
  toolbar?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-bg-2 shadow-sm",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface/50 px-4 py-2.5">
        <span className="flex shrink-0 gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </span>
        {title && (
          <span className="truncate font-mono text-[11px] tracking-wide text-faint">
            {title}
          </span>
        )}
        {toolbar && <span className="ml-auto flex items-center gap-2">{toolbar}</span>}
      </div>
      <div className={cn("p-5", bodyClassName)}>{children}</div>
    </div>
  );
}
