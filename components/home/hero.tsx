"use client";

import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SplitHeadline } from "@/components/split-headline";
import { Magnet } from "@/components/magnet";
import { profile } from "@/lib/content/profile";
import { openChat } from "@/components/ai/chat-events";

const ROLES = [
  "an AI-Native Full-Stack Engineer",
  2000,
  "an AI Product Engineer",
  2000,
  "a RAG & Voice-AI Builder",
  2000,
];

export function Hero() {
  return (
    <AuroraBackground className="h-auto min-h-[100svh] bg-bg">
      <div className="relative z-20 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[auto_1fr] lg:gap-16 lg:pt-24">
        {/* avatar */}
        <div className="relative mx-auto w-fit lg:mx-0">
          <div className="absolute -inset-5 rounded-full bg-accent/30 blur-3xl" />
          <Image
            src="/abhishek-light.jpeg"
            alt={profile.name}
            width={360}
            height={360}
            priority
            className="relative aspect-square w-[230px] rounded-full border border-line object-cover shadow-2xl sm:w-[300px]"
          />
        </div>

        {/* text */}
        <div>
          <p className="mb-4 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.25em] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Hi, I&apos;m
          </p>

          <SplitHeadline className="font-clash text-[clamp(2.6rem,5.6vw,4.6rem)] font-semibold leading-[1.0] tracking-[-0.03em] text-ink">
            Abhishek <span className="text-accent">Patel</span>
          </SplitHeadline>

          <div className="mt-4 flex min-h-[2.4em] items-start text-2xl font-medium text-ink-soft sm:text-3xl">
            <TypeAnimation
              sequence={ROLES}
              wrapper="span"
              speed={45}
              deletionSpeed={62}
              repeat={Infinity}
              cursor
              className="text-accent"
            />
          </div>

          <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted">
            who&apos;s shipped 4 live AI products in 2 years - RAG chatbots, voice agents and
            brand-AI - built end to end, mostly solo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
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
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-faint">
            {profile.location} - {profile.available}
          </p>
        </div>
      </div>
    </AuroraBackground>
  );
}
