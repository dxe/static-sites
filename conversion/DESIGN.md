# Design system & conventions — coalition-to-end-ff

Read this fully before converting a page. Follow it literally. The app lives in
`coalition-to-end-ff/` (Next.js App Router, TypeScript, Tailwind v4, `output: "export"` SSG).

## File layout

```
coalition-to-end-ff/
  app/<path>/page.tsx        # one folder per route; site root = app/page.tsx
  app/layout.tsx             # shared — DO NOT EDIT (renders Header/Footer around every page)
  app/globals.css            # shared — DO NOT EDIT
  components/                # shared components — DO NOT EDIT, import them
  embeds/                    # saved third-party embed HTML — DO NOT EDIT
  lib/embeds.ts              # readEmbed() helper
  public/images/<slug>/      # downloaded images for YOUR page only
```

Page-local client components (if you truly need one) go in your page folder,
e.g. `app/faq/gallery-client.tsx`.

## Theme tokens (Tailwind classes)

| Token | Value | Use |
|---|---|---|
| `bg-ceff-blue` / `text-ceff-blue` | `#abf0ff` | hero bands, footer, buttons, callout boxes |
| `ceff-accent` | `#8ccedc` | hover accents |
| `ceff-dark` | `#456268` | rare dark teal accents |
| `ceff-ink` | `#484848` | ALL body text & headings (default body color already) |
| `font-heading` | Oswald | all headings (applied automatically to h1–h6) |
| `font-body` | Arial | default body font (automatic) |
| `font-button` | Archivo | buttons/labels (LinkButton applies it) |

## Typography — DO NOT set font sizes on headings/paragraphs

`globals.css` already gives `h1`–`h4` and `body` the exact live-site scale
(Oswald 700 uppercase headings, viewport-scaled sizes, Arial body with 0.05em
tracking). Just write `<h1>`, `<h2>`, `<p>` etc. **Never** re-specify
`text-4xl`/`font-bold`/`uppercase` on headings. Bold copy inside paragraphs
uses `<strong>`. Links inside copy: `<a className="underline">` (or `Link` for
internal). Reproduce copy VERBATIM from the scraped HTML (keep typographic
quotes like `’`).

## Shared components (import from `@/components/...`)

### `Section` — every content band
```tsx
import { Section } from "@/components/section";
<Section>...</Section>                      // white, 1200px column (site default)
<Section bg="blue">...</Section>            // light-blue band
<Section width="narrow">...</Section>       // 800px column for text-heavy pages
<Section id="cafo-map">...</Section>        // anchor target
```
Inside a Section, space blocks with `space-y-5` divs / `mt-10` like the homepage.

### `PageHero` — the band under the transparent header (most pages start with one)
```tsx
import { PageHero } from "@/components/page-hero";
<PageHero title="FAQ" />                                        // light-blue band + centered H1
<PageHero title="The CAFOs in Sonoma County" image={heroImg}    // photo hero, white H1, dark overlay
          imageAlt="" overlayOpacity={40} caption="Photo credit..." />
<PageHero title="...">extra content…</PageHero>                 // children render under the title
```
Pages whose live version starts immediately with white content (no colored
band) skip PageHero — but note the header is transparent/absolute, so give the
first section top padding: wrap content in `<div className="pt-28 lg:pt-20">`
inside the first Section.

### `LinkButton` — all Squarespace buttons
```tsx
import { LinkButton } from "@/components/link-button";
<LinkButton href="/cafos">See the factory farms</LinkButton>        // light-blue fill (primary)
<LinkButton href="/donate" variant="outline">Donate</LinkButton>    // transparent + border
```

### `FigureImage` — images with captions
```tsx
import { FigureImage } from "@/components/figure-image";
import pic from "@/public/images/<slug>/pic.jpg";
<FigureImage src={pic} alt="..." caption="verbatim caption"
             captionPosition="overlay" imgClassName="aspect-4/3 object-cover" />
```
`captionPosition="overlay"` = white text over image bottom (live-site default);
`"below"` = small text under the image.

### `Accordion` — FAQ-style expandable items
```tsx
import { Accordion, AccordionItem } from "@/components/accordion";
<Accordion>
  <AccordionItem title="What is a CAFO?"><p>…</p><p>…</p></AccordionItem>
</Accordion>
```

### `VideoEmbed` — YouTube/Vimeo iframes
```tsx
import { VideoEmbed } from "@/components/video-embed";
<VideoEmbed src="https://www.youtube.com/embed/VIDEOID" title="..." />
```
Extract the video ID from the scraped HTML (Squarespace stores it in
`data-block-json` or an iframe `src`). Use the `/embed/` URL form.

### `SquarespaceEmbed` — third-party embed code (map, calendar, forms, dashboards)
If your page has an embed file listed in your prompt, it was copied verbatim to
`coalition-to-end-ff/embeds/<name>.txt`. Render it like this (server page +
client embed component; scripts execute in order automatically):
```tsx
import { readEmbed } from "@/lib/embeds";
import { SquarespaceEmbed } from "@/components/squarespace-embed";
export default function Page() {
  const html = readEmbed("cafo-map-embed.txt");
  return <Section><SquarespaceEmbed html={html} /></Section>;
}
```
Do NOT edit or inline the embed code. Third-party widgets may not fully render
headless — the bar is: container present, no console errors from OUR code.

## Images

1. Find the image URLs in the scraped HTML (`images.squarespace-cdn.com/...`).
   ⚠️ Squarespace fluid-engine DOM order often does NOT match visual order
   (blocks are placed via CSS `grid-area`). Trust the live screenshots (or the
   `grid-area` values in the embedded `<style>`) for left-to-right/top-to-bottom
   order, not DOM sequence.
2. Download with curl into `coalition-to-end-ff/public/images/<slug>/`,
   **stripping query params** (`?format=...`). Sanitize filenames to
   lowercase-kebab (no spaces/`%2B`/unicode). If a source PNG is >2MB, append
   `?format=1500w` instead to get a web-sized version.
   ⚠️ The CDN silently serves WebP unless you send an Accept header — use
   `curl -H "Accept: image/jpeg"` (or `image/png`) so the saved file matches
   its extension. Verify with `file <name>` and rename if the real codec
   differs (some `.png` URLs are actually JPEG).
3. Import statically and use `next/image` (dimensions come free):
   ```tsx
   import hero from "@/public/images/faq/hero.jpg";
   <Image src={hero} alt="..." />
   ```
   For image grids copy the homepage pattern (`components/home-page.tsx`).

## Metadata

```tsx
import type { Metadata } from "next";
export const metadata: Metadata = { title: "...", description: "..." };
```
Use the scraped `<title>` MINUS the `— Coalition to End Factory Farming`
suffix (the layout template appends it). If the scraped title has no suffix
(e.g. the homepage), set the full title. Omit `description` if the page has none.

## Links

- Internal links: root-relative (`/faq`, `/cafos#cafo-map`) via `next/link`.
  NEVER link to `endfactoryfarming.vote`.
- External links: plain `<a>` with `target="_blank" rel="noopener"`.
- Anchors used by the nav (`/cafos` page must define ids `cafo-map`,
  `cafo-eggs`, `cafo-dairy`, `cafo-poultry`).

## Do / Don't

- DO look at all three live screenshots before and after coding.
- DO keep section order, background colors (white vs `bg-ceff-blue`), column
  counts and text alignment identical to the live page at all three widths.
- DO make tables horizontally scrollable on mobile: wrap in
  `<div className="overflow-x-auto">`, style with
  `<table className="w-full border-collapse text-[0.85rem]"><td className="border border-ceff-ink/40 p-2">`.
- DON'T edit shared files (layout, globals.css, components/, configs, embeds/).
  Request changes in your report instead.
- DON'T add fonts, colors, or npm packages.
- DON'T use `"use client"` on the page itself; only in small page-local
  components when interactivity is genuinely required.
- DON'T fetch anything at request time; pages must be fully static.
- DON'T invent content, reorder sections, or paraphrase copy.

## Reference implementation

Study `coalition-to-end-ff/components/home-page.tsx` (used by `app/page.tsx`
and `/home`) — hero treatment, Section usage, FigureImage grid, LinkButton,
supporter logo grid, image import conventions.
