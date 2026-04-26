import { Camera, Music, Disc3, Trophy } from "lucide-react";
import { SectionHeading } from "./About";

// To add gallery photos: drop files into src/assets/photos/ (e.g. photo1.jpg),
// import them at the top of this file, then set `src` on any tile below.
//   import photo1 from "@/assets/photos/photo1.jpg";
//   ...then in the array: { h: 280, hue: 158, label: "City lines", src: photo1 },

type Photo = { h: number; hue: number; label: string; src?: string };

const photos: Photo[] = [
  { h: 280, hue: 158, label: "Urban Exploration", src: "/akanda-kilicarslan-OicNvF69wYM-unsplash.jpg" },
  { h: 380, hue: 220, label: "Nature Path", src: "/akanda-kilicarslan-H7LSySLGj-k-unsplash.jpg" },
  { h: 240, hue: 30, label: "Golden Hour", src: "/akanda-kilicarslan-2nh34yJAZIY-unsplash.jpg" },
  { h: 320, hue: 190, label: "Perspective", src: "/akanda-kilicarslan-3k4J5ul0d-4-unsplash.jpg" },
  { h: 360, hue: 280, label: "Street Night", src: "/akanda-kilicarslan-_FWvNY0y76c-unsplash.jpg" },
  { h: 260, hue: 130, label: "Detail", src: "/akanda-kilicarslan-cX2ifNIH2VA-unsplash (2).jpg" },
  { h: 300, hue: 200, label: "Atmosphere", src: "/akanda-kilicarslan-syAht_KxcO8-unsplash.jpg" },
  { h: 340, hue: 90, label: "Landscape", src: "/DSC05998.jpg" },
  { h: 290, hue: 340, label: "Architecture", src: "/DSC09938.jpg" },
  { h: 360, hue: 50, label: "Moment", src: "/DSC01822.jpg" },
  { h: 250, hue: 170, label: "Light", src: "/DSC04960.jpg" },
  { h: 320, hue: 250, label: "Shadows", src: "/DSC05650.jpg" },
];

const interests = [
  { icon: Music, label: "Guitar & Accordion" },
  { icon: Disc3, label: "Vinyl Collecting" },
  { icon: Trophy, label: "Soccer" },
  { icon: Camera, label: "Photography" },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="scroll-mt-20 bg-surface/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Hobbies"
          title="Off the keyboard."
          description="Urban and nature photography, music, and time on the pitch."
        />

        <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:_balance]">
          {photos.map((p, i) => (
            <figure
              key={i}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border transition-all hover:-translate-y-0.5 hover:border-primary/40"
              style={{ height: `${p.h}px` }}
            >
              {p.src ? (
                <div className="relative h-full w-full">
                  <img
                    src={p.src}
                    alt={p.label}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-2 left-3 flex items-center gap-1.5 rounded bg-background/60 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/90 backdrop-blur-sm">
                    <Camera className="h-3 w-3" />
                    {p.label}
                  </figcaption>
                </div>
              ) : (
                <div
                  className="relative h-full w-full"
                  style={{
                    background: `linear-gradient(135deg, oklch(0.32 0.08 ${p.hue}) 0%, oklch(0.22 0.05 ${p.hue}) 60%, oklch(0.18 0.02 ${p.hue + 30}) 100%)`,
                  }}
                >
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <figcaption className="absolute bottom-2 left-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-foreground/70">
                    <Camera className="h-3 w-3" />
                    {p.label}
                  </figcaption>
                </div>
              )}
            </figure>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((it) => (
            <div
              key={it.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 transition-colors hover:border-primary/40"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                <it.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
