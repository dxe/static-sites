# Coalition to End Factory Farming

Static site for the [Coalition to End Factory Farming](https://www.endfactoryfarming.vote), converted from Squarespace 
to Next.js (App Router) + Tailwind CSS v4 + TypeScript (strict). Built as a fully static export (SSG).

## Development

```bash
pnpm install
pnpm dev
```

Or use the `coalition-to-end-ff: debug full stack` launch configuration in VS Code (runs `next dev` with the debugger attached — no static export involved).

## Production build (static export)

```bash
pnpm build
```

`next.config.ts` sets `output: "export"`, so the build writes a fully static site to `out/` that can be hosted on any static file server.

## Notes

### File layout

```
coalition-to-end-ff/
  app/<path>/page.tsx        # one folder per route; site root = app/page.tsx
  app/layout.tsx             # renders Header/Footer around every page
  app/globals.css
  components/                # shared components
  embeds/                    # saved third-party embed HTML — DO NOT EDIT
  lib/embeds.ts              # readEmbed() helper
  public/images/<slug>/      # images, one folder per page
```

Page-local client components (if you truly need one) go in the page's own
folder, e.g. `app/faq/gallery-client.tsx`.

### Theme tokens (Tailwind classes)

| Token | Value | Use |
|---|---|---|
| `bg-ceff-blue` / `text-ceff-blue` | `#abf0ff` | hero bands, footer, buttons, callout boxes |
| `ceff-accent` | `#8ccedc` | hover accents |
| `ceff-dark` | `#456268` | rare dark teal accents |
| `ceff-ink` | `#484848` | ALL body text & headings (default body color already) |
| `font-heading` | Oswald | all headings (applied automatically to h1–h6) |
| `font-body` | Arial | default body font (automatic) |
| `font-button` | Archivo | buttons/labels (LinkButton applies it) |

### Typography — don't set font sizes on headings/paragraphs

`globals.css` already gives `h1`–`h4` and `body` the exact site scale (Oswald
700 uppercase headings, viewport-scaled sizes, Arial body with 0.05em
tracking). Just write `<h1>`, `<h2>`, `<p>` etc. — never re-specify
`text-4xl`/`font-bold`/`uppercase` on headings. Bold copy inside paragraphs
uses `<strong>`. Links inside copy: `<a className="underline">` (or `Link`
for internal).

### Shared components (import from `@/components/...`)

- **`Section`** — every content band.
  ```tsx
  import { Section } from "@/components/section";
  <Section>...</Section>                      // white, 1200px column (site default)
  <Section bg="blue">...</Section>            // light-blue band
  <Section width="narrow">...</Section>       // 800px column for text-heavy pages
  <Section id="cafo-map">...</Section>        // anchor target
  ```
  Inside a Section, space blocks with `space-y-5` divs / `mt-10`.

- **`PageHero`** — the band under the transparent header (most pages start
  with one).
  ```tsx
  import { PageHero } from "@/components/page-hero";
  <PageHero title="FAQ" />                                        // light-blue band + centered H1
  <PageHero title="The CAFOs in Sonoma County" image={heroImg}    // photo hero, white H1, dark overlay
            imageAlt="" overlayOpacity={40} caption="Photo credit..." />
  <PageHero title="...">extra content…</PageHero>                 // children render under the title
  ```
  Pages that start immediately with white content (no colored band) skip
  PageHero — but the header is transparent/absolute, so give the first
  section top padding: wrap content in `<div className="pt-28 lg:pt-20">`
  inside the first Section.

- **`LinkButton`** — all buttons.
  ```tsx
  import { LinkButton } from "@/components/link-button";
  <LinkButton href="/cafos">See the factory farms</LinkButton>        // light-blue fill (primary)
  <LinkButton href="/donate" variant="outline">Donate</LinkButton>    // transparent + border
  ```

- **`FigureImage`** — images with captions.
  ```tsx
  import { FigureImage } from "@/components/figure-image";
  import pic from "@/public/images/<slug>/pic.jpg";
  <FigureImage src={pic} alt="..." caption="..."
               captionPosition="overlay" imgClassName="aspect-4/3 object-cover" />
  ```
  `captionPosition="overlay"` = white text over image bottom (site default);
  `"below"` = small text under the image.

- **`Accordion`** — FAQ-style expandable items.
  ```tsx
  import { Accordion, AccordionItem } from "@/components/accordion";
  <Accordion>
    <AccordionItem title="What is a CAFO?"><p>…</p><p>…</p></AccordionItem>
  </Accordion>
  ```

- **`VideoEmbed`** — YouTube/Vimeo iframes.
  ```tsx
  import { VideoEmbed } from "@/components/video-embed";
  <VideoEmbed src="https://www.youtube.com/embed/VIDEOID" title="..." />
  ```

- **`SquarespaceEmbed`** — third-party embed code (map, calendar, forms,
  dashboards). Embed HTML lives in `embeds/<name>.txt` (do not edit or
  inline it); render it like this (server page + client embed component;
  scripts execute in order automatically):
  ```tsx
  import { readEmbed } from "@/lib/embeds";
  import { SquarespaceEmbed } from "@/components/squarespace-embed";
  export default function Page() {
    const html = readEmbed("cafo-map-embed.txt");
    return <Section><SquarespaceEmbed html={html} /></Section>;
  }
  ```
  Third-party widgets may not fully render headless — the bar is: container
  present, no console errors from our code.

### Images

- Store page images in `public/images/<slug>/`, sanitized to lowercase-kebab
  filenames (no spaces/unicode).
- Import statically and use `next/image` (dimensions come free):
  ```tsx
  import hero from "@/public/images/faq/hero.jpg";
  <Image src={hero} alt="..." />
  ```
  For image grids, follow the pattern in `components/home-page.tsx`.

### Metadata

```tsx
import type { Metadata } from "next";
export const metadata: Metadata = { title: "...", description: "..." };
```
Titles should NOT include the `— Coalition to End Factory Farming` suffix
(the layout template appends it), except for the homepage, which sets the
full title. Omit `description` if the page has none.

### Links

- Internal links: root-relative (`/faq`, `/cafos#cafo-map`) via `next/link`.
  Never link to `endfactoryfarming.vote`.
- External links: plain `<a>` with `target="_blank" rel="noopener"`.
- Anchors used by the nav (`/cafos` defines ids `cafo-map`, `cafo-eggs`,
  `cafo-dairy`, `cafo-poultry`).

### Conventions

- Keep tables horizontally scrollable on mobile: wrap in
  `<div className="overflow-x-auto">`, style with
  `<table className="w-full border-collapse text-[0.85rem]"><td className="border border-ceff-ink/40 p-2">`.

### Reference implementation

`components/home-page.tsx` (used by `app/page.tsx` and `/home`) demonstrates
hero treatment, Section usage, FigureImage grid, LinkButton, the supporter
logo grid, and image import conventions.
