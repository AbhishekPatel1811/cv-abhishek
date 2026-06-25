"use client";

import { ArrowUpRight, Sparkles, Mic } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { SectionHeading, Accent } from "@/components/section-heading";
import { AppWindow } from "@/components/app-window";
import { AnchorButton } from "@/components/anchor-button";
import { Reveal } from "@/components/reveal";
import { openChat } from "@/components/ai/chat-events";

const PROMPTS = [
  "What has Abhishek shipped end to end?",
  "Tell me about the Sayyar project.",
  "What is his AI / RAG experience?",
  "Is he open to roles?",
];

export function AskAiSection() {
  return (
    <SectionShell padding="lg">
      <SectionHeading
        index="06"
        kicker="Ask my AI"
        align="center"
        title={
          <>
            Don&apos;t read my CV. <Accent>Interrogate</Accent> it.
          </>
        }
      />

      <Reveal className="mx-auto max-w-2xl">
        <AppWindow title="ask-abhishek.ai — chat" bodyClassName="p-0">
          <div className="space-y-5 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border border-line bg-surface">
                <Sparkles className="size-3.5 text-ink-soft" />
              </span>
              <p className="text-sm leading-relaxed text-ink-soft">
                Hi — I&apos;m Abhishek&apos;s AI. I answer in first person, grounded in his real
                projects, stack and career. Ask me anything, or start with one of these:
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pl-10">
              {PROMPTS.map((p) => (
                <AnchorButton
                  key={p}
                  variant="outline"
                  size="sm"
                  onClick={() => openChat(p)}
                >
                  {p}
                </AnchorButton>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-line bg-surface/40 px-5 py-3 sm:px-6">
            <span className="font-mono text-[11px] tracking-wide text-faint">&gt;</span>
            <span className="flex-1 truncate text-sm text-muted">
              Ask about my work…
            </span>
            <button
              type="button"
              onClick={() => openChat()}
              aria-label="Voice mode"
              className="flex size-8 items-center justify-center rounded-md border border-line text-ink-soft transition-colors hover:text-ink"
            >
              <Mic className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => openChat()}
              aria-label="Send"
              className="flex size-8 items-center justify-center rounded-md bg-accent text-accent-ink transition-transform hover:scale-105"
            >
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </AppWindow>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 flex flex-col items-center gap-4 text-center">
        <AnchorButton onClick={() => openChat()} size="lg" arrow magnetic>
          Ask my AI
        </AnchorButton>
        <p className="max-w-md font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          Answers in first person · grounded in real work · with citations + voice
        </p>
      </Reveal>
    </SectionShell>
  );
}
