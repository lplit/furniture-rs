---
name: Atelier Rack
description: A darkened-gallery visual system for a walnut ATX credenza — brass on near-black, ink ramp + glow-only color, flat depth, one loud piano-key CTA.
colors:
  void-bg: "#050506"
  surface: "#0a0908"
  surface-raised: "#141210"
  ink: "#f0ece6"
  ink-dim: "#5a5550"
  brass: "#e8a849"
  brass-light: "#f0c06a"
  brass-deep: "#c4a265"
  walnut: "#6b3a2a"
  walnut-light: "#8b5e3c"
  walnut-dark: "#3a1e10"
  cream: "#f5efe6"
  rose: "#d4735e"
  copper: "#c8845a"
  sage: "#8a9b7a"
  ice: "#b8c4d0"
  violet: "#a78bfa"
  teal: "#5eead4"
  flame: "#f97316"
  gold: "#fbbf24"
  pink: "#f472b6"
  sky: "#38bdf8"
  rule: "#f0ece6"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3rem, 7vw, 6.5rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.2em"
rounded:
  none: "0px"
  pill: "980px"
  lg: "8px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section: "176px"
components:
  link-arrow:
    textColor: "{colors.brass}"
    typography: "{typography.label}"
    padding: "0"
  link-arrow-hover:
    textColor: "{colors.brass-light}"
  piano-key-cta:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.void-bg}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  piano-key-cta-hover:
    backgroundColor: "{colors.brass-light}"
  hairline-input:
    backgroundColor: "rgba(5, 5, 6, 0.4)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  hairline-input-focus:
    backgroundColor: "rgba(5, 5, 6, 0.4)"
  section-label:
    textColor: "{colors.brass}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 18px"
  kv-row:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "16px 0"
  callout:
    backgroundColor: "rgba(232, 168, 73, 0.04)"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "16px 20px"
---

# Design System: Atelier Rack

## 1. Overview

**Creative North Star: "The Darkened Gallery"**

A mid-century credenza photographed in a darkened gallery, one brass spot
angling across the walnut grain, the object holding the room by proportion
alone. That is the mental image every surface in this system reaches for. The
page is not an advertisement for a product; it is a *viewing* of one. Light is
scarce and directed. Background is true near-black (`#050506`), not a tinted
charcoal — the way a gallery wall reads when the lights are off and a single
spot is on the object. Color is brass-gold (`#e8a849`) used the way brass
hardware is used on the credenza itself: small, specific, structural. Never
decorative. Never a gradient standing in for material.

The system refuses the four anti-references from PRODUCT.md by construction.
**Gamer RGB / cyberpunk** is refused by the absence of neon, angular cuts, and
acid green — the accent palette is warm, earthy, and material-named (brass,
copper, walnut, rose-oxide, sage, ice). **SaaS startup landing** is refused by
the dark gallery ground (no cream bg), by Cormorant Garamond as the display
voice (no neutral geometric sans), and by the refusal of repeated card grids
and gradient hero text. **Big-box tech retail** is refused by the editorial
single-column scroll, the long sections, and the absence of badge soup. And
**generic "luxury" black-box** is refused by the fact that the material is
always visible: the walnut/brass/cream accents and the product imagery carry
warmth that an all-black page would forfeit. Empty minimalism with no material
presence is the specific failure mode this system is built against.

Motion is part of the gallery metaphor: scroll-reveals act like a spot lighting
each object as you walk past it — blur resolves to sharp, scale settles to rest,
a hairline rule draws itself across a section opening. Motion never gates
visibility (every reveal has an on-by-default visible state; the animation
layers on top), and `prefers-reduced-motion` collapses every transition to
instant. The page is fully readable with JS off or motion off.

**Key Characteristics:**
- True near-black ground (`#050506`); no tinted charcoal, no cream bg, no warm
  off-white. The gallery wall, not the showroom floor.
- One ink ramp (`#f0ece6` at varying opacity) carries all body and secondary
  text. Color appears only as accent text-glow, radial mesh, or section glow —
  never as body text color.
- Brass (`#e8a849`) is the one primary accent. A rotating family of
  material-named secondaries (rose-oxide, copper, sage, ice, violet) personifies
  sections, each used once or twice per page, never all at once on one screen.
- Cormorant Garamond (display, weight 300, light) + Geist Mono (body + labels,
  tracked uppercase). A serif + mono pairing on a contrast axis; no sans body.
- Flat depth. Zero box-shadows. Depth is conveyed by radial mesh backgrounds,
  section-glow `::before` overlays, and a 2%-opacity noise/grain fixed overlay.
- The link-arrow is the canonical affordance; the piano-key CTA (brass fill,
  near-black ink, pill) is the one loud action per page. Inputs are hairline.
- Hairline rules and KV tables, not cards. The spec page is a furniture maker's
  technical drawing, not a feature grid.
- WCAG AA is the floor. Several current opacity tiers (`/30`, `/25`, `/15`) fall
  below 4.5:1 on near-black and are flagged in Don'ts as lift-on-sight.

## 2. Colors

The palette is a darkened gallery: one near-black ground, one warm ink ramp, one
brass primary, and a small rotating family of material-named secondaries that
read as spot lighting on different surfaces of the credenza.

### Primary
- **Brass** (`#e8a849`): The one primary accent. Used for the link-arrow, the
  piano-key CTA fill, the canonical section-label, the hero eyebrow, divider
  centers, and the brass hardware in product imagery. Treat it the way the
  credenza uses brass hardware: small, structural, never decorative. Hover
  state is **Brass Light** (`#f0c06a`); deep tone is **Brass Deep** (`#c4a265`)
  used in SVG line work and dimension annotations.

### Secondary (the material rotation — one per section, never all on one screen)
- **Rose Oxide** (`#d4735e`): the "industry hides" / contrarian section; also
  the P0 risk color on the spec page.
- **Copper** (`#c8845a`): the "presence" / credenza-proportion section.
- **Sage** (`#8a9b7a`): the "silence" / airflow section.
- **Ice** (`#b8c4d0`): the spec / engineering-spec section; cool, factual.
- **Violet** (`#a78bfa`): the "detail" / soft-close doors section.
- **Teal** (`#5eead4`): engineering diagram line work (plenum, fan wall, airflow
  arrows) on the spec page only.
- **Flame** (`#f97316`) and **Gold** (`#fbbf24`): reserved for the final CTA
  section's glow and the big price number respectively. Not used elsewhere.

### Neutral
- **Void** (`#050506`): the body background. True near-black, slightly warm. Not
  a tinted charcoal; not `#000` (which reads as screen-dead). This is the
  gallery wall with the lights off.
- **Surface** (`#0a0908`) and **Surface Raised** (`#141210`): tonal layers used
  in SVG chassis/rack fills and the spec-page diagram containers. Never used as
  page-level card backgrounds — the page has no cards.
- **Ink** (`#f0ece6`): the single warm-neutral text color. Every body,
  secondary, and tertiary text is this color at a documented opacity (see the
  Ink Ramp Rule). Full-opacity `#f0ece6` on `#050506` measures 17.3:1.
- **Ink Dim** (`#5a5550`): a token in the frontmatter for completeness; in
  practice secondary text is rendered as `#f0ece6` at opacity, not as a fixed
  dim color. Prefer the opacity ramp.
- **Cream** (`#f5efe6`): the Walnut/cream/brass material triad from the original
  tokens; used only in SVG material gradients and the body `::selection` is
  brass-on-void. Not a page background.

### Named Rules

**The Ink Ramp Rule.** All text is `#f0ece6` at one of a fixed set of opacities
against `#050506`. The ramp, with measured contrast:
`/1.0` = 17.3:1 · `/0.8` = 11.0:1 · `/0.7` = 8.5:1 · `/0.55` = 5.5:1 ·
`/0.5` = 4.7:1 · `/0.45` = 4.0:1 · `/0.4` = 3.3:1 · `/0.3` = 2.3:1 ·
`/0.15` = 1.4:1.
**Body and secondary copy must use `/0.55` or higher** (≥4.5:1, WCAG AA). The
`/0.45` tier (4.0:1) is **large-text only** (≥18px or bold ≥14px, ≥3:1). The
`/0.4`, `/0.3`, `/0.25`, `/0.15` tiers are **decorative-only** — hairline
rules, divider ends, footer micro-copyright, the breathe-line under the hero.
They are forbidden for any text that carries information. The current site
uses `/0.3` and `/0.25` for some footer and label copy; treat those as
**lift-on-sight** when editing.

**The Brass ≤10% Rule.** Brass is the one voice. On any given screen, brass
fills ≤10% of the visible surface — the link-arrow, the one CTA, a section
label, a divider center. If you reach for brass as a background or a gradient,
stop. The material-named secondaries exist precisely so brass doesn't have to
carry every section.

**The Section-Glow Rotation Rule.** Each narrative section gets one — and only
one — secondary hue, applied as a `::before` radial gradient
(`section-glow-amber` / `-rose` / `-copper` / `-sage` / `-ice` / `-violet` /
`-flame` / `-pink`) and optionally a matching `text-glow-*` on one accent word.
The hue personifies the material claim of that section. Never mix two
section-glow hues in one section; never apply all eight on one page.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Body Font:** Geist Mono (with ui-monospace, monospace fallback)
**Label/Mono Font:** Geist Mono — same family as body, tracked uppercase at
small sizes for labels, kickers, and metadata.

**Character:** A high-contrast serif (Cormorant, weight 300, light) for
everything that *names* — hero headlines, section headlines, the price, the
stat values. A neutral monospace (Geist Mono) for everything that *describes*
— body prose, labels, metadata, KV rows, dimension annotations. The pairing
deliberately refuses the sans-body default: the body voice is the voice of a
caption on a museum label, not the voice of a product page. Light-on-dark adds
0.05–0.1 to line-height (the body uses 1.9); light type reads as lighter weight
and needs the room.

> Identity-preservation note: Cormorant Garamond and Geist Mono are committed
> brand fonts already shipping on the live site. The reflex-reject list in
> `reference/brand.md` flags Cormorant as a training-data default for *new*
> greenfield choices. Here it is the existing identity and is preserved; future
> variants on this surface don't second-guess it.

### Hierarchy
- **Display** (Cormorant 300, `clamp(3rem, 7vw, 6.5rem)`, line-height 1.02,
  letter-spacing -0.03em): the hero headline only. One per page. Max ≤6.5rem
  (`6.5rem` ≈ 104px — already at the ceiling; do not raise).
- **Headline** (Cormorant 300, `clamp(2.25rem, 5vw, 4.5rem)`, line-height 1.06,
  letter-spacing -0.02em): section headlines. The `section-headline` class.
- **Title** (Cormorant 300, 1.75rem–2rem, line-height 1.1): spec-page `h3`s
  and the `§number` section titles on the spec page.
- **Body** (Geist Mono 400, 0.875rem, line-height 1.9): all prose. Cap line
  length at 65–75ch (the site uses `max-w-2xl` ≈ 42rem / 672px). The hero
  subhead is an exception at 0.875rem but sits at `/0.4` opacity — verify it
  stays ≥3:1 as large-ish text, or lift to `/0.55`.
- **Label** (Geist Mono 500, 0.625rem, letter-spacing 0.2em, uppercase): the
  `link-arrow`, the `section-label`, the "ONE / TWO / THREE" material counters,
  the spec-page TOC entries, the KV row keys, the "FROM $183/MO" line. Tracked
  uppercase mono is the system's *one* allowed eyebrow grammar — used
  deliberately as the brand's museum-caption voice, never as a reflex kicker
  above every section.

### Named Rules

**The Caption Voice Rule.** Body copy is Geist Mono, not a sans. Switching body
to a sans-serif is the single fastest way to make this system read as a
different brand. If a variant needs a warmer body, change the opacity ramp or
the line-height, not the family.

**The One Eyebrow Rule.** Tracked uppercase mono labels are the system's
distinctive voice — and the one tell most likely to become AI grammar if
repeated. Use them for *real* metadata (section numbers, material counters, KV
keys, dimension labels, the "ENGINEERING SPECIFICATION" doc banner), not as a
"kicker" above every heading. One per section, named and purposeful, not
reflexive.

**The Display Ceiling Rule.** Display caps at `6.5rem`. Section headline caps
at `4.5rem`. Going higher is shouting, not designing. If a headline overflows
its container at these maxes, rewrite the copy or reduce the clamp — never
raise the ceiling.

## 4. Elevation

This system is **flat by doctrine**. There are zero `box-shadow` declarations
in `styles/globals.css` and adding one is a deviation that needs a reason.
Depth is conveyed three ways instead:

1. **Tonal mesh backgrounds.** Each section uses a `bg-mesh-*` class: two
   radial gradients (a primary hue glow at low opacity + a secondary hue glow)
   composited over a slightly-off-black base (`#100808`, `#0c0a06`, `#080c14`,
   `#0a0f0a`, `#050506`). The result reads as *a different room* per section,
   not as a card lifted off a flat page.
2. **Section-glow `::before` overlays.** A single radial gradient at the top of
   each section (the `section-glow-*` classes) reads as a spot angled onto the
   section from above. Max opacity 0.12, always one hue, always fading to
   transparent by 70%.
3. **A 2%-opacity noise/grain overlay** fixed on `body::before`
   (`z-index: 9999`, `pointer-events: none`). This is the gallery's
   not-quite-clean wall — it keeps the near-black from reading as screen-dead
   and gives the mesh gradients a substrate to land on.

### Shadow Vocabulary
None. The system has no shadow vocabulary. If a state needs lift (hover on an
image frame, focus on an input), use `filter: brightness(1.1) saturate(1.1)` or
a border-color shift, not a shadow. The `text-glow-*` classes
(`text-shadow: 0 0 40px rgba(232,168,73,0.3), 0 0 80px rgba(232,168,73,0.1)`)
are the only shadow-like values in the system and they are reserved for accent
text on dark backgrounds — the brass spot hitting one word.

### Named Rules

**The No-Shadow Rule.** No `box-shadow` on any element, ever. If you find
yourself reaching for one, you are conveying depth the wrong way. Use a tonal
mesh, a section-glow, a border-color shift, or a `filter` change instead. The
single exception is `text-glow-*` on accent words, which is a *spot of light*,
not a shadow.

**The No-Glass Rule.** No `backdrop-filter: blur()` as decoration. The nav uses
`backdrop-blur-3xl` on a `bg-[#050506]/80` panel — that is the one functional
glass surface (a sticky nav over scrolling content), and it is allowed because
it is structural, not decorative. Any new glass surface needs an equally
specific structural reason.

## 5. Components

### Buttons
- **Shape:** the canonical CTA is a **piano key** — a brass pill
  (`border-radius: 980px`), brass fill (`#e8a849`), near-black ink
  (`#050506`), Geist Mono 500, 0.75rem, letter-spacing 0.08em, padding
  `12px 24px`. Loud, small, unambiguous. One per page.
- **Hover / Focus:** fill shifts to **Brass Light** (`#f0c06a`); no shadow, no
  scale. `transition-colors` only.
- **Secondary / Ghost:** there is no secondary button. Secondary actions are
  **link-arrows** (see below). The piano key is either present (one loud
  action) or absent; it does not come in variants.

### Link-Arrow (the canonical affordance)
- **Shape:** no box. Inline-flex, `color: #e8a849`, Geist Mono 500, 0.75rem,
  letter-spacing 0.12em, uppercase, a `::after` arrow glyph `→`.
- **Hover:** `gap` widens from 8px to 14px (a `transition: gap 0.3s
  cubic-bezier(0.16, 1, 0.3, 1)`); color shifts to **Brass Light**. The
  widening is the affordance — the arrow pulls toward where it's going.
- **Where:** nav CTA, section "See specs" links, the hero "Pre-order", the
  final "Pre-order now". Anywhere a user moves forward without being the single
  loudest action on the page.

### Section-Label (the one allowed eyebrow)
- **Shape:** inline-flex pill (`border-radius: 980px`), `padding: 6px 18px`,
  `border: 1px solid` at the section hue at 0.25 opacity, `background` at the
  hue at 0.06, `color` at the full hue. Geist Mono, 0.625rem, letter-spacing
  0.2em, uppercase.
- **Variants:** `section-label-rose` / `-amber` / `-sage` / `-copper` /
  `-violet` / `-ice`, one per section hue. Transitions all properties 0.4s on
  the ease-out-quart curve.
- **Use:** one per section, naming the *material claim* of that section
  ("Silence", "Presence", "Detail", "Inside"). Never as a reflex "ABOUT /
  PROCESS / PRICING" kicker.

### Inputs / Fields
- **Shape:** pill (`border-radius: 980px`), `border: 1px solid #f0ece6` at 0.10
  opacity, `background: #050506` at 0.40, `padding: 12px 20px`, Geist Mono
  0.8125rem, `color: #f0ece6`, `placeholder: #f0ece6` at 0.30.
- **Focus:** `border-color` shifts to brass at 0.50; no shadow, no glow.
- **Placeholder contrast note:** `#f0ece6` at 0.30 on `#050506` measures 2.3:1
  — **below WCAG AA**. The newsletter placeholder ("you@example.com") is the
  one place this currently ships; lift it to `/0.55` (5.5:1) when editing.

### Cards / Containers
- **There is no card component.** The landing page has no cards; the spec page
  uses hairline-bordered KV tables, callouts, and SVG diagram containers
  instead. A `border: 1px solid #f0ece6` at 0.05–0.06 with `background: #0a0908`
  is the diagram-container treatment. Do not introduce a card grid; it is a
  named anti-reference (SaaS startup landing).

### KV Row (spec page)
- **Shape:** a `<dl>` with `divide-y divide-[#f0ece6]/[0.06]` and
  `border-y` at the same opacity. Each row is a `grid-template-columns:
  140px 1fr` (sm: `200px 1fr`), `padding: 16px 0`. Key is Geist Mono 0.625rem,
  tracked uppercase, `/0.30` opacity; value is Geist Mono 0.875rem, `/0.75`.
  Notes inline as `— {note}` at `/0.30`.

### Callout (spec page)
- **Shape:** `rounded-lg` full hairline border (`border: 1px` at the section
  hue at 0.20–0.25 opacity), `background` at the hue at 0.04, `padding: 16px
  20px`, body text at `/0.70`.
- **Variants:** `amber` / `rose` / `violet` / `ice`. Used for engineering notes,
  P0 risk callouts, and the COGS aside. The hue-tinted bg + full border carry
  the accent — no side-stripe.

### Navigation
- **Shape:** `fixed top-0`, height 56px, `max-w-7xl`, transitions from
  transparent to `bg-[#050506]/80 backdrop-blur-3xl` after 60px scroll.
- **Wordmark:** "ATELIER RACK", Geist Mono 500, 0.8125rem, letter-spacing
  0.2em, `/0.90` opacity, fade to 0.60 on hover. Left-aligned.
- **CTA:** a link-arrow "Pre-order" on the right, fading in (`opacity-100
  translate-y-0`) only when the nav goes solid. Hidden at the top so the hero
  owns the first impression.
- **Spec page variant:** always-solid bar with a hairline bottom border
  (`border-b #f0ece6` at 0.05), a `← ATELIER RACK` link-left, and a
  "DRAFT v0.3 / SPEC" metadata pair on the right.

### Stat (spec page hero stat grid)
- **Shape:** `border-l: 1px` at brass 0.20, `padding-left: 20px`. Value is
  Cormorant 300, 2rem–2.5rem, `#f0ece6` full opacity. Label is Geist Mono
  0.625rem, tracked uppercase, `/0.40`. Optional sub at 0.75rem, `/0.45`,
  line-height 1.6.

### Signature: Hairline Divider (the `line-draw` rule)
- **Shape:** `height: 1px`, `max-width: 120–200px`, `margin: 0 auto`, a
  `linear-gradient(90deg, transparent, {hue}, transparent)` background,
  `transform: scaleX(0)` at rest, `scaleX(1)` when `.revealed`. Transition
  1.2s on `cubic-bezier(0.16, 1, 0.3, 1)`. The rule draws itself across the
  opening of a section like a caption underline being laid down.

### Signature: Scroll Reveal
- **Shape:** every reveal class (`reveal-on-scroll`, `reveal-image`,
  `reveal-blur`, `reveal-scale`, `line-draw`, `reveal-stagger-children`) starts
  from an **on-by-default visible** state in `@media (prefers-reduced-motion:
  reduce)` (opacity 1, transform none, filter none, `scaleX(1)` for lines). The
  IntersectionObserver in `pages/index.tsx` and `pages/spec.tsx` adds
  `.revealed` when a section enters the viewport at 12–15% threshold. Easing is
  always `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quint). Delays: 80/180/300/
  440/600ms for the stagger tiers.
- **Rule:** a reveal must *enhance* the visible default, never *gate* it. If
  you write a new reveal that hides content by default and only shows it on
  `.revealed`, you have broken the system — headless renderers and paused tabs
  will ship the section blank.

## 6. Do's and Don'ts

### Do:
- **Do** keep the body background at `#050506` (17.3:1 against full-opacity
  ink). It is the gallery wall; it is not negotiable.
- **Do** render all body and secondary text as `#f0ece6` at `/0.55` or higher
  (≥4.5:1). The `/0.8` tier (11.0:1) is the preferred body weight; `/0.55`
  (5.5:1) is the floor for secondary copy.
- **Do** use the `/0.45` tier (4.0:1) **only for large text** (≥18px or bold
  ≥14px). Anything smaller at `/0.45` fails WCAG AA.
- **Do** lift the current `/0.30` (2.3:1) and `/0.25` (1.9:1) tiers — used in
  the footer, some spec-page metadata, and the newsletter placeholder — to
  `/0.55` when you touch them. They are below AA and carry real information.
- **Do** keep Cormorant Garamond (display) + Geist Mono (body + labels) as the
  pairing. It is the brand identity; variants change weight, opacity, and
  scale, not family.
- **Do** cap display at `6.5rem` and section headlines at `4.5rem`. Use
  `text-wrap: balance` on every `h1`–`h3`.
- **Do** use one — and only one — secondary hue per section, as a
  `section-glow-*` and optionally a matching `text-glow-*` on one accent word.
- **Do** use the link-arrow as the default affordance and reserve the piano-key
  CTA for the single loudest action on the page.
- **Do** preserve the `@media (prefers-reduced-motion: reduce)` block in
  `globals.css` on every new motion addition. Reveal classes must start from a
  visible default; the animation layers on top.
- **Do** use tracked uppercase Geist Mono for *real* metadata (section
  numbers, material counters, KV keys, dimension labels) — the museum-caption
  voice is the brand's distinctive grammar.

### Don't:
- **Don't** introduce a cream, sand, paper, or warm off-white background. The
  SaaS startup landing (cream bg + gradient hero text + rounded card grids) is
  a named anti-reference in PRODUCT.md and the single fastest way to make this
  system read as AI-default.
- **Don't** use `background-clip: text` with a gradient. New work uses a single
  solid color (the section hue at full opacity) for emphasis via weight or
  size; the `text-glow-*` classes carry the spot-of-light effect. The legacy
  `gradient-*` classes in `globals.css` are kept only for non-text decorative
  use if any; all text usages have been replaced with solid `text-[#hex]`.
- **Don't** add a `box-shadow` to any element. The system is flat by doctrine;
  depth comes from tonal mesh, section-glow, and the grain overlay. The only
  shadow-like values allowed are `text-glow-*` on accent words.
- **Don't** use `backdrop-filter: blur()` decoratively. The sticky nav is the
  one functional glass surface; any new glass needs a structural reason.
- **Don't** introduce a card grid. The site has no card component by design;
  the spec page uses hairline KV tables, callouts, and SVG diagram containers.
  Repeated same-sized cards with icon + heading + text is a named
  anti-reference.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored
  stripe on a card or list item. The spec-page callouts and P0 risk blocks use
  full hairline borders (`rounded-lg border`) with a bg tint — the hue carries
  the accent, not a side-stripe. The `feature-item` uses a full 1px border +
  bg-tint hover + `translateX(4px)` indent. No 2px side-stripes remain.
- **Don't** repeat a tracked-uppercase eyebrow above every section heading.
  One `section-label` per section, naming the material claim, is voice;
  "ABOUT / PROCESS / PRICING" as reflex grammar is AI scaffolding.
- **Don't** use neon, acid green, angular cuts, or "gaming" iconography. Gamer
  RGB / cyberpunk is a named anti-reference: wrong audience, wrong room.
- **Don't** ship an all-black-everything page with no material presence.
  Generic "luxury" black-box is a named anti-reference — luxury that forgets
  to show the material is luxury with nothing to say. The walnut/brass/cream
  accents and product imagery carry the warmth that empty minimalism forfeits.
- **Don't** gate content visibility behind a class-triggered transition.
  Reveal animations must enhance a visible default; a section that ships blank
  in a headless renderer or a paused tab is a bug, not a design choice.
- **Don't** raise the display ceiling above `6.5rem` or tighten letter-spacing
  beyond `-0.04em`. Above / tighter than that is shouting, not designing.
- **Don't** use a sans-serif body. Switching body off Geist Mono is the single
  fastest way to make this system read as a different brand.