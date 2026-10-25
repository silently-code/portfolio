import type { ReactNode } from "react";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { profile, stats } from "@/data/resume";
import { HeroPortrait } from "./hero-portrait";

/**
 * First paint: a CSS fade-up (works before JS loads).
 * Afterwards: Reveal (appear={false}) animates the block out/in whenever it leaves and re-enters the screen.
 */
function Block({ delay, className, children, variant }: { delay: number; className?: string; children: ReactNode; variant?: "up" | "scale" }) {
  return (
    <div className={`animate-fade-up ${className ?? ""}`} style={{ animationDelay: `${delay}ms` }}>
      <Reveal appear={false} delay={delay / 1000} variant={variant}>
        {children}
      </Reveal>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Faint grid that fades out toward the bottom */}
      <div
        aria-hidden
        className="bg-blueprint absolute inset-0 [mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_85%)]"
      />

      <div className="container-page relative grid items-center gap-16 pb-24 pt-10 sm:pt-14 md:grid-cols-12 md:gap-8 md:pt-16 lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="md:col-span-7">
          <Block delay={0}>
            <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.8rem] font-semibold text-body shadow-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper opacity-50 [animation-duration:2.4s]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-copper" />
              </span>
              <span>
                Currently {profile.current.role}, {profile.current.company}
              </span>
            </p>
          </Block>

          <Block delay={80} className="mt-6">
            <h1 className="text-[clamp(2.25rem,11vw,2.75rem)] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-6xl md:text-[3.4rem] lg:text-[clamp(3.75rem,5.4vw,4.6rem)]">
              {profile.name}
            </h1>
          </Block>

          <Block delay={160} className="mt-5">
            <p className="text-[1.05rem] font-semibold text-copper-ink sm:text-lg md:text-xl">{profile.headline}</p>
          </Block>

          <Block delay={220} className="mt-5">
            <p className="max-w-xl text-base leading-relaxed text-body sm:text-[1.05rem] md:text-lg">{profile.intro}</p>
          </Block>

          <Block delay={280} className="mt-9">
            <div className="flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap min-[400px]:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-[0.95rem] font-semibold text-white shadow-sm transition-colors hover:bg-navy-soft"
              >
                Get in touch
              </a>
<a
                href={profile.resume}
                download="Vijay-Kumar-B-Singh-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-navy/25 bg-surface px-5 py-3 text-[0.95rem] font-semibold text-navy transition-colors hover:border-navy hover:bg-sand"
              >
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
                Download resume
              </a>
              <a
                href="#experience"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-[0.95rem] font-semibold text-ink transition-colors hover:border-navy/30"
              >
                View experience
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </Block>

          <Block delay={360} className="mt-12 sm:mt-14">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                // Label first in the DOM (dt → dd, read once by screen readers), number shown first visually
                <div key={s.label} className="flex flex-col-reverse justify-end">
                  <dt className="mt-2 max-w-[10rem] text-[0.85rem] leading-snug text-muted">{s.label}</dt>
                  <dd>
                    <CountUp value={s.value} className="block text-[clamp(1.75rem,7vw,2rem)] font-extrabold leading-none tracking-tight text-navy tabular-nums" />
                  </dd>
                </div>
              ))}
            </dl>
          </Block>
        </div>

        <Block delay={200} className="md:col-span-5" variant="scale">
          <HeroPortrait />
        </Block>
      </div>
    </section>
  );
}
