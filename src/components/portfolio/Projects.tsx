interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  links: {
    github: string;
    demo?: string;
  };
}
import { ArrowUpRight, Smartphone, Satellite, CloudRain, Leaf, Globe2 } from "lucide-react";
import { SectionHeading } from "./About";

const projects: Project[] = [
  {
    title: "KapKap: Food Rescue App",
    description: "A cross-platform mobile app built with Flutter and Firebase, optimized for real-time surplus discovery to minimize urban food waste.",
    image: "/kapkap.png", 
    tags: ["Flutter", "Firebase", "Dart", "Mobile Dev"],
    github: "https://github.com/akandasina",
  },
  {
    title: "Vegetation Health (NDVI) Monitoring",
    description: "Advanced geospatial tool utilizing time series analysis of satellite data to track ecological shifts and vegetation health.",
    image: "/ndvi.png",
    tags: ["GEE", "JavaScript", "Remote Sensing", "GIS"],
    github: "https://github.com/akandasina",
  },
  {
    title: "Groundwater Stress Analysis",
    description: "Visualizing hydrological stress through GRACE satellite gravity anomalies to provide insights into water depletion.",
    image: "/groundwater.png",
    tags: ["GEE", "Python", "Hydrology", "Data Visualization"],
    github: "https://github.com/akandasina",
  },
  {
    title: "SWOT Satellite Modeling",
    description: "Hydrological modeling of the Saint John River using SWOT data to enhance flood prediction and water resource management.",
    image: "/swot.png",
    tags: ["Climate Tech", "Modeling", "Environmental Data"],
    github: "https://github.com/akandasina",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="From mobile apps fighting food waste to satellite-driven climate dashboards across New Jersey and Turkey."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const isBlue = p.accent === "blue";
            return (
              <article
                key={p.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 ${
                  isBlue ? "hover:shadow-glow-blue hover:border-accent-blue/50" : "hover:shadow-glow hover:border-primary/50"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                    isBlue ? "via-accent-blue/60" : "via-primary/60"
                  } to-transparent opacity-0 transition-opacity group-hover:opacity-100`}
                />
                <div className="flex items-start justify-between">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl ring-1 ${
                      isBlue
                        ? "bg-accent-blue/10 text-accent-blue ring-accent-blue/30"
                        : "bg-primary/10 text-primary ring-primary/30"
                    }`}
                  >
                    <p.icon className="h-5 w-5" />
                  </span>
                  <a
                    href={p.link}
                    target={p.link.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={`Open ${p.title}`}
                    className="grid h-8 w-8 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground opacity-60 group-hover:opacity-100"
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
