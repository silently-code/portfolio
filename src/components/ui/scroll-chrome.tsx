"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useState } from "react";

/** Thin copper reading-progress bar along the top edge. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return <motion.div aria-hidden data-no-print style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-copper" />;
}

/**
 * Floating "back to top" button. Appears after the first screen and steps aside near the bottom,
 * where the footer has its own "Back to top" link (it was overlapping the footer links on phones).
 */
export function BackToTop() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => {
    const nearBottom = v + window.innerHeight > document.documentElement.scrollHeight - 220;
    setShow(v > 700 && !nearBottom);
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          data-no-print
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed z-40 grid h-12 w-12 place-items-center rounded-full bg-navy text-white shadow-[0_12px_28px_-10px_rgb(15_34_56/0.6)] transition-colors hover:bg-navy-soft"
          style={{
            right: "max(1.25rem, env(safe-area-inset-right))",
            bottom: "max(1.25rem, env(safe-area-inset-bottom))",
          }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
