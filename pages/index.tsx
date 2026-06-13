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
            ".reveal-on-scroll, .reveal-on-scroll-delay-1, .reveal-on-scroll-delay-2, .reveal-on-scroll-delay-3, .reveal-on-scroll-delay-4, .reveal-on-scroll-delay-5, .reveal-image, .reveal-blur, .reveal-scale, .line-draw, .reveal-stagger-children"
          ).forEach((child) => {
            child.classList.add("revealed");
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const [navSolid, setNavSolid] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const whyRef = useReveal();
  const materialsRef = useReveal();
  const disappearRef = useReveal();
  const seenRef = useReveal();
  const doorsRef = useReveal();
  const galleryRef = useReveal();
  const specsRef = useReveal();
  const featuresRef = useReveal();
  const ctaRef = useReveal();

  useEffect(() => {
    const handleScroll = () => {
      setNavSolid(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          navSolid
            ? "bg-[#050506]/80 backdrop-blur-3xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <a
            href="#hero"
            className="text-[13px] font-medium tracking-[0.2em] text-[#f0ece6]/90 transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            ATELIER RACK
          </a>
          <div
            className={`transition-all duration-500 ${
              navSolid
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <a href="#cta" className="link-arrow">Pre-order</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        id="hero"
        ref={heroRef}
        className="snap-section relative flex items-center justify-center overflow-hidden bg-[#050506]"
      >
        <div className="absolute inset-0">
          <Image
            src="/products/1.jpg"
            alt=""
            fill
            className="animate-hero-scale object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#050506]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 text-center">
          <h1
            className="animate-fade-in-up hero-headline font-light text-[#f0ece6] delay-500"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The computer that belongs
            <br />
            <em className="font-light gradient-amber">in your living room.</em>
          </h1>

          <p
            className="animate-fade-in-up mx-auto mb-14 mt-8 max-w-md text-[14px] leading-[1.8] text-[#f0ece6]/40 delay-1200"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Walnut. Glass. Brass.
          </p>

          <div className="animate-fade-in-up flex flex-col items-center justify-center gap-6 delay-1800">
            <a href="#cta" className="link-arrow">Pre-order</a>
          </div>

          <div className="animate-fade-in delay-3000 absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="animate-breathe mx-auto h-14 w-px bg-[#e8a849]/15" />
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section
        id="belief"
        ref={whyRef}
        className="snap-section section-glow-rose relative flex items-center justify-center bg-[#100808] py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="reveal-on-scroll mx-auto mb-20 h-px w-16 line-draw divider-rose" />

          <h2
            className="reveal-on-scroll-delay-1 section-headline font-light text-[#f0ece6]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The whole industry builds cases
            <br />
            to hide.
            <br />
            <span className="gradient-rose">We built one to keep.</span>
          </h2>

          <p className="reveal-blur reveal-on-scroll-delay-2 mx-auto mt-20 max-w-2xl text-[17px] leading-[1.9] text-[#f0ece6]/45">
            Under the desk. In the basement. Where you hope no one looks.
            An industry that treats your hardware like something
            to{" "}
            <span className="text-[#f0ece6]/80">apologize for.</span>
          </p>

          <p
            className="reveal-on-scroll-delay-3 mx-auto mt-10 text-[11px] tracking-[0.3em] text-[#d4735e]/50"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            NOT APOLOGIES.
          </p>
        </div>
      </section>

      {/* ── MATERIALS ── */}
      <section
        ref={materialsRef}
        className="snap-section section-glow-amber relative flex items-center justify-center bg-[#0c0a06] py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2
            className="reveal-on-scroll section-headline font-light text-[#f0ece6]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Three materials.
            <br />
            <span className="text-[#f0ece6]/40">No compromises.</span>
          </h2>

          <p className="reveal-blur reveal-on-scroll-delay-1 mx-auto mt-20 max-w-2xl text-[17px] leading-[1.9] text-[#f0ece6]/45">
            Solid hardwood. Tempered glass. Brass hardware.
            Not a gram of plastic. Not a visible screw.{" "}
            <span className="text-[#f0ece6]/80">
              Materials that age beautifully.
            </span>
          </p>

          <div className="reveal-on-scroll-delay-2 mx-auto mt-20 grid grid-cols-3 divide-x divide-[#e8a849]/15 max-w-md">
            <div className="px-4">
              <p className="text-[10px] tracking-[0.25em] text-[#e8a849]/40 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>ONE</p>
              <p className="text-[#e8a849] text-[15px]" style={{ fontFamily: "var(--font-cormorant)" }}>Walnut</p>
            </div>
            <div className="px-4">
              <p className="text-[10px] tracking-[0.25em] text-[#e8a849]/40 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>TWO</p>
              <p className="text-[#e8a849] text-[15px]" style={{ fontFamily: "var(--font-cormorant)" }}>Glass</p>
            </div>
            <div className="px-4">
              <p className="text-[10px] tracking-[0.25em] text-[#e8a849]/40 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>THREE</p>
              <p className="text-[#e8a849] text-[15px]" style={{ fontFamily: "var(--font-cormorant)" }}>Brass</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW: DISAPPEAR ── */}
      <section
        ref={disappearRef}
        className="snap-section section-glow-sage relative flex items-center justify-center bg-[#050506] py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-16 lg:gap-28 sm:grid-cols-2">
            <div className="reveal-image image-tint-cool relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/products/2.jpeg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="reveal-on-scroll mb-4 text-[10px] tracking-[0.3em] color-sage" style={{ fontFamily: "var(--font-geist-mono)" }}>SILENCE</p>
              <h2
                className="reveal-on-scroll-delay-1 section-headline font-light text-[#f0ece6]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                It disappears
                <br />
                when you want it to.
              </h2>
              <p className="reveal-blur reveal-on-scroll-delay-2 mt-10 text-[16px] leading-[1.9] text-[#f0ece6]/45">
                Sound-dampened channels. Every cable, gone.{" "}
                <span className="text-[#f0ece6]/80">
                  Walk away. It&apos;s just furniture now.
                </span>
              </p>
              <a href="#specs" className="reveal-on-scroll-delay-3 inline-block mt-10 link-arrow">See specs</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW: SEEN ── */}
      <section
        ref={seenRef}
        className="snap-section section-glow-copper relative flex items-center justify-center bg-[#0c0a06] py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-16 lg:gap-28 sm:grid-cols-2">
            <div className="order-2 sm:order-1">
              <p className="reveal-on-scroll mb-4 text-[10px] tracking-[0.3em] gradient-copper" style={{ fontFamily: "var(--font-geist-mono)" }}>PRESENCE</p>
              <h2
                className="reveal-on-scroll-delay-1 section-headline font-light text-[#f0ece6]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                It demands attention
                <br />
                when you don&apos;t.
              </h2>
              <p className="reveal-blur reveal-on-scroll-delay-2 mt-10 text-[16px] leading-[1.9] text-[#f0ece6]/45">
                Tapered mid-century legs. Proportioned like a credenza.{" "}
                <span className="text-[#f0ece6]/80">
                  It earns its place.
                </span>
              </p>
              <a href="#specs" className="reveal-on-scroll-delay-3 inline-block mt-10 link-arrow">See specs</a>
            </div>
            <div className="reveal-image image-tint-warm relative order-1 aspect-[4/3] overflow-hidden rounded-lg sm:order-2">
              <Image
                src="/products/3.jpeg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED ── */}
      <section className="relative flex items-center justify-center h-screen min-h-[600px] overflow-hidden bg-[#050506]">
        <Image
          src="/products/1.jpg"
          alt=""
          fill
          className="object-cover reveal-scale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100808] via-[#050506]/30 to-[#050506]/60" />
        <p className="relative z-10 text-[11px] tracking-[0.4em] color-amber/40" style={{ fontFamily: "var(--font-geist-mono)" }}>UNMISTAKABLE.</p>
      </section>

      {/* ── THE DOORS ── */}
      <section
        ref={doorsRef}
        className="snap-section section-glow-violet relative flex items-center justify-center bg-[#050506] py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-16 lg:gap-28 sm:grid-cols-2">
            <div>
              <p className="reveal-on-scroll mb-4 text-[10px] tracking-[0.3em] gradient-violet" style={{ fontFamily: "var(--font-geist-mono)" }}>DETAIL</p>
              <h2
                className="reveal-on-scroll-delay-1 section-headline font-light text-[#f0ece6]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                You&apos;ll open them
                <br />
                just to close them
                <br />
                again.
              </h2>
              <p className="reveal-blur reveal-on-scroll-delay-2 mt-10 text-[16px] leading-[1.9] text-[#f0ece6]/45">
                <span className="text-[#f0ece6]/80">
                  Hinges that glide the last inch in silence.
                  The kind of detail you stop noticing — because it&apos;s done right.
                </span>
              </p>
              <a href="#specs" className="reveal-on-scroll-delay-3 inline-block mt-10 link-arrow">See specification</a>
            </div>
            <div className="reveal-image image-tint-violet relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/products/2.jpeg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section
        ref={galleryRef}
        className="relative bg-[#080c14] py-28 sm:py-40"
      >
        <div className="w-full">
          <div className="group/gallery relative">
            <div className="gallery-scroll flex gap-6 overflow-x-auto px-6 pb-4 sm:px-12">
              {[
                { src: "/products/1.jpg", alt: "Front view" },
                { src: "/products/2.jpeg", alt: "Interior view" },
                { src: "/products/3.jpeg", alt: "Detail view" },
              ].map((img) => (
                <div
                  key={img.src}
                  className="image-tint-warm relative aspect-[16/10] min-w-[85vw] flex-shrink-0 overflow-hidden rounded-lg sm:min-w-[750px]"
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="85vw" />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#080c14] to-transparent" />
          </div>
        </div>
      </section>

      {/* ── SPECS ── */}
      <section
        id="specs"
        ref={specsRef}
        className="snap-section section-glow-ice relative flex items-center justify-center bg-[#050506] py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="reveal-on-scroll mx-auto mb-20 h-px w-16 line-draw divider-amber" />

          <h2
            className="reveal-on-scroll-delay-1 section-headline font-light text-[#f0ece6]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            8U. 19-inch. ATX.
            <br />
            <span className="gradient-amber">Walnut.</span>
          </h2>

          <div className="reveal-on-scroll-delay-2 mx-auto my-20 h-px w-12 bg-[#e8a849]/10 line-draw" />

          <div className="reveal-stagger-children grid grid-cols-2 gap-x-12 gap-y-12 sm:grid-cols-3 text-left max-w-2xl mx-auto">
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#b8c4d0]/25 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>CAPACITY</p>
              <p className="text-[28px] font-light gradient-ice leading-none sm:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>8U</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#b8c4d0]/25 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>STANDARD</p>
              <p className="text-[28px] font-light gradient-ice leading-none sm:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>19&quot;</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#b8c4d0]/25 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>COMPATIBLE</p>
              <p className="text-[28px] font-light gradient-ice leading-none sm:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>ATX</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#b8c4d0]/25 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>DEPTH RANGE</p>
              <p className="text-[28px] font-light gradient-copper leading-none sm:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>24–34&quot;</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#b8c4d0]/25 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>VENEER</p>
              <p className="text-[28px] font-light gradient-amber leading-none sm:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>Walnut</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#b8c4d0]/25 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>GLASS DOORS</p>
              <p className="text-[28px] font-light gradient-rose leading-none sm:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>Soft-close</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        ref={featuresRef}
        className="relative bg-[#0a0f0a] py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8">
          <div className="reveal-on-scroll mx-auto mb-20 h-px w-16 line-draw divider-violet" />

          <p className="reveal-on-scroll mb-4 text-[10px] tracking-[0.3em] color-sage text-center" style={{ fontFamily: "var(--font-geist-mono)" }}>INSIDE</p>

          <h2
            className="reveal-on-scroll-delay-1 mb-20 text-center section-headline font-light text-[#f0ece6]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            One detail after another.
          </h2>

          <div className="reveal-stagger-children grid grid-cols-2 gap-x-16 gap-y-12 max-w-2xl mx-auto">
            <div className="feature-item">
              <p className="text-[#f0ece6]/80 text-[15px] font-light" style={{ fontFamily: "var(--font-cormorant)" }}>Silent Airflow</p>
              <p className="text-[12px] leading-[1.8] text-[#f0ece6]/30 mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>Sound-dampened channels. Barely there.</p>
            </div>
            <div className="feature-item">
              <p className="text-[#f0ece6]/80 text-[15px] font-light" style={{ fontFamily: "var(--font-cormorant)" }}>Invisible Cabling</p>
              <p className="text-[12px] leading-[1.8] text-[#f0ece6]/30 mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>Out of sight. The back is as clean as the front.</p>
            </div>
            <div className="feature-item">
              <p className="text-[#f0ece6]/80 text-[15px] font-light" style={{ fontFamily: "var(--font-cormorant)" }}>Water Cooling</p>
              <p className="text-[12px] leading-[1.8] text-[#f0ece6]/30 mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>Radiator mounts. Grommeted pass-throughs.</p>
            </div>
            <div className="feature-item">
              <p className="text-[#f0ece6]/80 text-[15px] font-light" style={{ fontFamily: "var(--font-cormorant)" }}>Mid-Century Design</p>
              <p className="text-[12px] leading-[1.8] text-[#f0ece6]/30 mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>Tapered legs. Credenza proportions.</p>
            </div>
            <div className="feature-item">
              <p className="text-[#f0ece6]/80 text-[15px] font-light" style={{ fontFamily: "var(--font-cormorant)" }}>Dust Filtered</p>
              <p className="text-[12px] leading-[1.8] text-[#f0ece6]/30 mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>Removable filters at each intake.</p>
            </div>
            <div className="feature-item">
              <p className="text-[#f0ece6]/80 text-[15px] font-light" style={{ fontFamily: "var(--font-cormorant)" }}>Lockable Glass</p>
              <p className="text-[12px] leading-[1.8] text-[#f0ece6]/30 mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>Lockable. Beautiful.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="cta"
        ref={ctaRef}
        className="snap-section section-glow-flame relative flex items-center justify-center overflow-hidden bg-[#050506] py-44 sm:py-56"
      >
        <div className="absolute inset-0">
          <Image
            src="/products/1.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/80 to-[#050506]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="reveal-on-scroll mx-auto mb-20 h-px w-16 line-draw divider-amber" />

          <h2
            className="reveal-on-scroll-delay-1 hero-headline font-light text-[#f0ece6]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Your space deserves better
            <br />
            <span className="gradient-flame">than a black box.</span>
          </h2>

          <div className="reveal-on-scroll-delay-2 my-14">
            <p
              className="big-number font-light tracking-tight gradient-gold"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              $2,200
            </p>
            <div className="reveal-stagger-children mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <p className="text-[10px] tracking-[0.15em] text-[#f0ece6]/30" style={{ fontFamily: "var(--font-geist-mono)" }}>Walnut veneer</p>
              <p className="text-[10px] tracking-[0.15em] text-[#f0ece6]/30" style={{ fontFamily: "var(--font-geist-mono)" }}>Tempered glass</p>
              <p className="text-[10px] tracking-[0.15em] text-[#f0ece6]/30" style={{ fontFamily: "var(--font-geist-mono)" }}>Soft-close hinges</p>
              <p className="text-[10px] tracking-[0.15em] text-[#f0ece6]/30" style={{ fontFamily: "var(--font-geist-mono)" }}>Water cooling ready</p>
              <p className="text-[10px] tracking-[0.15em] text-[#f0ece6]/30" style={{ fontFamily: "var(--font-geist-mono)" }}>Free shipping</p>
            </div>
            <p className="mt-6 text-[10px] tracking-[0.15em] text-[#f0ece6]/15" style={{ fontFamily: "var(--font-geist-mono)" }}>FROM $183/MO WITH AFFIRM</p>
          </div>

          <div className="reveal-on-scroll-delay-3">
            <a href="#" className="link-arrow text-[13px]">Pre-order now</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#f0ece6]/[0.04] bg-[#050506] py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <a
            href="#hero"
            className="text-[11px] font-medium tracking-[0.2em] text-[#f0ece6]/25 transition-colors hover:text-[#e8a849]/60"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            ATELIER RACK
          </a>
          <div className="flex gap-8" style={{ fontFamily: "var(--font-geist-mono)" }}>
            <a href="#" className="text-[10px] tracking-[0.15em] text-[#f0ece6]/15 transition-colors hover:text-[#e8a849]/50">Contact</a>
            <a href="#" className="text-[10px] tracking-[0.15em] text-[#f0ece6]/15 transition-colors hover:text-[#e8a849]/50">Privacy</a>
            <a href="#" className="text-[10px] tracking-[0.15em] text-[#f0ece6]/15 transition-colors hover:text-[#e8a849]/50">Terms</a>
          </div>
          <p className="text-[10px] tracking-[0.15em]" style={{ fontFamily: "var(--font-geist-mono)", color: "rgba(240,236,230,0.1)" }}>&copy; {new Date().getFullYear()} Atelier Rack</p>
        </div>
      </footer>
    </>
  );
}