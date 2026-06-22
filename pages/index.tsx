import Image from "next/image";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { absoluteImageUrl, canonicalUrl, SITE } from "@/lib/site";

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

function useNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || SITE.newsletter.errorMessage);

      setStatus("success");
      setMessage(SITE.newsletter.successMessage);
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : SITE.newsletter.errorMessage);
    }
  };

  return { email, setEmail, status, message, submit };
}

function buildJsonLd() {
  const now = new Date().toISOString();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: SITE.brand,
        url: canonicalUrl("/"),
        inLanguage: "en",
        dateModified: now,
        publisher: {
          "@type": "Organization",
          name: SITE.brand,
          url: canonicalUrl("/"),
          logo: absoluteImageUrl("/favicon.ico"),
        },
        potentialAction: {
          "@type": "SubscribeAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${canonicalUrl("/")}#cta`,
          },
        },
      },
      {
        "@type": "Product",
        name: SITE.product.fullName,
        image: SITE.product.images.ogDirectory.map(absoluteImageUrl),
        description: SITE.description,
        brand: {
          "@type": "Brand",
          name: SITE.brand,
        },
        category: SITE.product.category,
        offers: {
          "@type": "Offer",
          url: `${canonicalUrl("/")}#cta`,
          price: SITE.product.price,
          priceCurrency: SITE.product.currency,
          availability: SITE.product.availability,
          itemCondition: SITE.product.condition,
          priceValidUntil: SITE.product.priceValidUntil,
        },
      },
    ],
  };
}

export default function Home() {
  const [navSolid, setNavSolid] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { email, setEmail, status, message, submit } = useNewsletter();
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

  const jsonLd = buildJsonLd();
  const ogImageUrl = absoluteImageUrl(SITE.product.images.og);

  return (
    <>
      <Head>
        <title>{`${SITE.brand} — Premium Walnut ATX Rack Furniture`}</title>
        <meta name="description" content={SITE.description} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content={SITE.themeColor} />
        <meta name="keywords" content={SITE.keywords.join(", ")} />
        <meta name="author" content={SITE.author} />
        <link rel="canonical" href={canonicalUrl("/")} />

        <meta property="og:title" content={`${SITE.brand} — Premium Walnut ATX Rack Furniture`} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl("/")} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:site_name" content={SITE.brand} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE.brand} — Premium Walnut ATX Rack Furniture`} />
        <meta name="twitter:description" content={SITE.description} />
        <meta name="twitter:image" content={ogImageUrl} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <header>
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
            navSolid ? "bg-[#050506]/80 backdrop-blur-3xl" : "bg-transparent"
          }`}
        >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <a
            href="#hero"
            className="text-[13px] font-medium tracking-[0.2em] text-[#f0ece6]/90 transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:text-[#e8a849]"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            ATELIER RACK
          </a>
          <div
            className={`transition-all duration-500 ${
              navSolid ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <a href="#cta" className="link-arrow">Pre-order</a>
          </div>
        </div>
      </nav>

      </header>

      <main>
        {/* ── HERO ── */}
        <section
          id="hero"
          ref={heroRef}
          className="snap-section relative flex items-center justify-center overflow-hidden bg-[#050506]"
        >
          <div className="absolute inset-0">
            <Image
              src="/products/1.jpg"
              alt={SITE.product.alt.hero}
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
            <em className="font-light text-[#e8a849] text-glow-amber">in your living room.</em>
          </h1>

          <p
            className="animate-fade-in-up mx-auto mb-14 mt-8 max-w-md text-[14px] leading-[1.8] text-[#f0ece6]/55 delay-1200"
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
        className="snap-section section-glow-rose relative flex items-center justify-center bg-mesh-rose py-44 sm:py-56"
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
            <span className="text-[#d4735e] text-glow-rose">We built one to keep.</span>
          </h2>

          <p className="reveal-blur reveal-on-scroll-delay-2 mx-auto mt-20 max-w-2xl text-[17px] leading-[1.9] text-[#f0ece6]/55">
            Under the desk. In the basement. Where you hope no one looks.
            An industry that treats your hardware like something
            to{" "}
            <span className="text-[#f0ece6]/80">apologize for.</span>
          </p>

          <p
            className="reveal-on-scroll-delay-3 mx-auto mt-10 text-[11px] tracking-[0.3em] text-[#d4735e]/85"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            NOT APOLOGIES.
          </p>
        </div>
      </section>

      {/* ── MATERIALS ── */}
      <section
        ref={materialsRef}
        className="snap-section section-glow-amber relative flex items-center justify-center bg-mesh-earth py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2
            className="reveal-on-scroll section-headline font-light text-[#f0ece6]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Three materials.
            <br />
            <span className="text-[#f0ece6]/55">No compromises.</span>
          </h2>

          <p className="reveal-blur reveal-on-scroll-delay-1 mx-auto mt-20 max-w-2xl text-[17px] leading-[1.9] text-[#f0ece6]/55">
            Solid hardwood. Tempered glass. Brass hardware.
            Not a gram of plastic. Not a visible screw.{" "}
            <span className="text-[#f0ece6]/80">
              Materials that age beautifully.
            </span>
          </p>

          <div className="reveal-on-scroll-delay-2 mx-auto mt-20 grid grid-cols-3 divide-x divide-[#e8a849]/15 max-w-md">
            <div className="px-4">
              <p className="text-[10px] tracking-[0.25em] text-[#e8a849]/65 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>ONE</p>
              <p className="text-[#e8a849] text-[15px]" style={{ fontFamily: "var(--font-cormorant)" }}>Walnut</p>
            </div>
            <div className="px-4">
              <p className="text-[10px] tracking-[0.25em] text-[#e8a849]/65 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>TWO</p>
              <p className="text-[#e8a849] text-[15px]" style={{ fontFamily: "var(--font-cormorant)" }}>Glass</p>
            </div>
            <div className="px-4">
              <p className="text-[10px] tracking-[0.25em] text-[#e8a849]/65 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>THREE</p>
              <p className="text-[#e8a849] text-[15px]" style={{ fontFamily: "var(--font-cormorant)" }}>Brass</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW: DISAPPEAR ── */}
      <section
        ref={disappearRef}
        className="snap-section section-glow-sage relative flex items-center justify-center bg-mesh-void py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-16 lg:gap-28 sm:grid-cols-2">
            <div className="reveal-image image-tint-cool image-frame-hover relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/products/2.jpeg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="reveal-on-scroll section-label section-label-sage">Silence</span>
              <h2
                className="reveal-on-scroll-delay-1 mt-6 section-headline font-light text-[#f0ece6]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                It disappears
                <br />
                when you want it to.
              </h2>
              <p className="reveal-blur reveal-on-scroll-delay-2 mt-10 text-[16px] leading-[1.9] text-[#f0ece6]/55">
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
        className="snap-section section-glow-copper relative flex items-center justify-center bg-mesh-earth py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-16 lg:gap-28 sm:grid-cols-2">
            <div className="order-2 sm:order-1">
              <span className="reveal-on-scroll section-label section-label-copper">Presence</span>
              <h2
                className="reveal-on-scroll-delay-1 mt-6 section-headline font-light text-[#f0ece6]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                It demands attention
                <br />
                when you don&apos;t.
              </h2>
              <p className="reveal-blur reveal-on-scroll-delay-2 mt-10 text-[16px] leading-[1.9] text-[#f0ece6]/55">
                Tapered mid-century legs. Proportioned like a credenza.{" "}
                <span className="text-[#f0ece6]/80">
                  It earns its place.
                </span>
              </p>
              <a href="#specs" className="reveal-on-scroll-delay-3 inline-block mt-10 link-arrow">See specs</a>
            </div>
            <div className="reveal-image image-tint-warm image-frame-hover relative order-1 aspect-[4/3] overflow-hidden rounded-lg sm:order-2">
              <Image
                src="/products/3.jpeg"
                alt={SITE.product.alt.detail}
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
          alt={SITE.product.alt.lifestyle}
          fill
          className="object-cover reveal-scale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100808] via-[#050506]/30 to-[#050506]/60" />
        <p className="relative z-10 text-[11px] tracking-[0.4em] text-[#e8a849] text-glow-amber" style={{ fontFamily: "var(--font-geist-mono)" }}>UNMISTAKABLE.</p>
      </section>

      {/* ── THE DOORS ── */}
      <section
        ref={doorsRef}
        className="snap-section section-glow-violet relative flex items-center justify-center bg-mesh-violet py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-16 lg:gap-28 sm:grid-cols-2">
            <div>
              <span className="reveal-on-scroll section-label section-label-violet">Detail</span>
              <h2
                className="reveal-on-scroll-delay-1 mt-6 section-headline font-light text-[#f0ece6]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                You&apos;ll open them
                <br />
                just to close them
                <br />
                <span className="text-[#a78bfa] text-glow-violet">again.</span>
              </h2>
              <p className="reveal-blur reveal-on-scroll-delay-2 mt-10 text-[16px] leading-[1.9] text-[#f0ece6]/55">
                <span className="text-[#f0ece6]/80">
                  Hinges that glide the last inch in silence.
                  The kind of detail you stop noticing — because it&apos;s done right.
                </span>
              </p>
              <a href="#specs" className="reveal-on-scroll-delay-3 inline-block mt-10 link-arrow">See specification</a>
            </div>
            <div className="reveal-image image-tint-violet image-frame-hover relative aspect-[4/3] overflow-hidden rounded-lg">
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
        className="relative bg-mesh-navy py-28 sm:py-40"
      >
        <div className="w-full">
          <div className="group/gallery relative">
            <div className="gallery-scroll flex gap-6 overflow-x-auto px-6 pb-4 sm:px-12">
                {[
                  { src: SITE.product.images.gallery[0], alt: SITE.product.alt.hero, tint: "image-tint-warm" },
                  { src: SITE.product.images.gallery[1], alt: SITE.product.alt.interior, tint: "image-tint-violet" },
                  { src: SITE.product.images.gallery[2], alt: SITE.product.alt.detail, tint: "image-tint-pink" },
                ].map((img) => (
                  <div
                    key={img.src}
                    className={`${img.tint} image-frame-hover relative aspect-[16/10] min-w-[85vw] flex-shrink-0 overflow-hidden rounded-lg sm:min-w-[750px]`}
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
        className="snap-section section-glow-ice relative flex items-center justify-center bg-mesh-void py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="reveal-on-scroll mx-auto mb-20 h-px w-16 line-draw divider-amber" />

          <h2
            className="reveal-on-scroll-delay-1 section-headline font-light text-[#f0ece6]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            8U. 19-inch. ATX.
            <br />
            <span className="text-[#e8a849] text-glow-amber">Walnut.</span>
          </h2>

          <div className="reveal-on-scroll-delay-2 mx-auto my-20 h-px w-12 bg-[#e8a849]/10 line-draw" />

          <div className="reveal-stagger-children grid grid-cols-2 gap-x-12 gap-y-12 sm:grid-cols-3 text-left max-w-2xl mx-auto">
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#b8c4d0]/60 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>CAPACITY</p>
              <p className="text-[28px] font-light text-[#b8c4d0] text-glow-ice leading-none sm:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>8U</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#b8c4d0]/60 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>STANDARD</p>
              <p className="text-[28px] font-light text-[#b8c4d0] text-glow-ice leading-none sm:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>19&quot;</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#b8c4d0]/60 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>COMPATIBLE</p>
              <p className="text-[28px] font-light text-[#b8c4d0] text-glow-ice leading-none sm:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>ATX</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#b8c4d0]/60 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>DEPTH RANGE</p>
              <p className="text-[28px] font-light text-[#c8845a] leading-none sm:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>24–34&quot;</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#b8c4d0]/60 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>VENEER</p>
              <p className="text-[28px] font-light text-[#e8a849] text-glow-amber leading-none sm:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>Walnut</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#b8c4d0]/60 mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>GLASS DOORS</p>
              <p className="text-[28px] font-light text-[#d4735e] text-glow-rose leading-none sm:text-[36px]" style={{ fontFamily: "var(--font-cormorant)" }}>Soft-close</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        ref={featuresRef}
        className="relative bg-mesh-forest py-44 sm:py-56"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8">
          <div className="reveal-on-scroll mx-auto mb-20 h-px w-16 line-draw divider-violet" />

          <span className="reveal-on-scroll section-label section-label-violet">Inside</span>

          <h2
            className="reveal-on-scroll-delay-1 mt-6 mb-20 text-center section-headline font-light text-[#f0ece6]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            One detail after another.
          </h2>

          <div className="reveal-stagger-children grid grid-cols-2 gap-x-16 gap-y-12 max-w-2xl mx-auto">
            <div className="feature-item">
              <p className="text-[#f0ece6]/80 text-[15px] font-light" style={{ fontFamily: "var(--font-cormorant)" }}>Silent Airflow</p>
              <p className="text-[12px] leading-[1.8] text-[#f0ece6]/55 mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>Sound-dampened channels. Barely there.</p>
            </div>
            <div className="feature-item">
              <p className="text-[#f0ece6]/80 text-[15px] font-light" style={{ fontFamily: "var(--font-cormorant)" }}>Invisible Cabling</p>
              <p className="text-[12px] leading-[1.8] text-[#f0ece6]/55 mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>Out of sight. The back is as clean as the front.</p>
            </div>
            <div className="feature-item">
              <p className="text-[#f0ece6]/80 text-[15px] font-light" style={{ fontFamily: "var(--font-cormorant)" }}>Water Cooling</p>
              <p className="text-[12px] leading-[1.8] text-[#f0ece6]/55 mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>Radiator mounts. Grommeted pass-throughs.</p>
            </div>
            <div className="feature-item">
              <p className="text-[#f0ece6]/80 text-[15px] font-light" style={{ fontFamily: "var(--font-cormorant)" }}>Mid-Century Design</p>
              <p className="text-[12px] leading-[1.8] text-[#f0ece6]/55 mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>Tapered legs. Credenza proportions.</p>
            </div>
            <div className="feature-item">
              <p className="text-[#f0ece6]/80 text-[15px] font-light" style={{ fontFamily: "var(--font-cormorant)" }}>Dust Filtered</p>
              <p className="text-[12px] leading-[1.8] text-[#f0ece6]/55 mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>Removable filters at each intake.</p>
            </div>
            <div className="feature-item">
              <p className="text-[#f0ece6]/80 text-[15px] font-light" style={{ fontFamily: "var(--font-cormorant)" }}>Lockable Glass</p>
              <p className="text-[12px] leading-[1.8] text-[#f0ece6]/55 mt-1" style={{ fontFamily: "var(--font-geist-mono)" }}>Lockable. Beautiful.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="cta"
        ref={ctaRef}
        className="snap-section section-glow-flame relative flex items-center justify-center overflow-hidden bg-mesh-flame py-44 sm:py-56"
      >
        <div className="absolute inset-0">
        <Image
          src="/products/1.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
          aria-hidden="true"
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
            <span className="text-[#f97316] text-glow-flame">than a black box.</span>
          </h2>

          <div className="reveal-on-scroll-delay-2 my-14">
            <p
              className="big-number font-light tracking-tight text-[#fbbf24] text-glow-gold glow-pulse"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              $2,200
            </p>
            <div className="reveal-stagger-children mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <p className="text-[10px] tracking-[0.15em] text-[#f0ece6]/55" style={{ fontFamily: "var(--font-geist-mono)" }}>Walnut veneer</p>
              <p className="text-[10px] tracking-[0.15em] text-[#f0ece6]/55" style={{ fontFamily: "var(--font-geist-mono)" }}>Tempered glass</p>
              <p className="text-[10px] tracking-[0.15em] text-[#f0ece6]/55" style={{ fontFamily: "var(--font-geist-mono)" }}>Soft-close hinges</p>
              <p className="text-[10px] tracking-[0.15em] text-[#f0ece6]/55" style={{ fontFamily: "var(--font-geist-mono)" }}>Water cooling ready</p>
              <p className="text-[10px] tracking-[0.15em] text-[#f0ece6]/55" style={{ fontFamily: "var(--font-geist-mono)" }}>Free shipping</p>
            </div>
            <p className="mt-6 text-[10px] tracking-[0.15em] text-[#f0ece6]/55" style={{ fontFamily: "var(--font-geist-mono)" }}>FROM $183/MO WITH AFFIRM</p>
          </div>

          <div className="reveal-on-scroll-delay-3">
            <a href="#" className="link-arrow text-[13px]">Pre-order now</a>

            <div className="mt-10">
              <form onSubmit={submit} className="mx-auto flex max-w-sm flex-col items-center gap-3 sm:flex-row">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={SITE.newsletter.placeholder}
                  disabled={status === "loading" || status === "success"}
                  className="w-full flex-1 rounded-full border border-[#f0ece6]/10 bg-[#050506]/40 px-5 py-3 text-[13px] text-[#f0ece6] placeholder:text-[#f0ece6]/55 focus:border-[#e8a849]/50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e8a849]/60 focus-visible:outline-offset-2"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="rounded-full bg-[#e8a849] px-6 py-3 text-[12px] font-medium tracking-[0.08em] text-[#050506] transition-colors hover:bg-[#f0c06a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0c06a] focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {status === "loading" ? "..." : SITE.newsletter.cta}
                </button>
              </form>
              {message && (
                <p className={`mt-4 text-[12px] ${status === "success" ? "text-[#8a9b7a]" : "text-[#d4735e]"}`} style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#f0ece6]/[0.04] bg-[#050506] py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <a
            href="#hero"
            className="text-[11px] font-medium tracking-[0.2em] text-[#f0ece6]/55 transition-colors hover:text-[#e8a849]/60 focus-visible:text-[#e8a849] focus-visible:outline-none"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            ATELIER RACK
          </a>
          <div className="flex gap-8" style={{ fontFamily: "var(--font-geist-mono)" }}>
            <a href="#" className="text-[10px] tracking-[0.15em] text-[#f0ece6]/55 transition-colors hover:text-[#e8a849]/50 focus-visible:text-[#e8a849] focus-visible:outline-none">Contact</a>
            <a href="#" className="text-[10px] tracking-[0.15em] text-[#f0ece6]/55 transition-colors hover:text-[#e8a849]/50 focus-visible:text-[#e8a849] focus-visible:outline-none">Privacy</a>
            <a href="#" className="text-[10px] tracking-[0.15em] text-[#f0ece6]/55 transition-colors hover:text-[#e8a849]/50 focus-visible:text-[#e8a849] focus-visible:outline-none">Terms</a>
          </div>
          <p className="text-[10px] tracking-[0.15em]" style={{ fontFamily: "var(--font-geist-mono)", color: "rgba(240,236,230,0.55)" }}>&copy; {new Date().getFullYear()} Atelier Rack</p>
        </div>
      </footer>
    </main>
    </>
  );
}