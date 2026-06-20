"use client";

import { openChat } from "@/components/ai/chat-events";
import { cn } from "@/lib/utils";

export function AskButton({
  prompt,
  label,
  className,
}: {
  prompt: string;
  label: string;
  className?: string;
}) {
  return (
    <button
      onClick={() => openChat(prompt)}
      className={cn(
        "rounded-full bg-accent px-6 py-3 text-base font-semibold text-[color:var(--color-accent-ink)] transition-transform hover:scale-[1.03]",
        className
      )}
    >
      {label}
    </button>
  );
}
