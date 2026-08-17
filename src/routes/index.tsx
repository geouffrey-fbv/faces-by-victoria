import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Facebook, MessageCircle, CalendarCheck, Menu, X } from "lucide-react";

import { LINKS, BUSINESS } from "@/lib/site";
import heroImg from "@/assets/hero-victoria.jpg";
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

const TREATMENTS = [
  {
    title: "Anti-Wrinkle",
    copy: "Treatments designed to soften lines while maintaining natural facial movement.",
  },
  {
    title: "Dermal Fillers",
    copy: "Subtle enhancement and facial balancing, including lips, cheeks and facial contouring.",
  },
  {
    title: "Skin & Rejuvenation",
    copy: "Skin boosters, advanced skincare and treatments focused on improving skin quality and rejuvenation.",
  },
  {
    title: "PDO Threads",
    copy: "Non-surgical treatments designed to support lifting and facial rejuvenation.",
  },
  {
    title: "Body Treatments",
    copy: "Fat-dissolving and body-contouring treatments currently offered by Victoria.",
  },
];

const TILES = [social1, social2, social3, social4, social5, social6];

function BookButton({
  className = "",
  children = "BOOK NOW",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={LINKS.fresha}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-xs font-medium tracking-[0.18em] text-primary-foreground uppercase transition-all hover:opacity-90 active:scale-[0.98] ${className}`}
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
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-lg tracking-tight md:text-xl">
            Faces By Victoria
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <BookButton className="px-6 py-3" />
          </nav>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background px-5 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl"
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

      <main id="top" className="pt-16">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl gap-8 px-5 pt-10 pb-14 md:grid-cols-2 md:items-center md:gap-14 md:px-8 md:pt-20 md:pb-24">
          <div className="rise">
            <p className="eyebrow">Faces By Victoria</p>
            <h1 className="font-display mt-4 text-5xl leading-[1.02] md:text-7xl">
              Aesthetics, <em className="text-accent not-italic">refined.</em>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Expert-led aesthetics, skin rejuvenation and age-management in Gibraltar.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <BookButton />
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-foreground/25 pb-0.5 text-sm text-foreground transition-colors hover:border-foreground"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Victoria, aesthetics and skin specialist in Gibraltar"
              width={1200}
              height={1504}
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-sm object-cover md:aspect-[4/5]"
            />
          </div>
        </section>

        {/* Treatments */}
        <section id="treatments" className="border-t border-border/70 bg-card">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <h2 className="font-display text-4xl md:text-5xl">Treatments</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Bespoke aesthetic and skin treatments designed around you.
            </p>

            <div className="mt-10 divide-y divide-border border-t border-border md:mt-14 md:grid md:grid-cols-2 md:gap-x-14 md:divide-y-0 md:border-t-0">
              {TREATMENTS.map((t) => (
                <div key={t.title} className="py-6 md:border-t md:border-border md:py-8">
                  <h3 className="font-display text-2xl md:text-3xl">{t.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {t.copy}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={LINKS.fresha}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block border-b border-foreground/25 pb-1 text-sm transition-colors hover:border-foreground md:mt-12"
            >
              View all treatments &amp; prices on Fresha →
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
            <img
              src={aboutImg}
              alt="Victoria at her aesthetics studio in Gibraltar"
              width={1008}
              height={1264}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <div>
              <p className="eyebrow">About Victoria</p>
              <h2 className="font-display mt-4 text-4xl md:text-6xl">Experience matters.</h2>
              <div className="mt-5 space-y-4 text-muted-foreground">
                <p>
                  Victoria has spent years working across aesthetics and skin, building a practice
                  around results that look like you — never overdone. Every treatment begins with a
                  proper conversation about your face, your skin and what you actually want to
                  change.
                </p>
                <p>
                  Her focus is facial balance, skin quality and long-term rejuvenation rather than
                  following trends. Treatment plans are personal, considered and paced, so your
                  results age well with you.
                </p>
              </div>
              <a
                href={LINKS.fresha}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block border-b border-foreground/25 pb-1 text-sm transition-colors hover:border-foreground"
              >
                Book with Victoria →
              </a>
            </div>
          </div>
        </section>

        {/* Social */}
        <section className="border-y border-border/70 bg-card">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-4xl md:text-5xl">See more on Instagram</h2>
                <p className="mt-2 text-sm text-muted-foreground">{BUSINESS.handle}</p>
              </div>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-xs tracking-[0.18em] uppercase transition-colors hover:bg-secondary md:inline-flex"
              >
                <Instagram className="size-4" /> Follow on Instagram
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2 md:mt-12 md:grid-cols-3 md:gap-3">
              {TILES.map((src, i) => (
                <a
                  key={src}
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-sm"
                >
                  <img
                    src={src}
                    alt={`Faces By Victoria treatment and skin imagery ${i + 1}`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </a>
              ))}
            </div>

            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-xs tracking-[0.18em] uppercase md:hidden"
            >
              <Instagram className="size-4" /> Follow on Instagram
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-3xl px-5 py-16 text-center md:py-28">
          <h2 className="font-display text-4xl md:text-6xl">Ready to book?</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            View Victoria's treatments, live availability and current pricing on Fresha.
          </p>
          <BookButton className="mt-8 w-full px-10 py-4 sm:w-auto">Book on Fresha</BookButton>

          <address className="mt-12 space-y-1 text-sm not-italic text-muted-foreground">
            <p className="text-foreground">{BUSINESS.name}</p>
            <p>{BUSINESS.street}</p>
            <p>{BUSINESS.locality}</p>
          </address>

          <div className="mt-8 flex justify-center gap-3">
            {[
              { href: LINKS.instagram, icon: Instagram, label: "Instagram" },
              { href: LINKS.facebook, icon: Facebook, label: "Facebook" },
              { href: LINKS.whatsapp, icon: MessageCircle, label: "WhatsApp" },
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
        </section>
      </main>

      <footer className="border-t border-border/70">
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
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <BookButton className="w-full py-4" />
      </div>
    </div>
  );
}
