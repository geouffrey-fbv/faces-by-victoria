# Faces By Victoria — outstanding actions

Working list of what is left to do. Not code comments — these need a decision,
an asset, or an account change before they can be actioned.

## Needs Victoria / business input

- [ ] **Top 5 services to highlight.** The Treatments section currently mirrors
      Victoria's Fresha service categories. Victoria should confirm which five
      she actually wants to lead with — these may not be the same as the
      category list, and the page reads better with her priorities first.
      Note: Hair Loss is a real Fresha category but is deliberately not shown
      on the site. Worth a conscious decision when the final five are picked.
- [ ] **Add Google Business Page.** Not yet created. Once live, link it from the
      Contact section and add it to the JSON-LD in `src/routes/__root.tsx` so
      the site and the listing reinforce each other in local search.
- [ ] **Update Fresha to use the new email.** Account change on Fresha's side.
- [ ] **Remove references to Ian from the Fresha "About".** Fresha account
      content, edited on Fresha rather than in this repo. The website copy is
      already clear of him; the booking page visitors land on is not.

## Placeholder content still on the live site

- [ ] **Facebook link is a placeholder** — `LINKS.facebook` in
      `src/lib/site.ts` points at `https://www.facebook.com/`. Needs the real
      page, or the link should be removed.
- [ ] **The Instagram grid is mostly generic imagery** (serum bottles, pampas
      grass, a clinic interior, a gloved model, silk fabric). The section is
      headed "See more on Instagram" and links to @faces.byvictoria, so
      visitors read these as her posts. Replace with real posts when Victoria
      has picked some. A real lip-treatment photo was tried in tile 1 but
      pulled: it was a clinical macro and clashed with the soft editorial
      styling of the other five, so the whole set wants replacing together
      rather than one tile at a time. Tile 1 is back to the original warm
      close-up that shipped with the first build.
- [ ] **Instagram grid alt text is generic** — every tile reads "Faces By
      Victoria treatment and skin imagery 1-6". Should describe the actual
      treatment shown, for accessibility and search.

## Technical

- [ ] **`canonical` and `og:url` render as `"/"`** in `src/routes/__root.tsx`
      instead of `https://facesbyvictoria.com`. This weakens SEO and makes
      link previews wrong when shared.
- [ ] **Verify the full Fresha service list.** Fresha lists 73 individual
      services across 12 categories. The tiles were checked against the 12
      category names; the individual services were not enumerated, because
      Fresha renders its menu client-side and blocks automated access.
- [ ] **Node 20 deprecation warning** in the Pages workflow. `actions/checkout@v4`,
      `configure-pages@v5` and `upload-artifact@v4` still target Node 20 and are
      being forced onto Node 24. Harmless today; bump when new majors ship.

## Done

- [x] GitHub Pages deploy on push to `main`, via prerendered static export
- [x] Custom domain `facesbyvictoria.com` live over HTTPS, `www` redirecting
- [x] Booking link fixed — the previous Fresha URL returned 404 sitewide
- [x] Treatments aligned to Fresha categories, Hair Loss added
- [x] Real Instagram photos in the About section and first social tile
- [x] WhatsApp wired to the real number with the WhatsApp brand icon
- [x] Favicon built from the V monogram, replacing the Lovable default
