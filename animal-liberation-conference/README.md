# animalliberationconference.com

Static rebuild of the [Animal Liberation Conference](https://www.animalliberationconference.com/) Squarespace site as a Next.js app (App Router, TypeScript strict, Tailwind v4, `output: "export"`).

## Development

```bash
pnpm dev     # dev server (no SSG) — or use the launch.json configs in .vscode/
pnpm build   # static export to ./out for production hosting
```

## Pages

- `/` — homepage (2025 conference + past conferences)
- `/what-is-alc` — About page
- `/contact` — contact form (new canonical URL)
- `/contact-2021` — meta-refresh redirect to `/contact` (old Squarespace URL)

## Notes / deliberately not rebuilt

- **`/schedule`** — exists on the live site (in sitemap.xml, not linked from nav) but renders no content beyond the footer. Not built.
- **`/home`** — a Squarespace blog collection that only serves an RSS feed. Not built.
- **`/search`** — Squarespace's built-in search. Not built.
- **Homepage photo gallery** (`#photos` section) — present in the live markup but renders zero items on the live site. Omitted.
- **Contact form submission** — the original posted to Squarespace's backend. The static rebuild opens the visitor's mail client (mailto to info@liberationconference.com) instead; swap in a form service (Formspree, Netlify Forms, …) if real submissions are needed.
- **Fonts** — the original uses Adobe fonts `sofia-pro` and `effra`. Free Google Fonts substitutes are used: Poppins (buttons/mobile nav) and Rubik (footer wordmark). Oswald and Abel match the original.
