import { skills } from "../data/site";
import { SectionHead } from "./SectionHead";

export function Skills() {
  return (
    <section id="skills" className="section section--line wrap">
      <SectionHead index="04" label="Skills" title="Tools I reach for." />

      <div className="skills">
        {skills.map((g) => (
          <div key={g.group} className="skills__col reveal">
            <span className="label">{g.group}</span>
            <ul>
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
