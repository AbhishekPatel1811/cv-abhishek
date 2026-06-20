"use client";

import { motion } from "motion/react";
import { openChat } from "@/components/ai/chat-events";

const PROMPTS = [
  "What has Abhishek shipped end to end?",
  "Tell me about the Sayyar project.",
  "What is his AI / RAG experience?",
  "Is he open to roles?",
];

export function AskAiSection() {
  return (
    <section className="relative overflow-hidden bg-bg px-5 py-24 sm:px-8 lg:py-32">
      <div className="accent-glow absolute inset-0" />
      <div className="bg-dotgrid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Powered by RAG over my real work
          </div>
          <h2 className="font-clash text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-ink">
            Don&apos;t read my CV.
            <br />
            <span className="text-accent">Interrogate it.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
            Ask my AI anything about my projects, stack and career. It answers in first person,
            grounded in real work, and cites where the answer came from. Voice mode too.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-2.5">
            {PROMPTS.map((p) => (
              <button
                key={p}
                onClick={() => openChat(p)}
                className="rounded-full border border-line bg-surface/70 px-4 py-2 text-sm text-ink-soft transition-colors hover:border-accent hover:text-ink"
              >
                {p}
              </button>
            ))}
          </div>

          <button
            onClick={() => openChat()}
            className="mt-8 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-[color:var(--color-accent-ink)] transition-transform hover:scale-[1.03]"
          >
            Start the conversation &rarr;
          </button>
        </motion.div>
      </div>
    </section>
  );
}
