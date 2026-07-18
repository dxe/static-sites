# berkeley-arc

Static site for the [Berkeley Animal Rights Center](https://www.berkeleyarc.com/), converted from Squarespace to Next.js (App Router) + Tailwind CSS v4 + TypeScript (strict). Built as a fully static export (SSG).

## Pages

- `/` — homepage (hero, who we are, what we're about, map, newsletter sign-up)
- `/events` — Google Calendar embed
- `/membership` — Funraise donation buttons + ARC T-shirt
- `/sign-up` — newsletter sign-up form

## Development

```bash
pnpm install
pnpm dev
```

Or use the `berkeley-arc: debug full stack` launch configuration in VS Code (runs `next dev` with the debugger attached — no static export involved).

## Production build (static export)

```bash
pnpm build
```

`next.config.ts` sets `output: "export"`, so the build writes a fully static site to `out/` that can be hosted on any static file server.

## Notes

- **Fonts**: the original site uses Adobe Typekit fonts (atrament-web, brandon-grotesque). This port substitutes visually similar Google Fonts via `next/font`: Oswald (display headings), Montserrat (nav), Roboto Condensed (body — same as original).
- **Donations** (`/membership`): the Funraise widget (`inject-form.js`) is domain-allowlisted by Funraise, so the payment modal only opens when the site is served from the production domain — on localhost the buttons render but clicking is a no-op.
- **Newsletter form**: posts to the same petitions API endpoint the live site uses (`petitions-229503.appspot.com/api/sign` with `id=arc-signup`).
