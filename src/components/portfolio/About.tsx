import { GraduationCap, Sparkles, Users } from "lucide-react";

const profileImg = null;

const stats = [
  { icon: GraduationCap, label: "GPA in Computer Science", value: "3.9" },
  { icon: Users, label: "Years in hospitality leadership", value: "4+" },
  { icon: Sparkles, label: "Goal", value: "AI Engineer" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="A builder at the intersection of code & climate." />

        <div className="mt-12 grid items-start gap-10 md:grid-cols-[280px_1fr] md:gap-14 lg:grid-cols-[320px_1fr]">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-accent-blue/30 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-glow">
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="Akanda Sina Kilicarslan"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 via-surface to-accent-blue/15">
                  <span className="font-display text-6xl font-bold text-gradient-primary">AK</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="text-base text-foreground/85 sm:text-lg leading-relaxed">
              I&apos;m a Computer Science student maintaining a{" "}
              <span className="font-semibold text-primary">3.9 GPA</span>, with{" "}
              <span className="font-semibold text-primary">4+ years</span> of leadership and
              workflow optimization experience in high-volume hospitality. That dual background —
              shipping code and running fast-paced teams — taught me how to break complex problems
              into clean, executable steps.
            </p>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
              My drive is to become an{" "}
              <span className="font-semibold text-foreground">AI Engineer</span> working on
              environmental technology — combining satellite data, machine learning, and
              well-crafted apps to make sustainability tools that real people use.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <s.icon className="h-5 w-5 text-primary" />
                  <dt className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        // {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </div>
  );
}
