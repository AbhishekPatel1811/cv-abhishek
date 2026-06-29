import type { Metadata } from "next";
import Image from "next/image";
import { Accent } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ExperienceSection } from "@/components/home/experience-section";
import { SkillsSection } from "@/components/home/skills-section";
import { EducationSection } from "@/components/home/education-section";
import { Contact } from "@/components/home/contact";
import { profile } from "@/lib/content/profile";
import { profilePageJsonLd, breadcrumbJsonLd } from "@/lib/seo";

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
  "Employee number one at Apex36 - on the company's founding day, treated as a core operator from the first hour. I didn't wait for permission; I built the first version, then the marketing, then the infrastructure when the bills got too big.",
  "Hired as a frontend intern, I ended up owning the full stack: backend APIs, AI/RAG and voice systems, a Vercel-to-GCP migration, analytics, SEO/GEO. I shipped live AI products, delivered production systems for paying clients in Oman, and built an end-to-end RAG chatbot solo - because those were the gaps, and someone had to fill them.",
  "I use AI tools as force multipliers, not crutches - they let me ship like a team while I keep the judgment. Every new domain becomes a written playbook. Now I'm back doing what I do best: building AI products that get used.",
];

export default function AboutPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <div className="bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {/* hero */}
      <section className="relative border-b border-line bg-bg">
        <div className="mx-auto w-full max-w-7xl border-x border-line px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              <span className="text-ink">About</span>
              <span className="h-px w-8 bg-line" />
              <span>{profile.location}</span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
            <Reveal>
              <h1 className="max-w-3xl text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.0] tracking-[-0.03em] text-ink">
                AI-native engineer who ships the thing that doesn&apos;t <Accent>exist yet.</Accent>
              </h1>
              <div className="mt-10 max-w-2xl space-y-5">
                {NARRATIVE.map((p) => (
                  <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <figure className="group overflow-hidden rounded-xl border border-line bg-bg-2">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/abhishek-light.jpeg"
                    alt={profile.name}
                    fill
                    sizes="(min-width:1024px) 320px, 90vw"
                    className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                  />
                </div>
                <figcaption className="flex items-center justify-between border-t border-line px-4 py-3">
                  <span className="text-sm font-semibold text-ink">{profile.name}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {profile.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* seeking */}
      <section className="relative border-b border-line bg-bg">
        <div className="mx-auto w-full max-w-7xl border-x border-line px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="rounded-xl border border-line bg-bg-2 p-8 sm:p-10">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:max-w-sm">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {profile.available}
                  </div>
                  <h2 className="mt-4 text-[clamp(1.9rem,4.2vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
                    What I&apos;m looking for <Accent>next.</Accent>
                  </h2>
                </div>
                <ul className="flex flex-col">
                  {SEEKING.map((s, i) => (
                    <li
                      key={s}
                      className={
                        i === 0
                          ? "flex items-center gap-4 py-3.5"
                          : "flex items-center gap-4 border-t border-line py-3.5"
                      }
                    >
                      <span className="font-mono text-[11px] text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base text-ink-soft">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <Contact />
    </div>
  );
}
