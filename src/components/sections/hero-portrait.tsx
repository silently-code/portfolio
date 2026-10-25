"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import portrait from "@/assets/portrait-cutout.png";
import { profile } from "@/data/resume";

/**
 * Portrait with its labels kept OFF the photo:
 * "On site since 2001" sits above the photo (right), the current-project card below it (left).
 * Gentle parallax on the photo only.
 */
export function HeroPortrait() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 32]);

  return (
    <div className="mx-auto flex w-full max-w-[19rem] flex-col sm:max-w-[22rem] md:ml-auto md:mr-0 lg:max-w-[23rem]">
      <p className="mb-3 inline-flex items-center gap-2 self-end rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-body shadow-sm">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-copper" />
        On site since 2001
      </p>

      <motion.div style={{ y: photoY }} className="relative z-0 aspect-[4/5] overflow-hidden rounded-2xl bg-navy shadow-[0_30px_60px_-25px_rgb(15_34_56/0.45)]">
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
      </motion.div>

      <div className="relative z-10 mt-4 w-[min(17rem,100%)] self-start rounded-xl border border-line bg-surface p-4 shadow-[0_18px_40px_-20px_rgb(20_33_47/0.35)]">
        <p className="eyebrow text-[0.65rem] text-copper-ink">Current project</p>
        <p className="mt-1.5 font-bold leading-snug text-ink">{profile.current.project}</p>
        <p className="mt-1 text-[0.8rem] leading-snug text-muted">
          {profile.current.projectDetail} · {profile.current.company}
        </p>
      </div>
    </div>
  );
}
