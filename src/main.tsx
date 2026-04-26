import React from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Hobbies } from "@/components/portfolio/Hobbies";
import { Contact } from "@/components/portfolio/Contact";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
    </main>
  </React.StrictMode>
);
