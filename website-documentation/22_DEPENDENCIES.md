Document: Dependencies Audit
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Master Dependencies Audit

This document records every third-party npm library, exact semver version, primary usage location, criticality rating, and maintenance evaluation verified directly from [`package.json`](file:///c:/Website/GoWindSun-Website/package.json).

---

## 1. Production Dependencies (`dependencies`)

| Package Name | Exact Version | Purpose & Usage Location | Criticality | Safety / Removal Risk |
| :--- | :--- | :--- | :--- | :--- |
| **`react`** | `^19.0.0` | Core UI rendering engine | **Critical** | Do NOT remove |
| **`react-dom`** | `^19.0.0` | DOM rendering bindings | **Critical** | Do NOT remove |
| **`react-router-dom`** | `^7.2.0` | Client-side routing engine (`HashRouter` in `App.tsx`) | **Critical** | Do NOT remove |
| **`framer-motion`** | `^12.4.1` | UI animations, modal transitions, map tooltips | **High** | Core visual component |
| **`lucide-react`** | `^0.475.0` | Iconography library used across all pages | **High** | Core icon provider |
| **`@svg-maps/india`** | `^2.0.0` | SVG geographic map boundaries of India | **Critical** | Powers `IndiaSvgMap.tsx` |
| **`lenis`** | `^1.1.20` | Smooth scrolling inertia engine (`SmoothScroll.tsx`) | **Medium** | Enhances scroll physics |
| **`gsap`** | `^3.12.7` | High-performance timeline animations | **Medium** | Timeline animation engine |
| **`react-hook-form`** | `^7.54.2` | Contact form state management (`ContactForm.tsx`) | **High** | Powers RFP form |
| **`zod`** | `^3.24.2` | Schema validation library (`rfpSchema`) | **High** | Powers form validation |
| **`@hookform/resolvers`**| `^3.10.0` | Zod resolver adapter for React Hook Form | **High** | Connects RHF and Zod |
| **`clsx`** | `^2.1.1` | Conditional class string utility | **Medium** | Utility helper |
| **`tailwind-merge`** | `^3.0.1` | Merges conflicting Tailwind CSS classes | **Medium** | Utility helper |
| **`class-variance-authority`**| `^0.7.1` | Component variant style manager | **Medium** | Powers button variants |

---

## 2. Development Dependencies (`devDependencies`)

| Package Name | Exact Version | Purpose & Usage Location | Criticality |
| :--- | :--- | :--- | :--- |
| **`vite`** | `^6.1.0` | Build bundler & local dev server | **Critical** |
| **`@vitejs/plugin-react`**| `^4.3.4` | Fast Refresh plugin for React in Vite | **Critical** |
| **`typescript`** | `^5.7.3` | Type-checking & static type engine | **Critical** |
| **`tailwindcss`** | `^3.4.17` | Utility-first CSS framework | **Critical** |
| **`postcss`** | `^8.5.1` | CSS transformation engine | **Critical** |
| **`autoprefixer`** | `^10.4.20` | Appends vendor prefixes to CSS | **High** |
| **`gh-pages`** | `^6.3.0` | Automated deployment script (`npm run deploy`) | **High** |
| **`vite-tsconfig-paths`** | `^5.1.4` | Resolves tsconfig `@/` path aliases in Vite | **High** |
| **`@types/react`** | `^19.0.8` | TypeScript definitions for React | **Critical** |
| **`@types/react-dom`** | `^19.0.3` | TypeScript definitions for React DOM | **Critical** |
| **`@types/node`** | `^22.13.1` | TypeScript definitions for Node.js APIs | **High** |
