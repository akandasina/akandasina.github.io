import { experience, honors } from "../data/site";
import { SectionHead } from "./SectionHead";

export function Experience() {
  return (
    <section id="experience" className="section section--line wrap">
      <SectionHead index="03" label="Experience" title="Where I've been." />

      <ul className="xp">
        {experience.map((x) => (
          <li key={x.title + x.place} className="xp__row reveal">
            <span className="xp__period mono">{x.period}</span>
            <span className="xp__title">{x.title}</span>
            <span className="xp__place">{x.place}</span>
            <span className="xp__note">{x.note}</span>
          </li>
        ))}
      </ul>

      <div className="honors">
        <span className="label reveal">Honors &amp; recognition</span>
        <ul className="honors__list">
          {honors.map((h, i) => (
            <li key={h.title} className="honors__item reveal">
              <span className="honors__num mono">{String(i + 1).padStart(2, "0")}</span>
              <span className="honors__title">{h.title}</span>
              <span className="honors__detail">{h.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
