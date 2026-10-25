import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { education, profile, skills, training } from "@/data/resume";

function Item({ year, title, org, meta }: { year: string; title: string; org: string; meta?: string }) {
  return (
    <li className="flex gap-5 border-t border-line py-5 first:border-t-0 first:pt-0">
      <span className="w-12 shrink-0 pt-0.5 text-sm font-bold tabular-nums text-copper-ink">{year}</span>
      <div>
        <p className="font-bold text-ink">{title}</p>
        <p className="mt-1 text-sm leading-snug text-muted">{org}</p>
        {meta && <p className="mt-2 inline-block rounded bg-sand px-2 py-0.5 text-xs font-semibold text-navy">{meta}</p>}
      </div>
    </li>
  );
}

export function Credentials() {
  return (
    <section id="education" className="border-t border-line bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Education & training" title="Qualified in civil engineering, trained on live sites" />

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <Reveal className="h-full" variant="scale">
            <div className="h-full rounded-xl border border-line bg-canvas p-6 md:p-7">
              <h3 className="text-lg font-bold">Education</h3>
              <ul className="mt-6">
                {education.map((e) => (
                  <Item key={e.title} year={e.year} title={e.title} org={e.org} meta={e.result} />
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={0.1} variant="scale">
            <div className="h-full rounded-xl border border-line bg-canvas p-6 md:p-7">
              <h3 className="text-lg font-bold">Training & certification</h3>
              <ul className="mt-6">
                {training.map((t) => (
                  <Item key={t.title} year={t.year} title={t.title} org={t.org} />
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="h-full md:col-span-2 lg:col-span-1" delay={0.2} variant="scale">
            <div className="h-full rounded-xl border border-line bg-canvas p-6 md:p-7">
              <h3 className="text-lg font-bold">Skills</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li key={s} className="rounded-md bg-surface px-3 py-1.5 text-sm font-semibold text-body ring-1 ring-line">
                    {s}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-lg font-bold">Languages</h3>
              <p className="mt-2 text-body">{profile.languages.join(", ")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
