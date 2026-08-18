// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static-export mode, used only by the GitHub Pages workflow (.github/workflows/static.yml).
// Lovable never sets DEPLOY_TARGET, so its build is completely unaffected: Nitro still runs and
// still produces the SSR bundle in .output/ exactly as before.
const isStaticExport = process.env["DEPLOY_TARGET"] === "gh-pages";

// Project Pages are served from https://<user>.github.io/<repo>/, so assets need that prefix.
// The workflow sets PAGES_BASE. Use "/" for a custom domain or a <user>.github.io repo.
const base = process.env["PAGES_BASE"] || "/";

export default defineConfig({
  // Turn Nitro off for the static export — its SSR output layout (.output/) conflicts with the
  // prerenderer, which expects Vite's default dist/ layout.
  ...(isStaticExport ? { nitro: false as const } : {}),
  ...(isStaticExport ? { vite: { base } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Render every route to static HTML so GitHub Pages has real pages to serve.
    ...(isStaticExport ? { prerender: { enabled: true, crawlLinks: true } } : {}),
  },
});
