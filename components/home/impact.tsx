import { SectionHeading, Accent } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const NUMBERS = [
  { value: "183 GB", label: "bandwidth overage resolved in the Apex36 Vercel to GCP migration" },
  { value: "40+", label: "performance metrics surfaced in the StarTech trading control room" },
  { value: "12 days", label: "from zero to a public BrandGen POC, solo" },
  { value: "6", label: "industry voice personas built into ConvoAI" },
  { value: "2", label: "MySQL databases joined in application code for Sayyar" },
  { value: "230", label: "i18n keys per language shipped (en / es / zh)" },
];

export function Impact() {
  return (
    <section className="relative scroll-mt-24 border-t border-line bg-bg-2 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="05"
          kicker="By the numbers"
          title={<>Outcomes, not <Accent>adjectives.</Accent></>}
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {NUMBERS.map((n, i) => (
            <Reveal key={n.label} delay={(i % 3) * 0.05} className="bg-bg">
              <div className="h-full p-7">
                <div className="font-clash text-4xl font-semibold text-accent">{n.value}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{n.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
