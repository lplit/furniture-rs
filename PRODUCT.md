# Product

## Register

brand

## Users

Two audiences, equally weighted, and the page must speak to both at once:

- **PC enthusiasts with taste.** People who build their own machines, care about
  thermals and compatibility, and are tired of hiding their hardware under a desk
  or in a basement. They know what 8U/19"/ATX means and want the case to *earn*
  its place in a finished room, not apologize for existing.
- **Design-conscious professionals.** Creatives, architects, developers running
  real workstations at home. They want a machine that reads as furniture — a
  credenza, an object — not a black box. They will judge materials, joinery, and
  proportion the way they would judge a chair.

Both audiences share one job: **stop hiding the computer.** They want a case
that is worth looking at and worth living with. The page has to prove material
honesty and technical credibility in the same breath; leaning only toward one
audience loses the other.

Context of use: a finished living space — living room, studio, study — under
warm ambient light, viewed by people who care what's in their home. Not a
datacenter, not a gaming den, not a workshop.

## Product Purpose

Atelier Rack is an 8U 19" ATX server-rack case styled as luxury walnut
furniture — soft-close tempered glass doors, brass hardware, tapered
mid-century legs, credenza proportions. It exists because the industry treats
computer cases as something to hide; this is one meant to keep. Success is a
buyer who looks at it as furniture first and as a computer case second, then
discovers it does both without compromise.

## Brand Personality

**Confident. Editorial. Uncompromising.**

Voice is declarative, short, and contrarian — it names what the industry does
wrong before naming what this does right. Sentences are clipped; nothing hedges.
Copy treats hardware as heirloom, not commodity. The tone borrows from
editorial design publications more than from tech marketing: restraint, white
space, material-led storytelling, a refusal to over-explain. Emotional goals:
recognition (the reader feels the problem named), confidence (the craftsmanship
speaks for itself), and a quiet pride of ownership.

## Anti-references

- **Gamer RGB / cyberpunk.** Neon, angular cuts, aggressive dark-with-acid-green
  palettes, "gaming" iconography. Wrong audience, wrong room.
- **SaaS startup landing page.** Cream background, gradient hero text, rounded
  feature cards repeated endlessly, the 2026 AI-default template. Reads as
  software, not furniture.
- **Big-box tech retail.** BestBuy / Newegg spec-sheet grids, badge soup, generic
  product photography on white seamless. Reads as commodity, not heirloom.
- **Generic "luxury" black-box.** All-black everything, invisible product, empty
  minimalism with no material presence. Luxury that forgets to show the
  material is luxury with nothing to say.

## Design Principles

1. **Show, don't tell.** The material, the joinery, the proportion carry the
   argument. Copy names the problem and steps back; the object makes the case.
2. **Material honesty over decoration.** Walnut reads as walnut, brass as
   brass, glass as glass. No faux finishes, no decorative gradients standing in
   for real material. The page's own visual treatment follows the same rule.
3. **Editorial restraint.** Negative space, careful typography, deliberate
   rhythm — the page reads like a spread, not a spec sheet. One idea per
   section, proven before it's announced.
4. **Expert confidence.** The site never over-explains or hedges. Technical
   credibility (8U, 19", ATX, airflow) sits beside craft credibility (joinery,
   veneer, soft-close) as equals — because the audience reads both.
5. **Practice what you preach.** The landing page itself should feel like
   furniture, not a tech product page: considered, material, built to last.
   Decorative AI defaults (cream bg, gradient text, card grids) contradict the
   brand and are refused on that basis.

## Accessibility & Inclusion

Target: **WCAG 2.1 AA.**

- Body text ≥ 4.5:1 against its background. The current dark palette uses a lot
  of low-opacity cream text on near-black; verify each opacity step, especially
  the `/30`, `/25`, `/15` tiers used for secondary copy — several currently fall
  below AA and need to be lifted toward the ink end of the ramp.
- Large/display text ≥ 3:1.
- Placeholder text ≥ 4.5:1 (not the muted-gray default).
- Reduced-motion is a first-class default: every scroll-reveal must have an
  on-by-default visible state, with the animation layered on top — never gate
  content visibility behind a class-triggered transition. The current
  `@media (prefers-reduced-motion: reduce)` override in `styles/globals.css` is
  the right pattern; preserve it on any new motion.
- Full keyboard navigation, visible focus states, descriptive alt text on all
  product imagery. Decorative imagery gets empty `alt=""`.

---

# Atelier Rack — Product Features Master List

## Confirmed Features

### Core
- 8U 19" server rack compatibility
- ATX motherboard support
- Real walnut veneer over solid hardwood
- Traditional joinery, no visible fasteners
- Soft-close tempered glass doors
- Tapered mid-century legs
- 24–34" adjustable depth
- Credenza proportions/form factor

### Cooling
- Front-to-back airflow (server standard)
- BYO fans (not included)
- Sound-dampened intake paths

### Water Cooling
- Radiator mount points (built-in)
- Tube pass-throughs with grommets

### Cable Management
- Full cable management system
- Integrated cable channels
- Removable back panel for easy access
- Grommeted pass-throughs

### Security & Filtration
- Lockable doors
- Dust filters

### Durability
- Weight capacity rating (TODO: specify lb/kg)

## Dimensions (TODO — placeholders, update when finalized)
- Exterior H × W × D: TODO
- Max GPU length: TODO
- Max cooler height: TODO
- Max PSU size: TODO