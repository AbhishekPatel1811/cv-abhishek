export type Metric = { value: string; label: string };

export type ArchItem = { area: string; detail: string };

export type Feature = { title: string; desc: string };

export type FAQ = { q: string; a: string };

export type Testimonial = { quote: string; author: string; role: string };

export type ProjectStatus = "Live" | "Open source" | "Private client" | "Internal";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  role: string;
  period: string;
  year: number;
  status: ProjectStatus;
  featured: boolean;
  isPrivate: boolean;
  liveUrl?: string;
  repoUrl?: string;
  org: string;
  stack: string[];
  /* case study body */
  problem: string;
  solution: string;
  architecture: ArchItem[];
  features: Feature[];
  results: Metric[];
  roleNarrative: string;
  testimonial?: Testimonial;
  lessons: string[];
  faq: FAQ[];
};

export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type SkillGroup = {
  title: string;
  blurb: string;
  skills: string[];
};
