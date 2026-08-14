Document: Functionality and Interactions
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Functionality & Interactions Specification

This document details all interactive features, state machines, user event listeners, calculation models, modal triggers, and animation logic across the **GoWindSun India Private Limited** web platform.

---

## 1. Key Interactive Systems Directory

### 1.1 Navigation Dropdowns & Mobile Drawer
* **Desktop Dropdowns:** Hovering over nav items (`About`, `Services`, `Projects for Acquisition`) triggers `onMouseEnter` / `onMouseLeave` handlers setting `activeDropdown`. Features multi-tier flyout sub-menus for Wind and Solar project sub-categories.
* **Mobile Drawer Toggle:** Clicking the hamburger button (`Menu` / `X` icon) toggles `mobileMenuOpen` state, launching [`MobileMenu.tsx`](file:///c:/Website/GoWindSun-Website/src/components/layout/MobileMenu.tsx).

### 1.2 Interactive India Map Zoom & Reset (`IndiaSvgMap.tsx`)
* **State Selection:** Clicking an active state path updates `selectedState` (e.g. `"IN-GJ"`), causing the SVG viewBox to dynamically transition to that state's centered coordinates.
* **Reset Mechanics:**
  * **ESC Key Listener:** Listens to `e.key === "Escape"`, triggering `onSelectState("")`.
  * **Global Click Listener:** Listens to `window.addEventListener("click")`, resetting map view when clicking outside active paths.

### 1.3 Live News Engine & Round-Robin Balancing (`newsService.ts`)
* **Parallel Pipelines:** Launches 14 concurrent `fetch` requests targeting country queries via RSS2JSON gateway.
* **Geographic Interleaving:** Applies `roundRobinInterleave()` to output exactly 1 article per country per round, ensuring balanced global coverage.
* **Caching:** Saves results in browser `localStorage` under `gowindsun_14country_balanced_news_cache_v7` with a 30-minute expiration.

### 1.4 Dynamic FX Currency Engine (`currencyService.ts`)
* **Asynchronous Rate Retrieval:** Fetches live ECB exchange rates via Frankfurter API on application mount.
* **Original Currency Preservation:** Parses text strings via regex (`enhancePriceWithLiveINR`) and appends supplementary INR amounts in Indian numbering (Crores/Lakhs) without removing original reported currencies.

### 1.5 C&I Open Access Tariff Savings Calculator (`OpenAccessCalculator.tsx`)
* **Calculation Formula:** Computes annual industrial power cost savings by comparing state DISCOM grid tariffs against Open Access levelized tariffs after factoring in CSS (Cross-Subsidy Surcharge) and wheeling charges.

### 1.6 Land Area & Capacity Estimator (`LandCapacityCalculator.tsx`)
* **Calculation Model:** Computes required land footprint based on MW capacity inputs:
  * Solar: `MW * 3.75 Acres`
  * Wind: `WTG Count * 1.75 Acres`
  * Hybrid: `MW * 4.80 Acres`

### 1.7 Contact Form Validation State Machine (`ContactForm.tsx`)
* Uses `react-hook-form` and `zod` schema to validate inputs on submit. Displays inline error messages, manages loading state, and transitions to an "Enquiry Received" success view.

### 1.8 Under Development Modal (`UnderDevelopmentModal.tsx`)
* Displays an onboarding status dialog whenever a user clicks links designated as currently under technical onboarding.
