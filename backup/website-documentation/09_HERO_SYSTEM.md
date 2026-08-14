Document: Hero System Specification
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Global Hero System Specification

This document details the exact technical implementation, container layout, background image treatments, typography sizing, gradient overlays, viewport behavior, and intentional exceptions for the Global Hero System in [`src/components/ui/StandardHero.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/StandardHero.tsx).

---

## 1. Technical Layout & Viewport Specifications

* **Height & Dimensions:** `relative w-full h-screen min-h-screen flex items-center overflow-hidden`
  * Guarantees 100% full viewport height coverage across desktop, laptop, tablet, and mobile screens.
* **Surface Background Tone:** Dark Theme Default (`bg-[#06111F] text-white`). Light Theme Variant supported via `theme="light"` (`bg-white text-slate-900`).
* **Navbar Relationship & Padding:** The content container includes `pt-24 lg:pt-28` (`96px` to `112px` top padding) to offset the fixed 64px/72px top navbar header and prevent text overlap.

---

## 2. Background Image & Overlay Treatment

When a background image is passed to `StandardHero`:

1. **Image Rendering Component:** Uses Next.js `<Image fill priority sizes="100vw" />`.
2. **Object Fitting & Filters:**
   ```tsx
   className="object-cover object-center brightness-[0.38] contrast-105"
   ```
   * `brightness-[0.38]`: Darkens high-resolution photography to 38% brightness to ensure AAA contrast compliance for white typography.
   * `contrast-105`: Enhances visual crispness of renewable energy infrastructure assets.
3. **Gradient Overlay:**
   ```tsx
   <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/95 via-[#06111F]/80 to-transparent" />
   ```
   * Left-to-right gradient ensuring 95% opacity behind left-aligned text, gradually tapering off to transparent on the right to reveal background visuals.

---

## 3. Typography Scale & Hierarchy

The Hero container enforces a strict 3-tier typographic hierarchy:

```tsx
<div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12 lg:pt-28 lg:pb-16">
  <div className="max-w-4xl text-left">
    {/* Tier 1 H1 Title */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
      {title}
    </h1>

    {/* Tier 2 Lead Subtitle */}
    {subtitle && (
      <p className="text-2xl sm:text-3xl font-normal mt-4 text-slate-200">
        {subtitle}
      </p>
    )}

    {/* Tier 3 Description */}
    {description && (
      <p className="text-base sm:text-lg font-normal max-w-3xl mt-6 text-slate-300">
        {description}
      </p>
    )}
  </div>
</div>
```

---

## 4. Intentional Exceptions & Special Hero Implementations

1. **Home Page Carousel Hero (`Hero.tsx` & `HeroSlideshow.tsx`):**
   * Features an automated 4-slide background image carousel cycling between [`hero_slideshow_1.png`](file:///c:/Website/GoWindSun-Website/public/hero_slideshow_1.png), `2.png`, `3.png`, and `4.png`.
   * Includes live macro stats bar (`~3,000 MW Greenfield Site Pipeline Potential`) overlaying the hero bottom.
2. **Knowledge Hub Hero (`KnowledgeHero.tsx`):**
   * Incorporates a live market status ticker and search filter bar directly inside the hero container.
3. **Protected Pages:** Protected pages maintain their designated hero images and title text. Refer to [`25_PROTECTED_AND_EXCLUDED_PAGES.md`](file:///c:/Website/GoWindSun-Website/website-documentation/25_PROTECTED_AND_EXCLUDED_PAGES.md) before attempting modifications.
