import { cn } from "@/lib/utils";

// Decorative vertical column guides (blueprint rails) behind hero / feature content.
export function GridFrame({
  columns = 4,
  className,
}: {
  columns?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-7xl -translate-x-1/2 px-5 sm:px-8",
        className,
      )}
    >
      <div className="flex h-full justify-between">
        {Array.from({ length: columns + 1 }).map((_, i) => (
          <div key={i} className="w-px bg-line/50" />
        ))}
      </div>
    </div>
  );
}
