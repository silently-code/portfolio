"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** Current year, filled in on the client (no Date during prerender). */
export function CurrentYear({ fallback }: { fallback: number }) {
  const year = useSyncExternalStore(
    noop,
    () => new Date().getFullYear(),
    () => fallback,
  );
  return <>{year}</>;
}
