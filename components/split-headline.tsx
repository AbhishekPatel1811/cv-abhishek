"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

// Cinematic char reveal via GSAP SplitText (free since 2025), masked for a clean slide-up.
export function SplitHeadline({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // words,chars keeps whole words together (no mid-word line breaks); chars animate
      const split = SplitText.create(ref.current, { type: "words,chars", mask: "chars" });
      if (reduce) return;
      gsap.from(split.chars, {
        yPercent: 120,
        opacity: 0,
        stagger: 0.014,
        duration: 0.7,
        delay,
        ease: "power3.out",
      });
    },
    { scope: ref }
  );

  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}
