import { useRef, useState, type MouseEvent } from "react";
import { projects } from "../data/site";
import { SectionHead } from "./SectionHead";

export function Work() {
  const [active, setActive] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(0);
  const floatRef = useRef<HTMLDivElement>(null);

  // The preview image follows the cursor on desktop
  const onMove = (e: MouseEvent) => {
    const el = floatRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
  };

  return (
    <section id="work" className="section invert">
      <div className="wrap">
        <SectionHead index="02" label="Selected work" title="Things I've built." />

        <ol className="work" onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
          {projects.map((p, i) => {
            const isOpen = open === i;
            return (
              <li
                key={p.title}
                className={`work__item reveal ${isOpen ? "is-open" : ""}`}
                onMouseEnter={() => setActive(i)}
              >
                <button
                  className="work__row"
                  aria-expanded={isOpen}
                  aria-controls={`work-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="work__num mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="work__title">{p.title}</span>
                  <span className="work__kind mono">{p.kind}</span>
                  <span className="work__plus" aria-hidden="true" />
                </button>

                <div id={`work-${i}`} className="work__panel" role="region">
                  <div className="work__inner">
                    <img className="work__thumb" src={p.image} alt="" loading="lazy" />
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

      <div ref={floatRef} className={`work__float ${active !== null ? "is-on" : ""}`} aria-hidden="true">
        {projects.map((p, i) => (
          <img key={p.image} src={p.image} alt="" className={active === i ? "is-on" : ""} />
        ))}
      </div>
    </section>
  );
}
