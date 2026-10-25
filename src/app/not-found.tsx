import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/resume";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="relative grid min-h-[100svh] place-items-center overflow-hidden px-5">
      <div aria-hidden className="bg-blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="relative max-w-md text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-navy text-sm font-extrabold tracking-wide text-white">
          {profile.initials}
        </span>
        <p className="eyebrow mt-8 text-copper-ink">Error 404</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">This page isn&apos;t on the drawings</h1>
        <p className="mt-4 leading-relaxed text-muted">The link may be broken or the page may have moved. Everything about {profile.name} is on the main page.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-navy-soft"
        >
          ← Back to the portfolio
        </Link>
      </div>
    </main>
  );
}
