import { interests } from "../data/site";
import { photos } from "../data/photos";
import { SectionHead } from "./SectionHead";

export function Gallery() {
  return (
    <section id="photos" className="section section--line">
      <div className="wrap">
        <SectionHead index="—" label="Off the keyboard" title="Through my lens." />

        <p className="interests reveal">
          {interests.map((it, i) => (
            <span key={it}>
              {it}
              {i < interests.length - 1 && <i aria-hidden="true"> / </i>}
            </span>
          ))}
        </p>

        {photos.length > 0 && (
          <div className="gallery">
            {photos.map((p, i) => (
              <figure key={p.src} className="gallery__item reveal">
                <img src={p.src} alt={p.caption || `Photograph ${i + 1}`} loading="lazy" />
                <figcaption className="mono">
                  {String(i + 1).padStart(2, "0")}
                  {p.caption && ` — ${p.caption}`}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
