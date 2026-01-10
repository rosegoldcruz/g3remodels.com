# GitHub Copilot Instructions for g3remodels.com

## Project Context
This is a luxury architectural website built with **Next.js 16 (App Router)** and **TypeScript**. It features high-end visual effects using **GSAP**, **Framer Motion**, and **OGL** (WebGL).

## Architecture & Core Pattern
- **Framework**: Next.js App Router (`app/` directory).
- **Styling**: Hybrid approach.
  - **Tailwind CSS**: Used for layout, spacing, and typography.
  - **Custom CSS**: `.css` files (e.g., `components/luxury-gallery.css`) used for complex visual effects and shader-like interactions.
- **UI Library**: `shadcn/ui` based (Radix UI + Tailwind) in `components/ui`.
- **Animations**:
  - `framer-motion`: Page transitions and element entry effects.
  - `gsap`: Complex timelines and scroll-triggered animations.
  - `ogl`: WebGL/Canvas rendering (e.g., `light-rays.tsx`).

## Critical Workflow Rules (Aeon Rulebook)
Strict verification is required before any code push:
1.  **Local Verification**: Run `pnpm build` or `pnpm dev` to ensure no runtime crashes.
2.  **Type Safety**: Despite `next.config.mjs` having `ignoreBuildErrors: true`, you MUST aim for zero TypeScript errors in generated code.
3.  **Auto-Push Policy**: Changes should be verified and then pushed immediately if successful.

## Development Commands
- **Install**: `pnpm install`
- **Dev Server**: `pnpm dev` (Turbopack enabled)
- **Build**: `pnpm build`
- **Lint**: `pnpm lint`

## Code Style & Conventions
- **Components**: Use strict TypeScript interfaces for props.
  ```tsx
  interface GalleryItemProps {
    src: string;
    title: string;
  }
  ```
- **Client Components**: Mark interactive components with `'use client'` at the very top.
- **Imports**: Use `@/` alias for root imports (e.g., `import { Button } from "@/components/ui/button"`).
- **Images**: 
  - Store static images in `public/`.
  - Use `next/image` with `unoptimized: true` (per project config).

## External Services
- **Deployment**: Vercel.
- **Package Management**: pnpm (ensure strict lockfile adherence).

## Common Pitfalls
- **WebGL/OGL**: Ensure `ogl` is imported dynamically or handled carefully in Server Components to avoid build errors (see `components/light-rays.tsx` pattern).
- **Hydration**: Be cautious of hydration mismatches with heavy animation libraries; use `useEffect` for initialization.
