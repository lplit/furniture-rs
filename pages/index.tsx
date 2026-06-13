import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SPECS = [
  { value: "8U", label: "rack capacity" },
  { value: "19\"", label: "rail standard" },
  { value: "ATX", label: "motherboard support" },
  { value: "24–34\"", label: "depth range" },
  { value: "walnut", label: "real wood veneer" },
  { value: "soft-close", label: "tempered glass doors" },
];

const FEATURES = [
  {
    title: "Crafted by Hand",
    body: "Real walnut veneer over solid hardwood. Traditional joinery. No visible fasteners. No plastic bezels. This is furniture, not a housing.",
  },
  {
    title: "Silent by Design",
    body: "Engineered airflow with sound-dampened intake paths. Your hardware stays cool. Your living room stays quiet. You forget it's there.",
  },
  {
    title: "Seamless Integration",
    body: "Cable management channels. Hidden I/O routing. A credenza silhouette that disappears into your home — until you open the glass doors.",
  },
];

const BENEFITS = [
  "Disappears into your decor",
  "Professional-grade cooling",
  "No visible cables or LEDs",
  "ATX-compatible interior",
  "Soft-close tempered glass doors",
  "Solid wood tapered legs",
];

export default function Home() {
  const [navSolid, setNavSolid] = useState(false);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mainRef.current;
    const handleScroll = () => {
      if (el) {
        setNavSolid(el.scrollTop > window.innerHeight * 0.3);
      }
    };
    el?.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={mainRef} className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navSolid
            ? "border-b border-ink-dim/20 bg-background/80 backdrop-blur-md"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <a
            href="#hero"
            className="font-serif text-lg font-light tracking-wide text-ink"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Atelier Rack
          </a>
          <div className="hidden items-center gap-8 sm:flex" style={{ fontFamily: "var(--font-geist-mono)" }}>
            <a href="#why" className="text-xs uppercase tracking-[0.2em] text-ink-dim hover:text-brass transition-colors">
              Why
            </a>
            <a href="#how" className="text-xs uppercase tracking-[0.2em] text-ink-dim hover:text-brass transition-colors">
              How
            </a>
            <a href="#what" className="text-xs uppercase tracking-[0.2em] text-ink-dim hover:text-brass transition-colors">
              What
            </a>
            <a
              href="#cta"
              className="rounded-sm border border-brass/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brass transition-colors hover:bg-brass hover:text-background"
            >
              Shop
            </a>
          </div>
        </div>
      </nav>

      <section id="hero" className="snap-section relative flex items-center justify-center overflow-hidden bg-background">
        <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${heroImageLoaded ? "opacity-40" : "opacity-0"}`}>
          <Image
            src="/products/1.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
            onLoadingComplete={() => setHeroImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p
            className="animate-fade-in-up mb-6 text-xs uppercase tracking-[0.3em] text-brass delay-200"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Atelier Rack
          </p>

          <h1
            className="animate-fade-in-up mb-10 text-5xl font-light leading-[1.1] tracking-tight text-ink sm:text-6xl lg:text-7xl delay-500"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Technology that belongs
            <br />
            <em>in your life.</em>
          </h1>

          <div className="animate-fade-in-up delay-1000 mx-auto mb-12 h-px w-12 bg-brass/60" />

          <p
            className="animate-fade-in-up mx-auto max-w-md text-sm leading-relaxed text-ink-dim delay-1200"
          >
            An 8U 19&quot; ATX rack, clad in walnut. Credenza proportions. Soft-close glass doors. Tapered legs. Built for the living room, not the server room.
          </p>

          <div className="animate-fade-in-up flex flex-col items-center justify-center gap-4 sm:flex-row delay-1500">
            <a
              href="#why"
              className="rounded-sm border border-brass/40 px-8 py-3 text-sm uppercase tracking-[0.15em] text-brass transition-all hover:bg-brass hover:text-background"
            >
              Discover
            </a>
            <a
              href="#cta"
              className="rounded-sm bg-cream px-8 py-3 text-sm uppercase tracking-[0.15em] text-walnut-dark transition-all hover:bg-white"
            >
              Shop
            </a>
          </div>
        </div>
      </section>

      <section id="why" className="snap-section relative flex items-center justify-center bg-background">
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-light leading-none text-ink-dim/5"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          01
        </span>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p
            className="mb-6 text-xs uppercase tracking-[0.3em] text-brass"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Why
          </p>
          <h2
            className="mb-10 text-4xl font-light leading-snug tracking-tight text-ink sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Your living room shouldn&apos;t
            <br />
            look like a data center.
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-warm-gray">
            Powerful computing deserves a home that doesn&apos;t compromise on design.
            Every other rack on the market asks you to hide your hardware. We built
            one worth showing.
          </p>
        </div>
      </section>

      <section id="how" className="snap-section relative flex items-center justify-center bg-background">
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-light leading-none text-ink-dim/5"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          02
        </span>

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <p
              className="mb-6 text-xs uppercase tracking-[0.3em] text-brass"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              How
            </p>
            <h2
              className="text-4xl font-light tracking-tight text-ink sm:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Built different, by design.
            </h2>
          </div>

          <div className="grid gap-16 sm:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="tilt-card rounded-sm border border-ink-dim/10 bg-ink-dim/5 p-8"
              >
                <h3
                  className="mb-4 text-2xl font-light text-ink"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-warm-gray">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="what" className="snap-section relative flex items-center justify-center bg-background">
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-light leading-none text-ink-dim/5"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          03
        </span>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p
              className="mb-6 text-xs uppercase tracking-[0.3em] text-brass"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              What
            </p>
            <h2
              className="text-4xl font-light tracking-tight text-ink sm:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The specs, refined.
            </h2>
          </div>

          <div className="mb-20 grid items-center gap-12 sm:grid-cols-2">
            <div className="relative aspect-[2/3] overflow-hidden rounded-sm">
              <Image
                src="/products/1.jpg"
                alt="Atelier Rack — walnut credenza with integrated server rack"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>

            <div
              className="space-y-10"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {SPECS.map((s) => (
                <div key={s.value} className="spec-line relative py-4">
                  <span className="block text-4xl font-light tracking-tight text-ink sm:text-5xl">
                    {s.value}
                  </span>
                  <span className="block text-xs uppercase tracking-[0.3em] text-warm-gray">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={galleryRef}
            className="gallery-scroll -mx-6 flex gap-6 overflow-x-auto px-6 pb-4"
          >
            <div className="relative min-w-[80vw] flex-shrink-0 overflow-hidden rounded-sm sm:min-w-[500px]">
              <Image
                src="/products/2.jpeg"
                alt="Atelier Rack — walnut finish and glass doors"
                width={1402}
                height={1122}
                className="tilt-card h-full w-full object-cover"
              />
            </div>
            <div className="relative min-w-[80vw] flex-shrink-0 overflow-hidden rounded-sm sm:min-w-[500px]">
              <Image
                src="/products/3.jpeg"
                alt="Atelier Rack — tapered legs and interior detail"
                width={1402}
                height={1122}
                className="tilt-card h-full w-full object-cover"
              />
            </div>
            <div className="min-w-[60vw] flex-shrink-0 sm:min-w-[400px]" />
          </div>
          <p
            className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-ink-dim"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Drag to explore
          </p>
        </div>
      </section>

      <section className="snap-section relative flex items-center justify-center bg-background">
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          {BENEFITS.map((b) => (
            <p
              key={b}
              className="mb-8 text-2xl font-light leading-relaxed text-ink sm:text-3xl lg:text-4xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {b}
            </p>
          ))}

          <div className="mx-auto my-16 h-px w-16 bg-brass/40" />

          <p
            className="text-2xl font-light text-ink-dim"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            $800
          </p>
          <p
            className="mt-2 text-xs uppercase tracking-[0.3em] text-ink-dim/60"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Free shipping &middot; Continental US
          </p>
        </div>
      </section>

      <section id="cta" className="snap-section relative flex items-center justify-center overflow-hidden bg-walnut animate-pulse-glow">
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2
            className="mb-6 text-5xl font-light tracking-tight text-cream sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Bring it home.
          </h2>
          <p
            className="mb-12 text-sm leading-relaxed text-cream/60"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            An 8U 19&quot; rack. Real walnut veneer. Credenza proportions.
            <br />
            Designed for the room you live in.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-sm bg-cream px-10 py-3.5 text-sm uppercase tracking-[0.15em] text-walnut-dark transition-all hover:bg-white"
            >
              Pre-order
            </a>
            <a
              href="#what"
              className="rounded-sm border border-cream/30 px-10 py-3.5 text-sm uppercase tracking-[0.15em] text-cream transition-all hover:border-cream hover:bg-cream/10"
            >
              View specs
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink-dim/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-xs text-ink-dim" style={{ fontFamily: "var(--font-geist-mono)" }}>
            &copy; {new Date().getFullYear()} Atelier Rack
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-ink-dim hover:text-brass transition-colors" style={{ fontFamily: "var(--font-geist-mono)" }}>
              Contact
            </a>
            <a href="#" className="text-xs text-ink-dim hover:text-brass transition-colors" style={{ fontFamily: "var(--font-geist-mono)" }}>
              Privacy
            </a>
            <a href="#" className="text-xs text-ink-dim hover:text-brass transition-colors" style={{ fontFamily: "var(--font-geist-mono)" }}>
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}