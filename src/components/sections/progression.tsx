"use client";

import { motion, type Variants } from "motion/react";
import { progression } from "@/data/resume";

const ease = [0.22, 1, 0.36, 1] as const;

const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } } };
const step: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const dot: Variants = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { duration: 0.5, ease } },
};

/** Five career steps joined by a line that draws across (desktop) or down (mobile) on scroll. */
export function Progression() {
  return (
    <motion.ol
      className="relative mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6"
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
    >
      {/* Connector: horizontal on desktop, vertical on phones */}
      <motion.span
        aria-hidden
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.6, ease } } }}
        className="absolute left-[7px] top-[7px] hidden h-px w-[calc(100%-14px)] origin-left bg-copper/50 lg:block"
      />
      <motion.span
        aria-hidden
        variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 1.6, ease } } }}
        className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-copper/50 sm:hidden"
      />

      {progression.map((s, i) => {
        const last = i === progression.length - 1;
        return (
          <motion.li key={s.role} variants={step} className="relative pl-9 sm:border-t-2 sm:border-copper/40 sm:pl-0 sm:pt-4 lg:border-t-0 lg:pt-9">
            <motion.span
              aria-hidden
              variants={dot}
              className={`absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-[3px] border-copper sm:hidden lg:top-0 lg:block ${last ? "bg-copper" : "bg-surface"}`}
            />
            <p className="text-sm font-bold text-copper-ink">{s.years}</p>
            <p className="mt-1 text-[1.05rem] font-bold text-ink">{s.role}</p>
            <p className="mt-1.5 text-sm leading-snug text-body">{s.firms}</p>
            <p className="mt-1 text-sm leading-snug text-muted">{s.note}</p>
          </motion.li>
        );
      })}
    </motion.ol>
  );
}
