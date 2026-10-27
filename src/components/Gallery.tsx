import { featuredPhoto, interests, photoCaptions } from "../data/site";
import { splitPhotos } from "../data/photos";
import { SectionHead } from "./SectionHead";

export function Gallery() {
  const { featured, rest } = splitPhotos(featuredPhoto.file);

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

        {featured && (
          <figure className="featured reveal">
            <img src={featured.src} alt={featuredPhoto.title} loading="lazy" />
            <figcaption>
              <span className="label">Featured</span>
              <span className="featured__title">{featuredPhoto.title}</span>
              <span className="featured__note">
                {featuredPhoto.note} · {featuredPhoto.place}
              </span>
              {featuredPhoto.unsplashUrl && (
                <a
                  className="link-line featured__link"
                  href={featuredPhoto.unsplashUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  More on Unsplash ↗
                </a>
              )}
            </figcaption>
          </figure>
        )}

        {rest.length > 0 && (
          <div className="gallery">
            {rest.map((p, i) => {
              const caption = photoCaptions[p.name] ?? p.caption;
              return (
                <figure key={p.src} className="gallery__item reveal">
                  <img src={p.src} alt={caption || `Photograph ${i + 1}`} loading="lazy" />
                  <figcaption className="mono">
                    {String(i + 1).padStart(2, "0")}
                    {caption && ` — ${caption}`}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
