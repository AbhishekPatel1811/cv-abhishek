import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Magnet } from "@/components/magnet";
import { TimelineSection } from "@/components/home/timeline-section";
import { SkillsSection } from "@/components/home/skills-section";
import { Contact } from "@/components/home/contact";
import { profile } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "About - Abhishek Patel",
  description:
    "The career arc of Abhishek Patel: founding-day engineer, international client delivery, and multiple live AI products - and what he is looking for next.",
};

const SEEKING = [
  "Product Engineer at an early-stage AI SaaS startup",
  "Full-Stack Engineer at a Series A AI company",
  "Founding / early engineer on an AI product",
  "Technical co-founder, with the right partner",
];

const NARRATIVE = [
  "I started my career on the day my company opened its doors. Employee number one, treated as a core operator from the first hour - not a junior hire waiting for permission. That framing stuck. I have spent two years operating like a founding team member: building the first version, then the marketing, then the infrastructure when the bills got too big.",
  "Hired as a frontend intern, I ended up owning backend APIs, a Vercel-to-GCP infrastructure migration, analytics taxonomies, and SEO/GEO work - because those were the gaps, and someone had to fill them. Along the way I shipped two live AI products, delivered two production systems for real paying clients in Oman, and built an end-to-end RAG chatbot solo.",
  "I use AI tools - Cursor, Claude Code, Codex - as force multipliers. They let me ship like a small team. But I have learned exactly where the line is: AI amplifies judgment, it does not replace it. Every new domain I enter becomes a written playbook, because the work is not finished until it is repeatable.",
];

export default function AboutPage() {
  return (
    <div className="bg-bg">
      {/* hero */}
      <section className="accent-glow relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pt-40">
        <div className="bg-dotgrid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
              <span className="text-accent">About</span>
              <span className="h-px w-8 bg-line" />
              <span>{profile.location}</span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            <Reveal>
              <h1 className="max-w-3xl font-clash text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink">
                I build the thing that doesn&apos;t <span className="text-accent">exist yet.</span>
              </h1>
              <div className="mt-8 max-w-2xl space-y-5">
                {NARRATIVE.map((p) => (
                  <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Magnet strength={0.12} radius={200}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-bg-2">
                  <Image
                    src="/abhishek.jpeg"
                    alt={profile.name}
                    fill
                    sizes="(min-width:1024px) 320px, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-sm font-semibold text-ink">{profile.name}</div>
                    <div className="text-xs text-muted">{profile.role}</div>
                  </div>
                </div>
              </Magnet>
            </Reveal>
          </div>
        </div>
      </section>

      {/* seeking */}
      <section className="border-y border-line bg-bg-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  {profile.available}
                </div>
                <h2 className="mt-3 font-clash text-2xl font-semibold text-ink sm:text-3xl">
                  What I&apos;m looking for next
                </h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {SEEKING.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-bg px-4 py-2 text-sm text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TimelineSection />
      <SkillsSection />
      <Contact />
    </div>
  );
}
