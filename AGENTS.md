# AGENTS.md

## Commands

- **Package manager**: pnpm (lockfile `pnpm-lock.yaml`)
- **Dev**: `pnpm dev` → http://localhost:3000
- **Build**: `pnpm build`
- **Lint**: `pnpm lint` — runs `eslint` directly (flat config), not `next lint`
- **No test runner** — `package.json` has no `test` script
- **No formatter/typecheck scripts** — `tsc` and formatting are not automated

## Architecture

- **Next.js 16.2.9 Pages Router** — routes live in `pages/`; there is no `app/` directory
- **React 19.2.4** — note the installed version when consulting React docs
- **Tailwind CSS v4** with `@tailwindcss/postcss` — config lives in `styles/globals.css` via `@import "tailwindcss"` and `@theme inline`; there is no `tailwind.config.*`
- **Path alias**: `@/*` maps to project root (`tsconfig.json` `paths`)
- **ESLint flat config** in `eslint.config.mjs`: imports `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Product images: `public/products/`

## Useful conventions from the current landing page

- Global styles and design tokens (walnut/cream/brass colors, reveal animations, section glows, typography helpers) are defined in `styles/globals.css`
- Custom font variables set in `pages/_app.tsx`: `--font-geist-sans`, `--font-geist-mono`, `--font-cormorant`
- Scroll-reveal classes rely on JS adding a `revealed` class (not built into Tailwind)
- `PRODUCT.md` holds product specs and dimensions master list

## Installed skills (repo-local)

- `.agents/skills/next-best-practices/`
- `.agents/skills/next-cache-components/`
- `.agents/skills/next-upgrade/`

These skills reference App Router conventions. This project uses **Pages Router**, so apply advice accordingly (`pages/` routing, `getServerSideProps`/`getStaticProps` instead of server components).

## What to avoid

- Do not run `npm install` or `yarn install` — use `pnpm install`
- Do not look for a `tailwind.config.*` file
- Do not look for an `app/` directory or RSCs