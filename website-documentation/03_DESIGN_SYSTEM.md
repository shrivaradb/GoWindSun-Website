Document: Design System
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Design System Specification

This document defines the complete visual language, design system tokens, layout boundaries, UI components, surface treatments, shadows, hover micro-interactions, and responsive behavior for the **GoWindSun India Private Limited** web platform.

---

## 1. Design Philosophy & Aesthetic Identity

The GoWindSun visual identity projects a high-end corporate renewable energy engineering and investment banking aesthetic. It balances clean enterprise readability with vibrant clean-energy accents.

### 1.1 Dual-Surface Theme Paradigm
1. **Light Corporate Surface (Default Body):** Clean white background (`#FFFFFF`) with dark slate text (`#0F172A`) for readability across service descriptions, document grids, and technical specifications.
2. **Deep Navy Dark Surface (Hero & Specialized Portals):** Deep dark navy background (`#06111F` / `#0B1E36`) for global Hero sections, Tenders portal, Careers portal, and Knowledge Hub Hero. Provides high-contrast framing for glowing emerald, sky blue, and amber accents.

---

## 2. Spatial Grid & Layout Boundaries

* **Global Container Width:** Maximum `1280px` (`max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8`), managed via [`Container.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/Container.tsx).
* **Section Padding:** Standard section padding is `py-16 md:py-24` (`64px` on mobile, `96px` on desktop).
* **Grid Layouts:** 
  * 12-column grid or 1/2/3/4 column flex grids with standard gap spacing of `gap-6` (`24px`), `gap-8` (`32px`), or `gap-10` (`40px`).

---

## 3. Surface Tokens & Glassmorphism

Derived directly from [`tailwind.config.ts`](file:///c:/Website/GoWindSun-Website/tailwind.config.ts) and [`globals.css`](file:///c:/Website/GoWindSun-Website/src/app/globals.css):

### 3.1 Corner Radii (`borderRadius`)
* **Buttons (`btn`):** `9999px` (`rounded-full`) for sleek corporate feel.
* **Cards (`card`):** `24px` (`rounded-3xl` or `rounded-2xl`).
* **Sections (`section`):** `32px` (`rounded-3xl`).

### 3.2 Glassmorphism Utilities
* **Standard Glass Panel (`.glass-panel`):**
  ```css
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(226, 232, 240, 0.8);
  ```
* **Glass Panel Hover (`.glass-panel-hover:hover`):**
  ```css
  background: #FFFFFF;
  border-color: rgba(37, 99, 235, 0.3);
  box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.08);
  transform: translateY(-2px);
  ```

### 3.3 Shadows & Elevation (`boxShadow`)
* **`enterprise`:** `0 20px 60px rgba(0, 0, 0, 0.4)`
* **`glow-blue`:** `0 0 40px rgba(37, 99, 235, 0.25)`
* **`glow-cyan`:** `0 0 40px rgba(6, 182, 212, 0.25)`
* **`glow-emerald`:** `0 0 40px rgba(16, 185, 129, 0.25)`
* **`card`:** `0 10px 30px -10px rgba(0, 0, 0, 0.5)`

---

## 4. UI Components & Interactivity

### 4.1 Buttons & Call-to-Actions
* **Primary CTA:** Pill-shaped (`rounded-full`), `#0186D5` or `#059669` background, white text, bold font, subtle drop-shadow (`shadow-sky-500/20`), hover translation (`hover:-translate-y-0.5`).
* **Orange High-Priority CTA (e.g. Contact Us Nav Button):** `#EA580C` background, hover `#C2410C`, pulsing white dot indicator.

### 4.2 Hover Micro-Animations
* **Interactive Cards:** Hover elevation (`-translate-y-1`), border highlight (`border-[#0186D5]/60`), shadow glow.
* **Flag & Emblem:** Scale up transition (`group-hover:scale-105 duration-300`).
* **Navigation Links:** Color transition (`hover:text-emerald-700` or `hover:text-emerald-400` in dark mode).

---

## 5. Responsive Design Standards

* **Desktop (`≥1024px`):** Full multi-column navigation menu, inline header CTAs, 3-column or 4-column card grids, expanded India SVG map with zoom controls.
* **Tablet (`768px - 1023px`):** 2-column card layouts, responsive hero font scaling (`sm:text-5xl`), scrollable tab bars.
* **Mobile (`<768px`):** Hamburger menu drawer (`MobileMenu.tsx`), stacked single-column card grids, full-width buttons, touch-friendly tap targets (`min-h-[44px]`).
