// ─────────────────────────────────────────────────────────────
//  All the words on the site live here. Edit this file to update
//  your portfolio — you don't need to touch the components.
// ─────────────────────────────────────────────────────────────

export const person = {
  firstName: "Akanda Sina",
  lastName: "Kilicarslan",
  role: "Electrical & Computer Engineering student at Rutgers",
  focus: "Mobile apps, Earth observation, climate data",
  status: "Open to Summer 2027 internships",
  email: "akandasina@outlook.com",
  github: "https://github.com/akandasina",
  linkedin: "https://linkedin.com/in/akandasina",
  // Put your résumé in /public as resume.pdf, then set this to "/resume.pdf"
  resumeUrl: "",
  // Put a photo of yourself in /public (e.g. me.jpg), then set this to "/me.jpg"
  portrait: "",
};

export const about = {
  statement:
    "I build software for the planet — apps that keep food out of the bin, and tools that read the Earth from orbit.",
  paragraphs: [
    "I study Electrical & Computer Engineering at Rutgers University, after starting in Computer Science at Hudson County Community College with a 3.9 GPA. Before code, I spent years leading teams behind the espresso bar in high-volume cafés, which taught me how to break messy problems into clean, repeatable steps.",
    "Today I split my time between mobile development with Flutter and Firebase, and geospatial work in Google Earth Engine — mapping vegetation, rainfall and water storage across New Jersey. I want to work as a software engineer on environmental technology, and I'm drawn to research.",
  ],
  stats: [
    { value: "3.9", label: "GPA at Hudson County CC" },
    { value: "1.6M+", label: "Views on my Unsplash photos" },
    { value: "18K+", label: "Photo downloads on Unsplash" },
  ],
};

export type Project = {
  title: string;
  kind: string;
  description: string;
  points: string[];
  stack: string[];
  // Link each project to its own repo or live demo when you have one.
  link: string;
  linkLabel: string;
};

export const projects: Project[] = [
  {
    title: "KapKap",
    kind: "Mobile app",
    description:
      "A food-rescue app that connects people with surplus food nearby before it goes to waste.",
    points: [
      "Cross-platform app in Flutter with a Firebase backend",
      "Real-time listings so surplus food is found while it's still fresh",
      "Tracks the carbon footprint each user has saved",
    ],
    stack: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/akandasina",
    linkLabel: "GitHub",
  },
  {
    title: "Vegetation Health",
    kind: "Remote sensing",
    description:
      "An Earth Engine app that tracks vegetation health across New Jersey from satellite imagery.",
    points: [
      "NDVI time series built from satellite imagery",
      "Maps how vegetation changes across seasons and years",
      "Interactive app published with Google Earth Engine",
    ],
    stack: ["Earth Engine", "JavaScript", "GIS"],
    link: "https://github.com/akandasina",
    linkLabel: "GitHub",
  },
  {
    title: "Groundwater Stress",
    kind: "Data science",
    description:
      "Visualizing water storage loss with GRACE satellite gravity data.",
    points: [
      "Processes GRACE gravity anomalies into water-storage change",
      "Shows where groundwater is under the most stress",
      "Built with guidance from a researcher at Stevens' I-SMART Lab",
    ],
    stack: ["Earth Engine", "Python", "Data viz"],
    link: "https://github.com/akandasina",
    linkLabel: "GitHub",
  },
  {
    title: "SWOT River Model",
    kind: "Climate tech",
    description:
      "Hydrological modeling of the Saint John River with data from the SWOT satellite.",
    points: [
      "Uses SWOT surface-water measurements of the river",
      "Aims to improve flood prediction and water management",
    ],
    stack: ["SWOT", "Modeling", "Python"],
    link: "https://github.com/akandasina",
    linkLabel: "GitHub",
  },
];

export const experience = [
  {
    period: "Current",
    title: "Electrical & Computer Engineering",
    place: "Rutgers University",
    note: "School of Engineering",
  },
  {
    period: "2023 — 2026",
    title: "Computer Science",
    place: "Hudson County Community College",
    note: "3.9 GPA",
  },
  {
    period: "Ongoing",
    title: "Earth Engine projects",
    place: "With a researcher at the I-SMART Lab, Stevens",
    note: "Vegetation, rainfall and water storage in New Jersey",
  },
  {
    period: "Current",
    title: "Barista",
    place: "Incontro Caffè",
    note: "Part-time while studying",
  },
  {
    period: "Earlier",
    title: "Lead Barista",
    place: "Hey Coffee People · Black Rail Coffee",
    note: "Led teams and daily workflow in Hoboken",
  },
];

// Honors and recognition — shown under Experience
export const honors = [
  { title: "Dean's List", detail: "Hudson County Community College" },
  { title: "Phi Theta Kappa", detail: "International honor society for two-year colleges" },
  { title: "Top 10% on Unsplash", detail: "By downloads — 18K+ downloads and 1.6M+ views" },
  { title: "Featured photograph", detail: "\"Cozy Corner for Coffee Lovers\" in Unsplash's Photos feature, 500K+ views" },
];

export const skills = [
  { group: "Languages", items: ["Python", "Dart", "JavaScript", "TypeScript", "C++", "SQL"] },
  { group: "Frameworks", items: ["Flutter", "React", "Firebase", "Vite"] },
  { group: "Data & Earth", items: ["Google Earth Engine", "GRACE", "MODIS", "SWOT", "GIS"] },
  { group: "Tools", items: ["Git", "Google Cloud", "VS Code", "LaTeX"] },
];

export const interests = ["Photography", "Guitar & accordion", "Vinyl collecting", "Soccer"];

// Shown large at the top of the photo section. `file` is the photo's file name
// (without extension) inside src/assets/photos/.
export const featuredPhoto = {
  file: "featured-cozy-corner",
  title: "Cozy Corner for Coffee Lovers",
  note: "Featured in Unsplash Photos · 500K+ views",
  place: "Hey Coffee People, Hoboken",
  // Your Unsplash profile, e.g. "https://unsplash.com/@yourname"
  unsplashUrl: "https://unsplash.com/@akroxas",
};

// Optional nicer captions, keyed by photo file name (without extension).
// Photos not listed here get a caption from their file name.
export const photoCaptions: Record<string, string> = {
  "01-manhattan-skyline": "Manhattan skyline",
  "02-tower-bridge-london": "Tower Bridge, London",
  "04-empire-state-at-night": "Empire State at night",
  "09-brooklyn-bridge": "Brooklyn Bridge",
  "10-new-york-ave": "New York Ave",
  "11-angel-of-the-waters-central-park": "Angel of the Waters, Central Park",
  "13-london-eye": "London Eye",
  "18-cappadocia-in-snow": "Cappadocia in snow",
  "20-toward-st-pauls": "Toward St Paul's",
};
