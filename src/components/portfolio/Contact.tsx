import { useState } from "react";
import { Github, Linkedin, Mail, Send, Leaf } from "lucide-react";
import { SectionHeading } from "./About";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
  eyebrow="Contact"
  title="Let's build something useful."
  description="Currently looking for internships and collaborations at the intersection of AI and sustainability. If you're building tech for good, let's talk."
/>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            <a
              href="mailto:akandasine@outlook.com"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-glow"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Email</p>
                <p className="font-mono text-sm text-foreground group-hover:text-primary">
                  akandasine@outlook.com
                </p>
              </div>
            </a>
            <a
              href="https://github.com/akandasina"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                <Github className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">GitHub</p>
                <p className="font-mono text-sm">github.com/akandasina</p>
              </div>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent-blue/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-blue/10 text-accent-blue ring-1 ring-accent-blue/30">
                <Linkedin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">LinkedIn</p>
                <p className="font-mono text-sm">linkedin.com/in/akandasina</p>
              </div>
            </a>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3500);
            }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" id="name">
                <input
                  id="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border border-border bg-surface-elevated px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </Field>
              <Field label="Email" id="email">
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-border bg-surface-elevated px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message" id="message">
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="What are you working on?"
                  className="w-full resize-none rounded-md border border-border bg-surface-elevated px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </Field>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              {sent ? "Sent — talk soon!" : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-20 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Leaf className="h-4 w-4 text-primary" />
            <span>
              © {new Date().getFullYear()} Akanda Sina Kilicarslan. Built with care.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <SocialIcon href="https://github.com/akandasina" label="GitHub">
              <Github className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="mailto:akanda@example.com" label="Email">
              <Mail className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>
      </footer>
    </section>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
    >
      {children}
    </a>
  );
}
