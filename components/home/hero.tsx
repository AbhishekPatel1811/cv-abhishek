"use client";

import { SplitHeadline } from "@/components/split-headline";
import { Pill } from "@/components/pill";
import { AppWindow } from "@/components/app-window";
import { AnchorButton } from "@/components/anchor-button";
import { GridFrame } from "@/components/grid-frame";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/content/profile";
import { openChat } from "@/components/ai/chat-events";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg">
      <GridFrame columns={4} />
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pb-24 pt-36 text-center sm:px-8 sm:pt-44">
        <Reveal>
          <Pill dot>{profile.available}</Pill>
        </Reveal>

        <SplitHeadline className="mt-8 max-w-4xl text-[clamp(2.5rem,7vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
          {profile.headline}
        </SplitHeadline>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.subhead}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <AnchorButton onClick={() => openChat()} size="lg" arrow magnetic>
              Ask my AI
            </AnchorButton>
            <AnchorButton href="/work" variant="outline" size="lg" arrow>
              View work
            </AnchorButton>
          </div>
        </Reveal>

        <Reveal delay={0.22} className="w-full">
          <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {profile.stats.map((s) => (
              <div key={s.label} className="bg-bg px-5 py-4 text-center">
                <dt className="text-2xl font-semibold tracking-tight text-ink">{s.value}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-faint">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.28} className="w-full">
          <AppWindow
            title="abhishek@portfolio ~ zsh"
            className="mt-14 w-full text-left"
            bodyClassName="bg-bg p-0"
          >
            <div className="space-y-2.5 p-5 font-mono text-sm">
              <div>
                <span className="text-faint">$</span>{" "}
                <span className="text-ink">ask-abhishek &quot;what have you shipped?&quot;</span>
              </div>
              <p className="leading-relaxed text-muted">
                &rarr; 4 live AI products in 2 years - RAG chatbots, voice agents, and a brand-AI
                image platform - built end to end, mostly solo. Employee #1 at Apex36; production
                systems delivered for clients in Oman.
              </p>
              <div className="flex items-center gap-2 text-ink">
                <span className="text-faint">$</span>
                <span className="inline-block h-4 w-[7px] animate-pulse bg-ink" />
              </div>
            </div>
          </AppWindow>
        </Reveal>
      </div>
    </section>
  );
}
