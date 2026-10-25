"use client";

import { motion } from "motion/react";
import { organisations } from "@/data/resume";

/** Quiet credibility strip: organisations whose projects he has worked on. */
export function Organisations() {
  return (
    <section aria-label="Organisations" className="border-t border-line py-10 md:py-12">
      <div className="container-page flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
        <p className="eyebrow shrink-0 text-muted">Worked on projects for</p>
        <motion.ul
          className="flex flex-wrap items-center gap-x-8 gap-y-3 md:gap-x-10"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
        >
          {organisations.map((o) => (
            <motion.li
              key={o}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              className="text-[1.05rem] font-extrabold tracking-tight text-ink/55 transition-colors duration-300 hover:text-navy md:text-lg"
            >
              {o}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
