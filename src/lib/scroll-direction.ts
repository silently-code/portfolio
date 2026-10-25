"use client";

// One shared, passive scroll listener that remembers which way the page last moved.
// Reveal uses it so content leaves and re-enters from the side the page is scrolling toward.
let direction: "down" | "up" = "down";
let lastY = 0;
let tracking = false;

export function trackScrollDirection() {
  if (tracking || typeof window === "undefined") return;
  tracking = true;
  lastY = window.scrollY;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 2) return;
      direction = y > lastY ? "down" : "up";
      lastY = y;
    },
    { passive: true },
  );
}

export const getScrollDirection = () => direction;
