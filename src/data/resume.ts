// Single source of truth for all site content.
// Everything here comes from Vijay's resume (Resume_.docx). Edit this file to update the site.

export const profile = {
  name: "Vijay Kumar B. Singh",
  fullName: "Vijay Kumar Bhairava Singh",
  initials: "VS",
  title: "Civil Engineer",
  headline: "Civil Engineer · Project Management & Site Execution",
  location: "Malad (E), Mumbai",
  city: "Mumbai, India",
  email: "vkbssingh1@rediffmail.com",
  phone: "+91 98697 65814",
  phoneHref: "tel:+919869765814",
  whatsappHref: "https://wa.me/919869765814",
  languages: ["Hindi", "English"],
  current: {
    role: "Assistant Project Manager",
    company: "Arihant Buildcon",
    project: "Meridian Towers",
    projectDetail: "B+G+15+T commercial & G+18+T residential · Ghatkopar (W)",
  },
  intro:
    "25 years delivering residential, commercial and industrial buildings in the Mumbai region. I keep projects on schedule and within budget: consultants coordinated, contractors supervised, quality checked, and every bill certified against measured work.",
  about: [
    "I'm a civil engineer with 25 years on building sites across Mumbai, Thane and the wider region. I started in 2001 checking RCC, brickwork and finishing on a factory project in Tarapur, and have worked my way up through senior engineer, project engineer and PMC in-charge roles to assistant project manager.",
    "Today my work is about keeping a project under control: coordinating the architect and the structural, MEP and façade consultants, holding contractors to the schedule, certifying R.A. bills against measured work, and making sure quality is checked before work is accepted.",
  ],
  availability: "Open to project management and PMC roles in Mumbai.",
} as const;

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "25+", label: "Years in construction" },
  { value: "10", label: "Major building projects" },
  { value: "8.24 L", label: "Sq.ft. built-up, last two projects" },
  { value: "25", label: "Storeys, tallest tower" },
];

// Organisations whose projects he worked on (employers, plus the clients/owners named in the resume).
export const organisations = [
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
  { years: "2023 – Now", role: "Assistant Project Manager", firms: "Arihant Buildcon", note: "Meridian Towers, 5.00 lakh sq.ft." },
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
    id: "arihant",
    company: "Arihant Buildcon",
    role: "Assistant Project Manager",
    location: "Ghatkopar (W), Mumbai",
    start: { year: 2023, month: 6 },
    end: null,
    project: "Meridian Towers",
    projectNote: "Commercial and residential towers, 5.00 lakh sq.ft. construction area",
    config: ["B+G+15+T Commercial", "G+18+T Residential"],
    points: [
      "Coordinate the architect and the RCC, MEP and façade consultants with contractors",
      "Keep the work schedule on track and the project within budget",
      "Certify R.A. bills (BBS, RCC and other quantities) after checking measurements on site",
      "Run quality inspections and quantity surveying, approve and order materials, and issue daily progress reports",
    ],
  },
  {
    id: "design-team",
    company: "Design Team",
    role: "PMC In-charge",
    location: "Mumbai · JSW Dolvi site",
    start: { year: 2019, month: 10 },
    end: { year: 2023, month: 6 },
    project: "JSW Dolvi Office Campus",
    projectNote: "G+2 office building, architectural office and canteen building",
    config: ["G+2 Office", "Canteen Block"],
    points: [
      "Project in-charge for the G+2 office building at JSW, Dolvi",
      "Coordinated execution of civil, interiors and services",
      "Led a team of junior engineers and site supervisors",
      "Sent daily and weekly progress reports to JSW, and checked contractor work against GFC drawings",
      "Ran site meetings with the structural engineer and consultants, and certified R.A. bills",
    ],
  },
  {
    id: "nibr",
    company: "National India Bullion Refinery",
    role: "Project Engineer",
    location: "Sakinaka, Andheri (E), Mumbai",
    start: { year: 2012, month: 6 },
    end: { year: 2019, month: 9 },
    project: "NIBR Corporate Park",
    projectNote: "Commercial complex, 3.24 lakh sq.ft. construction area",
    config: ["2B+G+8+T Commercial"],
    points: [
      "Coordinated the architect and the RCC, MEP, FPCC and façade consultants with contractors",
      "Kept the work schedule on track and the project within budget",
      "Certified R.A. bills after verifying on-site measurements, before tax invoices went to accounts",
      "Handled quality control, quantity surveying, material approvals and daily progress reports",
    ],
  },
  {
    id: "tablib",
    company: "Tablib & Shamsi Pvt. Ltd.",
    role: "Senior Engineer",
    location: "Virar",
    start: { year: 2011, month: 9 },
    end: { year: 2012, month: 6 },
    project: "REJV, G Wing",
    projectNote: "Residential building",
    config: ["Stilt + 7 Residential"],
    points: [
      "Coordinated with the client and contractors",
      "Kept the work schedule and the project within budget",
      "Certified R.A. bills (BBS, RCC and other quantities) and checked quality of work",
    ],
  },
  {
    id: "sheth",
    company: "Sheth Developers Pvt. Ltd.",
    role: "Senior Engineer",
    location: "Kandivali (E), Mumbai",
    start: { year: 2009, month: 9 },
    end: { year: 2011, month: 9 },
    project: "Clarion, B–E Wings",
    projectNote: "Residential building on two podium levels",
    config: ["Stilt + 2 Podiums + 12"],
    points: [
      "Coordinated the architect and the RCC and MEP consultants with contractors",
      "Handled quantity surveying, R.A. bill certification and quality inspections",
      "Checked on-site measurements before bills were submitted",
    ],
  },
  {
    id: "mahimtura",
    company: "Mahimtura Consultants Pvt. Ltd.",
    role: "Senior Engineer",
    location: "Thane (W)",
    start: { year: 2008, month: 2 },
    end: { year: 2009, month: 9 },
    project: "Rustomjee Athena, C & D Wings",
    projectNote: "Residential towers",
    config: ["G+14 Residential"],
    points: [
      "Coordinated the architect and the RCC and MEP consultants with contractors",
      "Kept the work schedule, certified R.A. bills and checked quality of work",
      "Prepared daily progress reports",
    ],
  },
  {
    id: "neelkanth",
    company: "Neelkanth Group",
    role: "Senior Engineer",
    location: "Vidyavihar (W), Mumbai",
    start: { year: 2007, month: 1 },
    end: { year: 2008, month: 1 },
    project: "Neelkanth Kingdom",
    projectNote: "14 buildings of 13 floors on a 7,00,000 sq.ft. podium. Phase 1 (7 buildings) approx. ₹150 Cr",
    config: ["14 × 13 Floors", "Connecting Podium"],
    points: [
      "Worked on Phase 1: seven 13-floor buildings and their connecting podium",
      "Coordinated the architect and the RCC and MEP consultants with contractors",
      "Handled bill certification, quantity surveying and quality control",
    ],
  },
  {
    id: "sabari",
    company: "Sabari Realtors",
    role: "Civil Engineer",
    location: "Chembur, Mumbai",
    start: { year: 2005, month: 1 },
    end: { year: 2006, month: 1 },
    project: "Sabari Ashiyana",
    projectNote: "Two residential buildings with podium and swimming pool, near BARC Hospital",
    config: ["2 × 12 Storeys", "Podium + Pool"],
    points: [
      "Quality control of RCC, brickwork and finishing work",
      "Arranged cement, steel and finishing materials",
      "Handled quantity surveying and daily progress reports",
    ],
  },
  {
    id: "kalpavruksha",
    company: "Kalpavruksha Construction Co.",
    role: "Civil Engineer",
    location: "Prabhadevi, Mumbai",
    start: { year: 2004, month: 1 },
    end: { year: 2005, month: 1 },
    project: "Siddhi Vinayak Horizon",
    projectNote: "Two 25-storey residential towers over a basement, mall and swimming pool",
    config: ["B + Mall", "2 × 25 Storeys"],
    points: [
      "Checked RCC, brickwork and finishing work",
      "Quality control and daily progress reports",
    ],
  },
  {
    id: "haq",
    company: "Haq Construction",
    role: "Civil Engineer",
    location: "Boisar",
    start: { year: 2001, month: 7 },
    end: { year: 2004, month: 12 },
    project: "Acelline, Tarapur",
    projectNote: "Factory shed and commercial building",
    config: ["Industrial Shed", "Commercial Block"],
    points: [
      "First site: checked RCC, brickwork and finishing work",
      "Quality control and daily progress reports",
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
    id: "meridian",
    name: "Meridian Towers",
    location: "Ghatkopar (W), Mumbai",
    year: "2023 – Now",
    type: "Commercial + Residential",
    config: "B+G+15+T · G+18+T",
    area: "5.00 lakh sq.ft.",
    role: "Assistant Project Manager",
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
    config: "Stilt + 7",
    role: "Senior Engineer",
    firm: "Tablib & Shamsi Pvt. Ltd.",
    blocks: [{ kind: "tower", floors: 8, width: 4, stilt: true, terrace: true, label: "G WING" }],
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
    type: "Residential · C & D Wings",
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
    body: "The architect and the RCC, MEP, FPCC and façade consultants all work to one programme, and contractors are held to it.",
    outputs: ["Consultant coordination", "Site meetings", "Contractor coordination"],
    icon: "coordination",
  },
  {
    title: "Cost Control & Billing",
    body: "R.A. bills are certified against measured work. BBS, RCC and other quantities are checked on site before any tax invoice reaches accounts.",
    outputs: ["R.A. bill certification", "BBS checks", "Measurement verification"],
    icon: "billing",
  },
  {
    title: "Quantity Surveying & Procurement",
    body: "Quantities taken off, materials approved and ordered on time: cement, steel and every finishing item the site needs.",
    outputs: ["Quantity take-off", "Material approvals", "Material orders"],
    icon: "survey",
  },
  {
    title: "Quality Control",
    body: "RCC, brickwork and finishing are inspected stage by stage, and contractor work is checked against GFC drawings before it is accepted.",
    outputs: ["Stage inspections", "GFC compliance", "Concrete mix design"],
    icon: "quality",
  },
  {
    title: "Planning & Reporting",
    body: "The schedule of work is maintained and the project kept within budget. Daily and weekly progress reports go to the client.",
    outputs: ["Work schedules", "Daily progress reports", "Weekly client reports"],
    icon: "planning",
  },
  {
    title: "Site Team Leadership",
    body: "Junior engineers, site supervisors and contractor crews are briefed, supervised and accountable for their work.",
    outputs: ["Junior engineers", "Site supervisors", "Contractor crews"],
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
  "R.A. Bill Certification",
  "Bar Bending Schedules",
  "Quantity Surveying",
  "RCC Supervision",
  "Quality Control",
  "MEP Coordination",
  "Façade Coordination",
  "GFC Compliance",
  "Daily Progress Reports",
  "Contractor Management",
  "AutoCAD 2D / 3D",
  "Concrete Mix Design",
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
