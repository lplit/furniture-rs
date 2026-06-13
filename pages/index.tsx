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
            ".reveal-on-scroll, .reveal-on-scroll-delay-1, .reveal-on-scroll-delay-2, .reveal-on-scroll-delay-3, .reveal-on-scroll-delay-4, .reveal-on-scroll-delay-5, .reveal-image, .reveal-blur, .line-draw"
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

function Spec({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ fontFamily: "var(--font-geist-mono)" }}>
      <span className="block text-[2.25rem] font-light leading-none tracking-tight text-[#e8e4df] sm:text-[2.75rem]">
        {value}
      </span>
      <span className="mt-2 block text-[9px] uppercase tracking-[0.35em] text-[#5a5550]">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const [navSolid, setNavSolid] = useState(false);
  const beliefRef = useReveal();
  const engineeredRef = useReveal();
  const craftedRef = useReveal();
  const galleryRef = useReveal();
  const specsRef = useReveal();
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
          <div
            className={`transition-all duration-700 ${
              navSolid
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <a
              href="#cta"
              className="rounded-sm border border-[#c4a265]/25 px-6 py-2.5 text-[10px] uppercase tracking-[0.25em] text-[#c4a265] transition-all duration-500 hover:border-[#c4a265] hover:bg-[#c4a265] hover:text-[#0a0908]"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Pre-order
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="snap-section relative flex items-center justify-center overflow-hidden bg-[#0a0908]"
      >
        <div className="absolute inset-0">
          <Image
            src="/products/1.jpg"
            alt=""
            fill
            className="animate-hero-image object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908]/80 via-[#0a0908]/30 to-[#0a0908]/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-8 pt-24 text-center">
          <p
            className="animate-fade-in-up mb-12 text-[10px] uppercase tracking-[0.4em] text-[#c4a265]/80 delay-200"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Atelier Rack
          </p>

          <h1
            className="animate-fade-in-up mb-16 text-[2.5rem] font-light leading-[1.05] tracking-tight text-[#e8e4df] sm:text-6xl lg:text-[5rem] delay-500"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The most powerful machine
            <br />
            in your home should be
            <br />
            <em className="font-light">the most beautiful object in it.</em>
          </h1>

          <div className="animate-fade-in-up delay-1200 mx-auto mb-16 h-px w-10 bg-[#c4a265]/40" />

          <p
            className="animate-fade-in-up mx-auto max-w-sm text-[12px] leading-[2] text-[#8a8279]/70 delay-1500"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            An 8U 19&quot; ATX rack, clad in walnut.
            <br />
            Credenza proportions. Soft-close glass doors.
          </p>

          <div className="animate-fade-in-up flex flex-col items-center justify-center gap-5 pt-16 sm:flex-row delay-2000">
            <a
              href="#belief"
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

          <div className="animate-fade-in-up delay-2500 absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="animate-breathe mx-auto h-12 w-px bg-[#c4a265]/20" />
          </div>
        </div>
      </section>

      {/* ── WHY: THE BELIEF ── */}
      <section
        id="belief"
        ref={beliefRef}
        className="snap-section relative flex items-center justify-center bg-[#0a0908] py-32"
      >
        <div className="relative z-10 mx-auto max-w-2xl px-8 text-center">
          <div className="reveal-on-scroll mx-auto mb-20 h-px w-20 bg-[#c4a265]/25 line-draw" />

          <h2
            className="reveal-on-scroll-delay-1 text-[2.5rem] font-light leading-[1.1] tracking-tight text-[#e8e4df] sm:text-[3.75rem] lg:text-[5rem]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            We reject the idea that
            <br />
            computers belong in closets.
          </h2>

          <p className="reveal-blur reveal-on-scroll-delay-2 mx-auto mt-16 max-w-lg text-[15px] leading-[2] text-[#8a8279]">
            The industry has spent decades telling you to hide your hardware.
            Under the desk. In the basement. Behind a door you hope no one
            opens.{" "}
            <span className="text-[#e8e4df]/60">
              We spent those decades learning joinery.
            </span>
          </p>

          <p
            className="reveal-on-scroll-delay-3 mx-auto mt-8 max-w-sm text-[11px] leading-[2] tracking-wide text-[#5a5550]/40"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            We happen to make a computer case.
          </p>
        </div>
      </section>

      {/* ── HOW: ENGINEERED TO DISAPPEAR ── */}
      <section
        ref={engineeredRef}
        className="snap-section relative flex items-center justify-center bg-[#141210] py-32"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-8">
          <div className="grid items-center gap-20 lg:gap-32 sm:grid-cols-2">
            <div className="reveal-image relative aspect-[5/4] overflow-hidden rounded-sm">
              <Image
                src="/products/2.jpeg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2
                className="reveal-on-scroll text-[2.5rem] font-light leading-[1.1] tracking-tight text-[#e8e4df] sm:text-[3.5rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                It disappears
                <br />
                when you want it to.
              </h2>
              <p className="reveal-blur reveal-on-scroll-delay-1 mt-10 text-[15px] leading-[2] text-[#8a8279]">
                Front-to-back airflow. Not a single fan visible from the
                outside. Cable channels that route every wire out of sight.
                Removable back panel. Radiator mounts and grommeted
                pass-throughs for water cooling. Close the glass doors and
                there is no evidence this was ever a computer.
              </p>
              <div className="reveal-on-scroll-delay-2 mt-16 flex gap-12">
                <Spec value="8U" label="capacity" />
                <Spec value='19"' label="standard" />
                <Spec value="ATX" label="ready" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW: CRAFTED TO BE SEEN ── */}
      <section
        ref={craftedRef}
        className="snap-section relative flex items-center justify-center bg-[#141210] py-32"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-8">
          <div className="grid items-center gap-20 lg:gap-32 sm:grid-cols-2">
            <div className="order-2 sm:order-1">
              <h2
                className="reveal-on-scroll text-[2.5rem] font-light leading-[1.1] tracking-tight text-[#e8e4df] sm:text-[3.5rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                It demands attention
                <br />
                when you don&apos;t.
              </h2>
              <p className="reveal-blur reveal-on-scroll-delay-1 mt-10 text-[15px] leading-[2] text-[#8a8279]">
                Real walnut veneer over solid hardwood. Traditional joinery.
                No visible fasteners. No plastic bezels. Tempered glass doors
                with soft-close hinges. Dust-filtered. Lockable. Proportioned
                like a credenza, standing on tapered mid-century legs.
              </p>
              <div className="reveal-on-scroll-delay-2 mt-16 flex gap-12">
                <Spec value="24–34&quot;" label="depth" />
                <Spec value="Walnut" label="veneer" />
                <Spec value="Soft-close" label="glass" />
              </div>
            </div>
            <div className="reveal-image relative order-1 aspect-[5/4] overflow-hidden rounded-sm sm:order-2">
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

      {/* ── GALLERY ── */}
      <section
        ref={galleryRef}
        className="snap-section relative flex items-end bg-[#0a0908] pb-24 pt-32"
      >
        <div className="w-full">
          <div className="group/gallery relative">
            <div className="gallery-scroll flex gap-3 overflow-x-auto px-8 pb-4">
              {[
                { src: "/products/1.jpg", alt: "" },
                { src: "/products/2.jpeg", alt: "" },
                { src: "/products/3.jpeg", alt: "" },
              ].map((img) => (
                <div
                  key={img.src}
                  className="reveal-image relative aspect-[4/3] min-w-[85vw] flex-shrink-0 overflow-hidden rounded-sm sm:min-w-[700px]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="85vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/30 via-transparent to-transparent" />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0908] to-transparent" />
          </div>
          <div className="mt-8 flex justify-center gap-2 px-8">
            <span className="h-px w-6 bg-[#c4a265]/20" />
            <span className="h-px w-6 bg-[#c4a265]/10" />
            <span className="h-px w-6 bg-[#c4a265]/10" />
          </div>
        </div>
      </section>

      {/* ── WHAT: THE SPECS ── */}
      <section
        id="specs"
        ref={specsRef}
        className="snap-section relative flex items-center justify-center bg-[#0a0908] py-32"
      >
        <div className="relative z-10 mx-auto max-w-2xl px-8 text-center">
          <div className="reveal-on-scroll mx-auto mb-20 h-px w-20 bg-[#c4a265]/25 line-draw" />

          <h2
            className="reveal-on-scroll-delay-1 text-[2.5rem] font-light leading-[1.15] tracking-tight text-[#e8e4df] sm:text-[3.75rem] lg:text-[5rem]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            8U. 19-inch. ATX.
            <br />
            Walnut.
          </h2>

          <p className="reveal-blur reveal-on-scroll-delay-2 mx-auto mt-16 max-w-lg text-[15px] leading-[2] text-[#8a8279]">
            Front-to-back airflow. Built-in cable management. Water cooling
            ready. Lockable tempered glass and dust filtration. Real walnut
            veneer on tapered mid-century legs.
          </p>

          <div className="reveal-on-scroll-delay-3 mx-auto my-20 h-px w-12 bg-[#c4a265]/15 line-draw" />

          <div className="reveal-on-scroll-delay-4">
            <p
              className="text-[1.5rem] font-light text-[#e8e4df]/60"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              $800
            </p>
            <p
              className="mt-4 text-[9px] uppercase tracking-[0.4em] text-[#5a5550]/40"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Free shipping &middot; Continental US
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="cta"
        ref={ctaRef}
        className="snap-section relative flex items-center justify-center bg-[#0a0908] py-32"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-8 text-center">
          <div className="reveal-on-scroll mx-auto mb-20 h-px w-20 bg-[#c4a265]/25 line-draw" />

          <h2
            className="reveal-on-scroll-delay-1 text-[2.5rem] font-light leading-[1.1] tracking-tight text-[#e8e4df] sm:text-[3.75rem] lg:text-[5rem]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The most powerful machine
            <br />
            in your home should be
            <br />
            <em className="font-light">the most beautiful object in it.</em>
          </h2>

          <p
            className="reveal-blur reveal-on-scroll-delay-2 mx-auto mt-10 mb-16 max-w-sm text-[12px] leading-[2] text-[#8a8279]"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Not a server case. Furniture. Real walnut veneer. Credenza
            proportions. Designed for the room you live in.
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
              href="#belief"
              className="rounded-sm border border-[#5a5550]/30 px-12 py-4 text-[10px] uppercase tracking-[0.25em] text-[#8a8279] transition-all duration-500 hover:border-[#8a8279] hover:text-[#e8e4df]"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Discover
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#5a5550]/8 bg-[#0a0908] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 sm:flex-row">
          <p
            className="text-[9px] uppercase tracking-[0.3em] text-[#5a5550]/40"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            &copy; {new Date().getFullYear()} Atelier Rack
          </p>
          <div
            className="flex gap-8"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            <a
              href="#"
              className="text-[9px] uppercase tracking-[0.3em] text-[#5a5550]/40 transition-colors duration-300 hover:text-[#c4a265]"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-[9px] uppercase tracking-[0.3em] text-[#5a5550]/40 transition-colors duration-300 hover:text-[#c4a265]"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[9px] uppercase tracking-[0.3em] text-[#5a5550]/40 transition-colors duration-300 hover:text-[#c4a265]"
            >
              Terms
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
