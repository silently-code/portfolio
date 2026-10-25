// Single source of truth for all site content.
// Everything here comes from Vijay's resume (Resume_.docx). Edit this file to update the site.

export const profile = {
  name: "Vijay Kumar B. Singh",
  fullName: "Vijay Kumar Bhairava Singh",
  initials: "VS",
  title: "Project Manager",
  headline: "Project Manager · Civil Engineer · 25 Years in Building Construction",
  location: "Malad (E), Mumbai",
  city: "Mumbai, India",
  email: "vkbssingh1@rediffmail.com",
  phone: "+91 98697 65814",
  phoneHref: "tel:+919869765814",
  whatsappHref: "https://wa.me/919869765814",
  languages: ["Hindi", "English"],
  current: {
    role: "Project Manager",
    company: "Nahar Builder Ltd.",
    project: "Nahar's Chandi Valley – I (R-1B)",
    projectDetail: "6 residential towers · 3B+G+14+T · Mumbai",
  },
  resume: "/Vijay-Kumar-B-Singh-Resume.pdf",
  intro:
    "Project Manager with 25 years of experience delivering high-rise residential, commercial and industrial buildings across Mumbai — on schedule, within budget and to specification. I lead site teams, coordinate architects and consultants, and keep costs under control through accurate quantities and certified bills.",
  about: [
    "I began my career in 2001 as a site engineer on a factory project in Tarapur. Over the next 25 years and eleven firms, I progressed through senior engineer, project engineer and PMC in-charge roles to project manager, working on towers of up to 25 storeys for developers such as Rustomjee, Sheth Developers, Neelkanth Group, Arihant Buildcon and Nahar.",
    "Today I lead projects from start to finish: planning and scheduling the work, managing labour and subcontractors, coordinating the architect and the RCC, MEP and façade consultants, and controlling cost through BOQs, quantity surveying and R.A. bill certification. I have extensive hands-on experience with ply, steel and Mivan formwork, and I hold every stage of the work to strict quality and safety standards.",
  ],
  availability: "Open to project management and PMC opportunities in Mumbai.",
} as const;

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "25+", label: "Years in construction" },
  { value: "11", label: "Major building projects" },
  { value: "8.24 L", label: "Sq.ft. built-up, last two projects" },
  { value: "25", label: "Storeys, tallest tower" },
];

// Organisations whose projects he worked on (employers, plus the clients/owners named in the resume).
export const organisations = [
  "Nahar Builder",
  "Arihant Buildcon",
  "JSW",
  "National India Bullion Refinery",
  "Sheth Developers",
  "Rustomjee",
  "Neelkanth Group",
  "Kalpavruksha Construction",
];

export const progression = [
  { years: "2001 – 2006", role: "Civil Engineer", firms: "Haq Construction · Kalpavruksha · Sabari Realtors", note: "Site execution and quality control" },
  { years: "2007 – 2012", role: "Senior Engineer", firms: "Neelkanth · Mahimtura · Sheth · Tablib & Shamsi", note: "Billing, quantity surveying and coordination" },
  { years: "2012 – 2019", role: "Project Engineer", firms: "National India Bullion Refinery", note: "NIBR Corporate Park, 3.24 lakh sq.ft." },
  { years: "2019 – 2023", role: "PMC In-charge", firms: "Design Team", note: "JSW Dolvi office campus" },
  { years: "2023 – Now", role: "Project Manager", firms: "Nahar Builder · Arihant Buildcon", note: "Chandi Valley R-1B and Meridian Towers" },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: { year: number; month: number };
  end: { year: number; month: number } | null; // null = present
  project: string;
  projectNote: string;
  config: string[];
  points: string[];
};

export const experience: Experience[] = [
  {
    id: "nahar", company: "Nahar Builder Ltd.", role: "Project Manager", location: "Mumbai",
    start: { year: 2025, month: 8 }, end: null,
    project: "Nahar's Chandi Valley – I (R-1B)", projectNote: "Six residential towers, each 3 basements + ground + 14 floors + terrace",
    config: ["6 Towers", "3B+G+14+T Residential"],
    points: [
      "Lead end-to-end site execution: labour, subcontractors, work scheduling and issue resolution to drawings and specifications",
      "Oversee billing, quantity estimation and material reconciliation",
      "Run QA/QC, safety compliance and site documentation",
      "Issue daily and weekly progress reports (DPR/WPR) and coordinate all stakeholders",
    ],
  },
  {
    id: "arihant", company: "Arihant Buildcon", role: "Project Manager", location: "Ghatkopar (W), Mumbai",
    start: { year: 2023, month: 6 }, end: { year: 2025, month: 7 },
    project: "Meridian Towers", projectNote: "Commercial and residential towers, 5.00 lakh sq.ft. construction area",
    config: ["B+G+15+T Commercial", "G+18+T Residential"],
    points: [
      "Led the high-rise commercial and residential project on site",
      "Coordinated the architect and the RCC, MEP and façade consultants with contractors",
      "Managed quality control, material approvals and site supervision",
      "Certified R.A. bills (BBS, RCC and other quantities) against measured work",
    ],
  },
  {
    id: "design-team", company: "Design Team", role: "PMC In-charge", location: "Mumbai · JSW Dolvi site",
    start: { year: 2019, month: 10 }, end: { year: 2023, month: 6 },
    project: "JSW Dolvi Office Campus", projectNote: "G+2 office building, architectural office and canteen building",
    config: ["G+2 Office", "Canteen Block"],
    points: [
      "Managed the G+2 office building and canteen project for JSW, Dolvi",
      "Oversaw execution of civil works, interiors and services, and the site team's performance",
      "Coordinated with structural consultants to protect quality and deadlines",
      "Sent daily and weekly progress reports to JSW and checked contractor work against GFC drawings",
    ],
  },
  {
    id: "nibr", company: "National India Bullion Refinery", role: "Project Engineer", location: "Sakinaka, Andheri (E), Mumbai",
    start: { year: 2012, month: 6 }, end: { year: 2019, month: 9 },
    project: "NIBR Corporate Park", projectNote: "Commercial complex, 3.24 lakh sq.ft. construction area",
    config: ["2B+G+8+T Commercial"],
    points: [
      "Handled site execution for the commercial complex",
      "Managed contractor coordination, quantity surveying, material approvals and inspections",
      "Coordinated the architect and the RCC, MEP, FPCC and façade consultants",
      "Certified R.A. bills after verifying measurements on site",
    ],
  },
  {
    id: "tablib", company: "Tablib & Shamsi Pvt. Ltd.", role: "Senior Engineer", location: "Virar",
    start: { year: 2011, month: 9 }, end: { year: 2012, month: 6 },
    project: "REJV, G Wing", projectNote: "Residential building built with Mivan formwork",
    config: ["G+7 Residential", "Mivan"],
    points: [
      "Supervised construction of a G+7 residential building using Mivan shuttering",
      "Managed client coordination, scheduling, quality control and quantity certification",
    ],
  },
  {
    id: "sheth", company: "Sheth Developers Pvt. Ltd.", role: "Senior Engineer", location: "Kandivali (E), Mumbai",
    start: { year: 2009, month: 9 }, end: { year: 2011, month: 9 },
    project: "Clarion, B–E Wings", projectNote: "12-floor residential project on two podium levels",
    config: ["Stilt + 2 Podiums + 12"],
    points: [
      "Led site operations for the Clarion residential project",
      "Coordinated with consultants, monitored quality and managed billing",
    ],
  },
  {
    id: "mahimtura", company: "Mahimtura Consultants Pvt. Ltd.", role: "Senior Engineer", location: "Thane (W)",
    start: { year: 2008, month: 2 }, end: { year: 2009, month: 9 },
    project: "Rustomjee Athena, C & D Wings", projectNote: "Residential towers for Rustomjee, built with Mivan formwork",
    config: ["G+14 Residential", "Mivan"],
    points: [
      "Oversaw construction of the G+14 towers using Mivan shuttering for faster, higher-quality work",
      "Managed end-to-end site execution, quality control and quantity verification to design and safety standards",
    ],
  },
  {
    id: "neelkanth", company: "Neelkanth Group", role: "Senior Engineer", location: "Vidyavihar (W), Mumbai",
    start: { year: 2007, month: 1 }, end: { year: 2008, month: 1 },
    project: "Neelkanth Kingdom", projectNote: "14 buildings of 13 floors on a 7,00,000 sq.ft. podium. Phase 1 (7 buildings) approx. ₹150 Cr",
    config: ["14 × 13 Floors", "Connecting Podium"],
    points: [
      "Supervised the large-scale residential development",
      "Managed coordination, material approvals and site quality control for Phase 1 (7 buildings with podium)",
    ],
  },
  {
    id: "sabari", company: "Sabari Realtors", role: "Civil Engineer", location: "Chembur, Mumbai",
    start: { year: 2005, month: 1 }, end: { year: 2006, month: 1 },
    project: "Sabari Ashiyana", projectNote: "Two 12-storey residential buildings with podium and swimming pool, near BARC Hospital",
    config: ["2 × 12 Storeys", "Podium + Pool"],
    points: [
      "Executed the 12-storey residential project",
      "Supervised RCC, brickwork and finishing works, and managed materials",
    ],
  },
  {
    id: "kalpavruksha", company: "Kalpavruksha Construction Co.", role: "Civil Engineer", location: "Prabhadevi, Mumbai",
    start: { year: 2004, month: 1 }, end: { year: 2005, month: 1 },
    project: "Siddhi Vinayak Horizon", projectNote: "Landmark development: two 25-storey residential towers with basement, swimming pool and V Mall",
    config: ["B + Mall", "2 × 25 Storeys"],
    points: [
      "Worked on the execution of two 25-storey residential towers",
      "Scope included the basement, swimming pool and V Mall",
    ],
  },
  {
    id: "haq", company: "Haq Construction", role: "Civil Engineer", location: "Boisar",
    start: { year: 2001, month: 7 }, end: { year: 2004, month: 12 },
    project: "Acelline, Tarapur", projectNote: "Factory shed and commercial building",
    config: ["Industrial Shed", "Commercial Block"],
    points: [
      "Executed the factory shed and commercial building",
      "Managed RCC works, finishing and site quality control",
    ],
  },
];

// Schematic elevation spec for each project's drawing (illustrative, not to scale).
export type Block = {
  kind: "tower" | "shed" | "podium";
  floors: number; // above-ground floors including ground
  width: number; // relative width units
  basements?: number;
  stilt?: boolean;
  terrace?: boolean;
  label?: string;
  ghost?: boolean; // drawn lighter: background buildings
};

export type Project = {
  id: string;
  name: string;
  location: string;
  year: string;
  type: string;
  config: string;
  area?: string;
  role: string;
  firm: string;
  blocks: Block[];
  podium?: { floors: number; label?: string; pool?: boolean };
  /**
   * Optional real photo, shown instead of the schematic drawing.
   * Put the file in public/projects/ and use e.g. { src: "/projects/meridian.jpg", alt: "...", credit: "Photo: V. K. B. Singh" }.
   * Only use photos Vijay took himself or has permission to use.
   */
  photo?: { src: string; alt: string; credit?: string };
};

export const projects: Project[] = [
  {
    id: "chandi-valley",
    name: "Chandi Valley – I (R-1B)",
    location: "Mumbai",
    year: "2025 – Now",
    type: "Residential · 6 Towers",
    config: "3B+G+14+T",
    role: "Project Manager",
    firm: "Nahar Builder Ltd.",
    blocks: Array.from({ length: 6 }, (_, i) => ({ kind: "tower" as const, floors: 15, width: 2, terrace: true, basements: i === 0 ? 3 : undefined })),
  },
  {
    id: "meridian",
    name: "Meridian Towers",
    location: "Ghatkopar (W), Mumbai",
    year: "2023 – Now",
    type: "Commercial + Residential",
    config: "B+G+15+T · G+18+T",
    area: "5.00 lakh sq.ft.",
    role: "Project Manager",
    firm: "Arihant Buildcon",
    blocks: [
      { kind: "tower", floors: 16, width: 4, basements: 1, terrace: true, label: "COMMERCIAL" },
      { kind: "tower", floors: 19, width: 3, terrace: true, label: "RESIDENTIAL" },
    ],
  },
  {
    id: "jsw",
    name: "JSW Dolvi Office",
    location: "Dolvi, Raigad",
    year: "2019 – 2023",
    type: "Office + Canteen",
    config: "G+2",
    role: "PMC In-charge",
    firm: "Design Team",
    blocks: [
      { kind: "tower", floors: 3, width: 7, terrace: true, label: "OFFICE" },
      { kind: "shed", floors: 1, width: 3, label: "CANTEEN" },
    ],
  },
  {
    id: "nibr",
    name: "NIBR Corporate Park",
    location: "Sakinaka, Andheri (E)",
    year: "2012 – 2019",
    type: "Commercial Complex",
    config: "2B+G+8+T",
    area: "3.24 lakh sq.ft.",
    role: "Project Engineer",
    firm: "National India Bullion Refinery",
    blocks: [{ kind: "tower", floors: 9, width: 8, basements: 2, terrace: true, label: "COMMERCIAL" }],
  },
  {
    id: "rejv",
    name: "REJV, G Wing",
    location: "Virar",
    year: "2011 – 2012",
    type: "Residential",
    config: "G+7 · Mivan",
    role: "Senior Engineer",
    firm: "Tablib & Shamsi Pvt. Ltd.",
    blocks: [{ kind: "tower", floors: 8, width: 4, terrace: true, label: "G WING" }],
  },
  {
    id: "clarion",
    name: "Clarion",
    location: "Kandivali (E), Mumbai",
    year: "2009 – 2011",
    type: "Residential · B, C, D, E Wings",
    config: "Stilt + 2 Podiums + 12",
    role: "Senior Engineer",
    firm: "Sheth Developers Pvt. Ltd.",
    podium: { floors: 3, label: "STILT + 2 PODIUMS" },
    blocks: [
      { kind: "tower", floors: 12, width: 2, terrace: true, label: "B" },
      { kind: "tower", floors: 12, width: 2, terrace: true, label: "C" },
      { kind: "tower", floors: 12, width: 2, terrace: true, label: "D" },
      { kind: "tower", floors: 12, width: 2, terrace: true, label: "E" },
    ],
  },
  {
    id: "athena",
    name: "Rustomjee Athena",
    location: "Thane (W)",
    year: "2008 – 2009",
    type: "Residential · Mivan",
    config: "G+14",
    role: "Senior Engineer",
    firm: "Mahimtura Consultants Pvt. Ltd.",
    blocks: [
      { kind: "tower", floors: 15, width: 3, terrace: true, label: "C" },
      { kind: "tower", floors: 15, width: 3, terrace: true, label: "D" },
    ],
  },
  {
    id: "neelkanth",
    name: "Neelkanth Kingdom",
    location: "Vidyavihar (W), Mumbai",
    year: "2007 – 2008",
    type: "Residential Township",
    config: "14 × 13 Floors on Podium",
    area: "7,00,000 sq.ft. podium",
    role: "Senior Engineer",
    firm: "Neelkanth Group",
    podium: { floors: 2, label: "CONNECTING PODIUM" },
    blocks: Array.from({ length: 7 }, (_, i) => ({
      kind: "tower" as const,
      floors: 13,
      width: 1.4,
      terrace: true,
      label: i === 0 ? "PHASE 1" : undefined,
    })),
  },
  {
    id: "ashiyana",
    name: "Sabari Ashiyana",
    location: "Chembur, Mumbai",
    year: "2005 – 2006",
    type: "Residential",
    config: "2 × 12 Storeys + Podium",
    role: "Civil Engineer",
    firm: "Sabari Realtors",
    podium: { floors: 1, label: "PODIUM + POOL", pool: true },
    blocks: [
      { kind: "tower", floors: 12, width: 3, terrace: true },
      { kind: "tower", floors: 12, width: 3, terrace: true },
    ],
  },
  {
    id: "horizon",
    name: "Siddhi Vinayak Horizon",
    location: "Prabhadevi, Mumbai",
    year: "2004 – 2005",
    type: "Residential + Mall",
    config: "B + Mall + 2 × 25",
    role: "Civil Engineer",
    firm: "Kalpavruksha Construction Co.",
    podium: { floors: 2, label: "V MALL + POOL", pool: true },
    blocks: [
      { kind: "tower", floors: 25, width: 2.6, basements: 1, terrace: true },
      { kind: "tower", floors: 25, width: 2.6, terrace: true },
    ],
  },
  {
    id: "acelline",
    name: "Acelline, Tarapur",
    location: "Tarapur, Boisar",
    year: "2001 – 2004",
    type: "Industrial + Commercial",
    config: "Factory Shed + Commercial",
    role: "Civil Engineer",
    firm: "Haq Construction",
    blocks: [
      { kind: "shed", floors: 1, width: 7, label: "FACTORY SHED" },
      { kind: "tower", floors: 2, width: 3, terrace: true, label: "COMMERCIAL" },
    ],
  },
];

export type Capability = {
  title: string;
  body: string;
  outputs: string[];
  icon: "coordination" | "billing" | "survey" | "quality" | "planning" | "team";
};

export const capabilities: Capability[] = [
  {
    title: "Project Coordination",
    body: "I keep the architect and the RCC, MEP, FPCC and façade consultants working to one programme, and hold contractors to it.",
    outputs: ["Consultant coordination", "Site meetings", "Contractor coordination"],
    icon: "coordination",
  },
  {
    title: "Cost Control & Billing",
    body: "Every R.A. bill is certified against measured work. BBS, RCC and other quantities are verified on site before an invoice reaches accounts.",
    outputs: ["R.A. bill certification", "BBS checks", "Measurement verification"],
    icon: "billing",
  },
  {
    title: "Quantity Surveying & Procurement",
    body: "Accurate quantity take-offs and BOQs, with materials approved and ordered on time, from cement and steel to every finishing item.",
    outputs: ["Quantity take-off & BOQ", "Cost estimation", "Material approvals"],
    icon: "survey",
  },
  {
    title: "Quality Control",
    body: "RCC, brickwork and finishes are inspected at every stage, and contractor work is checked against GFC drawings before it is accepted.",
    outputs: ["Stage inspections", "GFC compliance", "Mivan, steel & ply formwork"],
    icon: "quality",
  },
  {
    title: "Planning & Reporting",
    body: "Work is planned, scheduled and tracked with bar charts to keep the project on time and within budget, with daily and weekly progress reports for the client.",
    outputs: ["Scheduling & bar charts", "Daily progress reports", "Weekly progress reports"],
    icon: "planning",
  },
  {
    title: "Site Team Leadership",
    body: "I lead junior engineers and site supervisors, and manage labour and subcontractors closely on site.",
    outputs: ["Engineers & supervisors", "Labour management", "Subcontractor coordination"],
    icon: "team",
  },
];

export const education = [
  {
    year: "2001",
    title: "Diploma in Civil Engineering",
    org: "Board of Technical Education, U.P. (Lucknow / Almora)",
    result: "75% · First Division",
  },
  {
    year: "1991",
    title: "Higher Secondary (H.S.C.), PCM",
    org: "U.P. Board, Allahabad",
    result: "61% · First Division",
  },
  {
    year: "1989",
    title: "Secondary School (S.S.C.)",
    org: "U.P. Board, Allahabad",
    result: "63% · First Division",
  },
];

export const training = [
  {
    year: "2010",
    title: "Quality in Building Construction",
    org: "Foundation Training Centre · Lt. Col. M.S. Patnaik (Retd.), Sheth Developers",
  },
  {
    year: "2007",
    title: "AutoCAD 2D & 3D",
    org: "Multi-Tech Computers, Ghatkopar (W)",
  },
  {
    year: "2007",
    title: "Concrete Mix Design",
    org: "Ambuja",
  },
];

export const skills = [
  "Project Planning & Scheduling",
  "Quantity Surveying & BOQ",
  "Cost Estimation & Control",
  "R.A. Bills & Project Billing",
  "BBS Preparation",
  "Mivan, Steel & Ply Formwork",
  "QA / QC & Safety Compliance",
  "MEP & Façade Coordination",
  "Drawing Interpretation",
  "Field Surveying",
  "DPR / WPR & Bar Charts",
  "AutoCAD 2D / 3D",
  "Concrete Mix Design",
  "MS Office",
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatMonth(d: { year: number; month: number }) {
  return `${MONTHS[d.month - 1]} ${d.year}`;
}

export function formatDuration(e: Experience) {
  if (!e.end) return null;
  const months = (e.end.year - e.start.year) * 12 + (e.end.month - e.start.month);
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y ? `${y} yr${y > 1 ? "s" : ""}` : "", m ? `${m} mo${m > 1 ? "s" : ""}` : ""].filter(Boolean).join(" ");
}
