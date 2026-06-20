import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaArrowRight } from "react-icons/fa6";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/content/profile";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-bg px-5 py-28 sm:px-8 lg:py-40">
      <div className="accent-glow absolute inset-0" />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            <span className="text-accent">07</span>
            <span className="h-px w-8 bg-line" />
            <span>Contact</span>
          </div>
          <h2 className="mt-6 font-clash text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-ink">
            Let&apos;s build
            <br />
            something <span className="text-accent">that ships.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            {profile.available}. If you are hiring a product engineer who can take an AI idea from
            zero to production, or you need something built, I would love to talk.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-base font-semibold text-[color:var(--color-accent-ink)] transition-transform hover:scale-[1.03]"
            >
              <FaEnvelope />
              {profile.email}
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-line bg-surface/50 px-6 py-4 text-base font-medium text-ink transition-colors hover:border-accent"
            >
              Download resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href={profile.socials.x}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="X"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <FaXTwitter className="text-lg" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
