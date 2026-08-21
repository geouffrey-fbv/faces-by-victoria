import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Facebook, CalendarCheck, Menu, X } from "lucide-react";

import { LINKS, BUSINESS } from "@/lib/site";
import heroImg from "@/assets/hero-victoria.jpg";
import logoMark from "@/assets/logo-mark.png";
import logoWordmark from "@/assets/logo-wordmark.png";
import aboutImg from "@/assets/about-victoria.jpg";
import social1 from "@/assets/social-1.jpg";
import social2 from "@/assets/social-2.jpg";
import social3 from "@/assets/social-3.jpg";
import social4 from "@/assets/social-4.jpg";
import social5 from "@/assets/social-5.jpg";
import social6 from "@/assets/social-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Faces By Victoria | Aesthetics & Skin Treatments Gibraltar" },
      {
        name: "description",
        content:
          "Faces By Victoria provides expert-led aesthetic, skin rejuvenation and age-management treatments in Gibraltar. View treatments and book online.",
      },
      {
        property: "og:title",
        content: "Faces By Victoria | Aesthetics & Skin Treatments Gibraltar",
      },
      {
        property: "og:description",
        content:
          "Expert-led aesthetics, skin rejuvenation and age-management in Gibraltar. Book online with Victoria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Faces By Victoria",
          description:
            "Expert-led aesthetic, skin rejuvenation and age-management treatments in Gibraltar.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "17-21 Cannon Lane",
            addressLocality: "Gibraltar",
            addressCountry: "GI",
          },
          areaServed: "Gibraltar",
          sameAs: [LINKS.instagram, LINKS.fresha],
        }),
      },
    ],
  }),
});

const NAV = [
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// lucide dropped brand icons and ships no WhatsApp glyph, so use the official
// mark inline. Same {className} interface as the lucide icons beside it.
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const TREATMENTS = [
  {
    title: "Anti-Wrinkle",
    copy: "Treatments that soften lines and wrinkles while keeping your expression your own.",
  },
  {
    title: "Dermal Fillers",
    copy: "Lip enhancement, cheek definition and facial balancing, placed subtly and built around your features.",
  },
  {
    title: "Skin & Rejuvenation",
    copy: "Skin boosters, dermatology-led skincare and bespoke facial plans focused on long-term skin quality.",
  },
  {
    title: "PDO Threads",
    copy: "A non-surgical approach to lifting, using threads to support and redefine facial contours.",
  },
  {
    title: "Body Treatments",
    copy: "Fat-dissolving injections and Ultra Sculpt body contouring, targeted to the areas you want to address.",
  },
];

const TILES = [social1, social2, social3, social4, social5, social6];

function BookButton({
  className = "",
  children = "Book now",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={LINKS.fresha}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium tracking-tight text-accent-foreground transition-all hover:brightness-110 active:scale-[0.98] ${className}`}
    >
      {children}
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-border px-4 py-2.5 md:mt-5 md:px-4 md:py-3">
          <a
            href="#top"
            aria-label="Faces By Victoria"
            className="flex items-center gap-2.5 pl-2 md:gap-3.5"
          >
            <img src={logoMark} alt="" width={288} height={211} className="h-10 w-auto md:h-14" />
            <img
              src={logoWordmark}
              alt="Faces By Victoria"
              width={540}
              height={40}
              className="h-3 w-auto md:h-3.5"
            />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <BookButton className="px-6 py-2.5" />
          </nav>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2 text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
        {open && (
          <div className="glass mx-3 mt-2 rounded-3xl border border-border px-6 py-7 md:hidden">
            <div className="flex flex-col gap-5">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="pt-20">
        {/* Hero */}
        <section className="glow-canvas relative">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-10 pb-16 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-16 md:px-8 md:pt-20 md:pb-28">
            <div className="rise">
              <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5">
                Aesthetics · Gibraltar
              </p>
              <h1 className="font-display mt-6 text-[3.25rem] leading-[0.95] md:text-8xl">
                Aesthetics,
                <br />
                <span className="text-gradient">refined.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Expert-led aesthetics, skin rejuvenation and age-management — results that still
                look like you.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <BookButton />
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <Instagram className="size-4" /> Instagram
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-accent/10 blur-3xl" />
              <img
                src={heroImg}
                alt="Victoria, aesthetics and skin specialist in Gibraltar"
                width={1080}
                height={1440}
                fetchPriority="high"
                className="aspect-[4/5] w-full rounded-[2rem] border border-border object-cover shadow-[var(--shadow-soft)]"
              />
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section id="treatments" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <p className="eyebrow">What Victoria offers</p>
            <h2 className="font-display mt-4 text-4xl md:text-6xl">Treatments</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Bespoke aesthetic and skin treatments designed around your face, not a template.
            </p>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {TREATMENTS.map((t, i) => (
                <div
                  key={t.title}
                  className="group rounded-3xl border border-border bg-card p-6 transition-colors hover:border-accent/50 md:p-7"
                >
                  <span className="font-display text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-4 text-2xl md:text-[1.7rem]">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
                </div>
              ))}
              <a
                href={LINKS.fresha}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between rounded-3xl border border-accent/40 bg-accent/10 p-6 transition-colors hover:bg-accent/15 md:p-7"
              >
                <span className="eyebrow">Fresha</span>
                <span className="font-display mt-8 text-2xl md:text-[1.7rem]">
                  View all treatments &amp; prices →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
              <img
                src={aboutImg}
                alt="Victoria, aesthetics and skin specialist at Faces By Victoria in Gibraltar"
                width={960}
                height={1200}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[2rem] border border-border object-cover"
              />
              <div>
                <p className="eyebrow">About Victoria</p>
                <h2 className="font-display mt-4 text-4xl md:text-6xl">Experience matters.</h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    Victoria has spent years working across aesthetics and skin, building a practice
                    around results that look like you — never overdone. Every treatment begins with
                    a proper conversation about your face, your skin and what you actually want to
                    change.
                  </p>
                  <p>
                    Her focus is facial balance, skin quality and long-term rejuvenation rather than
                    following trends. Treatment plans are personal, considered and paced, so your
                    results age well with you.
                  </p>
                </div>
                <BookButton className="mt-8">Book with Victoria</BookButton>
              </div>
            </div>
          </div>
        </section>

        {/* Social */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-4xl md:text-5xl">See more on Instagram</h2>
                <p className="mt-2 text-sm text-muted-foreground">{BUSINESS.handle}</p>
              </div>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:bg-secondary md:inline-flex"
              >
                <Instagram className="size-4" /> Follow
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
              {TILES.map((src, i) => (
                <a
                  key={src}
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-3xl border border-border"
                >
                  <img
                    src={src}
                    alt={`Faces By Victoria treatment and skin imagery ${i + 1}`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </a>
              ))}
            </div>

            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm md:hidden"
            >
              <Instagram className="size-4" /> Follow on Instagram
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="glow-canvas border-t border-border">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-32">
            <h2 className="font-display text-4xl md:text-7xl">Ready to book?</h2>
            <p className="mx-auto mt-5 max-w-md text-muted-foreground">
              View Victoria's treatments, live availability and current pricing on Fresha.
            </p>
            <BookButton className="mt-9 w-full px-10 py-4 sm:w-auto">Book on Fresha</BookButton>

            <address className="mt-14 space-y-1 text-sm not-italic text-muted-foreground">
              <p className="text-foreground">{BUSINESS.name}</p>
              <p>{BUSINESS.street}</p>
              <p>{BUSINESS.locality}</p>
            </address>

            <div className="mt-8 flex justify-center gap-3">
              {[
                { href: LINKS.instagram, icon: Instagram, label: "Instagram" },
                { href: LINKS.facebook, icon: Facebook, label: "Facebook" },
                { href: LINKS.whatsapp, icon: WhatsAppIcon, label: "WhatsApp" },
                { href: LINKS.fresha, icon: CalendarCheck, label: "Fresha" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            <span className="text-foreground">Faces By Victoria</span> — Gibraltar
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={LINKS.fresha} target="_blank" rel="noopener noreferrer">
              Fresha
            </a>
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Cookie Policy</a>
          </div>
          <p>© {new Date().getFullYear()} Faces By Victoria</p>
        </div>
        <div className="h-20 md:hidden" />
      </footer>

      {/* Persistent mobile book button */}
      <div className="glass fixed inset-x-0 bottom-0 z-40 border-t border-border p-3 md:hidden">
        <BookButton className="w-full py-4" />
      </div>
    </div>
  );
}
