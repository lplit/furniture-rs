import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(
            ".reveal-on-scroll, .reveal-on-scroll-delay-1, .reveal-on-scroll-delay-2, .reveal-on-scroll-delay-3, .reveal-on-scroll-delay-4, .reveal-on-scroll-delay-5, .reveal-image"
          ).forEach((child) => {
            child.classList.add("revealed");
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const [navSolid, setNavSolid] = useState(false);
  const designRef = useReveal();
  const silenceRef = useReveal();
  const closeRef = useReveal();
  const galleryRef = useReveal();
  const benefitsRef = useReveal();
  const ctaRef = useReveal();

  useEffect(() => {
    const handleScroll = () => {
      setNavSolid(window.scrollY > window.innerHeight * 0.12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          navSolid
            ? "border-b border-white/[0.03] bg-[#0a0908]/80 backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          <a
            href="#hero"
            className="text-[1.125rem] font-light tracking-wide text-[#e8e4df] transition-opacity duration-300 hover:opacity-60"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Atelier Rack
          </a>
          <a
            href="#cta"
            className="rounded-sm border border-[#c4a265]/25 px-6 py-2.5 text-[10px] uppercase tracking-[0.25em] text-[#c4a265] transition-all duration-500 hover:border-[#c4a265] hover:bg-[#c4a265] hover:text-[#0a0908]"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Pre-order
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="snap-section relative flex items-center justify-center overflow-hidden bg-[#0a0908]">
        <div className="absolute inset-0">
          <Image
            src="/products/1.jpg"
            alt=""
            fill
            className="animate-hero-image object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908] via-[#0a0908]/50 to-[#0a0908]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-8 pt-24 text-center">
          <p
            className="animate-fade-in-up mb-10 text-[10px] uppercase tracking-[0.4em] text-[#c4a265]/80 delay-200"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Atelier Rack
          </p>

          <h1
            className="animate-fade-in-up mb-14 text-[2.5rem] font-light leading-[1.05] tracking-tight text-[#e8e4df] sm:text-6xl lg:text-[4.5rem] delay-500"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Technology that belongs
            <br />
            <em className="font-light">in your life.</em>
          </h1>

          <div className="animate-fade-in-up delay-1200 mx-auto mb-16 h-px w-8 bg-[#c4a265]/40" />

          <p
            className="animate-fade-in-up mx-auto max-w-sm text-[12px] leading-[2] text-[#8a8279]/80 delay-1500"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            An 8U 19&quot; ATX rack, clad in walnut.
            <br />
            Credenza proportions. Soft-close glass doors. Tapered legs.
          </p>

          <div className="animate-fade-in-up flex flex-col items-center justify-center gap-5 pt-14 sm:flex-row delay-2000">
            <a
              href="#design"
              className="rounded-sm border border-[#c4a265]/25 px-9 py-3.5 text-[10px] uppercase tracking-[0.25em] text-[#c4a265] transition-all duration-500 hover:border-[#c4a265] hover:bg-[#c4a265] hover:text-[#0a0908]"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Discover
            </a>
            <a
              href="#cta"
              className="rounded-sm bg-[#f5efe6] px-9 py-3.5 text-[10px] uppercase tracking-[0.25em] text-[#3a1e10] transition-all duration-500 hover:bg-white"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Pre-order
            </a>
          </div>
        </div>
      </section>

      {/* ── A CONVERSATION PIECE ── */}
      <section id="design" ref={designRef} className="snap-section relative flex items-center justify-center bg-[#0a0908] py-32">
        <div className="relative z-10 mx-auto max-w-2xl px-8 text-center">

          <h2
            className="reveal-on-scroll mb-12 text-[2.25rem] font-light leading-[1.1] tracking-tight text-[#e8e4df] sm:text-[3.25rem] lg:text-[3.75rem]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            A conversation piece,
            <br />
            not an eyesore.
          </h2>
          <p className="reveal-on-scroll-delay-1 mx-auto max-w-md text-[15px] leading-[1.85] text-[#8a8279]">
            Your living room shouldn&apos;t look like a data center. Every other rack on the market asks you to hide your hardware. We built one worth showing.
          </p>
          <div className="reveal-on-scroll-delay-2 mx-auto my-24 h-px w-12 bg-[#c4a265]/15" />
          <p className="reveal-on-scroll-delay-3 mx-auto max-w-sm text-[12px] leading-[2] text-[#5a5550]/70" style={{ fontFamily: "var(--font-geist-mono)" }}>
            Real walnut veneer over solid hardwood. Traditional joinery. No visible fasteners. No plastic bezels. Tapered legs that echo mid-century credenzas, not server cabinets.
          </p>
        </div>
      </section>

      {/* ── SILENCE IS A FEATURE ── */}
      <section ref={silenceRef} className="snap-section relative flex items-center justify-center bg-[#0a0908] py-32">
        <div className="relative z-10 mx-auto max-w-6xl px-8">
          <div className="mb-24">

            <h2
              className="reveal-on-scroll text-[2.25rem] font-light leading-[1.1] tracking-tight text-[#e8e4df] sm:text-[3.25rem] lg:text-[3.75rem]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Silence is a feature.
            </h2>
            <p className="reveal-on-scroll-delay-1 mx-auto mt-8 max-w-lg text-[15px] leading-[1.85] text-[#8a8279]">
              Front-to-back airflow. Built-in cable channels with a removable back panel. Radiator mounts and grommeted pass-throughs for water cooling. You forget it&apos;s there.
            </p>
          </div>

          <div className="grid items-center gap-16 sm:grid-cols-2">
            <div className="reveal-image relative aspect-[5/4] overflow-hidden rounded-sm">
              <Image
                src="/products/2.jpeg"
                alt="Atelier Rack \u2014 walnut finish and glass doors"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>

            <div style={{ fontFamily: "var(--font-geist-mono)" }}>
              <div className="reveal-on-scroll-delay-2 spec-line">
                <span className="block text-[3rem] font-light tracking-tight text-[#e8e4df] sm:text-[3.75rem]">
                  8U
                </span>
                <span className="block text-[10px] uppercase tracking-[0.35em] text-[#8a8279]">
                  of rack capacity
                </span>
              </div>
              <div className="reveal-on-scroll-delay-3 spec-line">
                <span className="block text-[3rem] font-light tracking-tight text-[#e8e4df] sm:text-[3.75rem]">
                  19&quot;
                </span>
                <span className="block text-[10px] uppercase tracking-[0.35em] text-[#8a8279]">
                  rail standard
                </span>
              </div>
              <div className="reveal-on-scroll-delay-4 spec-line">
                <span className="block text-[3rem] font-light tracking-tight text-[#e8e4df] sm:text-[3.75rem]">
                  ATX
                </span>
                <span className="block text-[10px] uppercase tracking-[0.35em] text-[#8a8279]">
                  motherboard support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUILT TO CLOSE BEAUTIFULLY ── */}
      <section ref={closeRef} className="snap-section relative flex items-center justify-center bg-[#0a0908] py-32">
        <div className="relative z-10 mx-auto max-w-6xl px-8">
          <div className="mb-24">

            <h2
              className="reveal-on-scroll text-[2.25rem] font-light leading-[1.1] tracking-tight text-[#e8e4df] sm:text-[3.25rem] lg:text-[3.75rem]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Built to close beautifully.
            </h2>
            <p className="reveal-on-scroll-delay-1 mx-auto mt-8 max-w-lg text-[15px] leading-[1.85] text-[#8a8279]">
              Soft-close tempered glass doors. Lockable. Dust-filtered. Real walnut veneer that ages with grace. Every detail is a decision.
            </p>
          </div>

          <div className="grid items-center gap-16 sm:grid-cols-2">
            <div className="order-2 sm:order-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
              <div className="reveal-on-scroll-delay-2 spec-line">
                <span className="block text-[3rem] font-light tracking-tight text-[#e8e4df] sm:text-[3.75rem]">
                  Soft-close
                </span>
                <span className="block text-[10px] uppercase tracking-[0.35em] text-[#8a8279]">
                  tempered glass, lockable
                </span>
              </div>
              <div className="reveal-on-scroll-delay-3 spec-line">
                <span className="block text-[3rem] font-light tracking-tight text-[#e8e4df] sm:text-[3.75rem]">
                  24–34&quot;
                </span>
                <span className="block text-[10px] uppercase tracking-[0.35em] text-[#8a8279]">
                  adjustable depth, inches
                </span>
              </div>
              <div className="reveal-on-scroll-delay-4 spec-line">
                <span className="block text-[3rem] font-light tracking-tight text-[#e8e4df] sm:text-[3.75rem]">
                  Walnut
                </span>
                <span className="block text-[10px] uppercase tracking-[0.35em] text-[#8a8279]">
                  real wood veneer
                </span>
              </div>
              <div className="reveal-on-scroll-delay-5 spec-line">
                <span className="block text-[3rem] font-light tracking-tight text-[#e8e4df] sm:text-[3.75rem]">
                  Dust-filtered
                </span>
                <span className="block text-[10px] uppercase tracking-[0.35em] text-[#8a8279]">
                  clean air, clean hardware
                </span>
              </div>
            </div>
            <div className="reveal-image relative order-1 aspect-[5/4] overflow-hidden rounded-sm sm:order-2">
              <Image
                src="/products/3.jpeg"
                alt="Atelier Rack \u2014 tapered legs and interior detail"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section ref={galleryRef} className="snap-section relative flex items-end bg-[#0a0908] pb-24 pt-32">
        <div className="w-full">
          <div className="mb-16 px-8">

          </div>
          <div className="gallery-scroll flex gap-3 overflow-x-auto px-8">
            <div className="reveal-image relative aspect-[4/3] min-w-[80vw] flex-shrink-0 overflow-hidden rounded-sm sm:min-w-[550px]">
              <Image
                src="/products/1.jpg"
                alt="Atelier Rack \u2014 full view"
                fill
                className="object-cover"
                sizes="80vw"
              />
            </div>
            <div className="reveal-image relative aspect-[4/3] min-w-[80vw] flex-shrink-0 overflow-hidden rounded-sm sm:min-w-[550px]">
              <Image
                src="/products/2.jpeg"
                alt="Atelier Rack \u2014 walnut finish and glass doors"
                fill
                className="object-cover"
                sizes="80vw"
              />
            </div>
            <div className="reveal-image relative aspect-[4/3] min-w-[80vw] flex-shrink-0 overflow-hidden rounded-sm sm:min-w-[550px]">
              <Image
                src="/products/3.jpeg"
                alt="Atelier Rack \u2014 tapered legs and detail"
                fill
                className="object-cover"
                sizes="80vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FITS YOUR GEAR ── */}
      <section ref={benefitsRef} className="snap-section relative flex items-center justify-center bg-[#0a0908] py-32">
        <div className="relative z-10 mx-auto max-w-2xl px-8 text-center">
          <h2
            className="reveal-on-scroll mb-24 text-[2.25rem] font-light leading-[1.15] tracking-tight text-[#e8e4df] sm:text-[3.25rem]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Fits your gear.
            <br />
            Fits your life.
          </h2>

          {[
            "Disappears into your decor",
            "Front-to-back cooling",
            "Built-in cable management",
            "Water cooling ready",
            "Lockable tempered glass doors",
            "Dust-filtered air intake",
          ].map((b, i) => (
            <p
              key={b}
              className={`reveal-on-scroll-delay-${Math.min(i + 1, 5)} mb-10 text-[1.375rem] font-light leading-relaxed text-[#e8e4df]/60 sm:text-2xl`}
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {b}
            </p>
          ))}

          <div className="reveal-on-scroll-delay-3 mx-auto my-24 h-px w-12 bg-[#c4a265]/20" />

          <div className="reveal-on-scroll-delay-4">
            <p
              className="text-[1.5rem] font-light text-[#5a5550]"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              $800
            </p>
            <p
              className="mt-3 text-[9px] uppercase tracking-[0.4em] text-[#5a5550]/40"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Free shipping &middot; Continental US
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" ref={ctaRef} className="snap-section relative flex items-center justify-center overflow-hidden bg-[#0a0908] py-32">
        <div className="relative z-10 mx-auto max-w-3xl px-8 text-center">
          <div className="reveal-on-scroll mx-auto mb-16 h-px w-16 bg-[#c4a265]/30" />
          <h2
            className="reveal-on-scroll-delay-1 text-[2.75rem] font-light tracking-tight text-[#e8e4df] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Bring it home.
          </h2>
          <p
            className="reveal-on-scroll-delay-2 mx-auto mt-10 mb-16 max-w-sm text-[12px] leading-[2] text-[#8a8279]"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            An 8U 19&quot; rack. Real walnut veneer. Credenza proportions.
            Designed for the room you live in.
          </p>
          <div className="reveal-on-scroll-delay-3 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="#"
              className="rounded-sm bg-[#c4a265] px-12 py-4 text-[10px] uppercase tracking-[0.25em] text-[#0a0908] transition-all duration-500 hover:bg-[#d4b275]"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Pre-order
            </a>
            <a
              href="#design"
              className="rounded-sm border border-[#5a5550]/30 px-12 py-4 text-[10px] uppercase tracking-[0.25em] text-[#8a8279] transition-all duration-500 hover:border-[#8a8279] hover:text-[#e8e4df]"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Discover
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#5a5550]/8 bg-[#0a0908] py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 sm:flex-row">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#5a5550]/50" style={{ fontFamily: "var(--font-geist-mono)" }}>
            &copy; {new Date().getFullYear()} Atelier Rack
          </p>
          <div className="flex gap-12" style={{ fontFamily: "var(--font-geist-mono)" }}>
            <a href="#" className="text-[9px] uppercase tracking-[0.3em] text-[#5a5550]/50 transition-colors duration-300 hover:text-[#c4a265]">
              Contact
            </a>
            <a href="#" className="text-[9px] uppercase tracking-[0.3em] text-[#5a5550]/50 transition-colors duration-300 hover:text-[#c4a265]">
              Privacy
            </a>
            <a href="#" className="text-[9px] uppercase tracking-[0.3em] text-[#5a5550]/50 transition-colors duration-300 hover:text-[#c4a265]">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}