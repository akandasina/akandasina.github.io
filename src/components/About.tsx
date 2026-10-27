import { about, person } from "../data/site";
import { SectionHead } from "./SectionHead";

export function About() {
  return (
    <section id="about" className="section wrap">
      <SectionHead index="01" label="About" title="Code, climate & coffee." />

      <div className="grid">
        <div className="about__side">
          {person.portrait && (
            <figure className="about__portrait reveal">
              <img src={person.portrait} alt={`${person.firstName} ${person.lastName}`} />
            </figure>
          )}
        </div>

        <div className="about__body">
          <p className="statement reveal">{about.statement}</p>
          <div className="about__cols">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="reveal">
                {p}
              </p>
            ))}
          </div>

          <dl className="stats">
            {about.stats.map((s) => (
              <div key={s.label} className="stats__item reveal">
                <dd>{s.value}</dd>
                <dt>{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
