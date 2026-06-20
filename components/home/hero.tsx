"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "@/lib/content/profile";
import { openChat } from "@/components/ai/chat-events";
import { Magnet } from "@/components/magnet";

// Gemini-generated assets (AI Studio / Flow). Drop the file in /public and set the path:
//   image -> /public/hero-bg.png   |   video -> /public/hero.mp4 (+ /public/hero-poster.jpg)
const HERO_IMAGE: string | null = null;
const HERO_VIDEO: string | null = null;

const ease = [0.22, 1, 0.36, 1] as const;

const ROLES = [
  "AI image generation",
  "voice AI agents",
  "RAG chatbots",
  "transport platforms",
  "trading dashboards",
];

export function Hero() {
  const [role, setRole] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRole((r) => (r + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="accent-glow grain relative flex min-h-[100svh] flex-col overflow-hidden bg-bg px-5 pb-10 pt-28 sm:px-8 lg:pt-32">
      {HERO_IMAGE && (
        <>
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none absolute inset-0 object-cover opacity-40"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/30" />
        </>
      )}

      <div className="bg-dotgrid pointer-events-none absolute inset-0" />

      {HERO_VIDEO && (
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.25em] text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.location} - {profile.available}
        </motion.div>

        <h1 className="font-clash max-w-[15ch] text-[clamp(2.8rem,8.5vw,7.2rem)] font-semibold leading-[0.93] tracking-[-0.03em] text-ink">
          <Line delay={0.05}>I build &amp; ship</Line>
          <Line delay={0.15}>AI products that</Line>
          <Line delay={0.25}>
            <span className="font-serif font-normal italic tracking-normal text-accent">
              get used.
            </span>
          </Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-7 max-w-[60ch] text-lg leading-relaxed text-ink-soft"
        >
          {profile.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.46, ease }}
          className="mt-6 flex items-center gap-2 text-base text-muted"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-faint">Lately:</span>
          <span className="relative inline-flex h-7 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={role}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.35, ease }}
                className="font-serif text-xl italic text-accent"
              >
                {ROLES[role]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-7 flex flex-wrap items-center gap-4"
        >
          <Magnet strength={0.45} radius={120}>
            <button
              onClick={() => openChat()}
              className="group rounded-full bg-accent px-6 py-3 text-base font-semibold text-[color:var(--color-accent-ink)] transition-transform hover:scale-[1.03]"
            >
              Ask my AI
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </button>
          </Magnet>
          <Link
            href="/work"
            className="rounded-full border border-line bg-surface/50 px-6 py-3 text-base font-medium text-ink transition-colors hover:border-accent"
          >
            View work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="bg-bg-2 px-5 py-5">
              <div className="font-clash text-3xl font-semibold text-ink">{s.value}</div>
              <div className="mt-1 text-xs leading-snug text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between border-t border-line pt-5 font-mono text-xs uppercase tracking-widest text-faint">
        <div className="flex items-center gap-3">
          <span>Scroll</span>
          <span className="relative block h-8 w-px overflow-hidden bg-line">
            <span className="animate-scroll-down absolute inset-x-0 top-0 h-3 bg-accent" />
          </span>
        </div>
        <span className="hidden sm:inline">Mumbai, India - IST</span>
      </div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "108%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}
