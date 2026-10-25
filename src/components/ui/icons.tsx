import type { SVGProps } from "react";
import type { Capability } from "@/data/resume";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "square" as const,
  "aria-hidden": true,
  ...props,
});

export const ArrowUpRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Copy = (p: P) => (
  <svg {...base(p)}>
    <path d="M9 9h11v11H9zM5 15H4V4h11v1" />
  </svg>
);

export const Check = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);

/* ---------- Capability icons ---------- */

const cap: Record<Capability["icon"], string[]> = {
  coordination: [
    "M60 22a10 10 0 1 0 0 .01",
    "M24 84a10 10 0 1 0 0 .01",
    "M96 84a10 10 0 1 0 0 .01",
    "M60 56a8 8 0 1 0 0 .01",
    "M60 32v16M30 76l23-15M90 76 67 61",
    "M34 92h52",
  ],
  billing: [
    "M28 14h48l16 16v76H28z",
    "M76 14v16h16",
    "M40 44h40M40 56h40M40 68h24",
    "M62 92l8 8 16-18",
  ],
  survey: [
    "M12 70h96v22H12z",
    "M22 70v8M32 70v12M42 70v8M52 70v12M62 70v8M72 70v12M82 70v8M92 70v12M102 70v8",
    "M12 40h96M12 34v12M108 34v12",
    "M18 40l6-4M18 40l6 4M102 40l-6-4M102 40l-6 4",
  ],
  quality: [
    "M10 56h100v20H10z",
    "M48 60h24v12H48z",
    "M60 60v12",
    "M22 66h14M84 66h14",
    "M10 96h100M22 96l-8 10M42 96l-8 10M62 96l-8 10M82 96l-8 10M102 96l-8 10",
  ],
  planning: [
    "M14 18v88h96",
    "M24 30h40M40 46h44M56 62h36M30 78h28M66 94h34",
    "M88 18v84",
  ],
  team: [
    "M36 46a12 12 0 1 0 0 .01M84 46a12 12 0 1 0 0 .01M60 36a13 13 0 1 0 0 .01",
    "M16 98c0-16 9-26 20-26s20 10 20 26",
    "M64 98c0-16 9-26 20-26s20 10 20 26",
    "M38 92c0-18 10-30 22-30s22 12 22 30",
    "M46 30c0-8 6-14 14-14s14 6 14 14H46z",
  ],
};

export function CapabilityIcon({ name, className }: { name: Capability["icon"]; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth={4.5} strokeLinejoin="round" aria-hidden>
      <g>
        {cap[name].map((d, i) => (
          <path key={i} d={d} pathLength={1} />
        ))}
      </g>
    </svg>
  );
}
