"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

/** Wraps the experience list; a copper line fills the timeline as you read down it. */
export function TimelineTrack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className="relative">
      <span aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-line md:left-[10rem] lg:left-[13rem]" />
      <motion.span aria-hidden style={{ scaleY }} className="absolute bottom-0 left-0 top-0 w-px origin-top bg-copper md:left-[10rem] lg:left-[13rem]" />
      {children}
    </div>
  );
}

/** Timeline marker that fills in when its role scrolls into view. */
export function TimelineDot({ current }: { current: boolean }) {
  return (
    <motion.span
      aria-hidden
      className="absolute -left-[6px] top-7 h-[13px] w-[13px] rounded-full border-[3px] border-copper"
      initial={{ scale: 0.4, backgroundColor: "#ffffff" }}
      whileInView={{ scale: 1, backgroundColor: current ? "#b8742a" : "#ffffff" }}
      viewport={{ amount: 1, margin: "0px 0px -20% 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
