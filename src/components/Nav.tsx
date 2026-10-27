import { useEffect, useState } from "react";
import { person } from "../data/site";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { n: "01", name: "About", href: "#about" },
  { n: "02", name: "Work", href: "#work" },
  { n: "03", name: "Experience", href: "#experience" },
  { n: "04", name: "Skills", href: "#skills" },
  { n: "05", name: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="nav">
        <a href="#top" className="nav__brand" aria-label="Back to top">
          <em>{person.firstName.split(" ")[0]}</em> {person.lastName}
        </a>

        <nav className="nav__links" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-line">
              <sup>{l.n}</sup>
              {l.name}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <ThemeToggle />
          <button
            className="nav__menu"
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>

      <div id="menu" className={`menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="menu__top">
          <span className="mono">Index</span>
          <button className="nav__menu" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            Close
          </button>
        </div>
        <nav className="menu__links" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <sup>{l.n}</sup>
              {l.name}
            </a>
          ))}
        </nav>
        <div className="menu__foot mono">
          <a href={`mailto:${person.email}`} tabIndex={open ? 0 : -1}>
            {person.email}
          </a>
        </div>
      </div>
    </>
  );
}
