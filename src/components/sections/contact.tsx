import { CopyButton } from "@/components/ui/copy-button";
import { CurrentYear } from "@/components/ui/current-year";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { nav, profile } from "@/data/resume";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "WhatsApp", value: "Send a message", href: profile.whatsappHref, external: true },
  { label: "Location", value: profile.location },
];

export function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden className="bg-blueprint-light absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

      <div className="container-page relative py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeader
              tone="dark"
              eyebrow="Contact"
              title="Let's talk about your next project"
              lead={`${profile.availability} The quickest way to reach me is by phone or WhatsApp; email works too.`}
            />
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap">
                <a
                  href={profile.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-copper-light px-5 py-3 text-[0.95rem] font-semibold text-navy-deep transition-colors hover:bg-[#ebb878]"
                >
                  Call {profile.phone}
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:border-white/50"
                >
                  Send an email
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={0.15} variant="right">
            <dl className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
              {channels.map((c) => (
                <div key={c.label} className="flex flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-6">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-mist">{c.label}</dt>
                    <dd className="mt-1 break-all text-[1.05rem] font-semibold min-[400px]:break-normal">
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.external ? "_blank" : undefined}
                          rel={c.external ? "noopener noreferrer" : undefined}
                          className="group -my-2.5 inline-flex min-h-11 items-center gap-1.5 py-2.5 transition-colors hover:text-copper-light"
                        >
                          {c.value}
                          <ArrowUpRight className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                        </a>
                      ) : (
                        c.value
                      )}
                    </dd>
                  </div>
                  {c.copy && <CopyButton value={profile.email} />}
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-deep">
        <div className="container-page flex flex-col gap-5 py-8 text-sm text-mist md:flex-row md:items-center md:justify-between">
          <p>
            © <CurrentYear fallback={2026} /> {profile.name} · {profile.title}, Mumbai
          </p>
          <nav aria-label="Footer">
            <ul className="-my-3 flex flex-wrap gap-x-6">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="inline-flex min-h-11 items-center transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#top" className="inline-flex min-h-11 items-center font-semibold text-white transition-colors hover:text-copper-light">
                  Back to top ↑
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
