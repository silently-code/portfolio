"use client";

import { useState } from "react";
import { Check, Copy } from "@/components/ui/icons";

export function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex h-10 items-center gap-1.5 rounded-md border border-white/15 px-3 text-xs font-semibold text-mist transition-colors hover:border-white/40 hover:text-white"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-copper-light" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : label}
    </button>
  );
}
