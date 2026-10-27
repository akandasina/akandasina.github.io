import { person } from "../data/site";
import { FitText } from "./FitText";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__intro wrap">
        <p className="hero__lede reveal">
          Developer building apps and satellite-data tools for <em>food</em> and{" "}
          <em>water</em>.
        </p>
        <p className="hero__status mono reveal">
          <span className="pulse" aria-hidden="true" />
          {person.status}
        </p>
      </div>

      <h1 className="hero__name" aria-label={`${person.firstName} ${person.lastName}`}>
        <span className="hero__first reveal">
          <em>{person.firstName}</em>
        </span>
        <span className="hero__last reveal" aria-hidden="true">
          <FitText>{person.lastName}</FitText>
        </span>
      </h1>

      <div className="hero__meta wrap">
        <div className="reveal">
          <span className="label">Role</span>
          <p>{person.role}</p>
        </div>
        <div className="reveal">
          <span className="label">Focus</span>
          <p>{person.focus}</p>
        </div>
        <div className="reveal">
          <span className="label">Elsewhere</span>
          <p>
            <a className="link-line" href={person.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            ,{" "}
            <a className="link-line" href={person.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            {person.resumeUrl && (
              <>
                ,{" "}
                <a className="link-line" href={person.resumeUrl} target="_blank" rel="noreferrer">
                  Résumé
                </a>
              </>
            )}
          </p>
        </div>
        <a className="hero__scroll reveal" href="#about" aria-label="Scroll to about">
          <span className="label">Scroll</span>
          <span className="hero__arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
