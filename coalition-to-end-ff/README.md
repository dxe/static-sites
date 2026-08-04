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
