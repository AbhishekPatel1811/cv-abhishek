import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { profile } from "@/lib/content/profile";

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative border-t border-line bg-bg-2">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="font-clash text-2xl font-semibold text-ink">
              Abhishek<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted">
              {profile.role} based in {profile.location}. {profile.available}.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <FaGithub />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <FaLinkedin />
            </a>
            <a
              href={profile.socials.x}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="X"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <FaXTwitter />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs uppercase tracking-widest text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} Abhishek Patel</span>
          <span>Built from scratch - Next.js, Motion, OpenAI</span>
        </div>
      </div>
    </footer>
  );
}
