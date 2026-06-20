import Image from "next/image";
import Link from "next/link";

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

function Tile({ t }: { t: Tile }) {
  return (
    <Link
      href={`/work/${t.slug}`}
      className="group/tile relative block h-[220px] w-[350px] shrink-0 overflow-hidden rounded-2xl border border-line sm:h-[260px] sm:w-[420px]"
    >
      <Image
        src={t.img}
        alt={`${t.name} - ${t.tag}`}
        fill
        sizes="420px"
        className="object-cover object-top transition-transform duration-500 group-hover/tile:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
        <div>
          <div className="font-clash text-lg font-semibold text-ink">
            {t.name}
          </div>
          <div className="text-xs text-muted">{t.tag}</div>
        </div>
        {t.live && (
          <span className="flex items-center gap-1.5 rounded-full border border-accent/40 bg-bg/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Live
          </span>
        )}
      </div>
    </Link>
  );
}

export function ProductMarquee() {
  const row = [...TILES, ...TILES];
  return (
    <section className="group border-y border-line bg-bg-2 py-8">
      <div className="mx-auto mb-5 max-w-7xl px-5 sm:px-8">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
          Shipped in production - real products, real users
        </span>
      </div>
      <div className="marquee-mask relative flex gap-4 overflow-hidden">
        <div className="animate-marquee flex shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <Tile key={`a-${i}`} t={t} />
          ))}
        </div>
        <div
          className="animate-marquee flex shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused]"
          aria-hidden
        >
          {row.map((t, i) => (
            <Tile key={`b-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
