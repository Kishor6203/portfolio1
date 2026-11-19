# Kishor Kumar — Frontend Engineer Portfolio

A premium, responsive React + TypeScript portfolio built with Vite, Tailwind CSS, Framer Motion, React Router, Lucide, Recharts, React Hook Form, Zod and React Helmet Async.

## Quick start

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Personalize before publishing

1. **Profile photo:** place your real portrait at `public/images.png`. The hero reads this single path from `src/data/personal.ts` (`profileImage`). No generated or stock face is included; until you add your photograph, the hero shows a KK monogram placeholder.
2. **Resume:** replace `public/resume/Resume.pdf` with your latest approved PDF. A starter resume PDF is included and contains only the facts supplied in the brief; update it with any additional verified details before sharing publicly.
3. **Social profiles:** set the exact public LinkedIn and GitHub URLs in `src/data/personal.ts`. They are intentionally generic profile roots until you provide your actual URLs.
4. **Project links:** add verified `liveUrl` and `githubUrl` values to the matching entries in `src/data/projects.ts`. Until then the cards correctly show “Project overview” rather than fabricated destinations.
5. **Contact form (optional):** copy `.env.example` to `.env` and set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`. Configure your EmailJS template with `from_name`, `reply_to`, `subject`, and `message`. Without these values, submission opens the visitor's email client with the message prefilled.

## Structure

- `src/components/layout` — sticky responsive navigation and footer
- `src/components/sections` — hero, about, skills, experience, projects, impact, education and contact
- `src/components/ui` — reusable section heading, skill and metric components
- `src/data` — centralized personal details, skills, experience and project content
- `src/lib` — reusable motion variants
- `public/images` — add your profile photograph here
- `public/resume` — replace the starter PDF with your current resume

## Notes

- The finance, healthcare and streaming project previews are original illustrative UI compositions, not screenshots or claims about deployed products.
- Metric values and work details reflect the information provided in the project brief. Validate all details and add only accurate public-facing information.
- Update the canonical domain in `public/robots.txt` and `public/sitemap.xml` before launch.
- For static hosting, deploy the generated `dist/` directory. Configure the host to serve `index.html` for unknown routes if you add client-side routes later.
