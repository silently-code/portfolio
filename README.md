# Vijay Kumar B. Singh — Civil Engineer Portfolio

A personal portfolio site for **Vijay Kumar B. Singh**, a civil engineer with 25 years on Mumbai construction sites. His work covers project management, PMC, R.A. bill certification, quantity surveying and quality control on residential towers, commercial complexes and industrial projects.

The site is written for three kinds of reader: **civil engineers**, **project managers** and **company leadership**. It is calm, clean and easy to scan:
- The key facts are on the first screen.
- A career progression strip shows growth from site engineer to assistant project manager.
- Each project includes a schematic elevation drawing generated from the building's real floor configuration (B+G+15+T, Stilt + 2 Podiums + 12, …).

---

## Tech Stack

| Technology | Version | Used for | Why it was chosen |
|---|---|---|---|
| **Next.js** (App Router) | 16.4.2 | Framework, metadata, image and font optimisation | The page is prerendered as fully static HTML, which makes it fast, SEO-friendly and cheap to host. `next/image` and `next/font` handle image sizing and self-hosted fonts automatically. |
| **React** | 19.3 | UI components | Each section is a self-contained component, so it's easy to change or reorder. |
| **TypeScript** | 5.9 | Type safety | The resume data is typed, so a missing field or typo fails at build time instead of on the live site. |
| **Tailwind CSS** | 4.3 | Styling | The colour palette, fonts and spacing are defined once in a `@theme` block. Utility classes keep styles next to the markup, and the shipped CSS contains only what is used. |
| **Motion** (formerly Framer Motion) | 14 | Scroll animations, mobile menu | Light, declarative animation with built-in scroll tracking (`whileInView`, `useScroll`). It respects the visitor's reduced-motion setting automatically. |
| **Manrope** (via `next/font`) | — | All typography | A clean, highly legible sans-serif with clear numerals for the stats. It is self-hosted, so there are no requests to Google. |
| **Custom SVG** | — | Project elevation drawings, icons | The drawings are generated in code (`src/lib/drawing.ts`) from each project's floor data, so they stay accurate and need no image files. |
| **Vercel** | — | Hosting (recommended) | Zero-configuration Next.js hosting with a free tier, HTTPS and custom domains. |

### Design

- **Palette:**
  - Warm white `#f7f5f1` background
  - Deep navy `#16304d` for headings, buttons and the contact section
  - Copper `#b8742a` as a restrained accent
  - Every text colour meets WCAG AA contrast.
- **Layout:** a centred 1200px container (wider on large monitors), generous white space, and cards with soft borders.

### Scroll animations

Animations play **in both directions**, every time. Scrolling down, content rises in from below and drifts out at the top. Scrolling back up, it drops in from above and drifts out at the bottom. Each animation is short (under 2 seconds), and none of them take over the page.

- **Section headings:** the copper rule draws in, then the eyebrow, title and lead rise one after another.
- **Content:** cards and paragraphs fade and rise into place, staggered across grids. Timeline cards slide in from the right.
- **Key figures:** the hero numbers (25+, 10, 8.24 L, 25) count up.
- **Career progression:** the connecting line draws across (down on phones) and each step follows in turn.
- **Experience timeline:** a copper line fills the timeline as you read down it, and each marker pops in.
- **Project drawings and icons:** the elevation drawings trace themselves floor by floor, and the expertise icons draw in.
- **Hero portrait:** a subtle parallax as you scroll.
- **Navigation aids:**
  - a thin copper reading-progress bar along the top
  - the current section highlighted in the menu
  - a back-to-top button that appears after the first screen
- **Reduced motion:** when the visitor's device asks for reduced motion, movement is switched off and only simple fades remain.

### Works on every screen

Tested with no horizontal scrolling and no console errors at 11 screen sizes:
- phones at 320, 375, 390 and 430px wide
- phone landscape at 844×390
- tablets at 768×1024 and 1024×768
- laptop and desktop at 1280, 1440 and 1920px
- a 2560px monitor

Other device support:
- **Layout by screen size:** the hero is side by side from tablet width up, and grids collapse from 3 columns to 2 to 1.
- **Large monitors:** the whole layout scales up slightly.
- **Notched phones:** content respects the safe areas around notches and rounded corners.
- **Touch:** buttons and menu items are at least 44px tall.
- **Home-screen icon:** includes an Apple touch icon and a web app manifest.
- **Printing:** a clean print layout for hiring managers who print the page.
- **Search engines:** `robots.txt`, `sitemap.xml`, Open Graph and Twitter cards, and structured data.
- **404 page:** a branded "page not found" screen for broken links.

---

## Page Sections

1. **Hero:** name, title, a one-paragraph summary, key figures (25+ years, 10 projects, 8.24 lakh sq.ft., 25 storeys), a portrait and the current project.
2. **Organisations:** a quiet strip naming the companies whose projects he has worked on.
3. **About:** a short background, key facts, and a career progression from 2001 to today.
4. **Expertise:** six areas of responsibility: coordination, cost control and billing, quantity surveying, quality, planning and team leadership.
5. **Experience:** a timeline of all ten roles, each with its project, configuration and responsibilities.
6. **Projects:** ten project cards, each with a schematic elevation drawing.
7. **Education & training:** the diploma, certifications, skills and languages.
8. **Contact:** phone, WhatsApp and email (with a copy button), plus location.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Font, metadata, Motion config
│   ├── page.tsx                # Page composition + JSON-LD structured data
│   ├── globals.css             # Tailwind theme tokens (colours, font), base styles
│   ├── icon.svg / apple-icon.png  # Favicon and home-screen icon
│   ├── manifest.ts             # Web app manifest
│   └── opengraph-image.png     # Social share card (1200×630)
├── assets/
│   └── portrait-cutout.png     # Portrait from the resume, background removed
├── components/
│   ├── providers/motion.tsx    # Reduced-motion support
│   ├── sections/               # One file per page section
│   └── ui/                     # Reveal, SectionHeader, CountUp, DrawOnView, scroll progress, back-to-top, Elevation, icons
├── data/
│   └── resume.ts               # ALL site content lives here
└── lib/
    ├── drawing.ts              # Procedural elevation generator
    └── utils.ts
```

## Getting Started

Requires **Node.js 20.9 or newer**.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (fully static)
npm run start      # serve the production build
npm run lint
```

## Updating Content

All text, roles, projects, skills and education live in **`src/data/resume.ts`**.

- **Add a role:** add an entry to `experience`. The newest role goes first. Update `progression` if the title changes.
- **Add a project:** add an entry to `projects`. Describe its `blocks` (floors, basements, podium, stilt, terrace) and the elevation drawing is generated automatically.
- **Replace the portrait:** swap `src/assets/portrait-cutout.png`. A transparent-background PNG looks best.
- **Add a real project photo:** put the image in `public/projects/` and add a `photo` to that project in `resume.ts`, for example `photo: { src: "/projects/meridian.jpg", alt: "Meridian Towers under construction", credit: "Photo: V. K. B. Singh" }`. The card then shows the photo instead of the drawing. Only use photos you took yourself or have permission to use.

## Deployment

**Vercel (recommended)**

1. Push the repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). No settings need changing.
3. If you add a custom domain, set the environment variable `NEXT_PUBLIC_SITE_URL` (for example `https://vijaysingh.in`) so share links use the right address.

The page is prerendered as static HTML. Any Node.js host also works with `npm run build` followed by `npm run start`.
