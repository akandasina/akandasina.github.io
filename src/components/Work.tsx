import { useRef, useState } from "react";
import { projects } from "../data/site";
import { SectionHead } from "./SectionHead";

export function Work() {
  const [open, setOpen] = useState<number | null>(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  const toggle = (i: number) => {
    const next = open === i ? null : i;
    setOpen(next);
    if (next === null) return;
    // Once the previous panel has closed, bring the opened project to the top of the screen
    window.setTimeout(() => {
      const el = items.current[i];
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top < 80 || top > window.innerHeight * 0.45) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: window.scrollY + top - 80, behavior: reduce ? "auto" : "smooth" });
      }
    }, 450);
  };

  return (
    <section id="work" className="section invert">
      <div className="wrap">
        <SectionHead index="02" label="Selected work" title="Things I've built." />

        <ol className="work">
          {projects.map((p, i) => {
            const isOpen = open === i;
            return (
              <li
                key={p.title}
                ref={(el) => {
                  items.current[i] = el;
                }}
                className={`work__item reveal ${isOpen ? "is-open" : ""}`}
              >
                <button
                  className="work__row"
                  aria-expanded={isOpen}
                  aria-controls={`work-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span className="work__num mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="work__title">{p.title}</span>
                  <span className="work__kind mono">{p.kind}</span>
                  <span className="work__plus" aria-hidden="true" />
                </button>

                <div id={`work-${i}`} className="work__panel" role="region" aria-label={p.title}>
                  <div className="work__inner">
                    <div className="work__text">
                      <p className="work__desc">{p.description}</p>
                      <ul className="work__points">
                        {p.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="work__aside">
                      <span className="label">Stack</span>
                      <ul className="tags">
                        {p.stack.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                      <a className="btn" href={p.link} target="_blank" rel="noreferrer">
                        {p.linkLabel} <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
