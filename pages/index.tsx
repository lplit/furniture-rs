import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SPECS = [
  { label: "Form Factor", value: "8U 19\" rack" },
  { label: "Compatibility", value: "ATX motherboards" },
  { label: "Depth", value: "24–34 inches" },
  { label: "Exterior", value: "Real wood veneer" },
  { label: "Legs", value: "Mid-century tapered" },
  { label: "Doors", value: "Tempered glass, soft-close" },
];

const FEATURES = [
  {
    title: "Crafted by Hand",
    description:
      "Each piece is finished with real walnut veneer and traditional woodworking joinery — no visible screws, no plastic bezels.",
  },
  {
    title: "Silent by Design",
    description:
      "Engineered airflow with sound-dampened intake paths. Your hardware stays cool; your living room stays quiet.",
  },
  {
    title: "Seamless Integration",
    description:
      "Cable management channels, hidden I/O routing, and a credenza silhouette that disappears into your home.",
  },
];

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-warm-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-lg font-semibold tracking-tight text-walnut">
            Atelier Rack
          </a>
          <div className="flex items-center gap-8">
            <a href="#why" className="text-sm text-warm-gray hover:text-foreground transition-colors">
              Why
            </a>
            <a href="#how" className="text-sm text-warm-gray hover:text-foreground transition-colors">
              How
            </a>
            <a href="#what" className="text-sm text-warm-gray hover:text-foreground transition-colors">
              What
            </a>
            <a
              href="#cta"
              className="rounded-full bg-walnut px-5 py-2 text-sm font-medium text-white hover:bg-walnut-dark transition-colors"
            >
              Shop
            </a>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-walnut-dark">
        <Image
          src="/products/1.jpg"
          alt="Atelier Rack — walnut credenza with integrated server rack"
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-walnut-dark/60 via-transparent to-walnut-dark/90" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className={`mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cream/70 ${geistMono.variable}`} style={{ fontFamily: "var(--font-geist-mono)" }}>
            Atelier Rack
          </p>
          <h1 className="mb-8 text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Technology that belongs
            <br />
            in your life.
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#why"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Discover
            </a>
            <a
              href="#cta"
              className="rounded-full bg-cream px-8 py-3 text-base font-medium text-walnut-dark transition-colors hover:bg-white"
            >
              Shop
            </a>
          </div>
        </div>
      </section>

      <section id="why" className="py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className={`mb-4 text-sm font-medium uppercase tracking-[0.3em] text-warm-gray ${geistMono.variable}`} style={{ fontFamily: "var(--font-geist-mono)" }}>
            Why
          </p>
          <h2 className="mb-8 text-4xl font-semibold leading-snug tracking-tight text-foreground sm:text-5xl">
            Your living room shouldn&apos;t look like a data center.
          </h2>
          <p className="text-lg leading-relaxed text-warm-gray sm:text-xl">
            Powerful computing deserves a home that doesn&apos;t compromise on design.
            Atelier Rack is built for people who refuse to choose between performance
            and the spaces they live in.
          </p>
        </div>
      </section>

      <section id="how" className="bg-cream py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className={`mb-4 text-center text-sm font-medium uppercase tracking-[0.3em] text-warm-gray ${geistMono.variable}`} style={{ fontFamily: "var(--font-geist-mono)" }}>
            How
          </p>
          <h2 className="mb-20 text-center text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Built different, by design.
          </h2>
          <div className="grid gap-16 sm:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="text-center">
                <h3 className="mb-4 text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="leading-relaxed text-warm-gray">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="what" className="py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className={`mb-4 text-center text-sm font-medium uppercase tracking-[0.3em] text-warm-gray ${geistMono.variable}`} style={{ fontFamily: "var(--font-geist-mono)" }}>
            What
          </p>
          <h2 className="mb-16 text-center text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            The specs, refined.
          </h2>

          <div className="mb-24 grid gap-8 sm:grid-cols-3">
            {SPECS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-warm-border bg-white p-6"
              >
                <p className={`mb-1 text-xs font-medium uppercase tracking-widest text-warm-gray ${geistMono.variable}`} style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {s.label}
                </p>
                <p className="text-xl font-semibold text-foreground">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                src="/products/2.jpeg"
                alt="Atelier Rack detail — walnut finish and glass doors"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                src="/products/3.jpeg"
                alt="Atelier Rack — tapered legs and interior view"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className={`mb-4 text-sm font-medium uppercase tracking-[0.3em] text-warm-gray ${geistMono.variable}`} style={{ fontFamily: "var(--font-geist-mono)" }}>
            Benefits
          </p>
          <h2 className="mb-8 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Furniture first. Hardware included.
          </h2>
          <div className="mx-auto grid max-w-2xl gap-6 text-left sm:grid-cols-2">
            {[
              "Disappears into your decor",
              "Professional-grade cooling",
              "No visible cables or LEDs",
              "ATX-compatible interior",
              "Soft-close tempered glass doors",
              "Solid wood tapered legs",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3">
                <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-walnut" />
                <span className="text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="bg-walnut py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Bring it home.
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-cream/70">
            Starting at $800. Free shipping in the continental US.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-cream px-8 py-3 text-base font-medium text-walnut-dark transition-colors hover:bg-white"
            >
              Pre-order Now
            </a>
            <a
              href="#what"
              className="rounded-full border border-white/30 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              View Specs
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-warm-border py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-warm-gray">
            &copy; {new Date().getFullYear()} Atelier Rack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-warm-gray hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="#" className="text-sm text-warm-gray hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-warm-gray hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}