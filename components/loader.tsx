"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const WORDS = ["Build", "Ship", "Scale"];
const DURATION = 2200;
const KEY = "abhishek-loaded-v1";

export function Loader() {
  // Render on the server so it covers from first paint (no hero flash).
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const [word, setWord] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}
    if (seen || reduce) {
      // already seen this session (or reduced motion): drop the SSR-rendered overlay
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(false);
      return;
    }

    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1);
      setCount(Math.floor(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {}
        setTimeout(() => {
          setShow(false);
          document.documentElement.style.overflow = "";
        }, 350);
      }
    };
    raf = requestAnimationFrame(tick);
    const wordTimer = setInterval(() => setWord((w) => (w + 1) % WORDS.length), 650);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(wordTimer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          // loader-auto = no-JS CSS fallback that auto-hides after a few seconds
          className="loader-auto fixed inset-0 z-[200] flex flex-col justify-between bg-bg px-6 py-7 sm:px-10 sm:py-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative flex items-center justify-between font-mono text-xs uppercase tracking-[0.3em] text-muted">
            <span>Abhishek Patel</span>
            <span>Portfolio</span>
          </div>

          <div className="relative flex flex-1 items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={word}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-5xl italic text-ink-soft sm:text-7xl"
              >
                {WORDS[word]}.
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="relative">
            <div className="flex items-end justify-end">
              <span className="font-clash text-7xl font-semibold tabular-nums text-ink sm:text-9xl">
                {String(count).padStart(3, "0")}
              </span>
            </div>
            <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-line">
              <div
                className="h-full origin-left bg-accent"
                style={{ transform: `scaleX(${count / 100})`, boxShadow: "0 0 10px var(--color-accent)" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
