import { profile } from "@/lib/content/profile";
import { skillGroups } from "@/lib/content/skills";
import { education } from "@/lib/content/timeline";
import { projects } from "@/lib/content/projects";
import type { Project } from "@/lib/content/types";

// Normalize the configured site URL: tolerate a missing protocol and trailing slash,
// so `new URL(siteUrl)` (metadataBase) never throws during build.
function normalizeSiteUrl(raw?: string): string {
  const fallback = "https://abhishekpatel.dev";
  const v = raw?.trim().replace(/\/+$/, "");
  if (!v) return fallback;
  return /^https?:\/\//i.test(v) ? v : `https://${v}`;
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

// Stable @id anchors so every schema node links to one canonical entity
// (a JSON-LD graph the way Google/AI crawlers expect to dereference it).
export const PERSON_ID = `${siteUrl}/#person`;
export const WEBSITE_ID = `${siteUrl}/#website`;
const ORG_ID = "https://www.apex36tech.com/#organization";

const knowsAbout = Array.from(new Set(skillGroups.flatMap((g) => g.skills)));

// Real screenshots used both as case-study heroes and CreativeWork.image.
const PROJECT_SHOTS: Record<string, string> = {
  brandgen: "/shots/brandgen.png",
  convoai: "/shots/convoai.png",
  "mappie-ai": "/shots/mappie-ai.png",
  "pisolved-platform": "/shots/pisolved-platform.png",
  "apex36-website": "/shots/apex36-website.png",
};

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    givenName: profile.firstName,
    familyName: "Patel",
    url: siteUrl,
    image: `${siteUrl}/abhishek.png`,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    nationality: { "@type": "Country", name: "India" },
    worksFor: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Apex36 Technologies",
      url: "https://www.apex36tech.com",
    },
    alumniOf: education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.org,
    })),
    hasOccupation: {
      "@type": "Occupation",
      name: profile.role,
      occupationalCategory: "15-1252.00 Software Developers",
      skills: knowsAbout.join(", "),
    },
    sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.x],
    knowsAbout,
    description: profile.subhead,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: `${profile.name} - Portfolio`,
    url: siteUrl,
    description: profile.subhead,
    inLanguage: "en",
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
  };
}

// ProfilePage for /about - the canonical "this page is about a person" signal.
export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${siteUrl}/about`,
    name: `About ${profile.name}`,
    description: profile.intro,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteUrl}${it.path}`,
    })),
  };
}

// CollectionPage + ItemList for /work, so the project index is crawlable as a set.
export function workCollectionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/work`,
    url: `${siteUrl}/work`,
    name: `Work - ${profile.name}`,
    description: `${projects.length} projects built end to end: live AI products, international client systems, and full-stack platforms.`,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteUrl}/work/${p.slug}`,
        name: p.name,
      })),
    },
  };
}

export function projectJsonLd(project: Project) {
  const shot = PROJECT_SHOTS[project.slug];
  const image = shot ? `${siteUrl}${shot}` : `${siteUrl}/opengraph-image`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/work/${project.slug}#creativework`,
    name: project.name,
    headline: project.tagline,
    abstract: project.problem,
    description: project.solution,
    image,
    genre: project.category,
    keywords: project.stack.join(", "),
    inLanguage: "en",
    creator: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    mainEntityOfPage: `${siteUrl}/work/${project.slug}`,
    ...(project.org
      ? { sourceOrganization: { "@type": "Organization", name: project.org } }
      : {}),
    ...(project.liveUrl ? { url: project.liveUrl } : {}),
    ...(project.year
      ? { dateCreated: String(project.year), datePublished: String(project.year) }
      : {}),
  };
}
