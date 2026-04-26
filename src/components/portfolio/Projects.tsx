import { ArrowUpRight, Smartphone, Satellite, CloudRain, Leaf, Globe2 } from "lucide-react";
import { SectionHeading } from "./About";

const projects = [
  {
    icon: Smartphone,
    title: "KapKap App",
    tag: "Mobile · Sustainability",
    description:
      "A cross-platform mobile app built with Flutter and Firebase designed to reduce food waste by connecting local communities with surplus food in real time.",
    stack: ["Flutter", "Dart", "Firebase"],
    accent: "primary" as const,
    link: "#",
  },
  {
    icon: Leaf,
    title: "NDVI Monitoring — New Jersey",
    tag: "Geospatial · Vegetation",
    description:
      "Interactive cloud tool to visualize NDVI vegetation health across New Jersey using the MODIS/061/MOD13Q1 dataset, with time series charts from 2000 to present.",
    stack: ["Google Earth Engine", "MODIS", "JavaScript"],
    accent: "primary" as const,
    link: "https://ee-akandasina20.projects.earthengine.app/view/njnvdi",
  },
  {
    icon: Satellite,
    title: "Groundwater Monitoring — NJ",
    tag: "Geospatial · Hydrology",
    description:
      "Cloud-based app visualizing Total Water Storage (TWS) over New Jersey using GRACE satellite data, with dynamic maps and time series from 2002–2017.",
    stack: ["Google Earth Engine", "GRACE", "JavaScript"],
    accent: "blue" as const,
    link: "https://ee-akandasina20.projects.earthengine.app/view/njgroundwater",
  },
  {
    icon: CloudRain,
    title: "Historical Rainfall Portal — NJ",
    tag: "Data Visualization",
    description:
      "Precipitation mapping tool built on the ECMWF/ERA5/DAILY dataset, enabling exploration of multi-decade rainfall trends across New Jersey from 1979–2020.",
    stack: ["Google Earth Engine", "ERA5", "JavaScript"],
    accent: "primary" as const,
    link: "https://ee-akandasina20.projects.earthengine.app/view/njrain",
  },
  {
    icon: Globe2,
    title: "Climate Change Monitoring — Turkey",
    tag: "Climate · Time Series",
    description:
      "Application to visualize monthly precipitation across Turkey. Users can click any point to generate a time series chart, offering insights into regional climate variation.",
    stack: ["Google Earth Engine", "JavaScript"],
    accent: "blue" as const,
    link: "https://ee-akandasina20.projects.earthengine.app/view/climatechange",
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
