import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { experience, formatDuration, formatMonth } from "@/data/resume";
import { TimelineDot, TimelineTrack } from "./timeline-track";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Experience"
          title="Ten firms over 25 years"
          lead="Every role, newest first, with the project delivered and what I was responsible for."
        />

        <TimelineTrack>
          <ol className="mt-12 md:mt-14">
            {experience.map((e) => {
              const current = !e.end;
              const duration = formatDuration(e);
              const period = `${formatMonth(e.start)} – ${e.end ? formatMonth(e.end) : "Present"}`;
              return (
                <li key={e.id} className="grid md:grid-cols-[10rem_1fr] lg:grid-cols-[13rem_1fr]">
                  {/* Date column (tablet and up) */}
                  <Reveal variant="fade" className="hidden pr-6 pt-6 text-right md:block lg:pr-8">
                    <p className="text-sm font-bold text-ink">{period}</p>
                    <p className="mt-1 text-sm text-muted">{current ? "Current role" : duration}</p>
                  </Reveal>

                  <div className="relative pb-8 pl-6 sm:pl-8 md:pb-10 md:pl-10">
                    <TimelineDot current={current} />
                    <Reveal variant="right">
                      <article className="rounded-xl border border-line bg-canvas p-5 transition-shadow duration-300 hover:shadow-[0_20px_40px_-28px_rgb(20_33_47/0.35)] sm:p-6 md:p-7">
                        <p className="text-sm font-semibold text-muted md:hidden">
                          {period}
                          {duration && ` · ${duration}`}
                        </p>
                        <div className="mt-2 flex flex-wrap items-start justify-between gap-x-6 gap-y-2 md:mt-0">
                          <div className="min-w-0">
                            <h3 className="text-lg font-bold sm:text-xl">{e.role}</h3>
                            <p className="mt-1 font-semibold text-copper-ink">
                              {e.company} <span className="font-medium text-muted">· {e.location}</span>
                            </p>
                          </div>
                          {current && (
                            <span className="rounded-full bg-copper/10 px-3 py-1 text-xs font-bold text-copper-ink ring-1 ring-copper/25">Current</span>
                          )}
                        </div>

                        <div className="mt-5 rounded-lg border border-line bg-surface px-4 py-3">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted">Project</span>
                            <span className="font-bold text-ink">{e.project}</span>
                            {e.config.map((c) => (
                              <span key={c} className="rounded bg-sand px-2 py-0.5 text-xs font-semibold text-navy">
                                {c}
                              </span>
                            ))}
                          </div>
                          <p className="mt-1.5 text-sm text-muted">{e.projectNote}</p>
                        </div>

                        <ul className="mt-5 grid gap-x-8 gap-y-2.5 lg:grid-cols-2">
                          {e.points.map((p) => (
                            <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-body">
                              <span aria-hidden className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </TimelineTrack>
      </div>
    </section>
  );
}
