# Faces By Victoria

Single-page marketing site for an aesthetics & skin specialist in Gibraltar.
Built in [Lovable](https://lovable.dev) and synced via GitHub.

See `README.md` for the full design brief (scope, brand, section-by-section spec)
and `AGENTS.md` for Lovable's git constraints. **Read both before making changes.**

## Stack

- **TanStack Start** (SSR) + TanStack Router (file-based routing) + React 19
- **Vite 8**, config comes from `@lovable.dev/vite-tanstack-config` — it already
  bundles the React plugin, Tailwind, tsconfig paths, Nitro and devtools.
  Do **not** add those plugins manually or the app breaks with duplicates.
- **Tailwind CSS v4** (CSS-first config in `src/styles.css`, no tailwind.config.js)
- **shadcn/ui** (new-york style) in `src/components/ui` — 46 stock components
- **Bun** as package manager; **Nitro** builds for Cloudflare Workers

## Commands

```bash
bun install          # install deps (respects bunfig.toml 24h supply-chain guard)
bun run dev          # dev server on http://localhost:8080  (NOT 5173)
bun run build        # production build to .output/
bun run preview      # serve the production build
bun run lint         # eslint
bun run format       # prettier --write
bunx tsc --noEmit    # typecheck (no npm script for this)
```

## Layout

```
src/
  routes/
    __root.tsx       app shell — SEO meta, JSON-LD, fonts. Preserve <Outlet />
    index.tsx        the entire landing page (~400 lines, all sections)
    README.md        TanStack routing conventions — read before adding routes
  components/ui/     shadcn/ui primitives (stock, unmodified)
  lib/
    site.ts          ALL external links + business details live here
    utils.ts         cn() helper
    error-*.ts       Lovable error reporting — leave alone
  assets/            hero, about and social-grid images
  styles.css         Tailwind v4 theme + design tokens
routeTree.gen.ts     auto-generated, never edit by hand
```

## Conventions

- The site is deliberately **one page**. The brief explicitly rules out extra
  pages, treatment pages, a blog, a CMS and a booking system. Nav links are
  in-page anchors; "Book now" goes to Fresha.
- Edit external URLs and business details in `src/lib/site.ts`, never inline.
- Use the `@/` path alias (`@/lib/utils`, `@/components/ui/button`).
- Prettier: 100 cols, double quotes, semicolons, trailing commas.
- Style with Tailwind utilities + the tokens in `src/styles.css`. Keep the
  existing brand palette (dark charcoal, blush pink) — don't introduce a new one.
- Don't mention "Ian" anywhere; the brand is centred on Victoria alone.

## Git

Lovable syncs this repo two ways. **Never force-push, rebase, amend or squash
already-pushed commits** — it rewrites history on Lovable's side and the project
history is lost. Commits pushed to `main` appear in the Lovable editor, so keep
the branch working.

Pull before starting a session in case the site was edited in Lovable:

```bash
git pull --ff-only
```
