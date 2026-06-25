import Link from "next/link";
import { cn } from "@/lib/utils";

type Tile = {
  name: string;
  tag: string;
  slug: string;
  img: string;
  live?: boolean;
};

const TILES: Tile[] = [
  {
    name: "BrandGen",
    tag: "AI image generation",
    slug: "brandgen",
    img: "/marquee/brandgen.jpg",
    live: true,
  },
  {
    name: "ConvoAI",
    tag: "Voice AI receptionist",
    slug: "convoai",
    img: "/marquee/convoai.jpg",
    live: true,
  },
  {
    name: "Sayyar",
    tag: "Transportation SaaS",
    slug: "sayyar",
    img: "/marquee/sayyar.jpg",
    live: true,
  },
  {
    name: "Mappie.ai",
    tag: "AI product specs",
    slug: "mappie-ai",
    img: "/marquee/mappie.jpg",
    live: true,
  },
  {
    name: "Apex36",
    tag: "Marketing site + infra",
    slug: "apex36-website",
    img: "/marquee/apex36.jpg",
    live: true,
  },
  {
    name: "PiSolved",
    tag: "Platform redesign",
    slug: "pisolved-platform",
    img: "/marquee/pisharp.jpg",
    live: true,
  },
];

function Wordmark({ t }: { t: Tile }) {
  return (
    <Link
      href={`/work/${t.slug}`}
      title={t.tag}
      className="group/word inline-flex shrink-0 items-center gap-2 text-muted transition-colors hover:text-ink"
    >
      <span className="text-base font-medium tracking-tight whitespace-nowrap sm:text-lg">
        {t.name}
      </span>
      {t.live && (
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full border border-line bg-transparent transition-colors group-hover/word:bg-ink"
        />
      )}
    </Link>
  );
}

function Divider() {
  return (
    <span aria-hidden className="shrink-0 px-6 text-faint sm:px-9">
      <span className="inline-block size-1 rotate-45 bg-current align-middle" />
    </span>
  );
}

function Row({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="animate-marquee flex shrink-0 items-center group-hover:[animation-play-state:paused]"
      aria-hidden={ariaHidden}
    >
      {TILES.map((t, i) => (
        <span key={`${t.slug}-${i}`} className="flex items-center">
          <Wordmark t={t} />
          <Divider />
        </span>
      ))}
    </div>
  );
}

export function ProductMarquee() {
  return (
    <section className="group relative border-y border-line bg-bg-2">
      <div
        className={cn(
          "mx-auto flex max-w-7xl flex-col items-stretch gap-px",
          "border-x border-line sm:flex-row sm:items-center",
        )}
      >
        {/* eyebrow rail */}
        <div className="flex shrink-0 items-center gap-2 border-line px-5 py-4 sm:border-r sm:px-8">
          <span className="size-1.5 rounded-full bg-ink" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint whitespace-nowrap">
            Live in production
          </span>
        </div>

        {/* marquee */}
        <div className="marquee-mask relative flex flex-1 overflow-hidden py-4">
          <Row />
          <Row ariaHidden />
        </div>
      </div>
    </section>
  );
}
