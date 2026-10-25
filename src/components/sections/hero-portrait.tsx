"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import portrait from "@/assets/portrait-cutout.png";
import { profile } from "@/data/resume";

/** Portrait card with a gentle parallax: the photo drifts down and the project card up as you scroll. */
export function HeroPortrait() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 48]);
  const cardY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : -36]);

  return (
    <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-[22rem] md:ml-auto md:mr-0 lg:max-w-[23rem]">
      <motion.div style={{ y: photoY }} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy shadow-[0_30px_60px_-25px_rgb(15_34_56/0.45)]">
        <div aria-hidden className="bg-blueprint-light absolute inset-0" />
        <Image
          src={portrait}
          alt={`Portrait of ${profile.name}`}
          fill
          preload
          placeholder="blur"
          sizes="(min-width: 1024px) 368px, (min-width: 640px) 352px, 304px"
          className="object-cover object-top"
        />
        <p className="absolute right-3 top-3 rounded-md bg-navy-deep/70 px-2.5 py-1 text-[0.7rem] font-semibold text-white/90 backdrop-blur sm:right-4 sm:top-4">
          On site since 2001
        </p>
      </motion.div>

      <motion.div
        style={{ y: cardY }}
        className="absolute -bottom-8 left-3 w-[min(15.5rem,calc(100%-1.5rem))] rounded-xl border border-line bg-surface p-4 shadow-[0_18px_40px_-20px_rgb(20_33_47/0.35)] sm:-left-10 md:-left-6 lg:-left-10"
      >
        <p className="eyebrow text-[0.65rem] text-copper-ink">Current project</p>
        <p className="mt-1.5 font-bold text-ink">{profile.current.project}</p>
        <p className="mt-1 text-[0.8rem] leading-snug text-muted">{profile.current.projectDetail}</p>
      </motion.div>
    </div>
  );
}
