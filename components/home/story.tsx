import { SectionHeading, Accent } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/content/profile";

const PRINCIPLES = [
  {
    k: "Starter instinct",
    v: "I build the thing that does not exist yet - the POC, the first version - then a team extends it or it ships as-is.",
  },
  {
    k: "Out of lane, on purpose",
    v: "Hired as a frontend intern. Ended up owning backend APIs, infra migrations, analytics, SEO/GEO and growth.",
  },
  {
    k: "Playbook builder",
    v: "Every new domain becomes a written playbook - the work is not done until it is repeatable.",
  },
  {
    k: "AI as a multiplier",
    v: "Cursor, Claude Code and Codex amplify me. I never mistake AI output for engineering judgment.",
  },
];

export function Story() {
  return (
    <section id="story" className="relative scroll-mt-24 bg-bg px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          kicker="Who I am"
          title={<>A product-oriented, AI-native <Accent>builder.</Accent></>}
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-2xl leading-snug text-ink sm:text-3xl">
              {profile.intro}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              I have been operating like a founding team member since day one - shipping marketing
              when no one else would, migrating infrastructure when bills got too big, and writing
              the onboarding doc, the deployment guide and the rubric, then executing the task.
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.k} delay={i * 0.06} className="bg-bg-2">
                <div className="h-full p-6">
                  <div className="font-clash text-base font-semibold text-accent">{p.k}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
