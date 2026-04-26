import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Hobbies } from "@/components/portfolio/Hobbies";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akanda Sina Kilicarslan — Software Developer & CS Student" },
      {
        name: "description",
        content:
          "Portfolio of Akanda Sina Kilicarslan — Computer Science student building cross-platform apps and environmental data tools with Flutter, Python, and Google Earth Engine.",
      },
      { property: "og:title", content: "Akanda Sina Kilicarslan — Software Developer" },
      {
        property: "og:description",
        content:
          "Cross-platform apps and environmental data tools. Flutter, Python, Google Earth Engine.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
    </main>
  );
}
