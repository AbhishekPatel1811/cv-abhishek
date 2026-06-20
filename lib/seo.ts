import { profile } from "@/lib/content/profile";
import { skillGroups } from "@/lib/content/skills";

// Normalize the configured site URL: tolerate a missing protocol and trailing slash,
// so `new URL(siteUrl)` (metadataBase) never throws during build.
function normalizeSiteUrl(raw?: string): string {
  const fallback = "https://abhishekpatel.dev";
  const v = raw?.trim().replace(/\/+$/, "");
  if (!v) return fallback;
  return /^https?:\/\//i.test(v) ? v : `https://${v}`;
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

const knowsAbout = Array.from(new Set(skillGroups.flatMap((g) => g.skills)));

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    worksFor: { "@type": "Organization", name: "Apex36 Technologies", url: "https://www.apex36tech.com" },
    sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.x],
    knowsAbout,
    description: profile.subhead,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} - Portfolio`,
    url: siteUrl,
    author: { "@type": "Person", name: profile.name },
  };
}
