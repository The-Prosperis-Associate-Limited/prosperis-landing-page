# Next.js Production Scaffolding

A minimal, high-performance starter focused on core architecture and developer experience.

## Tech Stack

- **Framework**: Next.js 16/19, TypeScript
- **Query / API**: [TanStack Query v5](https://tanstack.com/query), [Axios](https://axios-http.com/)
- **State**: [Zustand](https://zustand.dev/), [JS-Cookie](https://github.com/js-cookie/js-cookie)
- **Forms / Validation**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **UI Architecture**: [Tailwind 4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [Motion](https://motion.dev/)
- **Icons**: [HugeIcons](https://hugeicons.com/), [Lucide](https://lucide.dev/)
- **DX**: [Husky](https://typicode.github.io/husky/), [Prettier](https://prettier.io/), [ESLint](https://eslint.org/)

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Core Structure

- `src/app/`: App router with `(auth)` and `(dashboard)` route groups.
- `src/components/`: Shadcn primitives (`ui`) and app-wide wrappers (`shared`).
- `src/lib/api/`: Axios instance with interceptors and TanStack Query client helpers.
- `src/hooks/`: Business logic hooks (e.g., `useMarketData`, `useUser`).
- `src/store/`: Zustand global state definitions.
- `src/services/`: Direct API service abstractions.

## Scripts

- `dev`: Start development server.
- `lint`: Run ESLint check.
- `format`: Format code with Prettier.
