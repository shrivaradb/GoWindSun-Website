Document: Website Architecture
Version: 1.1.0
Status: Active
Last Updated: 19 August 2026

# GoWindSun Website — Technical Architecture Specification

This document details the underlying technical architecture, core framework stack, build system, styling engine, routing structure, directory layout, and deployment scripts for the **GoWindSun India Private Limited** web platform.

---

## 1. Core Framework & Version Audit

The website is engineered as a high-performance Single Page Application (SPA) utilizing Vite as the build tool and React 19 for rendering, structured with Next.js App Router conventions (`src/app/...`) mapped to client-side routes via `HashRouter`.

All package versions below are verified directly from [`package.json`](file:///c:/Website/GoWindSun-Website/package.json):

* **React Core:** `react` `v19.0.0`, `react-dom` `v19.0.0`
* **Build Engine:** `vite` `v6.1.0`, `@vitejs/plugin-react` `v4.3.4`
* **Routing System:** `react-router-dom` `v7.2.0` (`HashRouter`)
* **TypeScript Engine:** `typescript` `v5.7.3`, `@types/node` `v22.13.1`, `@types/react` `v19.0.8`
* **CSS Framework:** `tailwindcss` `v3.4.17`, `postcss` `v8.5.1`, `autoprefixer` `v10.4.20`
* **Animation & Physics:** `framer-motion` `v12.4.1`, `gsap` `v3.12.7`, `lenis` `v1.1.20`
* **Iconography & Maps:** `lucide-react` `v0.475.0`, `@svg-maps/india` `v2.0.0`
* **Forms & Validation:** `react-hook-form` `v7.54.2`, `zod` `v3.24.2`, `@hookform/resolvers` `v3.10.0`
* **Class Utilities:** `clsx` `v2.1.1`, `tailwind-merge` `v3.0.1`, `class-variance-authority` `v0.7.1`
* **Deployment Tooling:** `gh-pages` `v6.3.0`

---

## 2. Routing & Application Architecture

### 2.1 Router Pattern
Although pages are organized inside [`src/app/`](file:///c:/Website/GoWindSun-Website/src/app) using `page.tsx` file conventions, routing is executed via `react-router-dom` `HashRouter` inside [`src/App.tsx`](file:///c:/Website/GoWindSun-Website/src/App.tsx).

This architectural decision ensures 100% reliable client-side route resolution on static hosting providers (such as GitHub Pages or SFTP web root) without requiring server-side URL rewrite rules (e.g., `.htaccess` or Nginx `try_files`).

### 2.2 Global Layout Wrapper
All routes are wrapped in a unified layout structure:
```tsx
<HashRouter>
  <SmoothScroll>
    <div className="flex flex-col min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Route definitions */}
        </Routes>
      </main>
      <Footer />
    </div>
  </SmoothScroll>
</HashRouter>
```

---

## 3. Directory Structure

```text
GoWindSun-Website/
├── dist/                        # Production build output
├── public/                      # Static web assets & public image directory
│   ├── images/                  # Organized image sub-folders (services, news, tenders)
│   ├── logo.png                 # Primary GoWindSun emblem
│   └── hero-bg.png              # Global hero visual asset
├── src/
│   ├── app/                     # Page components organized by route path
│   │   ├── globals.css          # Tailwind base & custom CSS utilities
│   │   ├── page.tsx             # Home Page
│   │   ├── about/               # About pages
│   │   ├── contact/             # Contact page
│   │   ├── ipp-platform/        # IPP Platform page
│   │   ├── knowledge-hub/       # Knowledge Hub page
│   │   ├── tenders/             # Tenders page
│   │   ├── careers/             # Careers page
│   │   ├── projects-for-acquisition/ # Acquisition sub-routes
│   │   └── services/            # Services sub-routes
│   ├── components/              # Reusable React components
│   │   ├── layout/              # Navbar, Footer, MobileMenu, SmoothScroll
│   │   ├── ui/                  # Button, Container, IndiaFlag, StandardHero, Modal
│   │   ├── projects/            # IndiaSvgMap & state dossier panels
│   │   ├── knowledge/           # News section, FX engine UI, calculators
│   │   ├── contact/             # ContactForm component
│   │   └── home/                # Home page section components
│   ├── config/                  # Site metadata (`site.ts`)
│   ├── data/                    # Static datasets & acquisition data files
│   ├── services/                # Business logic (`currencyService.ts`, `newsService.ts`)
│   ├── types/                   # TypeScript interface definitions
│   ├── App.tsx                  # Main App component & router definition
│   └── main.tsx                 # Application entry point
├── package.json                 # Project dependencies & build scripts
├── tailwind.config.ts           # Tailwind design tokens & extension config
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite build bundler configuration
```

---

## 4. Development & Build Commands

All shell commands must be executed from the project root directory:

* **Start Local Development Server:**
  ```bash
  npm run dev
  ```
  Runs Vite dev server at `http://localhost:5173`.

* **Build Production Distribution Bundle:**
  ```bash
  npm run build
  ```
  Executes TypeScript type-check (`tsc`), compiles optimized static bundle into `dist/`, and copies `dist/index.html` to `dist/404.html` for static routing fallback.

* **Preview Production Build Locally:**
  ```bash
  npm run preview
  ```
  Launches a local static server previewing the generated `dist/` directory.

* **Deploy to Production Hosting (cPanel / Apache Web Server):**
  Upload the entire contents of `dist/` (including `dist/.htaccess`) to `public_html/`. Ensure "Show Hidden Files (dotfiles)" is enabled in cPanel File Manager so `.htaccess` executes the 301 permanent redirect (`gowindsun.com` -> `https://www.gowindsun.com/`).

* **Deploy to Alternate Static Hosting (GitHub Pages):**
  ```bash
  npm run deploy
  ```
  Executes `npm run build` followed by automated deployment to the `gh-pages` branch.

