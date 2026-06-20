import { profile } from "./profile";

export type WritingItem = {
  title: string;
  blurb: string;
  platform: string;
  href: string;
};

// Real content series Abhishek runs - linked to the platforms they live on.
export const writing: WritingItem[] = [
  {
    title: "Brand of the Week",
    blurb:
      "Recreating on-brand creative for Notion, Figma and Spotify with BrandGen - a running series turning real brands into AI output.",
    platform: "X / Twitter",
    href: profile.socials.x,
  },
  {
    title: "Building AI in public",
    blurb:
      "Shipping BrandGen and ConvoAI out loud: launches, zero-ad-spend growth, and the lessons from going POC to product.",
    platform: "LinkedIn",
    href: profile.socials.linkedin,
  },
  {
    title: "Use-case playbooks",
    blurb:
      "How agencies, e-commerce, real estate and podcasts put brand-aligned AI to work - distilled into LinkedIn carousels.",
    platform: "LinkedIn",
    href: profile.socials.linkedin,
  },
  {
    title: "Build notes",
    blurb:
      "Playbooks from every domain I enter - RAG, voice AI, GEO/AEO - written so the work is repeatable, not just done.",
    platform: "GitHub",
    href: profile.socials.github,
  },
];
