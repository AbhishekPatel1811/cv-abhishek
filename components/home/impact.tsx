"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { Database, Gauge, Globe, Layers, Rocket, Users } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { SectionHeading, Accent } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const NUMBERS = [
  { value: "183 GB", label: "bandwidth overage resolved in the Apex36 Vercel to GCP migration", icon: Gauge },
  { value: "40+", label: "performance metrics surfaced in the StarTech trading control room", icon: Layers },
  { value: "12 days", label: "from zero to a public BrandGen POC, solo", icon: Rocket },
  { value: "6", label: "industry voice personas built into ConvoAI", icon: Users },
  { value: "2", label: "MySQL databases joined in application code for Sayyar", icon: Database },
  { value: "230", label: "i18n keys per language shipped (en / es / zh)", icon: Globe },
] as const;

// Parse a metric like "183 GB" / "40+" / "12 days" into the leading number plus
// the surrounding text so the count-up animates the digits and preserves units exactly.
function splitValue(value: string) {
  const match = value.match(/^(\d[\d,]*)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value };
  return { prefix: "", target: Number(match[1].replace(/,/g, "")), suffix: match[2] };
}

function CountUp({ value }: { value: string }) {
  const { target, suffix } = splitValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Impact() {
  return (
    <SectionShell id="impact" padding="lg">
      <SectionHeading
        index="07"
        kicker="By the numbers"
        title={<>Outcomes, not <Accent>adjectives.</Accent></>}
      />

      <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {NUMBERS.map((n, i) => {
          const Icon = n.icon;
          return (
            <Reveal key={n.label} delay={(i % 3) * 0.06} className="bg-bg">
              <div className={cn("group relative flex h-full flex-col justify-between gap-10 p-8")}>
                <Icon
                  className="absolute right-8 top-8 h-4 w-4 text-faint"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div className="font-mono text-5xl font-medium leading-none tracking-tight text-ink">
                  <CountUp value={n.value} />
                </div>
                <p className="max-w-[34ch] text-sm leading-relaxed text-muted">{n.label}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
