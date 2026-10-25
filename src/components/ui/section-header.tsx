"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  className?: string;
};

/** Eyebrow + title + lead. The rule draws in, then the lines follow — every time the header comes into view. */
export function SectionHeader({ eyebrow, title, lead, tone = "light", className }: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-2xl", className)}>
      <Reveal>
        <p className={cn("eyebrow flex items-center gap-3", dark ? "text-copper-light" : "text-copper-ink")}>
          <motion.span
            aria-hidden
            className={cn("h-px w-8 origin-left", dark ? "bg-copper-light" : "bg-copper")}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ amount: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className={cn("mt-4 text-[clamp(1.75rem,6vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em]", dark && "text-white")}>{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p className={cn("mt-4 text-[1.05rem] leading-relaxed", dark ? "text-mist" : "text-muted")}>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
