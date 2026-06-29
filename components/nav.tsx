"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { openChat } from "@/components/ai/chat-events";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnchorButton } from "@/components/anchor-button";

const LINKS = [
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/work" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

function Mark() {
  return (
    <Link href="/" className="flex items-center gap-2.5" data-cursor="hover">
      <span className="relative h-8 w-8 overflow-hidden rounded-full border border-line">
        <Image
          src="/abhishek.png"
          alt="Abhishek Patel"
          fill
          sizes="32px"
          className="object-cover"
        />
      </span>
      <span className="text-sm font-semibold tracking-tight text-ink">
        Abhishek Patel
      </span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-bg/80 backdrop-blur-xl"
          : "border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 py-3.5 sm:px-8">
        <div className="justify-self-start">
          <Mark />
        </div>

        <nav className="hidden items-center gap-8 justify-self-center text-sm text-muted md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <ThemeToggle />
          <span className="hidden sm:block">
            <AnchorButton onClick={() => openChat()} size="sm">
              Ask my AI
            </AnchorButton>
          </span>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 text-base text-muted">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
            <AnchorButton
              onClick={() => {
                setOpen(false);
                openChat();
              }}
              size="sm"
              className="mt-1 self-start"
            >
              Ask my AI
            </AnchorButton>
          </nav>
        </div>
      )}
    </header>
  );
}
