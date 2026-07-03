# Orion Ring — Smart Ring Landing Page

> **A modern, high-performance landing page for pre-ordering the Orion smart ring.**  
> Built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## Introduction

Orion Ring is a premium landing page designed to showcase and pre-sell a next-generation smart ring. The page combines cinematic visual design with best-in-class web performance — leveraging **Next.js 16's App Router**, **React 19**, and **Tailwind CSS v4** for a fast, accessible, and visually stunning experience.

The project targets the Vietnamese market with localized content, and integrates a **Google Sheets–backed registration flow** via Google Apps Script for lead capture.

---

## Key Features

- **⚡ Optimized Performance** — Dynamic imports (`next/dynamic`) for all below-fold sections; framer-motion `LazyMotion` for animation code-splitting; optimized image delivery via `next/image` with AVIF/WebP support.
- **🎨 Premium Design System** — A luxury dark/light theme with custom color tokens (gold, platinum, titanium, nebula), glassmorphism effects, and gradient gold text/buttons.
- **📱 Fully Responsive** — Mobile-first layout with fluid typography, adaptive grids, and touch-friendly carousels.
- **🌗 Dark / Light Mode** — System-aware theme switching via `next-themes` with zero flash and persistent user preference.
- **📝 Lead Capture Form** — react-hook-form + zod validation; submissions are sent to Google Sheets via a server action.
- **♿ Accessibility** — Semantic HTML, ARIA attributes, keyboard-navigable carousels, and WCAG-compliant color contrast.
- **🔧 Developer Experience** — Strict TypeScript, shadcn/ui components, SVGR for SVG imports, and comprehensive ESLint config.

---

## Overall Architecture

```mermaid
graph TD
    subgraph "Page (src/app/page.tsx)"
        A[Static: Header] --> B[Static: HeroSection]
        B --> C[Dynamic: FeatureSection]
        C --> D[Dynamic: SpecSection]
        D --> E[Dynamic: SocialProofSection]
        E --> F[Dynamic: RegistrationSection]
        F --> G[Dynamic: Footer]
    end

    subgraph "Layout (src/app/layout.tsx)"
        L[RootLayout] --> LP[LazyMotion<br/>domAnimation]
        LP --> TP[ThemeProvider<br/>next-themes]
    end

    subgraph "Form Pipeline"
        REG[RegistrationSection] --> FORM[RegisterForm]
        FORM --> RHF[react-hook-form<br/>+ zod]
        RHF --> SA[Server Action<br/>register-server.ts]
        SA --> GS[Google Apps Script]
        GS --> SHEETS[Google Sheets]
    end

    subgraph "Design Tokens"
        CSS[globals.css] --> THEME[@theme inline]
        THEME --> VAR[Custom Properties<br/>--gold, --nebula, etc.]
        VAR --> UTILS[Utility Classes<br/>.btn-gold, .text-gradient-gold]
    end
```

### Component Loading Strategy

```
page.tsx
├── Header ────────────────────────────── (static, above fold)
├── HeroSection ───────────────────────── (static, above fold)
├── FeatureSection ───── dynamic() ────── (loaded on scroll)
├── SpecSection ──────── dynamic() ────── (loaded on scroll)
├── SocialProofSection ─ dynamic() ────── (loaded on scroll)
├── RegistrationSection─ dynamic() ────── (loaded on scroll)
└── Footer ───────────── dynamic() ────── (loaded on scroll)
```

All sections below the hero are lazy-loaded via `next/dynamic`, splitting the bundle into independently cached chunks. framer-motion is further code-split via `<LazyMotion features={domAnimation}>` in the root layout.

---

## Installation

### Prerequisites

- **Node.js** >= 20.x
- **pnpm** (recommended), npm, or yarn

### Clone & Install

```bash
git clone https://github.com/your-org/orion-ring-landing.git
cd orion-ring-landing
pnpm install
```

---

## Running the project

```bash
pnpm dev          # Start development server on http://localhost:3000
pnpm build        # Create production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm analyze      # Run Next.js bundle analyzer
```

### Vercel Deployment

The project includes a `vercel.json` configured for the **Singapore region** (`sin1`). Deploy via the Vercel CLI or Git integration:

```bash
vercel --prod
```

---

## Environment Configuration

Create a `.env` file in the project root:

```env
# Required — used for Open Graph meta tags
NEXT_PUBLIC_SITE_URL=https://your-url.vercel.app

# Required — Google Apps Script deployment ID for form submissions
GOOGLE_SHEET_ID_DEPLOY=<your-deploy-id>...
```

### Variable Reference

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | ✅ | Canonical site URL for OG images and meta tags |
| `GOOGLE_SHEET_ID_DEPLOY` | ✅ | Google Apps Script deployment ID for the registration form |

Validation is handled at build time by `src/lib/env/env-config.lib.ts` using a zod schema.

---

## Folder Structure

```
galaxy/
├── public/                        # Static assets
│   ├── img/                       # Product images (WebP/AVIF)
│   ├── facebook.svg               # Social icons (SVG components)
│   ├── tiktok.svg
│   └── youtube.svg
│
├── src/
│   ├── app/
│   │   ├── _components/           # Page section components
│   │   │   ├── hero-section.tsx
│   │   │   ├── feature-section.tsx
│   │   │   ├── spec-section.tsx
│   │   │   ├── social-proof-section.tsx
│   │   │   ├── registration-section.tsx
│   │   │   ├── register-form.tsx
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── toggle-mode.tsx
│   │   ├── actions/
│   │   │   └── register-server.ts  # Server action for form submission
│   │   ├── globals.css             # Tailwind v4 + theme tokens
│   │   ├── layout.tsx              # Root layout with providers
│   │   └── page.tsx                # Entry page (composes sections)
│   │
│   ├── components/
│   │   ├── custom/
│   │   │   ├── theme-provider.tsx   # next-themes wrapper
│   │   │   └── skeleton-img.tsx     # LQIP image placeholder
│   │   └── ui/                     # shadcn/ui primitives (13 components)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── dropdown-menu.tsx
│   │       └── ... (7 more)
│   │
│   ├── lib/
│   │   ├── env/
│   │   │   └── env-config.lib.ts   # Zod-validated env config
│   │   ├── motion/
│   │   │   └── animations.ts       # Shared framer-motion variants
│   │   ├── schemas/
│   │   │   └── register-schema.ts  # Zod form validation schema
│   │   ├── icons/                  # React-icons re-exports
│   │   └── utils.ts                # cn() helper (clsx + tailwind-merge)
│   │
│   └── types/
│       └── svg.d.ts                # Type declarations for SVG imports
│
├── components.json                 # shadcn/ui configuration
├── next.config.ts                  # Next.js config (SVGR, images, headers)
├── tailwind.config.ts              # (v4 — configured via CSS)
├── tsconfig.json                   # Strict TypeScript configuration
├── postcss.config.mjs              # PostCSS with @tailwindcss/postcss
├── eslint.config.mjs               # ESLint with Next.js core-web-vitals
└── vercel.json                     # Vercel deployment config (sin1 region)
```

---

## Contribution Guidelines

We welcome contributions! Here's how to get started:

1. **Fork the repository** and create a feature branch from `main`.
2. **Install dependencies** with `pnpm install`.
3. **Run the development server** with `pnpm dev`.
4. **Make your changes** — follow the existing code style:
   - Components: PascalCase filenames (kebab-case for page sections).
   - Use `import type` for type-only imports.
   - Run `pnpm lint` before committing.
5. **Open a pull request** with a clear title and description.

### Code Style

- **TypeScript**: Strict mode enabled. Prefer `React.ComponentProps<"element">` over explicit prop interfaces.
- **Tailwind**: Use inline utility classes. Define custom tokens in `globals.css` `@theme` blocks.
- **Imports**: Group as (1) Next.js, (2) third-party, (3) `@/` aliases, (4) relative.

---

