# akandasina.github.io

Personal portfolio of **Akanda Sina Kilicarslan**: Electrical & Computer Engineering at Rutgers, building mobile apps and satellite-data tools for food and water.

**Live:** https://akandasina.github.io

Built with React, TypeScript and Vite, styled with plain CSS. It has a black-and-white editorial design with a light/dark switch and deploys to GitHub Pages automatically on every push to `main`.

## Editing the content

Almost everything lives in **`src/data/site.ts`**: your bio, projects, experience, skills, links and status line. Change the text there, push, and the site rebuilds.

| To do this | Do this |
| --- | --- |
| Add gallery photos | Drop `.jpg` / `.png` / `.webp` files into `src/assets/photos/`. They appear automatically. A name like `golden-hour.jpg` becomes the caption "Golden hour". |
| Add a résumé button | Put `resume.pdf` in `public/`, then set `resumeUrl: "/resume.pdf"` in `site.ts`. |
| Add your portrait | Put e.g. `me.jpg` in `public/`, then set `portrait: "/me.jpg"`. |
| Link a project to its repo | Change that project's `link` in `site.ts`. |
| Change a project image | Replace the file in `public/projects/` (square-ish, transparent WebP/PNG works best). |

## Contact form

The form sends messages to the email in `site.ts` through [FormSubmit](https://formsubmit.co) (free, no account). **The first time someone sends a message, FormSubmit emails you a one-time activation link.** Click it, and every message after that lands in your inbox.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## Structure

```
src/
  data/site.ts        ← all the words
  data/photos.ts      ← auto-loads the gallery folder
  components/         ← one file per section
  hooks/useTheme.ts   ← light / dark switch (remembers the visitor's choice)
  styles.css          ← the whole design
public/
  projects/           ← project logos
  og.png              ← preview image when the link is shared
```
