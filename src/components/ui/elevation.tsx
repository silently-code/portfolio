import type { Project } from "@/data/resume";
import { buildElevation, VB } from "@/lib/drawing";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  className?: string;
};

/** Schematic line elevation of a project, generated from its floor configuration. */
export function Elevation({ project, className }: Props) {
  const d = buildElevation(project);
  const layer = (name: keyof typeof d, props: React.SVGProps<SVGGElement>) => (
    <g {...props}>
      {(d[name] as string[]).map((path, i) => (
        <path key={i} d={path} pathLength={1} />
      ))}
    </g>
  );

  return (
    <svg
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      className={cn("h-full w-full text-navy", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      role="img"
      aria-label={`Schematic elevation of ${project.name}: ${project.config}`}
    >
      {layer("ground", { strokeWidth: 1, opacity: 0.45 })}
      {layer("below", { strokeWidth: 1, opacity: 0.4 })}
      {layer("frame", { strokeWidth: 1.25 })}
      {layer("slabs", { strokeWidth: 1, opacity: 0.85 })}
      {layer("infill", { strokeWidth: 0.7, opacity: 0.4 })}
      {layer("top", { strokeWidth: 1, className: "text-copper" })}
      {layer("dims", { strokeWidth: 0.8, className: "text-copper" })}
      <g stroke="none" fill="currentColor" fontFamily="var(--font-manrope)" fontWeight={700} fontSize={8} letterSpacing="0.06em">
        {d.labels.map((l, i) => (
          <text
            key={i}
            x={l.x}
            y={l.y}
            textAnchor={l.anchor ?? "start"}
            transform={l.rotate ? `rotate(-90 ${l.x} ${l.y})` : undefined}
            className={l.accent ? "fill-copper-ink" : "fill-muted"}
          >
            {l.text}
          </text>
        ))}
      </g>
    </svg>
  );
}
