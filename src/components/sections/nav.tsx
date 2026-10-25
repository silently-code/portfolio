"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { nav, profile } from "@/data/resume";
import { cn } from "@/lib/utils";

const subscribeScroll = (cb: () => void) => {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
};

// "#top" (the hero) is observed too, so no link stays highlighted when back at the top
const sections = ["#top", ...nav.map((n) => n.href), "#contact"];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 8,
    () => false,
  );

  // Highlight the section currently in the middle of the screen
  useEffect(() => {
    const els = sections.map((s) => document.querySelector(s)).filter((el): el is Element => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mobile menu links: close, then scroll explicitly (honours reduced motion).
  // NOTE: the menu must NOT animate `height` — Motion's height:auto exit animation cancels the
  // window's smooth scroll in Chromium (hash changed but the page stayed at the top). Fade + slide only.
  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelector(href)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    history.pushState(null, "", href);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || open ? "border-line bg-canvas/90 shadow-[0_1px_12px_rgb(20_33_47/0.05)] backdrop-blur-md" : "border-transparent bg-canvas",
      )}
    >
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-navy focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-navy text-[0.8rem] font-extrabold tracking-wide text-white">
            {profile.initials}
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[0.95rem] font-bold text-ink">{profile.name}</span>
            <span className="block truncate text-xs text-muted">{profile.title}, Mumbai</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.9rem] font-semibold">
            {nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative py-1 transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-copper after:transition-transform after:duration-300 hover:after:scale-x-100",
                      isActive ? "text-ink after:scale-x-100" : "text-body after:scale-x-0",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-soft sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-md border border-line bg-surface lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span className={cn("absolute left-0 h-0.5 w-full rounded bg-ink transition-transform duration-300", open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0")} />
              <span className={cn("absolute left-0 h-0.5 w-full rounded bg-ink transition-transform duration-300", open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0")} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          // Overlay below the header (absolute), so opening/closing never shifts the page.
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="absolute inset-x-0 top-full overflow-hidden border-b border-t border-line bg-canvas shadow-[0_24px_40px_-24px_rgb(20_33_47/0.35)] lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="container-page max-h-[calc(100svh-4.5rem)] overflow-y-auto py-3">
              {[...nav, { label: "Contact", href: "#contact" }].map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.04 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => goTo(e, item.href)}
                    className={cn(
                      "flex items-center justify-between rounded-md px-3 py-3.5 text-base font-semibold hover:bg-sand",
                      active === item.href ? "bg-sand text-ink" : "text-body",
                    )}
                  >
                    {item.label}
                    <span aria-hidden className="text-muted">
                      →
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
