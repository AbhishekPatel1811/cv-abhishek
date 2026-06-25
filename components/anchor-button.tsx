"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Magnet } from "@/components/magnet";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost" | "secondary";
type Size = "sm" | "default" | "lg";

// Solid "anchor" button (default = ink fill) / outline ghost. Optional trailing arrow + magnetism.
export function AnchorButton({
  href,
  onClick,
  children,
  variant = "default",
  size = "lg",
  arrow = false,
  external = false,
  magnetic = false,
  className,
  ariaLabel,
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  external?: boolean;
  magnetic?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const cls = cn("group", buttonVariants({ variant, size }), className);
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  let el: ReactNode;
  if (href) {
    el = external ? (
      <a href={href} target="_blank" rel="noreferrer noopener" aria-label={ariaLabel} className={cls}>
        {inner}
      </a>
    ) : (
      <Link href={href} aria-label={ariaLabel} className={cls}>
        {inner}
      </Link>
    );
  } else {
    el = (
      <button type="button" onClick={onClick} aria-label={ariaLabel} className={cls}>
        {inner}
      </button>
    );
  }

  return magnetic ? (
    <Magnet strength={0.35} radius={110}>
      {el}
    </Magnet>
  ) : (
    el
  );
}
