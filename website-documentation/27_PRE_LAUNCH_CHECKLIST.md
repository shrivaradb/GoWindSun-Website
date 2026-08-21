Document: Pre-Launch Checklist
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Pre-Launch Master Verification Checklist

This document provides a detailed pre-launch checklist that must be executed and verified before pushing the **GoWindSun India Private Limited** web platform to production live deployment.

---

## 1. Code Quality & Build Verification

- [ ] **TypeScript Compilation:** Running `npx tsc --noEmit` passes with zero errors.
- [ ] **Production Build Success:** Running `npm run build` succeeds cleanly and generates the `dist/` directory containing `index.html` and `404.html`.
- [ ] **Console Cleanliness:** Browser developer tools console shows no critical uncaught JavaScript exceptions, unhandled promise rejections, or missing resource 404s.
- [ ] **Dependency Audit:** All dependencies in `package.json` match required versions.

---

## 2. Pages & Route Integrity Verification

- [ ] **Home Page (`/`):** Hero slideshow cycles smoothly, stats counters function, bento grid renders, simulator calculates correctly.
- [ ] **About Page (`/about`):** Vision, mission, integrated capabilities, and stakeholder value sections display correctly.
- [ ] **Our Journey (`/about/our-journey`):** Milestones timeline renders without layout distortion.
- [ ] **Contact Page (`/contact`):** Form validation schema works, loading state triggers, "Enquiry Received" success view functions.
- [ ] **IPP Platform (`/ipp-platform`):** Business model & asset ownership sections display cleanly.
- [ ] **Tenders Page (`/tenders`):** All 4 active notices (`GWS-TND-2026-001` to `004`) render, search and category filters function, mailto links pre-populate.
- [ ] **Careers Page (`/careers`):** 8 specialization domains render, candidate profiles display, CV submission email link works.
- [ ] **Knowledge Hub (`/knowledge-hub`):** 14-country balanced live news feed loads, Open Access calculator calculates savings, Land Capacity calculator functions, DPR whitepaper cards display.
- [ ] **Acquisition Pages (`/projects-for-acquisition/...`):** Interactive India SVG map loads, state zoom works, state dossiers render for GJ, RJ, KA, TN, MH, AP.
- [ ] **Services Pages (`/services/...`):** All 5 service category sub-pages load cleanly with designated hero images.
- [ ] **Legal Pages (`/privacy`, `/terms`):** Privacy policy and Terms of service text render.
- [ ] **404 Page:** Navigating to an invalid URL correctly loads the custom 404 page with return-to-home button.

---

## 3. Assets & Media Verification

- [ ] **Logo Emblem:** [`/logo.png`](file:///c:/Website/GoWindSun-Website/public/logo.png) renders at crisp resolution in header and footer.
- [ ] **Logo Text:** [`/images/logo_text.png`](file:///c:/Website/GoWindSun-Website/public/images/logo_text.png) renders legibly alongside logo emblem.
- [ ] **Animated Indian Flag:** `<IndiaFlag />` SVG badge displays 3 tricolor stripes and 24-spoke navy Ashoka Chakra with hover scale animation.
- [ ] **Hero Visuals:** All hero cover images (`hero_slideshow_1.png` to `4.png`, `contact_hero.png`, `tenders_procurement_hero.png`, etc.) load promptly with dark contrast overlays.
- [ ] **Excel Sources:** Master Excel files exist in project root.

---

## 4. Interactive Functionality & FX Engine Verification

- [ ] **Dynamic FX Engine:** `currencyService.ts` fetches live ECB rates via Frankfurter API or utilizes fallback reference rates.
- [ ] **Original Currency Rule:** International price benchmarks display original currency alongside calculated INR amount (e.g., `RMB 6.44 Million (~₹7.70 Crore)`).
- [ ] **Interactive India Map:** Clicking state paths zooms canvas to exact state viewBox; pressing `ESC` or clicking outside resets map view to full India boundary.
- [ ] **Round-Robin News Interleaving:** Knowledge Hub news feed interleaves 1 article per country across 14 target countries.
- [ ] **Under Development Modal:** Clicking un-onboarded project links launches the popup modal.

---

## 5. Responsive & Mobile Design Verification

- [ ] **Desktop (`≥1024px`):** Multi-column navigation bar displays inline links, 3/4-column card grids align.
- [ ] **Mobile (`<1024px`):** Hamburger button displays, tapping launches `MobileMenu.tsx` overlay drawer, cards stack vertically in 1 column, buttons expand to full width.
- [ ] **Touch Targets:** Interactive buttons, links, and map paths meet touch guidelines (minimum `44px x 44px`).

---

## 6. SEO & Security Verification

- [ ] **Metadata:** Meta title `GoWindSun India Private Limited` and meta description set. Single `<h1>` tag present per page.
- [ ] **Canonical Links:** Canonical link tags point to `https://www.gowindsun.com`.
- [ ] **Server 301 Redirect:** `public/.htaccess` exists in build (`dist/.htaccess`) and executes 301 permanent redirect from `gowindsun.com` (non-www) to `https://www.gowindsun.com/`.
- [ ] **cPanel Dotfiles Enabled:** cPanel File Manager "Show Hidden Files" enabled so `.htaccess` remains active.
- [ ] **Secrets Safeguard:** No API tokens, passwords, database credentials, or private keys exist in committed code or documentation.
- [ ] **Backup Package Verified:** Physical project backup package created in `/backup`.

