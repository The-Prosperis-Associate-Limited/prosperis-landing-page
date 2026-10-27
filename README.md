# The Prosperis Associates Limited Landing Page

A focused public landing page for The Prosperis Associates Limited, covering
its technology, recruitment, training, approach, portfolio, and contact details.

## Tech Stack

- **Framework**: Next.js 16, React 19, TypeScript
- **UI**: Tailwind CSS 4 and project CSS
- **Motion**: Framer Motion
- **Icons**: Lucide
- **DX**: [Husky](https://typicode.github.io/husky/), [Prettier](https://prettier.io/), [ESLint](https://eslint.org/)

## Setup

```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` for production metadata, the sitemap, and search
indexing. Without it, the preview intentionally serves a `noindex` robots rule.

## Core Structure

- `src/app/`: the public `/` route and its metadata files.
- `src/components/landing/`: all landing-page sections and interactions.
- `src/components/landing/data.ts`: company copy and navigation data.

The project intentionally has no authentication, dashboard, API client, or
application state layer. Those are outside the scope of a company landing page.

The company-profile PDF is retained in `output/pdf/` and is not exposed as a
public download.

## Scripts

- `dev`: Start development server.
- `lint`: Run ESLint check.
- `type-check`: Run TypeScript without emitting files.
- `build`: Create the production Next.js build.
- `format`: Format code with Prettier.
