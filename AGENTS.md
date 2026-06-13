# AGENTS.md

## Commands

- **Package manager**: pnpm (not npm/yarn)
- **Dev server**: `pnpm dev`
- **Build**: `pnpm build`
- **Lint**: `pnpm lint` (runs `eslint` with flat config, not `next lint`)
- **No test runner configured** — no `test` script exists

## Architecture

- **Next.js Pages Router** (not App Router). Routes live in `pages/`.
- **Tailwind CSS v4** — uses `@import "tailwindcss"` and `@theme inline` in `styles/globals.css`, not a `tailwind.config.*` file.
- **Path alias**: `@/*` maps to project root (e.g., `@/styles/globals.css`).
- **ESLint flat config** (`eslint.config.mjs`) with `eslint-config-next/core-web-vitals` + typescript.
- Product images are stored in `public/products/`.

## Installed Skills

- **next-best-practices** (`.agents/skills/next-best-practices/`) — Next.js patterns for file conventions, RSC boundaries, async APIs, metadata, error handling, etc.
- **next-cache-components** (`.agents/skills/next-cache-components/`) — Next.js 16 `use cache`, `cacheLife`, `cacheTag`, PPR patterns.
- **next-upgrade** (`.agents/skills/next-upgrade/`) — Upgrade guide for Next.js versions.

Note: These skills reference App Router conventions. This project uses **Pages Router**, so apply advice accordingly (e.g., `pages/` routing, `getServerSideProps`/`getStaticProps` instead of server components).

## Product — Atelier Rack

This is a landing page for a premium 8U 19" ATX rack styled as luxury walnut furniture (credence-style).

**Vision**: Powerful computing should enhance living spaces, not clash with them. Technology that belongs in your life.

**Landing page sections** (follow Why > How > What order):
1. **Hero**: Walnut credenza image + "Technology that belongs in your life." CTAs: Discover / Shop
2. **Why**: Purpose statement — tech should complement living spaces
3. **How**: Craftsmanship, quiet operation, seamless integration
4. **What**: Specs (8U, 19" rails, ATX, 24-34" depth, wood veneer, tapered legs, soft-close, glass doors), features, gallery
5. **Benefits & Gallery**
6. **CTA footer**

**Design direction**: Minimalist luxury, walnut tones, high-res imagery, responsive, image-heavy. Price range $800-1500.