
# Ezzi Solutions AI — Foundation

Goal: replace the TanStack Start scaffold with a Vite + React Router v6 app, install the design system exactly per spec, wire all routes as placeholders, build real Header/Footer/Layout, and ship a polished hero on `/`.

## 1. Stack migration (TanStack → Vite + React Router)

Remove TanStack-specific files and config:
- Delete `src/routes/`, `src/router.tsx`, `src/routeTree.gen.ts`, `src/start.ts`, `src/server.ts`, `src/lib/api/`, `src/lib/config.server.ts`, `src/lib/error-page.ts`.
- Strip `@tanstack/react-router`, `@tanstack/react-start`, `@lovable.dev/vite-tanstack-config` from `package.json` and rewrite `vite.config.ts` to a standard React SPA config (`@vitejs/plugin-react`, `@` alias to `src`).
- Replace `index.html` head defaults with the SEO defaults from spec.

Install:
- `react-router-dom@^6`
- `framer-motion`
- `react-helmet-async`
- `next-themes`
- `recharts` (already may be present via shadcn — verify)
- Google Fonts: Geist + JetBrains Mono via `<link>` in `index.html`

Keep: React 19, Tailwind v4, all `src/components/ui/*` shadcn components, `src/lib/utils.ts`, `src/hooks/use-mobile.tsx`.

## 2. Design tokens

Rewrite `src/styles.css` (rename refs to `src/styles/globals.css` per spec file structure, imported from `main.tsx`):
- Drop the existing oklch palette. Define CSS variables on `:root` using the exact hex values from spec (background, surface, surface-2, border, border-strong, foreground, muted, muted-2, accent, accent-soft, accent-glow, success, warning, danger).
- Tailwind v4 `@theme inline` block mapping every token to `--color-*` utilities so `bg-background`, `text-accent`, `border-border-strong`, etc. work.
- Radius scale (sm 6, md 10, lg 14, xl 20, 2xl 28).
- Font families `--font-sans: Geist`, `--font-mono: JetBrains Mono`.
- Fluid heading sizes via `clamp()` utilities (`.h1`, `.h2`, `.h3` classes or just rely on inline clamp via Tailwind arbitrary values).
- Custom box-shadows `--shadow-card`, `--shadow-glow`.
- Global base: `body { background: var(--background); color: var(--foreground); font-family: Geist }`, headings `letter-spacing: -0.02em`, `1.6` body line-height.
- Dot-grid utility class `.bg-dot-grid` (radial-gradient at 0.04 opacity).
- Default `html.dark` applied at root (since dark-only).

## 3. Routing

`src/App.tsx` mounts `BrowserRouter`, `HelmetProvider`, `ThemeProvider` (next-themes, `forcedTheme="dark"`), and a single `<Routes>` tree wrapped in `<Layout>`:

```text
/                              Home
/services                      Services
/services/custom-software      CustomSoftware
/services/mobile-app           MobileApp
/services/web-app              WebApp
/services/saas                 Saas
/services/ui-ux                UiUx
/case-studies                  CaseStudies
/case-studies/:slug            CaseStudyDetail
/process                       Process
/pricing                       Pricing
/about                         About
/testimonials                  Testimonials
/partners                      Partners
/blog                          Blog
/blog/:slug                    BlogPost
/contact                       Contact
/careers                       Careers
/faq                           FAQ
/privacy                       Privacy
/terms                         Terms
*                              NotFound
```

Each non-home page = `<PlaceholderPage title="..." />` (centered h1 + "Coming soon" subtitle + Helmet title). One shared `PlaceholderPage` component avoids 20 file duplications, but each page file still exists per the spec's file structure.

## 4. Layout components (`src/components/layout/`)

- **`Container.tsx`** — `max-w-7xl mx-auto px-6 lg:px-8`.
- **`SectionHeading.tsx`** — props `{ eyebrow, title, subtitle, align }`; uppercase mono eyebrow w/ accent dot, fluid h2, muted subtitle.
- **`Header.tsx`** — Sticky, transparent until scroll>16 then `bg-background/80 backdrop-blur border-b border-border`. Left: "Ezzi Solutions AI" wordmark (semibold, tracking-tight, with accent "." or small lime square). Center nav: Services (Radix dropdown using shadcn `NavigationMenu` showing 5 sub-services), Case Studies, Process, Pricing, About, Blog. Right: "Get a Quote" lime button (`rounded-full`, glow on hover). Mobile: hamburger → shadcn `Sheet` fullscreen drawer.
- **`Footer.tsx`** — 4-col grid as specified (Brand+tagline | Company | Resources | Legal), social row (X, LinkedIn, GitHub via Lucide), bottom bar with © Ezzi Solutions AI 2026.
- **`Layout.tsx`** — `<Header /> <main>{children/Outlet}</main> <Footer />`. Uses `<Outlet />` so it can wrap the Routes tree.

## 5. Hero on `/` (`src/pages/Home.tsx`)

- Full-viewport (`min-h-[calc(100vh-headerH)]`) section with:
  - Background: `#050505` base + radial-gradient mesh bottom-left lime glow + dot-grid overlay.
  - Eyebrow: uppercase mono, tracking-widest, muted with small lime square: `AI-POWERED SOFTWARE STUDIO`.
  - H1: `clamp(2.5rem,6vw,5rem)`, semibold, `-0.02em` tracking — "Custom software & apps — built with AI, launched in weeks." with the phrase "built with AI" in lime accent.
  - Sub-headline: muted, max-w-2xl.
  - CTA row: primary lime "Get a Quote" (rounded-full, accent-glow shadow on hover, scale-98 active), secondary "See Our Work" (ghost, border-border-strong, arrow-right icon).
  - Below: 4-stat strip in a `border border-border rounded-2xl` container, separated by vertical dividers — "9 Systems Shipped · 5 Industries · 60-Day Avg Launch · 24/7 Support".
- Framer Motion: parent `staggerChildren: 0.08`, children `fade+y(16)→0`, eased `[0.16,1,0.3,1]`, `duration 0.6`. Triggers on mount (above the fold).

## 6. SEO & misc

- `index.html`: `<title>Ezzi Solutions AI — Custom software & apps, built with AI</title>`, meta description, OG tags, favicon as inline SVG "E." mark with lime dot.
- Each route sets its own `<Helmet>` title.
- `react-helmet-async` `HelmetProvider` wraps App.
- `prefers-reduced-motion` respected by Framer Motion defaults.

## 7. File structure (final)

```text
src/
  components/
    layout/{Header,Footer,Layout,Container,SectionHeading}.tsx
    ui/...                (shadcn, kept as-is)
  pages/
    Home.tsx
    Services.tsx
    services/{CustomSoftware,MobileApp,WebApp,Saas,UiUx}.tsx
    CaseStudies.tsx
    CaseStudyDetail.tsx
    Process.tsx
    Pricing.tsx
    About.tsx
    Testimonials.tsx
    Partners.tsx
    Blog.tsx
    BlogPost.tsx
    Contact.tsx
    Careers.tsx
    FAQ.tsx
    Privacy.tsx
    Terms.tsx
    NotFound.tsx
    _PlaceholderPage.tsx   (shared)
  lib/utils.ts
  styles/globals.css
  App.tsx
  main.tsx
index.html
vite.config.ts
package.json (rewritten deps & scripts)
```

## 8. Validation before stopping

- Build compiles cleanly, dev preview renders dark hero.
- Click through every nav link → each route reachable, shows placeholder with correct title.
- Hero matches Melrose/Harvey energy: deep black, lime accent, editorial type, subtle dot-grid + lime glow, staggered entrance.
- Header transparent-on-top, blurred-after-scroll behavior works.
- Mobile drawer opens and lists all primary nav items.

## Out of scope (per spec)

No inner-page content, no forms, no backend, no auth, no light mode, no blog/case-study data, no light theme.
