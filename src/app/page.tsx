import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Credentials } from "@/components/sections/credentials";
import { Experience } from "@/components/sections/experience";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { Nav } from "@/components/sections/nav";
import { Organisations } from "@/components/sections/organisations";
import { Projects } from "@/components/sections/projects";
import { education, profile, skills } from "@/data/resume";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.current.role,
  worksFor: { "@type": "Organization", name: profile.current.company },
  address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
  email: `mailto:${profile.email}`,
  knowsLanguage: profile.languages,
  knowsAbout: skills,
  alumniOf: { "@type": "EducationalOrganization", name: education[0].org },
  hasOccupation: {
    "@type": "Occupation",
    name: "Civil Engineer",
    occupationLocation: { "@type": "City", name: "Mumbai" },
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Organisations />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Credentials />
      </main>
      <Contact />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
