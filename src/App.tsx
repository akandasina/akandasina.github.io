import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { useReveal } from "./hooks/useReveal";

export function App() {
  useReveal();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}
