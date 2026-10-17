# Prosperis Group Landing Page

A focused public landing page introducing Prosperis Group, its service areas,
and its portfolio. The current wording is a content-review draft: it avoids
invented company claims and makes every outstanding approval explicit.

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
- `src/components/landing/data.ts`: review copy and navigation data.

The project intentionally has no authentication, dashboard, API client, or
application state layer. Those are outside the scope of a company landing page.

The draft company-profile PDF is retained in `output/pdf/` for internal review
and is intentionally not copied into `public/` until its content is approved.

## Scripts

- `dev`: Start development server.
- `lint`: Run ESLint check.
- `type-check`: Run TypeScript without emitting files.
- `build`: Create the production Next.js build.
- `format`: Format code with Prettier.
