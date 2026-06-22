import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { canonicalUrl, SITE } from "@/lib/site";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(
            ".reveal-on-scroll, .reveal-on-scroll-delay-1, .reveal-on-scroll-delay-2, .reveal-on-scroll-delay-3, .reveal-on-scroll-delay-4, .reveal-on-scroll-delay-5, .reveal-blur, .line-draw, .reveal-stagger-children"
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

type Spec = { label: string; value: string; sub?: string };
type Row = { key: string; value: string; note?: string };

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  const ref = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className="relative border-t border-[#f0ece6]/[0.05] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p
              className="reveal-on-scroll text-[10px] tracking-[0.3em] text-[#e8a849]/40"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              §{number}
            </p>
            <h2
              className="reveal-on-scroll-delay-1 mt-3 text-[28px] font-light leading-[1.1] text-[#f0ece6] sm:text-[32px]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {title}
            </h2>
          </div>
          <div className="reveal-on-scroll-delay-2">{children}</div>
        </div>
      </div>
    </section>
  );
}

function KV({ rows }: { rows: Row[] }) {
  return (
    <dl className="divide-y divide-[#f0ece6]/[0.06] border-y border-[#f0ece6]/[0.06]">
      {rows.map((r) => (
        <div
          key={r.key}
          className="grid grid-cols-[140px_1fr] gap-6 py-4 sm:grid-cols-[200px_1fr]"
        >
          <dt
            className="text-[10px] tracking-[0.2em] text-[#f0ece6]/55"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {r.key}
          </dt>
          <dd
            className="text-[14px] text-[#f0ece6]/75"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {r.value}
            {r.note && (
              <span className="ml-3 text-[#f0ece6]/55">— {r.note}</span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Stat({ value, label, sub }: Spec) {
  return (
    <div className="border-l border-[#e8a849]/20 pl-5">
      <p
        className="text-[32px] font-light leading-none text-[#f0ece6] sm:text-[40px]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {value}
      </p>
      <p
        className="mt-3 text-[10px] tracking-[0.2em] text-[#f0ece6]/55"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {label}
      </p>
      {sub && (
        <p
          className="mt-2 text-[12px] leading-[1.6] text-[#f0ece6]/55"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function Callout({ children, color = "amber" }: { children: React.ReactNode; color?: "amber" | "rose" | "violet" | "ice" }) {
  const accent =
    color === "amber"
      ? "border-[#e8a849]/20 bg-[#e8a849]/[0.04]"
      : color === "rose"
      ? "border-[#d4735e]/20 bg-[#d4735e]/[0.04]"
      : color === "violet"
      ? "border-[#a78bfa]/20 bg-[#a78bfa]/[0.04]"
      : "border-[#b8c4d0]/20 bg-[#b8c4d0]/[0.04]";
  return (
    <div className={`rounded-lg border ${accent} px-5 py-4`}>
      <div
        className="text-[13px] leading-[1.7] text-[#f0ece6]/70"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {children}
      </div>
    </div>
  );
}

function PlenumSVG() {
  return (
    <svg viewBox="0 0 800 280" className="w-full" role="img" aria-label="Plenum airflow cross-section">
      <defs>
        <linearGradient id="air" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="0.1" />
          <stop offset="60%" stopColor="#5eead4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#5eead4" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="airTop" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d4735e" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#d4735e" stopOpacity="0.05" />
        </linearGradient>
        <pattern id="filter" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 6L6 0" stroke="#e8a849" strokeOpacity="0.3" strokeWidth="0.8" />
        </pattern>
      </defs>
      {/* Wave fin profile */}
      <path
        d="M0 140 Q 25 110 50 140 T 100 140 T 150 140 T 200 140 T 250 140 T 300 140 T 350 140 T 400 140 T 450 140 T 500 140 T 550 140 T 600 140 T 650 140 T 700 140 T 750 140 T 800 140"
        fill="none"
        stroke="#c4a265"
        strokeWidth="3"
      />
      <text x="20" y="125" fill="#c4a265" fontSize="9" fontFamily="var(--font-geist-mono)" letterSpacing="2">WAVE FIN</text>

      {/* Plenum chamber */}
      <rect x="0" y="145" width="800" height="80" fill="url(#air)" stroke="#5eead4" strokeOpacity="0.2" strokeDasharray="2 4" />
      <text x="20" y="220" fill="#5eead4" fontSize="9" fontFamily="var(--font-geist-mono)" letterSpacing="2">4&Prime; PLENUM</text>

      {/* Filter band */}
      <rect x="0" y="148" width="800" height="14" fill="url(#filter)" />
      <text x="730" y="159" fill="#e8a849" fontSize="8" fontFamily="var(--font-geist-mono)" letterSpacing="1">FILTER</text>

      {/* Fan wall */}
      <line x1="0" y1="180" x2="800" y2="180" stroke="#a78bfa" strokeOpacity="0.5" strokeWidth="1" />
      {[100, 240, 380, 520, 660, 760].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={210} r="12" fill="none" stroke="#a78bfa" strokeOpacity="0.6" strokeWidth="1" />
          <path
            d={`M ${x} 198 Q ${x + 6} 204 ${x + 4} 210 Q ${x} 216 ${x - 4} 210 Q ${x - 6} 204 ${x} 198 Z`}
            fill="#a78bfa"
            fillOpacity="0.3"
          />
        </g>
      ))}
      <text x="20" y="245" fill="#a78bfa" fontSize="9" fontFamily="var(--font-geist-mono)" letterSpacing="2">FAN WALL · 6×120mm</text>

      {/* Arrow flow */}
      <g stroke="#5eead4" strokeWidth="1.2" fill="none" opacity="0.7">
        <path d="M40 190 L 80 190" markerEnd="url(#arrowT)" />
        <path d="M150 190 L 200 190" markerEnd="url(#arrowT)" />
        <path d="M300 190 L 360 190" markerEnd="url(#arrowT)" />
        <path d="M450 190 L 510 190" markerEnd="url(#arrowT)" />
        <path d="M600 190 L 660 190" markerEnd="url(#arrowT)" />
      </g>
      <defs>
        <marker id="arrowT" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="#5eead4" />
        </marker>
      </defs>
    </svg>
  );
}

function RackStackSVG() {
  return (
    <svg viewBox="0 0 600 320" className="w-full" role="img" aria-label="12U rack layout">
      <defs>
        <linearGradient id="chassis" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1818" />
          <stop offset="100%" stopColor="#0d0c0c" />
        </linearGradient>
        <linearGradient id="rack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141210" />
          <stop offset="100%" stopColor="#0a0908" />
        </linearGradient>
      </defs>
      {/* Outer rack */}
      <rect x="40" y="20" width="520" height="280" fill="url(#rack)" stroke="#f0ece6" strokeOpacity="0.1" />
      {/* U dividers */}
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={i}
          x1="40"
          x2="560"
          y1={20 + (i * 280) / 12}
          y2={20 + (i * 280) / 12}
          stroke="#f0ece6"
          strokeOpacity="0.08"
        />
      ))}
      {/* U labels */}
      {[1, 2, 6, 11, 12].map((u) => (
        <text
          key={u}
          x="50"
          y={20 + ((u - 0.5) * 280) / 12 + 4}
          fill="#e8a849"
          fontSize="10"
          fontFamily="var(--font-geist-mono)"
          letterSpacing="1"
        >
          U{u}
        </text>
      ))}
      {/* Plenum U1 */}
      <rect x="90" y="20" width="420" height={280 / 12} fill="#5eead4" fillOpacity="0.08" stroke="#5eead4" strokeOpacity="0.4" />
      <text x="200" y={20 + 280 / 24 + 4} fill="#5eead4" fontSize="9" fontFamily="var(--font-geist-mono)" letterSpacing="1">
        PLENUM · 6×120mm · FILTER
      </text>
      {/* ATX #1 U2-U5 */}
      <rect
        x="90"
        y={20 + 280 / 12}
        width="420"
        height={(280 / 12) * 4}
        fill="url(#chassis)"
        stroke="#c4a265"
        strokeOpacity="0.4"
      />
      <text x="200" y={20 + 280 / 12 + (280 / 12) * 2 + 4} fill="#c4a265" fontSize="10" fontFamily="var(--font-geist-mono)" letterSpacing="1">
        4U ATX CHASSIS #1
      </text>
      {/* PDU U6 */}
      <rect
        x="90"
        y={20 + (280 / 12) * 5}
        width="420"
        height={280 / 12}
        fill="#1a1818"
        stroke="#b8c4d0"
        strokeOpacity="0.3"
      />
      <text
        x="240"
        y={20 + (280 / 12) * 5 + 280 / 24 + 4}
        fill="#b8c4d0"
        fontSize="9"
        fontFamily="var(--font-geist-mono)"
        letterSpacing="1"
      >
        1U PDU
      </text>
      {/* ATX #2 U7-U10 */}
      <rect
        x="90"
        y={20 + (280 / 12) * 6}
        width="420"
        height={(280 / 12) * 4}
        fill="url(#chassis)"
        stroke="#c4a265"
        strokeOpacity="0.4"
      />
      <text x="200" y={20 + (280 / 12) * 6 + (280 / 12) * 2 + 4} fill="#c4a265" fontSize="10" fontFamily="var(--font-geist-mono)" letterSpacing="1">
        4U ATX CHASSIS #2
      </text>
      {/* Blank U11 */}
      <rect x="90" y={20 + (280 / 12) * 10} width="420" height={280 / 12} fill="#0d0c0c" stroke="#f0ece6" strokeOpacity="0.15" />
      <text
        x="220"
        y={20 + (280 / 12) * 10 + 280 / 24 + 4}
        fill="#f0ece6"
        fontSize="8"
        fontFamily="var(--font-geist-mono)"
        letterSpacing="1"
        opacity="0.5"
      >
        BLANK · THERMAL BREAK
      </text>
      {/* Vented U12 */}
      <rect x="90" y={20 + (280 / 12) * 11} width="420" height={280 / 12} fill="#0d0c0c" stroke="#d4735e" strokeOpacity="0.3" />
      <text
        x="200"
        y={20 + (280 / 12) * 11 + 280 / 24 + 4}
        fill="#d4735e"
        fontSize="9"
        fontFamily="var(--font-geist-mono)"
        letterSpacing="1"
      >
        VENTED BLANK · BRUSH
      </text>
    </svg>
  );
}

function WaveProfileSVG() {
  return (
    <svg viewBox="0 0 800 220" className="w-full" role="img" aria-label="Wave amplitude gradient across fins">
      <defs>
        <linearGradient id="finOak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4a265" />
          <stop offset="50%" stopColor="#a07f4a" />
          <stop offset="100%" stopColor="#6b5028" />
        </linearGradient>
      </defs>
      <text x="20" y="20" fill="#e8a849" fontSize="9" fontFamily="var(--font-geist-mono)" letterSpacing="2">
        8 FINS · 35–40mm GAPS · VARIABLE AMPLITUDE
      </text>

      {[
        { x: 30, amp: 8, wl: 200, label: "5mm", note: "OUTER" },
        { x: 120, amp: 14, wl: 180, label: "12mm", note: "" },
        { x: 215, amp: 22, wl: 170, label: "20mm", note: "" },
        { x: 320, amp: 32, wl: 160, label: "35mm", note: "CENTER" },
        { x: 430, amp: 36, wl: 150, label: "40mm", note: "" },
        { x: 540, amp: 30, wl: 160, label: "30mm", note: "" },
        { x: 640, amp: 20, wl: 170, label: "18mm", note: "" },
        { x: 730, amp: 12, wl: 190, label: "10mm", note: "OUTER" },
      ].map((f, i) => {
        const baseY = 110;
        const points: string[] = [];
        const steps = 60;
        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          const y = baseY + Math.sin(t * (700 / f.wl) * Math.PI * 2) * f.amp;
          points.push(`${f.x + t * 70},${y}`);
        }
        return (
          <g key={i}>
            <path
              d={`M ${points.join(" L ")} L ${f.x + 70},200 L ${f.x},200 Z`}
              fill="url(#finOak)"
              opacity="0.85"
            />
            <text
              x={f.x + 35}
              y={215}
              fill="#c4a265"
              fontSize="8"
              fontFamily="var(--font-geist-mono)"
              textAnchor="middle"
              letterSpacing="1"
            >
              {f.label}
            </text>
          </g>
        );
      })}

      {/* Centerline */}
      <line x1="0" x2="800" y1="110" y2="110" stroke="#f0ece6" strokeOpacity="0.1" strokeDasharray="2 4" />
    </svg>
  );
}

function EnvelopeSVG() {
  return (
    <svg viewBox="0 0 600 480" className="w-full" role="img" aria-label="Credenza envelope breakdown">
      <defs>
        <linearGradient id="oak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4a265" />
          <stop offset="100%" stopColor="#6b5028" />
        </linearGradient>
      </defs>
      {/* Top lid */}
      <rect x="50" y="40" width="500" height="20" fill="url(#oak)" stroke="#3a2818" />
      <text x="55" y="55" fill="#3a2818" fontSize="9" fontFamily="var(--font-geist-mono)" letterSpacing="1">
        LID · 1.25&Prime;
      </text>

      {/* Top rail */}
      <rect x="50" y="60" width="500" height="6" fill="#3a2818" />
      <text x="55" y="75" fill="#c4a265" fontSize="7" fontFamily="var(--font-geist-mono)" letterSpacing="1">
        TOP RAIL · 0.5&Prime;
      </text>

      {/* 12U rack bay */}
      <rect x="50" y="66" width="500" height="288" fill="#0a0908" stroke="#5eead4" strokeOpacity="0.4" />
      <text x="55" y="85" fill="#5eead4" fontSize="9" fontFamily="var(--font-geist-mono)" letterSpacing="1">
        12U RACK BAY · 21.0&Prime;
      </text>
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1="50"
          x2="550"
          y1={90 + i * 22}
          y2={90 + i * 22}
          stroke="#5eead4"
          strokeOpacity="0.15"
        />
      ))}

      {/* Bottom rail */}
      <rect x="50" y="354" width="500" height="6" fill="#3a2818" />
      <text x="55" y="370" fill="#c4a265" fontSize="7" fontFamily="var(--font-geist-mono)" letterSpacing="1">
        BOTTOM RAIL · 0.5&Prime;
      </text>

      {/* Drawer */}
      <rect x="50" y="360" width="500" height="70" fill="#1a1614" stroke="#c4a265" strokeOpacity="0.4" />
      <text x="55" y="380" fill="#c4a265" fontSize="9" fontFamily="var(--font-geist-mono)" letterSpacing="1">
        DRAWER · 5.0&Prime; H
      </text>
      <text x="55" y="400" fill="#f0ece6" fontSize="8" fontFamily="var(--font-geist-mono)" opacity="0.4">
        12&Prime; VINYL + TOOLKIT
      </text>

      {/* Sub-base */}
      <rect x="50" y="430" width="500" height="6" fill="#3a2818" />

      {/* Feet */}
      <rect x="60" y="436" width="40" height="34" fill="url(#oak)" />
      <rect x="500" y="436" width="40" height="34" fill="url(#oak)" />
      <text x="60" y="475" fill="#c4a265" fontSize="7" fontFamily="var(--font-geist-mono)" letterSpacing="1">
        FEET · 3.75&Prime;
      </text>

      {/* Dimension lines */}
      <g stroke="#e8a849" strokeOpacity="0.5" strokeWidth="0.8">
        <line x1="20" x2="20" y1="40" y2="470" />
        <line x1="15" x2="25" y1="40" y2="40" />
        <line x1="15" x2="25" y1="470" y2="470" />
      </g>
      <text x="10" y="260" fill="#e8a849" fontSize="11" fontFamily="var(--font-geist-mono)" transform="rotate(-90 10 260)" textAnchor="middle">
        32.5&Prime;H
      </text>
      <g stroke="#e8a849" strokeOpacity="0.5" strokeWidth="0.8">
        <line x1="50" x2="555" y1="20" y2="20" />
        <line x1="50" x2="50" y1="15" y2="25" />
        <line x1="555" x2="555" y1="15" y2="25" />
      </g>
      <text x="302" y="15" fill="#e8a849" fontSize="10" fontFamily="var(--font-geist-mono)" textAnchor="middle">
        32.0&Prime;W
      </text>
    </svg>
  );
}

export default function SpecPage() {
  return (
    <>
      <Head>
        <title>{`The Wave — Engineering Specification · ${SITE.brand}`}</title>
        <meta name="description" content="The Wave 12U equipment credenza — internal engineering specification, airflow math, plenum geometry, and build priorities." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={canonicalUrl("/spec")} />
      </Head>

      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050506]/85 backdrop-blur-3xl border-b border-[#f0ece6]/[0.05]">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-[11px] font-medium tracking-[0.2em] text-[#f0ece6]/70 transition-opacity hover:opacity-60 focus-visible:opacity-100 focus-visible:outline-none focus-visible:text-[#e8a849]"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            ← {SITE.brand.toUpperCase()}
          </Link>
          <div className="flex items-center gap-6" style={{ fontFamily: "var(--font-geist-mono)" }}>
            <span className="text-[10px] tracking-[0.15em] text-[#e8a849]/60">DRAFT v0.3</span>
            <span className="text-[10px] tracking-[0.15em] text-[#f0ece6]/55">SPEC</span>
          </div>
        </div>
      </header>

      <main className="pt-14">
        {/* HERO */}
        <section className="relative overflow-hidden bg-mesh-earth py-32 sm:py-44">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p
              className="text-[10px] tracking-[0.4em] text-[#e8a849]/50"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              ENGINEERING SPECIFICATION · DRAFT v0.3
            </p>
            <h1
              className="mt-8 text-[40px] font-light leading-[1.05] text-[#f0ece6] sm:text-[64px]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The Wave
              <br />
              <em className="text-[#e8a849] text-glow-amber">12U Credenza</em>
            </h1>
            <p
              className="mx-auto mt-10 max-w-2xl text-[14px] leading-[1.9] text-[#f0ece6]/55"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              A 12U 19&Prime; equipment credenza in solid oak. Passive by default, optionally
              plenum-cooled for 1600–2000W continuous. EIA-310. Danish-modern silhouette.
            </p>

            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              <Stat value="32.5″" label="HEIGHT" sub="Danish-modern credenza profile" />
              <Stat value="12U" label="19″ RACK" sub="EIA-310 compliant" />
              <Stat value="6×120" label="FAN WALL" sub="Plenum-mounted, push" />
              <Stat value="357" label="CFM MAX" sub="21 dBA · Noctua S12B" />
            </div>
          </div>
        </section>

        {/* TOC */}
        <nav className="sticky top-14 z-40 border-y border-[#f0ece6]/[0.05] bg-[#050506]/90 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex gap-6 overflow-x-auto py-3 text-[10px] tracking-[0.15em] sm:gap-8" style={{ fontFamily: "var(--font-geist-mono)" }}>
              {[
                ["01", "Envelope"],
                ["02", "Airflow"],
                ["03", "Plenum"],
                ["04", "Rack"],
                ["05", "Wave"],
                ["06", "Hardware"],
                ["07", "Cable"],
                ["08", "P0 Risks"],
                ["09", "COGS"],
              ].map(([n, t]) => (
                <a
                  key={n}
                  href={`#${["envelope", "airflow", "plenum", "rack", "wave", "hardware", "cable", "risks", "cogs"][parseInt(n) - 1]}`}
                  className="flex shrink-0 items-center gap-2 text-[#f0ece6]/55 transition-colors hover:text-[#e8a849] focus-visible:text-[#e8a849] focus-visible:outline-none"
                >
                  <span className="text-[#e8a849]/50">§{n}</span>
                  <span className="uppercase">{t}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* §1 ENVELOPE */}
        <Section id="envelope" number="01" title="Envelope & Geometry">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="mb-6 text-[13px] leading-[1.7] text-[#f0ece6]/55">
                External envelope is the product. 32.5″H × 32″W × 24″D places The Wave
                in the Danish-modern credenza register — a Børge Mogensen #161 is
                31.5″H for reference. The height math solved the v1 contradiction:
                12U + 5″ drawer + 1.25″ lid + 0.5″ rails + 3.75″ feet = 32.5″, no
                compromise on the rack space.
              </p>
              <KV
                rows={[
                  { key: "EXTERNAL H", value: "32.5″" },
                  { key: "EXTERNAL W", value: "32.0″" },
                  { key: "EXTERNAL D", value: "24.0″" },
                  { key: "RACK BAY H", value: "21.0″", note: "12U × 1.75″" },
                  { key: "INNER W", value: "≥19.0″", note: "EIA-310" },
                  { key: "DRAWER H", value: "5.0″" },
                  { key: "LID", value: "1.25″ oak slab" },
                  { key: "FEET", value: "3.75″ sculpted oak" },
                ]}
              />
            </div>
            <div className="rounded border border-[#f0ece6]/[0.06] bg-[#0a0908] p-6">
              <EnvelopeSVG />
            </div>
          </div>
        </Section>

        {/* §2 AIRFLOW */}
        <Section id="airflow" number="02" title="Airflow Architecture">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-[13px] leading-[1.7] text-[#f0ece6]/55">
                Single front-to-back path, plenum-conditioned. The 4″ chamber between
                the wave fins and the rack rails turns turbulent intake air into a
                uniform low-velocity curtain. The fan wall sits at the back of the
                plenum and pushes conditioned air into the rack bay.
              </p>

              <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <Stat value="1625" label="FILTER cm²" sub="G4 · full plenum face" />
                <Stat value="1.5" label="FACE VEL m/s" sub="@ 357 CFM" />
                <Stat value="≤25" label="dBA @ 1m" sub="At full load" />
              </div>

              <Callout color="amber">
                Filter maintenance: wash every 60–90 days, replace every 2–3 years.
                ΔP rises from ~6 Pa (clean) to ~25 Pa (loaded) before washing —
                CFM holds at 60–70% of clean at that point.
              </Callout>
            </div>
            <div className="rounded border border-[#f0ece6]/[0.06] bg-[#0a0908] p-6">
              <PlenumSVG />
              <p
                className="mt-4 text-[10px] tracking-[0.15em] text-[#f0ece6]/55"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                FIG · Plenum cross-section · intake → filter → chamber → fan wall
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded border border-[#5eead4]/20 bg-[#5eead4]/[0.03] p-5">
              <p className="text-[10px] tracking-[0.2em] text-[#5eead4]/60" style={{ fontFamily: "var(--font-geist-mono)" }}>
                PASSIVE MODE
              </p>
              <p className="mt-3 text-[28px] font-light text-[#f0ece6]" style={{ fontFamily: "var(--font-cormorant)" }}>
                50–80 CFM
              </p>
              <p className="mt-2 text-[12px] leading-[1.6] text-[#f0ece6]/55" style={{ fontFamily: "var(--font-geist-mono)" }}>
                Felt baffle in place, no fans. Natural convection. Supports 300–500W
                builds. <span className="text-[#5eead4]/70">&lt;18 dBA</span>
              </p>
            </div>
            <div className="rounded border border-[#a78bfa]/20 bg-[#a78bfa]/[0.03] p-5">
              <p className="text-[10px] tracking-[0.2em] text-[#a78bfa]/60" style={{ fontFamily: "var(--font-geist-mono)" }}>
                ACOUSTICS KIT
              </p>
              <p className="mt-3 text-[28px] font-light text-[#f0ece6]" style={{ fontFamily: "var(--font-cormorant)" }}>
                357 CFM
              </p>
              <p className="mt-2 text-[12px] leading-[1.6] text-[#f0ece6]/55" style={{ fontFamily: "var(--font-geist-mono)" }}>
                6× Noctua NF-S12B redux-1200. <span className="text-[#a78bfa]/70">21 dBA</span> at 1m.
                ΔT 5.9°F at 1600W.
              </p>
            </div>
            <div className="rounded border border-[#d4735e]/20 bg-[#d4735e]/[0.03] p-5">
              <p className="text-[10px] tracking-[0.2em] text-[#d4735e]/60" style={{ fontFamily: "var(--font-geist-mono)" }}>
                ACTIVE EXHAUST
              </p>
              <p className="mt-3 text-[28px] font-light text-[#f0ece6]" style={{ fontFamily: "var(--font-cormorant)" }}>
                400+ CFM
              </p>
              <p className="mt-2 text-[12px] leading-[1.6] text-[#f0ece6]/55" style={{ fontFamily: "var(--font-geist-mono)" }}>
                Add 1U fan tray at U12. Supports 2500W+ transient loads.
              </p>
            </div>
          </div>
        </Section>

        {/* §3 PLENUM */}
        <Section id="plenum" number="03" title="Plenum Geometry">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="mb-6 text-[13px] leading-[1.7] text-[#f0ece6]/55">
                The 4″ plenum is the engineering bet. Front-to-back: filter, chamber,
                fan wall. The chamber depth of 4″ is the minimum that allows
                turbulent intake air to settle into laminar flow before reaching the
                fans — 2″ produces visible stagnation in CFD at this filter face
                velocity.
              </p>
              <KV
                rows={[
                  { key: "WIDTH", value: "19.0″ inner" },
                  { key: "HEIGHT", value: "21.0″", note: "1U of rack" },
                  { key: "DEPTH", value: "4.0″ chamber" },
                  { key: "FILTER", value: "AAF AmAir G4 / Camfil Opacimat G4" },
                  { key: "FAN COUNT", value: "6× 120mm" },
                  { key: "FAN POS", value: "3 bottom · 3 top" },
                  { key: "FAN SPEC", value: "Noctua NF-S12B redux-1200" },
                  { key: "FAN ΔP", value: "6.1 Pa static" },
                ]}
              />
              <div className="mt-6">
                <Callout color="ice">
                  The two 3-fan clusters (bottom + top) push conditioned air into both
                  ends of the rack bay. Gear in the middle (U4–U9) gets natural
                  convection. This matches data-center hot-aisle / cold-aisle
                  patterning at half the scale.
                </Callout>
              </div>
            </div>
            <div>
              <div className="rounded border border-[#f0ece6]/[0.06] bg-[#0a0908] p-6">
                <PlenumSVG />
                <p
                  className="mt-4 text-[10px] tracking-[0.15em] text-[#f0ece6]/55"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  FIG · Plenum — front of cabinet is at top
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* §4 RACK */}
        <Section id="rack" number="04" title="12U Rack Layout">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="mb-6 text-[13px] leading-[1.7] text-[#f0ece6]/55">
                Two 4U ATX builds + 1U PDU + 1U thermal break + 1U vented blank. The
                PDU at U6 is between the two chassis, drawing conditioned air into
                the cable channel rather than competing for intake.
              </p>
              <KV
                rows={[
                  { key: "U1", value: "Plenum · 6×120mm · filter" },
                  { key: "U2–U5", value: "4U ATX chassis #1" },
                  { key: "U6", value: "1U PDU" },
                  { key: "U7–U10", value: "4U ATX chassis #2" },
                  { key: "U11", value: "1U blank · thermal break" },
                  { key: "U12", value: "1U vented blank · brush pass-through" },
                ]}
              />
              <div className="mt-6">
                <Callout color="rose">
                  The UPS is not in the rack. It mounts on a 2U slide-out shelf in
                  the rear chamber (6″ gap), accessed from behind the credenza.
                  Customer-supplied; brackets ship in the box.
                </Callout>
              </div>
            </div>
            <div className="rounded border border-[#f0ece6]/[0.06] bg-[#0a0908] p-6">
              <RackStackSVG />
              <p
                className="mt-4 text-[10px] tracking-[0.15em] text-[#f0ece6]/55"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                FIG · EIA-310 layout · front view
              </p>
            </div>
          </div>
        </Section>

        {/* §5 WAVE */}
        <Section id="wave" number="05" title="Wave Fin Geometry">
          <div className="rounded border border-[#f0ece6]/[0.06] bg-[#0a0908] p-6">
            <WaveProfileSVG />
            <p
                  className="mt-4 text-[10px] tracking-[0.15em] text-[#f0ece6]/55"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              FIG · Wave amplitude gradient · 5mm outer → 40mm center · 35–40mm gaps
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3
                className="text-[18px] font-light text-[#f0ece6]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Optical rationale
              </h3>
              <p className="mt-4 text-[13px] leading-[1.7] text-[#f0ece6]/55">
                The 2.5× amplitude gradient from outer fins (5–10mm) to center fins
                (35–40mm) creates a horizontal breathing rhythm. The phase offset
                between adjacent fins produces a layered moiré effect when the eye
                scans the facade. At 2m viewing distance the center fins read
                unambiguously as a designed feature, not a uniform louver.
              </p>
            </div>
            <div>
              <h3
                className="text-[18px] font-light text-[#f0ece6]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Airflow rationale
              </h3>
              <p className="mt-4 text-[13px] leading-[1.7] text-[#f0ece6]/55">
                The deeper center channels expose more filter area to the intake
                path, which sits directly in front of the rack gear that produces
                the most heat. The shallow outer fins are mostly decorative — they
                cap the ends of the facade where there&apos;s no rack behind them.
              </p>
            </div>
          </div>
        </Section>

        {/* §6 HARDWARE */}
        <Section id="hardware" number="06" title="Hardware & Joinery">
          <KV
            rows={[
              { key: "LID HINGE", value: "Blum AVENTOS HF bi-fold lift", note: "rated 4–14kg pair" },
              { key: "SOFT-CLOSE", value: "Integrated with lift hinge" },
              { key: "DRAWER RUNNER", value: "Blum Tandem Plus BLUMOTION 563H", note: "35kg, full-extension" },
              { key: "PUSH LATCH", value: "Sugatsune MCH tool-free" },
              { key: "RACK RAIL", value: "12-24 threaded, EIA-310" },
              { key: "FILTER MEDIA", value: "AAF AmAir G4 / Camfil Opacimat G4" },
              { key: "FAN", value: "Noctua NF-S12B redux-1200", note: "in Acoustics Kit" },
              { key: "BRONZE PINS", value: "4× 3mm flush inlay" },
            ]}
          />
        </Section>

        {/* §7 CABLE */}
        <Section id="cable" number="07" title="Cable & Power Management">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-[13px] leading-[1.7] text-[#f0ece6]/55">
                Three cable entry zones, each purpose-built. The 6″ rear gap is sized
                for a 2U UPS slide-out shelf plus a full-width brush panel plus
                separate power grommets.
              </p>
              <KV
                rows={[
                  { key: "REAR GAP", value: "6.0″ standard · 8.0″ Float variant" },
                  { key: "POWER IN", value: "2× 60mm rubber grommets", note: "low voltage, separated" },
                  { key: "DATA/VIDEO", value: "Full-width 19″ brush panel" },
                  { key: "INTERNAL", value: "1U brush at U12" },
                  { key: "CABLE COUNT", value: "8–12 external cables typical" },
                ]}
              />
            </div>
            <div className="space-y-4">
              <Callout color="violet">
                PDU at U6 is the customer-supplied power distribution. The credenza
                ships with mounting holes pre-drilled and a PDU bracket template in
                the box. Pick by region: Tripp Lite (US), Bachmann (EU/UK), or
                universal C13/C19 (APC AP8881).
              </Callout>
              <Callout color="ice">
                UPS in rear chamber: 2U × 19″ × 19″ cavity above the rack gear.
                Slide-out shelf rated 30kg. Heat vents through the top-rear grille.
                Recommended: APC SMT1500RM2U or CyberPower OR1500LCDRM2U.
              </Callout>
            </div>
          </div>
        </Section>

        {/* §8 P0 RISKS */}
        <Section id="risks" number="08" title="P0 Validation Risks">
          <div className="space-y-6">
            <div className="rounded-lg border border-[#d4735e]/25 bg-[#d4735e]/[0.04] p-5">
              <p
                className="text-[10px] tracking-[0.2em] text-[#d4735e]/85"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                P0 · AIRFLOW
              </p>
              <p
                className="mt-2 text-[15px] text-[#f0ece6]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                CFD or smoke-test the plenum at 4″ depth.
              </p>
              <p className="mt-3 text-[13px] leading-[1.7] text-[#f0ece6]/55">
                Does 4″ depth distribute airflow evenly across all 8 fin gaps, or
                do the fans starve the outer fins? At 1.5 m/s face velocity, the
                filter is the bottleneck — but only if the plenum geometry
                generates turbulence at the outer gaps. Smoke test on a 1:1 mockup.
                Budget: $200 CFD or $300 smoke-test rig.
              </p>
            </div>

            <div className="rounded-lg border border-[#d4735e]/25 bg-[#d4735e]/[0.04] p-5">
              <p
                className="text-[10px] tracking-[0.2em] text-[#d4735e]/85"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                P0 · FILTER LOADING
              </p>
              <p
                className="mt-2 text-[15px] text-[#f0ece6]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Validate AAF AmAir G4 ΔP at 60-day residential dust loading.
              </p>
              <p className="mt-3 text-[13px] leading-[1.7] text-[#f0ece6]/55">
                The 6 Pa → 25 Pa curve is from manufacturer data at 1.5 m/s. At
                0.9 m/s (loaded, lower CFM) the ΔP is lower — but the CFM is also
                lower, which is the actual problem. Test with a real filter and a
                real fan in a sealed chamber.
              </p>
            </div>

            <div className="rounded-lg border border-[#e8a849]/25 bg-[#e8a849]/[0.04] p-5">
              <p
                className="text-[10px] tracking-[0.2em] text-[#e8a849]/85"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                P0 · LIFT MECHANISM
              </p>
              <p
                className="mt-2 text-[15px] text-[#f0ece6]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Validate top-lid lift at 12kg with a 1.25″ oak slab.
              </p>
              <p className="mt-3 text-[13px] leading-[1.7] text-[#f0ece6]/55">
                Blum AVENTOS HF is rated 4–14kg per pair. The 32″ × 18″ × 1.25″ oak
                lid is ~12kg — right at the upper limit. Spec the HF to the next
                power class, or commission a weight-test on a prototype slab.
              </p>
            </div>
          </div>
        </Section>

        {/* §9 COGS */}
        <Section id="cogs" number="09" title="Hand-Work & COGS">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-[13px] leading-[1.7] text-[#f0ece6]/55">
                The wave fin facade is the single largest labor input. At 2.5–3.5
                hours per fin (CNC rough + hand-shape + sand), 8 fins is 20–30
                hours of craft work. At EU cabinetmaker rates this is €1,200–2,700
                of the bill of materials.
              </p>
              <KV
                rows={[
                  { key: "CNC ROUGH", value: "30–45 min / fin" },
                  { key: "HAND-SHAPE", value: "1.5–2 hr / fin" },
                  { key: "HAND-SAND", value: "0.5–1 hr / fin" },
                  { key: "TOTAL FINS", value: "20–30 hr facade" },
                  { key: "EU RATE", value: "€1,200–2,700 labor" },
                  { key: "EE RATE", value: "€600–1,350 labor" },
                ]}
              />
            </div>
            <Callout color="amber">
              This is the price of craft. Own it in the spec, the marketing, and
              the COGS model. A €4,000–5,500 retail credenza with 25–50% of COGS
              in hand labor is consistent with the Danish-modern positioning — but
              it is not a scalable product at high volumes. Decide which side of
              that line the business sits on.
            </Callout>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="border-t border-[#f0ece6]/[0.05] py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
            <Link
              href="/"
              className="text-[10px] tracking-[0.2em] text-[#f0ece6]/55 transition-colors hover:text-[#e8a849]/60 focus-visible:text-[#e8a849] focus-visible:outline-none"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              ← BACK TO LANDING
            </Link>
            <p
              className="text-[10px] tracking-[0.15em] text-[#f0ece6]/55"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              THE WAVE · SPEC v0.3 · {new Date().toISOString().slice(0, 10)}
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
