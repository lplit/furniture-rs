# Atelier Rack — Radical Redesign Plan

## Design Philosophy
A single-page monograph. Dark, cinematic, editorial. Every convention inverted. This is not a product page — it's a fashion editorial for computing furniture.

---

## 1. globals.css — Dark Foundation

### Color Palette
- Background: `#0a0908` (near-black, warm)
- Foreground: `#e8e4df` (warm off-white)
- Walnut: `#6b3a2a` (the SOLE warm accent — product imagery is the only color)
- Brass: `#c4a265` (for interactive elements — echoes rack hardware)
- Cream: `#f5efe6` (for CTA buttons and special text)
- Ink-dim: `#5a5550` (for watermark numbers and muted text)

### Typography Tokens
- Serif: Cormorant Garamond (Google Font) — for headlines, emotional copy
- Sans: Geist (existing) — for body, UI
- Mono: Geist Mono (existing) — for specs, labels, dimensions

### Custom Cursor
- `cursor: crosshair` on body — precision feel
- `cursor: pointer` on interactive elements

### Scroll-snap
- `scroll-snap-type: y mandatory` on main container
- Each section: `scroll-snap-align: start; min-height: 100vh`

### Keyframe Animations
- `fade-in-up` — hero text entrance (1s, cubic-bezier)
- `fade-in` — image reveals
- `slide-in-right` — gallery items
- `count-up` — spec numbers appearing
- `pulse-glow` — ambient glow on the CTA section

### Utility Classes
- `.snap-section` — full-viewport snap section
- `.gallery-scroll` — hidden-scrollbar horizontal scroll
- `.tilt-card` — 3D perspective hover with `preserve-3d`
- `.spec-line` — blueprint-style horizontal rule with gradient
- `.animate-*` with `.delay-*` — staggered entrance animations

---

## 2. pages/index.tsx — The Monograph

### Font Setup
Add `Cormorant_Garamond` via `next/font/google` (weights 300, 400, 600, 700).

### Page Structure (scroll-snap, 7 sections)

#### Section 0: The Void (hero)
- **Near-black background. No nav visible initially.**
- Center: "Technology that belongs in your life." in Cormorant Garamond at ~4-5rem, `font-weight: 300` (ultralight).
- Text appears with `fade-in-up`, delayed 500ms.
- Below the tagline: a thin brass line, then "Atelier Rack" in Geist Mono, `0.75rem`, `tracking-[0.3em]`, `text-brass`.
- After 1.5s: product image fades in behind the text at 40% opacity with a gradient overlay.
- Two CTAs appear at bottom: "Discover" (outline, brass border) and "Shop" (cream bg, walnut-dark text).
- **No carousel. One image. One statement.**

#### Section 1: WHY (numbered "01" watermark)
- Left: MASSIVE "01" watermark at `30vw`, `opacity-5`, `text-ink-dim`, absolute positioned behind content.
- Right: The manifesto in Cormorant Garamond, large serif:
  > "Your living room shouldn't look like a data center."
- Below: body text in Geist Sans explaining the vision.
- Full-viewport height, centered vertically.

#### Section 2: HOW (numbered "02" watermark)
- Three features, but NOT in a tidy icon grid.
- Each feature gets its own sub-section within the scroll-snap:
  - Left column: feature name in Cormorant Garamond, `text-3xl`
  - Right column: description in Geist Sans, `text-warm-gray`
- "Crafted by Hand" — real walnut veneer, traditional joinery
- "Silent by Design" — engineered airflow, sound-dampened paths
- "Seamless Integration" — cable management, hidden I/O, credenza silhouette
- **3D tilt hover effect on each feature card.**

#### Section 3: WHAT (numbered "03" watermark) — Blueprint Specs
- **NOT a grid of cards. Specs as architectural drawing.**
- Left side: product image (portrait, `products/1.jpg`)
- Right side: specs laid out in monospace with thin connecting lines:
  ```
  8U ─── rack capacity
  19" ── rail standard
  ATX ── motherboard support
  24-34" depth range
  ```
- Each spec: large monospace number in Geist Mono, thin brass horizontal rule, small label below.
- Staggered `animate-count-up` entrance animations.
- Background: subtle `bg-ink-dim/5` tint.

#### Section 4: GALLERY — Horizontal Scroll Lookbook
- **NOT a 2-column grid. A horizontal drag-scroll gallery.**
- Full-viewport section with a horizontally scrolling container.
- Three product images at different aspect ratios, with generous spacing.
- No scrollbar visible (`gallery-scroll`).
- Drag to scroll, or use subtle arrow indicators.
- Each image has `tilt-card` hover effect.
- Section label in mono: "GALLERY" at top.

#### Section 5: BENEFITS — The Quiet List
- Full viewport, near-black background.
- Center: a short, confident list of benefits in Cormorant Garamond, each separated by generous whitespace:
  > Disappears into your decor.
  > Professional-grade cooling.
  > No visible cables or LEDs.
  > ATX-compatible interior.
  > Soft-close tempered glass doors.
  > Solid wood tapered legs.
- Each line fades in with staggered delays on scroll.
- Below: a single thin brass line, then "$800" in Geist Mono, small, light. No explanation. No "starting at".

#### Section 6: CTA — The Close
- `bg-walnut` full-viewport section.
- Center: "Bring it home." in Cormorant Garamond, large.
- Two buttons: "Pre-order" (cream bg, walnut text) and "View specs" (outline, cream text).
- Below: small mono text "Free shipping. Continental US."
- Ambient pulse glow animation on the walnut background (subtle `pulse-glow`).

### Navigation
- **Transparent on hero**, transitions to `bg-background/80 backdrop-blur` on scroll.
- Links: "Why" "How" "What" "Shop" in Geist Mono, `text-xs`, `tracking-[0.2em]`.
- Fixed top, `z-50`, `border-b border-ink-dim/20`.
- Uses `onScroll` state to toggle between transparent and solid.

---

## 3. pages/_app.tsx
- Add Cormorant Garamond font loading alongside existing Geist fonts
- Pass both font variables to global layout

## 4. pages/_document.tsx
- Keep existing meta description
- Ensure `lang="en"` is set

---

## 5. Key Inversions vs. Competitors

| Convention | We Do |
|---|---|
| Carousel hero | Single powerful image, no carousel |
| Feature icon grid | Tilt cards with serif headlines |
| Spec table at bottom | Architectural blueprint with mono |
| "Form meets function" | "Technology that belongs in your life" |
| "Conceals components" | "Reveals your build" |
| Light/charcoal palette | Near-black, walnut sole warm accent |
| Sans-serif everywhere | Serif for emotion, mono for precision |
| Horizontal nav with dropdowns | Minimal mono nav, transparent-to-solid |
| Specs in a grid | Specs as engineering drawing |
| Gallery grid | Horizontal drag-scroll lookbook |
| Hidden pricing | Whispered pricing, no justification |
| "Gaming" language | Never say "gaming" |
| Reviewer badges | Zero social proof — the product speaks |
| Long scroll catalog | Scroll-snap cinematic chapters |
| Product on white background | Product in darkness, glowing |

---

## Implementation Order
1. `styles/globals.css` — full dark theme, animations, utility classes
2. `pages/index.tsx` — complete monograph rewrite with all sections
3. `pages/_app.tsx` — add Cormorant Garamond font
4. `pages/_document.tsx` — verify meta
5. Build & lint verification
6. Git commit: `feat: radical redesign — dark cinematic monograph`