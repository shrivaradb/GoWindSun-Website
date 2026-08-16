Document: Typography
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Master Typography Specification

This document details the typography stack, font families, fallback hierarchy, type scale (desktop, tablet, mobile), font weights, line heights, letter spacing, and casing rules for the **GoWindSun India Private Limited** web platform.

---

## 1. Font Families & Fallback Stack

The website uses a dual-font system defined in [`src/app/globals.css`](file:///c:/Website/GoWindSun-Website/src/app/globals.css) and [`tailwind.config.ts`](file:///c:/Website/GoWindSun-Website/tailwind.config.ts):

### 1.1 Primary Sans-Serif Font (Body & Headings)
* **CSS Variable:** `var(--font-geist-sans)`
* **Primary Font:** Inter / Geist Sans
* **Fallback Stack:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `sans-serif`
* **Usage:** Applied to `body`, all heading tags (`<h1>` to `<h6>`), buttons, navigation links, and standard content cards.

### 1.2 Monospace Font (Technical Data & Code Badges)
* **CSS Variable:** `var(--font-geist-mono)`
* **Primary Font:** JetBrains Mono / Geist Mono
* **Fallback Stack:** `"JetBrains Mono"`, `"Fira Code"`, `"Consolas"`, `monospace`
* **Usage:** Applied to tender IDs (`GWS-TND-2026-001`), capacity figures, tariff metrics (`₹3.24/kWh`), map category badges, and code labels (`font-mono`).

---

## 2. Typography Scale & Hierarchy

| Element | Desktop Size (`xl`/`2xl`) | Tablet Size (`md`/`lg`) | Mobile Size (`<640px`) | Font Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | `60px` (`text-6xl`) | `48px` (`text-5xl`) | `36px` (`text-4xl`) | `font-extrabold` (800) | `1.05` | `tracking-tight` |
| **Section H2** | `36px` (`text-4xl`) | `30px` (`text-3xl`) | `24px` (`text-2xl`) | `font-extrabold` (800) | `1.15` | `tracking-tight` |
| **Sub-section H3** | `24px` (`text-2xl`) | `20px` (`text-xl`) | `18px` (`text-lg`) | `font-extrabold` / `bold` | `1.25` | `tracking-tight` |
| **Card H4 / H5** | `18px` (`text-lg`) | `16px` (`text-base`) | `16px` (`text-base`) | `font-bold` (700) | `1.3` | Normal / Uppercase |
| **Lead Subtitle** | `24px` (`text-2xl`) | `20px` (`text-xl`) | `18px` (`text-lg`) | `font-normal` (400) | `1.4` | Normal |
| **Body Text** | `16px` (`text-base`) | `15px` (`text-sm`) | `14px` (`text-sm`) | `font-normal` (400) | `1.6` (`leading-relaxed`) | Normal |
| **Navigation Link** | `14px` (`text-sm`) | `13px` (`text-[13px]`) | `14px` in drawer | `font-bold` (700) | `1.0` | Normal |
| **CTA Button Text** | `16px` (`text-base`) | `14px` (`text-sm`) | `14px` (`text-sm`) | `font-bold` (700) | `1.0` | Normal / Uppercase |
| **Mono Badge / Tag** | `12px` (`text-xs`) | `11px` (`text-[11px]`) | `10px` (`text-[10px]`) | `font-bold` (700) | `1.0` | `tracking-wider` / `widest` |

---

## 3. Casing & Uppercase Rules

1. **Category Headers & Section Kicker Badges:** Always forced to `uppercase` with `font-mono`, `text-xs`, and wide tracking (`tracking-widest`), e.g.:
   `GEOGRAPHIC INDIA WIND MAP`, `CALL FOR APPLICATIONS`, `ACTIVE NOTICE`.
2. **Action Buttons:** Standard CTA buttons use Title Case (e.g., `Submit Consultation Request`, `Explore Opportunities`), while technical submit buttons in dark portals use `uppercase font-mono` (e.g., `SUBMIT TENDER DOSSIER`).
3. **Company Legal Entity Name:** Always formatted as `GoWindSun India Private Limited` or `GoWindSun India Pvt. Ltd.`.
