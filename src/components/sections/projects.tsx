import Image from "next/image";
import { DrawOnView } from "@/components/ui/draw-on-view";
import { Elevation } from "@/components/ui/elevation";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/data/resume";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Projects"
          title="Eleven projects, from factory sheds to 25-storey towers"
          lead="Residential, commercial and industrial buildings across Mumbai, Thane, Virar, Boisar and Dolvi. Each drawing is a schematic elevation based on the building's configuration (not to scale)."
        />

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.12} variant="up" className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgb(20_33_47/0.35)]">
                {p.photo ? (
                  <div className="relative aspect-[2/1] overflow-hidden border-b border-line bg-sand">
                    <Image
                      src={p.photo.src}
                      alt={p.photo.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
                    />
                    {p.photo.credit && (
                      <span className="absolute bottom-2 right-2 rounded bg-navy-deep/70 px-2 py-0.5 text-[0.65rem] font-semibold text-white/90 backdrop-blur">
                        {p.photo.credit}
                      </span>
                    )}
                  </div>
                ) : (
                  <DrawOnView className="bg-blueprint relative aspect-[2/1] overflow-hidden border-b border-line bg-sand/50 px-3 pt-3 sm:px-4">
                    <Elevation project={p} className="transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]" />
                  </DrawOnView>
                )}

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-start min-[420px]:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold sm:text-xl">{p.name}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {p.location} · <span className="font-semibold text-body">{p.year}</span>
                      </p>
                    </div>
                    <span className="self-start rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-body ring-1 ring-line min-[420px]:shrink-0">
                      {p.type}
                    </span>
                  </div>

                  <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-5 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Configuration</dt>
                      <dd className="mt-0.5 font-semibold text-ink">{p.config}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{p.area ? "Area" : "Firm"}</dt>
                      <dd className="mt-0.5 font-semibold text-ink">{p.area ?? p.firm}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">My role</dt>
                      <dd className="mt-0.5 font-semibold text-ink">{p.role}</dd>
                    </div>
                    {p.area && (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Firm</dt>
                        <dd className="mt-0.5 font-semibold text-ink">{p.firm}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
