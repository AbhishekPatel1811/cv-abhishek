"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { openChat } from "@/components/ai/chat-events";

const LINKS = [
  { label: "Work", href: "/work" },
  { label: "Story", href: "/#story" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] transition-colors duration-300",
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-clash text-lg font-semibold tracking-tight text-ink">
          Abhishek<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openChat()}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-[color:var(--color-accent-ink)] transition-transform hover:scale-[1.03] sm:block"
          >
            Ask my AI
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={cn("block h-px w-5 bg-ink transition", open && "translate-y-[6px] rotate-45")} />
              <span className={cn("block h-px w-5 bg-ink transition", open && "opacity-0")} />
              <span className={cn("block h-px w-5 bg-ink transition", open && "-translate-y-[6px] -rotate-45")} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg/95 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-base text-ink-soft">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-ink">
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                openChat();
              }}
              className="mt-1 self-start rounded-full bg-accent px-4 py-2 text-sm font-semibold text-[color:var(--color-accent-ink)]"
            >
              Ask my AI
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
