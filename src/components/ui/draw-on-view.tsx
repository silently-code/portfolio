"use client";

import { useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Traces the SVG line drawing inside it whenever it scrolls into view, and un-draws it when it leaves. */
export function DrawOnView({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  return (
    <div ref={ref} className={cn("draw-on-view", inView && "is-drawn", className)}>
      {children}
    </div>
  );
}
