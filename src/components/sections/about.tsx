import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { education, profile } from "@/data/resume";
import { Progression } from "./progression";

const facts = [
  { k: "Based in", v: profile.location },
  { k: "Experience", v: "25+ years · 11 firms" },
  { k: "Qualification", v: `${education[0].title} (${education[0].result.split(" · ")[1]})` },
  { k: "Languages", v: profile.languages.join(", ") },
];

export function About() {
  return (
    <section id="about" className="border-t border-line bg-surface py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="About" title="From site engineer to project manager, on Mumbai's building sites since 2001" />
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5 text-base leading-[1.75] text-body sm:text-[1.05rem]">
              {profile.about.map((p, i) => (
                <Reveal key={p} delay={0.1 + i * 0.1}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2} variant="scale">
              <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
                {facts.map((f) => (
                  <div key={f.k} className="bg-canvas px-5 py-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{f.k}</dt>
                    <dd className="mt-1 font-semibold text-ink">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-line bg-canvas p-6 sm:p-8 md:mt-20 lg:p-10">
          <Reveal>
            <h3 className="text-lg font-bold">Career progression</h3>
          </Reveal>
          <Progression />
        </div>
      </div>
    </section>
  );
}
