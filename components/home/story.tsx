import Image from "next/image";
import { Compass, GitBranch, BookOpen, Sparkles } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { SectionHeading, Accent } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/content/profile";

const PRINCIPLES = [
  {
    icon: Compass,
    k: "Starter instinct",
    v: "I build the thing that does not exist yet - the POC, the first version - then a team extends it or it ships as-is.",
  },
  {
    icon: GitBranch,
    k: "Out of lane, on purpose",
    v: "Hired as a frontend intern. Ended up owning backend APIs, infra migrations, analytics, SEO/GEO and growth.",
  },
  {
    icon: BookOpen,
    k: "Playbook builder",
    v: "Every new domain becomes a written playbook - the work is not done until it is repeatable.",
  },
  {
    icon: Sparkles,
    k: "AI as a multiplier",
    v: "Cursor, Claude Code and Codex amplify me. I never mistake AI output for engineering judgment.",
  },
];

export function Story() {
  return (
    <SectionShell id="story" padding="lg">
      <SectionHeading
        index="01"
        kicker="Who I am"
        title={<>A product-oriented, AI-native <Accent>builder.</Accent></>}
      />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal className="max-w-2xl">
          <p className="text-2xl font-medium leading-snug tracking-[-0.01em] text-ink sm:text-3xl">
            {profile.intro}
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            I have been operating like a founding team member since day one - shipping marketing
            when no one else would, migrating infrastructure when bills got too big, and writing
            the onboarding doc, the deployment guide and the rubric, then executing the task.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <figure className="overflow-hidden rounded-xl border border-line bg-bg-2">
            <Image
              src="/abhishek.jpeg"
              alt={profile.name}
              width={640}
              height={720}
              className="aspect-[4/5] w-full object-cover grayscale transition duration-500 hover:grayscale-0"
            />
            <figcaption className="flex items-center justify-between border-t border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <span>{profile.name}</span>
              <span className="text-faint">{profile.location}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {PRINCIPLES.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.k} delay={i * 0.06} className="bg-bg-2">
              <div className="flex h-full flex-col p-6">
                <Icon className="h-5 w-5 text-ink" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-4 text-base font-semibold tracking-[-0.01em] text-ink">{p.k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.v}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
