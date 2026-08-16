Document: Responsive Design
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Responsive Design Specification

This document details the viewport breakpoints, layout adaptation rules, touch tap targets, component collapse behaviors, and horizontal overflow handling across desktop, laptop, tablet, and mobile screen sizes.

---

## 1. Tailwind CSS Breakpoints & Viewport Matrix

The responsive design system follows standard Tailwind CSS media query breakpoints:

```text
Mobile Viewports          Tablet Viewports          Desktop / Laptop Viewports
[0px ------------- 639px] [640px ---------- 1023px] [1024px ------------------ 1536px+]
       Mobile                  sm: / md:                 lg: / xl: / 2xl:
```

| Breakpoint Prefix | Min Width | Target Devices | Key Layout Adaptation |
| :--- | :--- | :--- | :--- |
| Default | `0px` | Smart phones (Portrait) | Single-column stacked layout, drawer menu, touch targets |
| `sm:` | `640px` | Large phones & Small Tablets | 2-column form grids, text scaling (`sm:text-5xl`) |
| `md:` | `768px` | Tablets & Small Laptops | 2-column card grids, balanced section padding |
| `lg:` | `1024px` | Laptops & Standard Desktops | Inline navbar links enabled (`hidden lg:flex`), 3-col grids |
| `xl:` | `1280px` | Large Monitors | Full 4-column grids, 1280px max-width container cap |
| `2xl:` | `1536px` | Ultra-wide Displays | Expanded gaps (`2xl:gap-6`), high-density layout |

---

## 2. Key Component Responsive Adaptations

### 2.1 Navigation Header (`Navbar.tsx` & `MobileMenu.tsx`)
* **Desktop (`≥1024px`):** Displays logo emblem, logo text, animated India flag badge, inline dropdown menu links, and primary CTA button.
* **Mobile (`<1024px`):** Hides desktop navigation links (`hidden lg:flex`), displays hamburger toggle button (`Menu` / `X` icon). Toggling opens [`MobileMenu.tsx`](file:///c:/Website/GoWindSun-Website/src/components/layout/MobileMenu.tsx) as a full-height overlay drawer.

### 2.2 Hero System (`StandardHero.tsx`)
* **Desktop:** H1 text scales to `text-6xl` (`60px`), subtitle to `text-3xl` (`30px`). Top padding is `pt-28` (`112px`).
* **Tablet:** H1 text scales to `text-5xl` (`48px`), subtitle to `text-2xl` (`24px`).
* **Mobile:** H1 text scales to `text-4xl` (`36px`), subtitle to `text-xl` (`20px`). Top padding is `pt-24` (`96px`).

### 2.3 Interactive India SVG Map (`IndiaSvgMap.tsx`)
* **Desktop:** Rendered in a 2-column side-by-side layout with the state dossier panel.
* **Mobile:** Stacks vertically above the state dossier panel with touch-optimized state path targets and an explicit "Reset View" button.

### 2.4 Tables & Data Feeds
* Data tables (e.g., equipment price benchmarks, tariff comparisons) are wrapped in horizontal scroll containers (`overflow-x-auto no-scrollbar`) to prevent viewport horizontal overflow on mobile screens.
