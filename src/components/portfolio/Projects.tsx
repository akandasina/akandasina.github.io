import { ArrowUpRight, Smartphone, Satellite, Globe2, Waves } from "lucide-react";
import { SectionHeading } from "./About";

// Defining exactly what a project needs to have
interface Project {
  title: string;
  description: string;
  image: string;
  tag: string;
  stack: string[];
  link: string;
  icon: any;
  accent?: "blue" | "green";
}

const projects: Project[] = [
  {
    title: "KapKap: Food Rescue App",
    description: "A cross-platform mobile app built with Flutter and Firebase, optimized for real-time surplus discovery to minimize urban food waste.",
    image: "kapkap.png", 
    tag: "Mobile Development",
    stack: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/akandasina",
    icon: Smartphone
  },
  {
    title: "Vegetation Health (NDVI) Monitoring",
    description: "Advanced geospatial tool utilizing time series analysis of satellite data to track ecological shifts and vegetation health.",
    image: "ndvi.png",
    tag: "Remote Sensing",
    stack: ["GEE", "JavaScript", "GIS"],
    link: "https://github.com/akandasina",
    icon: Satellite,
    accent: "green"
  },
  {
    title: "Groundwater Stress Analysis",
    description: "Visualizing hydrological stress through GRACE satellite gravity anomalies to provide insights into water depletion.",
    image: "groundwater.png",
    tag: "Data Science",
    stack: ["GEE", "Python", "Data Viz"],
    link: "https://github.com/akandasina",
    icon: Globe2,
    accent: "blue"
  },
  {
    title: "SWOT Satellite Modeling",
    description: "Hydrological modeling of the Saint John River using SWOT data to enhance flood prediction and water resource management.",
    image: "swot.png",
    tag: "Climate Tech",
    stack: ["Climate Tech", "Modeling"],
    link: "https://github.com/akandasina",
    icon: Waves,
    accent: "blue"
  }
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="From mobile apps fighting food waste to satellite-driven climate dashboards."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => {
            const isBlue = p.accent === "blue";
            const isGreen = p.accent === "green";
            
            return (
              <article
                key={p.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {p.tag}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-border bg-surface-elevated px-2 py-1 font-mono text-[10px] text-foreground/80"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
