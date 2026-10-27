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
    { value: "4+", label: "Years leading hospitality teams" },
    { value: "PTK", label: "Phi Theta Kappa · Dean's List" },
  ],
};

export type Project = {
  title: string;
  kind: string;
  description: string;
  points: string[];
  stack: string[];
  image: string;
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
    image: "/projects/kapkap.webp",
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
    image: "/projects/ndvi.webp",
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
    image: "/projects/groundwater.webp",
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
    image: "/projects/swot.webp",
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
    note: "Dean's List · Phi Theta Kappa",
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

export const skills = [
  { group: "Languages", items: ["Python", "Dart", "JavaScript", "TypeScript", "C++", "SQL"] },
  { group: "Frameworks", items: ["Flutter", "React", "Firebase", "Vite"] },
  { group: "Data & Earth", items: ["Google Earth Engine", "GRACE", "MODIS", "SWOT", "GIS"] },
  { group: "Tools", items: ["Git", "Google Cloud", "VS Code", "LaTeX"] },
];

export const interests = ["Photography", "Guitar & accordion", "Vinyl collecting", "Soccer"];
