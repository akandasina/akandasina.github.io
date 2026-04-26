import { Code2, Wrench, Cloud } from "lucide-react";
import { SectionHeading } from "./About";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "Dart", "JavaScript", "TypeScript", "C++", "CSS"],
  },
  {
    icon: Wrench,
    title: "Frameworks & Tools",
    items: ["Flutter", "React", "Tailwind CSS", "Firebase", "Google Earth Engine", "VS Code", "Git"],
  },
  {
    icon: Cloud,
    title: "Data & Cloud",
    items: ["Google Cloud", "MODIS", "GRACE Satellite Data"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-surface/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Skills" title="Tools I reach for." />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface-elevated px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
