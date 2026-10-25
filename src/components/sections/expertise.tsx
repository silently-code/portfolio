import { DrawOnView } from "@/components/ui/draw-on-view";
import { CapabilityIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { capabilities } from "@/data/resume";

export function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Expertise"
          title="What I take responsibility for on a project"
          lead="The work that keeps a building on schedule, within budget and true to the drawings, from the first pour to the final bill."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.1} variant="scale" className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_20px_40px_-24px_rgb(20_33_47/0.3)] md:p-7">
                <DrawOnView className="grid h-14 w-14 place-items-center rounded-lg bg-sand text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <CapabilityIcon name={c.icon} className="h-10 w-10" />
                </DrawOnView>
                <h3 className="mt-6 text-lg font-bold">{c.title}</h3>
                <p className="mt-2.5 flex-1 leading-relaxed text-body">{c.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.outputs.map((o) => (
                    <li key={o} className="rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-muted ring-1 ring-line">
                      {o}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
