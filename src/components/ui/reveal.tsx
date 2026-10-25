"use client";

import { motion, useAnimate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { getScrollDirection, trackScrollDirection } from "@/lib/scroll-direction";

type Variant = "up" | "left" | "right" | "scale" | "fade";

const TRAVEL = 32;
const ease = [0.22, 1, 0.36, 1] as const;
const shown = { opacity: 1, x: 0, y: 0, scale: 1 };

/** Off-screen pose. `side` is where the element sits relative to the viewport. */
function hidden(variant: Variant, side: "below" | "above") {
  const y = side === "below" ? TRAVEL : -TRAVEL;
  switch (variant) {
    case "left":
      return { opacity: 0, x: -40, y: 0, scale: 1 };
    case "right":
      return { opacity: 0, x: 40, y: 0, scale: 1 };
    case "scale":
      return { opacity: 0, x: 0, y: y / 2, scale: 0.94 };
    case "fade":
      return { opacity: 0, x: 0, y: 0, scale: 1 };
    default:
      return { opacity: 0, x: 0, y, scale: 1 };
  }
}

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  /** false = rendered visible on first paint (used in the hero); it still animates on later re-entry. */
  appear?: boolean;
};

/**
 * Animates content in every time it scrolls into view, and out again when it leaves,
 * in both scroll directions. Scrolling down, things rise from below; scrolling up, they drop in from above.
 */
export function Reveal({ children, className, delay = 0, variant = "up", appear = true }: Props) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { amount: 0.15 });
  const reduce = useReducedMotion();
  // Only animate out after the element has been seen once (prevents hiding hero content on mount)
  const hasShown = useRef(false);

  useEffect(() => trackScrollDirection(), []);

  useEffect(() => {
    const el = scope.current;
    if (!el) return;
    if (inView) {
      hasShown.current = true;
      animate(el, shown, reduce ? { duration: 0 } : { duration: 0.8, delay, ease });
    } else if (hasShown.current && !reduce) {
      // Leave toward the edge it is exiting through, so re-entry comes from the same side.
      const side = getScrollDirection() === "down" ? "above" : "below";
      animate(el, hidden(variant, side), { duration: 0.4, ease: "easeIn" });
    }
  }, [inView, reduce, delay, variant, animate, scope]);

  return (
    <motion.div ref={scope} className={className} initial={appear ? hidden(variant, "below") : false}>
      {children}
    </motion.div>
  );
}
