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

function Spec({ value, label }: { value: string; label: string }) {
  return (
    <div className="spec-card text-center">
      <span
        className="block text-[2.5rem] font-light leading-none tracking-tight gradient-text-warm sm:text-[3.25rem]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {value}
      </span>
      <span
        className="mt-3 block text-[9px] uppercase tracking-[0.3em] text-[#8a8279]/60"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {label}
      </span>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="spec-card">
      <h4
        className="mb-2 text-[15px] font-light tracking-wide text-[#e8e4df]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {title}
      </h4>
      <p
        className="text-[12px] leading-[1.8] text-[#8a8279]/70"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  const [navSolid, setNavSolid] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const beliefRef = useReveal();
  const materialsRef = useReveal();
  const disappearRef = useReveal();
  const seenRef = useReveal();
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
            ? "border-b border-white/[0.04] bg-[#0a0908]/70 backdrop-blur-3xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
          <a
            href="#hero"
            className="text-[1rem] font-light tracking-[0.15em] text-[#e8e4df]/90 transition-opacity duration-300 hover:opacity-60"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Atelier Rack
          </a>
          <div
            className={`transition-all duration-500 ${
              navSolid
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <a
              href="#cta"
              className="apple-btn apple-btn-secondary"
              style={{ fontSize: "9px", padding: "10px 24px" }}
            >
              Pre-order
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        id="hero"
        ref={heroRef}
        className="snap-section relative flex items-center justify-center overflow-hidden bg-[#0a0908]"
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
          <div className="absolute inset-0 bg-[#0a0908]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908]/30 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center sm:px-8">
          <p
            className="animate-fade-in-up mb-10 text-[10px] uppercase tracking-[0.5em] text-[#c4a265]/60 delay-200"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Introducing
          </p>

          <h1
            className="animate-fade-in-up mb-6 text-[3rem] font-light leading-[1.05] tracking-tight text-[#e8e4df] sm:text-[4.5rem] lg:text-[6rem] delay-500"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Technology that
            <br />
            <em className="font-light gradient-text-warm">belongs in your life.</em>
          </h1>

          <p
            className="animate-fade-in-up mx-auto mb-14 max-w-md text-[13px] leading-[2] text-[#8a8279]/80 delay-1200"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            An 8U 19&quot; ATX rack, crafted in walnut.
            <br />
            No plastic. No compromise.
          </p>

          <div className="animate-fade-in-up flex flex-col items-center justify-center gap-4 sm:flex-row delay-1800">
            <a href="#belief" className="apple-btn apple-btn-primary">
              Discover
            </a>
            <a href="#cta" className="apple-btn apple-btn-secondary">
              Pre-order
            </a>
          </div>

          <div className="animate-fade-in delay-3000 absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="animate-breathe mx-auto h-16 w-px bg-[#c4a265]/15" />
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section
        id="belief"
        ref={beliefRef}
        className="snap-section section-bleed relative flex items-center justify-center bg-[#0a0908] py-36 sm:py-44"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-8">
          <div className="reveal-on-scroll mx-auto mb-16 h-px w-16 bg-[#c4a265]/20 line-draw" />

          <p
            className="reveal-on-scroll mb-8 text-[10px] uppercase tracking-[0.4em] text-[#c4a265]/50"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Why we exist
          </p>

          <h2
            className="reveal-on-scroll-delay-1 text-[2.25rem] font-light leading-[1.08] tracking-tight text-[#e8e4df] sm:text-[3.5rem] lg:text-[4.5rem]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The computer industry
            <br />
            has one rule.
            <br />
            <span className="gradient-text-warm">We broke it.</span>
          </h2>

          <p className="reveal-blur reveal-on-scroll-delay-2 mx-auto mt-14 max-w-lg text-[16px] leading-[1.9] text-[#8a8279]">
            Hide the evidence. Under the desk. In the basement. Behind a door
            you hope no one opens. Every rack, every case, every enclosure
            ever made was designed to be{" "}
            <span className="text-[#e8e4df]/50">apologized for.</span>
          </p>

          <p
            className="reveal-on-scroll-delay-3 mx-auto mt-8 max-w-sm text-[10px] leading-[2] tracking-wide text-[#5a5550]/30"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            We happen to make a computer case. Want one?
          </p>
        </div>
      </section>

      {/* ── MATERIALS ── */}
      <section
        ref={materialsRef}
        className="snap-section section-bleed relative flex items-center justify-center bg-[#0c0b09] py-36 sm:py-44"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-8">
          <p
            className="reveal-on-scroll mb-8 text-[10px] uppercase tracking-[0.4em] text-[#c4a265]/50"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Materials
          </p>

          <h2
            className="reveal-on-scroll-delay-1 text-[2.25rem] font-light leading-[1.08] tracking-tight text-[#e8e4df] sm:text-[3.5rem] lg:text-[4.5rem]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Walnut. Glass. Brass.
            <br />
            <span className="gradient-text-subtle">That&apos;s the entire palette.</span>
          </h2>

          <p className="reveal-blur reveal-on-scroll-delay-2 mx-auto mt-14 max-w-lg text-[16px] leading-[1.9] text-[#8a8279]">
            Real walnut veneer over solid hardwood. Tempered glass doors.
            Brass accents. Not a single gram of plastic. No visible fasteners.
            No bezels. No excuses.{" "}
            <span className="text-[#e8e4df]/50">
              Materials that age with grace, not degrade with time.
            </span>
          </p>

          <div className="reveal-on-scroll-delay-3 mx-auto mt-14 flex flex-wrap items-center justify-center gap-3">
            <span className="feature-pill">No Plastic</span>
            <span className="feature-pill">Walnut Veneer</span>
            <span className="feature-pill">Tempered Glass</span>
            <span className="feature-pill">Brass Accents</span>
            <span className="feature-pill">Solid Hardwood</span>
          </div>
        </div>
      </section>

      {/* ── HOW: DISAPPEAR ── */}
      <section
        ref={disappearRef}
        className="snap-section relative flex items-center justify-center bg-[#0a0908] py-36 sm:py-44"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid items-center gap-12 lg:gap-24 sm:grid-cols-2">
            <div className="reveal-image image-frame relative aspect-[4/3] overflow-hidden">
              <Image
                src="/products/2.jpeg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div>
              <p
                className="reveal-on-scroll mb-6 text-[10px] uppercase tracking-[0.4em] text-[#c4a265]/50"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Silence
              </p>
              <h2
                className="reveal-on-scroll-delay-1 text-[2rem] font-light leading-[1.1] tracking-tight text-[#e8e4df] sm:text-[3rem] lg:text-[3.5rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                It disappears
                <br />
                when you want it to.
              </h2>
              <p className="reveal-blur reveal-on-scroll-delay-2 mt-8 text-[15px] leading-[1.9] text-[#8a8279]">
                No fans. No wires. No evidence. Front-to-back airflow routed
                through sound-dampened channels. Cable management that hides
                every connection. Radiator mounts and grommeted pass-throughs
                for water cooling. Close the glass doors and it&apos;s just
                furniture.
              </p>
              <div className="reveal-on-scroll-delay-3 mt-12 grid grid-cols-3 gap-4">
                <Spec value="8U" label="capacity" />
                <Spec value='19"' label="standard" />
                <Spec value="ATX" label="ready" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW: SEEN ── */}
      <section
        ref={seenRef}
        className="snap-section relative flex items-center justify-center bg-[#0c0b09] py-36 sm:py-44"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid items-center gap-12 lg:gap-24 sm:grid-cols-2">
            <div className="order-2 sm:order-1">
              <p
                className="reveal-on-scroll mb-6 text-[10px] uppercase tracking-[0.4em] text-[#c4a265]/50"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Presence
              </p>
              <h2
                className="reveal-on-scroll-delay-1 text-[2rem] font-light leading-[1.1] tracking-tight text-[#e8e4df] sm:text-[3rem] lg:text-[3.5rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                It demands attention
                <br />
                when you don&apos;t.
              </h2>
              <p className="reveal-blur reveal-on-scroll-delay-2 mt-8 text-[15px] leading-[1.9] text-[#8a8279]">
                Run your hand across the grain. Traditional joinery. Soft-close
                hinges that glide the last inch in silence. Dust-filtered.
                Lockable. Proportioned like a credenza on tapered mid-century
                legs.{" "}
                <span className="text-[#e8e4df]/50">
                  It doesn&apos;t ask to be noticed. It just is.
                </span>
              </p>
              <div className="reveal-on-scroll-delay-3 mt-12 grid grid-cols-3 gap-4">
                <Spec value="24–34&quot;" label="depth" />
                <Spec value="Walnut" label="veneer" />
                <Spec value="Soft-close" label="glass" />
              </div>
            </div>
            <div className="reveal-image image-frame relative order-1 aspect-[4/3] overflow-hidden sm:order-2">
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

      {/* ── FULL-BLEED IMAGE ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-[#0a0908]">
        <Image
          src="/products/1.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-20 text-center">
          <p
            className="text-[10px] uppercase tracking-[0.4em] text-[#c4a265]/40"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Built for those who notice
          </p>
        </div>
      </section>

      {/* ── THE DOORS ── */}
      <section
        ref={galleryRef}
        className="snap-section relative flex items-center justify-center bg-[#0a0908] py-36 sm:py-44"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid items-center gap-12 lg:gap-24 sm:grid-cols-2">
            <div>
              <p
                className="reveal-on-scroll mb-6 text-[10px] uppercase tracking-[0.4em] text-[#c4a265]/50"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Detail
              </p>
              <h2
                className="reveal-on-scroll-delay-1 text-[2rem] font-light leading-[1.1] tracking-tight text-[#e8e4df] sm:text-[3rem] lg:text-[3.5rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                You&apos;ll open them
                <br />
                just to close them
                <br />
                <span className="gradient-text-subtle">again.</span>
              </h2>
              <p className="reveal-blur reveal-on-scroll-delay-2 mt-8 text-[15px] leading-[1.9] text-[#8a8279]">
                Tempered glass. Soft-close hinges that glide the last inch in
                silence. The kind of detail you stop noticing in furniture
                because it&apos;s done right. In a computer case, it&apos;s
                unheard of. We did it anyway.
              </p>
            </div>
            <div className="reveal-image image-frame relative aspect-[4/3] overflow-hidden">
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
      <section className="relative bg-[#0c0b09] py-24 sm:py-32">
        <div className="w-full">
          <div className="group/gallery relative">
            <div className="gallery-scroll flex gap-4 overflow-x-auto px-6 pb-4 sm:px-8">
              {[
                { src: "/products/1.jpg", alt: "Front view" },
                { src: "/products/2.jpeg", alt: "Interior view" },
                { src: "/products/3.jpeg", alt: "Detail view" },
              ].map((img) => (
                <div
                  key={img.src}
                  className="reveal-image image-frame relative aspect-[16/10] min-w-[85vw] flex-shrink-0 overflow-hidden sm:min-w-[700px]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="85vw"
                  />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0c0b09] to-transparent" />
          </div>
        </div>
      </section>

      {/* ── WHAT: SPECS ── */}
      <section
        id="specs"
        ref={specsRef}
        className="snap-section section-bleed relative flex items-center justify-center bg-[#0a0908] py-36 sm:py-44"
      >
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8">
          <div className="reveal-on-scroll mx-auto mb-16 h-px w-16 bg-[#c4a265]/20 line-draw" />

          <p
            className="reveal-on-scroll mb-8 text-[10px] uppercase tracking-[0.4em] text-[#c4a265]/50"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Specifications
          </p>

          <h2
            className="reveal-on-scroll-delay-1 text-[2.25rem] font-light leading-[1.08] tracking-tight text-[#e8e4df] sm:text-[3.5rem] lg:text-[4.5rem]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            8U. 19-inch. ATX.
            <br />
            <span className="gradient-text-warm">Walnut.</span>
          </h2>

          <p className="reveal-blur reveal-on-scroll-delay-2 mx-auto mt-14 max-w-lg text-[16px] leading-[1.9] text-[#8a8279]">
            Front-to-back airflow. Cable management. Water cooling. Lockable
            glass. Dust filtration.{" "}
            <span className="text-[#e8e4df]/50">
              Everything you need. Nothing you don&apos;t.
            </span>
          </p>

          <div className="reveal-on-scroll-delay-3 mx-auto my-16 h-px w-12 bg-[#c4a265]/10 line-draw" />

          <div className="reveal-stagger-children mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="spec-card text-center">
              <span
                className="block text-[2rem] font-light leading-none tracking-tight gradient-text-warm sm:text-[2.5rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                8U
              </span>
              <span
                className="mt-2 block text-[9px] uppercase tracking-[0.3em] text-[#8a8279]/60"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Rack Capacity
              </span>
            </div>
            <div className="spec-card text-center">
              <span
                className="block text-[2rem] font-light leading-none tracking-tight gradient-text-warm sm:text-[2.5rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                19&quot;
              </span>
              <span
                className="mt-2 block text-[9px] uppercase tracking-[0.3em] text-[#8a8279]/60"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Standard
              </span>
            </div>
            <div className="spec-card text-center">
              <span
                className="block text-[2rem] font-light leading-none tracking-tight gradient-text-warm sm:text-[2.5rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                ATX
              </span>
              <span
                className="mt-2 block text-[9px] uppercase tracking-[0.3em] text-[#8a8279]/60"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Compatible
              </span>
            </div>
            <div className="spec-card text-center">
              <span
                className="block text-[2rem] font-light leading-none tracking-tight gradient-text-warm sm:text-[2.5rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                24–34&quot;
              </span>
              <span
                className="mt-2 block text-[9px] uppercase tracking-[0.3em] text-[#8a8279]/60"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Depth Range
              </span>
            </div>
            <div className="spec-card text-center">
              <span
                className="block text-[2rem] font-light leading-none tracking-tight gradient-text-warm sm:text-[2.5rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Walnut
              </span>
              <span
                className="mt-2 block text-[9px] uppercase tracking-[0.3em] text-[#8a8279]/60"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Veneer
              </span>
            </div>
            <div className="spec-card text-center">
              <span
                className="block text-[2rem] font-light leading-none tracking-tight gradient-text-warm sm:text-[2.5rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Soft-close
              </span>
              <span
                className="mt-2 block text-[9px] uppercase tracking-[0.3em] text-[#8a8279]/60"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Glass Doors
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section
        ref={featuresRef}
        className="relative bg-[#0c0b09] py-36 sm:py-44"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8">
          <div className="reveal-on-scroll mx-auto mb-16 h-px w-16 bg-[#c4a265]/20 line-draw" />

          <p
            className="reveal-on-scroll mb-8 text-center text-[10px] uppercase tracking-[0.4em] text-[#c4a265]/50"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Built Different
          </p>

          <h2
            className="reveal-on-scroll-delay-1 mb-16 text-center text-[2rem] font-light leading-[1.1] tracking-tight text-[#e8e4df] sm:text-[2.75rem]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Every detail, considered.
          </h2>

          <div className="reveal-stagger-children grid gap-4 sm:grid-cols-2">
            <Feature
              title="Sound-Dampened Channels"
              description="Front-to-back airflow routed through acoustic foam. Your rack is heard, not heard."
            />
            <Feature
              title="Zero Visible Cabling"
              description="Every wire hidden. Every connection managed. The back is as clean as the front."
            />
            <Feature
              title="Water Cooling Ready"
              description="Radiator mounts and grommeted pass-throughs. Your cooling, your way."
            />
            <Feature
              title="Mid-Century Proportion"
              description="Tapered legs. Soft-close hinges. A credenza that happens to house a workstation."
            />
            <Feature
              title="Dust-Filtered Intake"
              description="Removable filters at every intake. Your hardware stays clean."
            />
            <Feature
              title="Lockable Glass Doors"
              description="Tempered glass that locks. Beautiful and secure."
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="cta"
        ref={ctaRef}
        className="snap-section relative flex items-center justify-center overflow-hidden bg-[#0a0908] py-36 sm:py-44"
      >
        <div className="absolute inset-0">
          <Image
            src="/products/1.jpg"
            alt=""
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/80 to-[#0a0908]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-8">
          <div className="reveal-on-scroll mx-auto mb-16 h-px w-16 bg-[#c4a265]/20 line-draw" />

          <p
            className="reveal-on-scroll mb-8 text-[10px] uppercase tracking-[0.4em] text-[#c4a265]/50"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Atelier Rack
          </p>

          <h2
            className="reveal-on-scroll-delay-1 text-[2.5rem] font-light leading-[1.05] tracking-tight text-[#e8e4df] sm:text-[3.75rem] lg:text-[5rem]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The most powerful machine
            <br />
            in your home should be
            <br />
            <span className="gradient-text-warm">the most beautiful object in it.</span>
          </h2>

          <p
            className="reveal-blur reveal-on-scroll-delay-2 mx-auto mt-10 mb-4 max-w-sm text-[14px] leading-[2] text-[#8a8279]/70"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Your room deserves better than a black box.
          </p>

          <div className="reveal-on-scroll-delay-3 my-8">
            <p
              className="text-[3rem] font-light tracking-tight gradient-text-warm sm:text-[4rem]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              $800
            </p>
            <p
              className="mt-3 text-[9px] uppercase tracking-[0.3em] text-[#5a5550]/40"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Free shipping &middot; Continental US
            </p>
          </div>

          <div className="reveal-on-scroll-delay-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#" className="apple-btn apple-btn-primary" style={{ padding: "16px 48px" }}>
              Pre-order Now
            </a>
            <a href="#belief" className="apple-btn apple-btn-ghost">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.03] bg-[#0a0908] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 sm:flex-row sm:px-8">
          <a
            href="#hero"
            className="text-[1rem] font-light tracking-[0.15em] text-[#e8e4df]/50 transition-colors duration-300 hover:text-[#c4a265]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Atelier Rack
          </a>
          <div
            className="flex gap-10"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.25em] text-[#5a5550]/30 transition-colors duration-300 hover:text-[#c4a265]"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.25em] text-[#5a5550]/30 transition-colors duration-300 hover:text-[#c4a265]"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.25em] text-[#5a5550]/30 transition-colors duration-300 hover:text-[#c4a265]"
            >
              Terms
            </a>
          </div>
          <p
            className="text-[10px] uppercase tracking-[0.25em] text-[#5a5550]/25"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            &copy; {new Date().getFullYear()} Atelier Rack
          </p>
        </div>
      </footer>
    </>
  );
}