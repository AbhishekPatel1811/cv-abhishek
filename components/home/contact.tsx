import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SectionShell } from "@/components/section-shell";
import { SectionHeading, Accent } from "@/components/section-heading";
import { AnchorButton } from "@/components/anchor-button";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/content/profile";

const socials = [
  { href: profile.socials.github, label: "GitHub", Icon: FaGithub },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: profile.socials.x, label: "X", Icon: FaXTwitter },
] as const;

export function Contact() {
  return (
    <SectionShell id="contact" padding="lg">
      <SectionHeading
        index="08"
        kicker="Contact"
        align="center"
        title={
          <>
            Let&apos;s build something <Accent>that ships.</Accent>
          </>
        }
      />

      <Reveal delay={0.08} className="mx-auto max-w-xl text-center">
        <p className="text-base leading-relaxed text-ink-soft">
          {profile.available}. If you are hiring a product engineer who can take an AI idea
          from zero to production, or you need something built, I would love to talk.
        </p>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <AnchorButton href={`mailto:${profile.email}`} size="lg" arrow magnetic>
            {profile.email}
          </AnchorButton>
          <AnchorButton href={profile.resumeUrl} variant="outline" size="lg" external>
            Resume
          </AnchorButton>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 flex items-center justify-center gap-2.5">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="flex size-11 items-center justify-center rounded-md border border-line text-ink-soft transition-colors hover:bg-ink hover:text-bg"
            >
              <Icon className="size-[18px]" />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.26}>
        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
          {profile.location} · {profile.available}
        </p>
      </Reveal>
    </SectionShell>
  );
}
