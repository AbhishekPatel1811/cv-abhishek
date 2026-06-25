import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail, FileText } from "lucide-react";
import { profile } from "@/lib/content/profile";

const NAV = [
  { label: "Selected work", href: "/work" },
  { label: "Story", href: "/#story" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const SOCIALS = [
  { label: "GitHub", href: profile.socials.github, Icon: FaGithub, external: true },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: FaLinkedin, external: true },
  { label: "X", href: profile.socials.x, Icon: FaXTwitter, external: true },
];

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl border-x border-line px-5 sm:px-8">
        <div className="grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink font-mono text-sm font-bold text-bg">
                A
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-ink">Abhishek Patel</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {profile.role} based in {profile.location}. {profile.available}.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:bg-ink hover:text-bg"
                >
                  <Icon className="text-[15px]" />
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:bg-ink hover:text-bg"
              >
                <Mail className="size-[15px]" />
              </a>
            </div>
          </div>

          {/* navigate */}
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Navigate</div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* connect */}
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">Connect</div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a href={`mailto:${profile.email}`} className="transition-colors hover:text-ink">
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
                >
                  <FileText className="size-3.5" /> Resume
                </a>
              </li>
              {SOCIALS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-ink">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* giant faint wordmark - text as graphic */}
        <div className="select-none border-t border-line py-8">
          <div className="text-[clamp(2.5rem,11vw,9rem)] font-bold leading-none tracking-[-0.05em] text-ink/[0.05]">
            Abhishek Patel
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col gap-2 border-t border-line py-6 font-mono text-[11px] uppercase tracking-widest text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} Abhishek Patel</span>
          <span>Built from scratch - Next.js, Motion, OpenAI</span>
        </div>
      </div>
    </footer>
  );
}
