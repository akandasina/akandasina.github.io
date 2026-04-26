import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-gradient pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-primary" />
            Available for Summer 2026 internships
          </span>
        </div>

        <h1
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up"
          style={{ animationDelay: "80ms" }}
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient-primary">Akanda Sina Kilicarslan</span>
          <span className="ml-1 inline-block w-[3px] h-[0.9em] translate-y-1 bg-primary animate-blink align-middle" />
        </h1>

        <p
          className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl animate-fade-in-up"
          style={{ animationDelay: "160ms" }}
        >
          <span className="font-medium text-foreground">
            Computer Science Student & Software Developer.
          </span>
        </p>

        <p
          className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg animate-fade-in-up"
          style={{ animationDelay: "220ms" }}
        >
          Passionate about building cross-platform applications and leveraging data to solve
          environmental challenges. Currently migrating a food-waste reduction app to Flutter.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-3 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-elevated/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>

          <div className="ml-2 flex items-center gap-1">
            <a
              href="https://github.com/akandasina"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/akandasina"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
