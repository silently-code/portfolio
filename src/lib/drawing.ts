import type { Project } from "@/data/resume";

// Procedural "schematic elevation" generator.
// Each project in resume.ts describes its blocks (floors, basements, podium...) and this turns
// them into SVG path strings, grouped in layers so they can be drawn in construction order.

export const VB = { w: 480, h: 300 } as const;

const GROUND = 246;
const TOP = 24;
const LEFT = 36;
const RIGHT = 74;

export type Label = {
  x: number;
  y: number;
  text: string;
  anchor?: "start" | "middle" | "end";
  rotate?: boolean;
  accent?: boolean;
};

export type Elevation = {
  ground: string[];
  below: string[];
  frame: string[];
  slabs: string[];
  infill: string[];
  top: string[];
  dims: string[];
  labels: Label[];
};

const r = (n: number) => Math.round(n * 10) / 10;

/** Dashed line built from short sub-paths. */
export function dashed(ax: number, ay: number, bx: number, by: number, dash = 4, gap = 3) {
  const len = Math.hypot(bx - ax, by - ay);
  const step = dash + gap;
  const n = Math.max(1, Math.floor(len / step));
  let d = "";
  for (let i = 0; i < n; i++) {
    const t0 = (i * step) / len;
    const t1 = Math.min(1, (i * step + dash) / len);
    d += `M${r(ax + (bx - ax) * t0)} ${r(ay + (by - ay) * t0)}L${r(ax + (bx - ax) * t1)} ${r(ay + (by - ay) * t1)}`;
  }
  return d;
}

function dashedRect(x0: number, y0: number, x1: number, y1: number) {
  return dashed(x0, y0, x1, y0) + dashed(x1, y0, x1, y1) + dashed(x1, y1, x0, y1) + dashed(x0, y1, x0, y0);
}

export function buildElevation(p: Project): Elevation {
  const out: Elevation = { ground: [], below: [], frame: [], slabs: [], infill: [], top: [], dims: [], labels: [] };

  const gapU = 0.6;
  const blocksU = p.blocks.reduce((s, b) => s + b.width, 0) + gapU * (p.blocks.length - 1);
  const overU = p.podium ? 0.9 : 0;
  const unit = (VB.w - LEFT - RIGHT) / (blocksU + overU * 2);
  const podF = p.podium?.floors ?? 0;

  const heightUnits = (b: (typeof p.blocks)[number]) =>
    b.kind === "shed" ? 2.6 : b.floors + (b.terrace ? 0.4 : 0) + (b.floors > 6 ? 0.8 : 0);
  const tallest = Math.max(...p.blocks.map(heightUnits));
  const fh = Math.min(30, (GROUND - TOP - 16) / (tallest + podF));
  const baseY = GROUND - podF * fh;
  const bh = Math.min(fh, 11);

  // Horizontal extents of each block
  let cursor = LEFT + overU * unit;
  const ranges = p.blocks.map((b) => {
    const x0 = cursor;
    const x1 = cursor + b.width * unit;
    cursor = x1 + gapU * unit;
    return [x0, x1] as const;
  });

  // Ground line + earth hatch (left open under basements)
  out.ground.push(`M8 ${GROUND}H${VB.w - 8}`);
  const underBasement = (hx: number) =>
    p.blocks.some((b, i) => (b.basements ?? 0) > 0 && hx > ranges[i][0] - 8 && hx < ranges[i][1] + 12);
  let hatch = "";
  for (let hx = 16; hx < VB.w - 10; hx += 9) if (!underBasement(hx)) hatch += `M${hx} ${GROUND + 2}l-6 7`;
  out.ground.push(hatch);
  out.labels.push({ x: 10, y: GROUND - 5, text: "G.L." });

  let topMost = baseY;

  // Podium
  if (p.podium) {
    const px0 = LEFT;
    const px1 = VB.w - RIGHT;
    out.frame.push(`M${px0} ${GROUND}V${r(baseY)}M${px1} ${GROUND}V${r(baseY)}`);
    const n = Math.max(2, Math.round((px1 - px0) / 26));
    let cols = "";
    for (let i = 1; i < n; i++) {
      const cx = r(px0 + ((px1 - px0) * i) / n);
      cols += `M${cx} ${GROUND}V${r(baseY)}`;
    }
    out.infill.push(cols);
    for (let k = 1; k < podF; k++) out.slabs.push(`M${px0 - 2} ${r(GROUND - k * fh)}H${px1 + 2}`);
    out.slabs.push(`M${px0 - 3} ${r(baseY)}H${px1 + 3}`);

    if (p.podium.pool) {
      const span = overU * unit;
      const pw = span * 0.8;
      const pxs = px1 - span + (span - pw) / 2;
      const depth = Math.min(fh * 0.5, 8);
      out.top.push(`M${r(pxs)} ${r(baseY)}v${r(depth)}h${r(pw)}v${r(-depth)}`);
      let wave = `M${r(pxs + 2)} ${r(baseY + depth * 0.45)}`;
      const waves = Math.max(2, Math.floor((pw - 4) / 6));
      for (let i = 0; i < waves; i++) wave += `q1.5 -2 3 0t3 0`;
      out.top.push(wave);
    }
    if (p.podium.label) out.labels.push({ x: px0, y: GROUND + 22, text: p.podium.label });
  }

  let firstTower: { x0: number; floors: number } | null = null;

  p.blocks.forEach((b, i) => {
    const [x0, x1] = ranges[i];
    const w = x1 - x0;
    const mid = (x0 + x1) / 2;

    if (b.kind === "shed") {
      const eave = baseY - fh * 1.7;
      const ridge = eave - Math.min(w * 0.14, fh * 1.3);
      out.frame.push(`M${r(x0)} ${r(baseY)}V${r(eave)}M${r(x1)} ${r(baseY)}V${r(eave)}`);
      out.slabs.push(`M${r(x0 - 3)} ${r(eave + 3)}L${r(mid)} ${r(ridge)}L${r(x1 + 3)} ${r(eave + 3)}`);
      out.slabs.push(`M${r(x0)} ${r(eave)}H${r(x1)}`);
      // Truss web
      const panels = Math.max(4, Math.round(w / 16)) & ~1;
      let web = "";
      for (let k = 1; k < panels; k++) {
        const t = k / panels;
        const bx = x0 + w * t;
        const ty = t <= 0.5 ? eave - (eave - ridge) * (t / 0.5) : eave - (eave - ridge) * ((1 - t) / 0.5);
        const prev = x0 + w * ((k - 1) / panels);
        web += `M${r(bx)} ${r(eave)}V${r(ty)}M${r(prev)} ${r(eave)}L${r(bx)} ${r(ty)}`;
      }
      out.infill.push(web);
      // Rolling shutter + side louvres
      const dw = Math.min(w * 0.22, 26);
      const dh = Math.min(fh * 1.15, eave - baseY + fh * 1.7 - 4);
      let door = `M${r(mid - dw / 2)} ${r(baseY)}V${r(baseY - dh)}H${r(mid + dw / 2)}V${r(baseY)}`;
      for (let y = baseY - 4; y > baseY - dh; y -= 4) door += `M${r(mid - dw / 2)} ${r(y)}H${r(mid + dw / 2)}`;
      out.infill.push(door);
      topMost = Math.min(topMost, ridge);
      if (b.label) out.labels.push({ x: mid, y: ridge - 7, text: b.label, anchor: "middle" });
      return;
    }

    // Tower
    const top = baseY - b.floors * fh;
    const bays = Math.max(1, Math.round(w / 22));
    const bw = w / bays;

    let cols = `M${r(x0)} ${r(baseY)}V${r(top)}M${r(x1)} ${r(baseY)}V${r(top)}`;
    for (let k = 1; k < bays; k++) cols += `M${r(x0 + k * bw)} ${r(baseY)}V${r(top)}`;
    out.frame.push(cols);

    for (let f = 1; f <= b.floors; f++) out.slabs.push(`M${r(x0 - 2)} ${r(baseY - f * fh)}H${r(x1 + 2)}`);

    let win = "";
    for (let f = 0; f < b.floors; f++) {
      if (b.stilt && f === 0) continue;
      for (let k = 0; k < bays; k++) {
        const wx = x0 + k * bw + bw * 0.2;
        const ww = bw * 0.6;
        const wy = baseY - (f + 1) * fh + fh * 0.28;
        const wh = fh * 0.44;
        win += `M${r(wx)} ${r(wy)}h${r(ww)}v${r(wh)}h${r(-ww)}Z`;
      }
    }
    out.infill.push(win);

    if (b.stilt) {
      out.infill.push(`M${r(x0)} ${r(baseY)}L${r(x0 + bw)} ${r(baseY - fh)}M${r(x0 + bw)} ${r(baseY)}L${r(x0)} ${r(baseY - fh)}`);
      out.labels.push({ x: x1 + 4, y: baseY - fh * 0.35, text: "STILT" });
    }

    let crown = top;
    if (b.terrace) {
      const ph = fh * 0.4;
      out.top.push(`M${r(x0)} ${r(top)}V${r(top - ph)}H${r(x1)}V${r(top)}`);
      crown = top - ph;
      if (b.floors > 6) {
        const lw = Math.max(8, w * 0.3);
        const lh = fh * 0.8;
        out.top.push(`M${r(mid - lw / 2)} ${r(crown)}V${r(crown - lh)}H${r(mid + lw / 2)}V${r(crown)}`);
        crown -= lh;
      }
    }
    topMost = Math.min(topMost, crown);

    if (b.basements) {
      for (let k = 0; k < b.basements; k++) {
        out.below.push(dashedRect(x0 - 5, GROUND + k * bh + 1, x1 + 5, GROUND + (k + 1) * bh));
      }
      out.labels.push({ x: x1 + 8, y: GROUND + bh * b.basements - 2, text: b.basements > 1 ? `${b.basements}B` : "B" });
    }

    if (b.label) out.labels.push({ x: mid, y: crown - 6, text: b.label, anchor: "middle" });
    if (!firstTower && b.floors >= 10) firstTower = { x0, floors: b.floors };
  });

  // Level tags up the first tall tower
  if (firstTower) {
    const { x0, floors } = firstTower;
    for (let f = 5; f <= floors; f += 5) {
      const y = baseY - f * fh;
      out.dims.push(`M${r(x0 - 9)} ${r(y)}h5`);
      out.labels.push({ x: r(x0 - 11), y: r(y + 2.5), text: `L${String(f).padStart(2, "0")}`, anchor: "end" });
    }
  }

  // Overall dimension line
  const dx = VB.w - RIGHT + 30;
  const maxX = ranges[ranges.length - 1][1];
  out.dims.push(
    `M${r(maxX + 6)} ${r(topMost)}H${dx + 6}` +
      `M${dx} ${GROUND}V${r(topMost)}` +
      `M${dx - 4} ${GROUND + 4}l8 -8M${dx - 4} ${r(topMost + 4)}l8 -8`,
  );
  // Rotated beside the dimension line when it fits. Low buildings (e.g. a factory shed) skip it:
  // a horizontal label collided with the block labels, and the card text already states the configuration.
  if (p.config.length * 5.4 < GROUND - topMost - 10) {
    out.labels.push({ x: dx + 13, y: (GROUND + topMost) / 2, text: p.config, anchor: "middle", rotate: true, accent: true });
  }

  return out;
}
