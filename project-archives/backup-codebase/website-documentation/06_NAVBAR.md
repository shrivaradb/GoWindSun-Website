Document: Navbar Specification
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Navbar Specification

This document details the exact technical implementation, layout structure, scroll mechanics, animated Indian flag badge, dropdown navigation hierarchy, and mobile drawer behavior for the primary navigation header in [`src/components/layout/Navbar.tsx`](file:///c:/Website/GoWindSun-Website/src/components/layout/Navbar.tsx).

---

## 1. Technical Properties & Scroll Mechanics

* **Positioning & Z-Index:** `fixed top-0 left-0 right-0 z-50`
* **Theme & Background:** Crisp white surface (`bg-white`) with bottom border (`border-b border-slate-200/80`).
* **Height Scale:** `h-16` (64px) on standard screens, `xl:h-18` (72px) on extra-large screens.
* **Scroll Listener Behavior:** Listens to `window.scrollY > 10`:
  * Default (`scrollY ≤ 10`): `py-2.5 shadow-sm`
  * Scrolled (`scrollY > 10`): `py-2 shadow-md` with smooth 200ms transition.

---

## 2. Indian Tricolor Top Accent Stripe

A subtle top accent line spans the entire viewport width at the absolute top of the header:
```tsx
<div className="w-full h-[3.5px] bg-gradient-to-r from-[#FF9933] via-slate-100 to-[#138808] absolute top-0 left-0 right-0 z-10" />
```
* **Height:** `3.5px`
* **Colors:** Saffron (`#FF9933`) transitioning through Slate-100 to India Green (`#138808`).

---

## 3. Brand Emblem & Animated Indian Flag Badge

The left side of the navbar contains three tightly grouped brand elements:

1. **Logo Emblem Image:** [`/logo.png`](file:///c:/Website/GoWindSun-Website/public/logo.png), rendered at `h-[54px]` (`xl:h-[64px]`). Features hover scale transition (`group-hover:scale-105 duration-300`).
2. **Logo Text Image:** [`/images/logo_text.png`](file:///c:/Website/GoWindSun-Website/public/images/logo_text.png), rendered at `h-[32px]` (`xl:h-[38px]`).
3. **Standalone Animated Indian Flag (`<IndiaFlag />`):**
   * **Location:** Positioned immediately to the right of the logo text.
   * **Dimensions:** `w-9 h-6 sm:w-11 sm:h-7.5` (`rounded-[3px]`).
   * **Method:** Vector SVG implementation inside [`IndiaFlag.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/IndiaFlag.tsx) (`viewBox="0 0 900 600"`).
   * **SVG Elements:**
     * Saffron Rect: `fill="#FF9933"` (0px - 200px)
     * White Rect: `fill="#FFFFFF"` (200px - 400px)
     * India Green Rect: `fill="#138808"` (400px - 600px)
     * Ashoka Chakra: Navy Blue `stroke="#000080"`, radius 90px, 24 individual rotated line spokes (`transform="rotate(i * 15)"`) plus 24 outer perimeter dots.
   * **Animation:** Smooth hover scale micro-animation (`group-hover/flag:scale-105 duration-300`).

---

## 4. Desktop Navigation Hierarchy & Order

On screens `≥1024px` (`hidden lg:flex`), navigation items appear in the following strict order:

1. **About** (`/about`)
   * Dropdown: About GoWindSun (`/about`), Our Journey (`/about/our-journey`)
2. **Services** (`/services`)
   * Dropdown:
     * Project Development & EPC (`/services/project-development-epc`)
     * Technical Consulting & Advisory Services (`/services/technical-consulting-advisory`)
     * Asset Management & Operations (`/services/asset-management-operations`)
     * Strategic Advisory & Energy Market Services (`/services/strategic-advisory-energy-market`)
3. **Projects for Acquisition** (`/projects-for-acquisition`)
   * Multi-tier Flyout Dropdown:
     * Wind Projects (`/projects-for-acquisition/wind`) -> Sub-menu: Greenfield Wind, Shovel Ready Wind, Operational Wind
     * Solar Projects (`/projects-for-acquisition/solar`) -> Sub-menu: Greenfield Solar, Shovel Ready Solar, Operational Solar
     * Hybrid Projects (`/projects-for-acquisition/hybrid`)
4. **Renewable Energy Trading** (`/services/renewable-energy-trading`)
5. **IPP Platform** (`/ipp-platform`)
6. **Knowledge Hub** (`/knowledge-hub`)
7. **Contact Us** (`/contact`) — **CTA Button**:
   * Style: `bg-[#EA580C] hover:bg-[#C2410C] rounded-full text-white font-bold text-xs xl:text-sm px-4 py-2 shadow-md shadow-orange-600/20`
   * Feature: Includes a white pulsing dot indicator (`w-2 h-2 rounded-full bg-white animate-pulse`).

---

## 5. Under Development Integration & Mobile Drawer

* **Under Development Trigger:** Items flagged with `isUnderDevelopment` display a small mono badge (`Under Dev`). Clicking triggers the interactive [`UnderDevelopmentModal.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/UnderDevelopmentModal.tsx).
* **Mobile Menu (`MobileMenu.tsx`):** Triggered via hamburger toggle button on `<1024px` screens (`lg:hidden`). Provides accordion-style expansion for sub-menus and mobile CTAs.
