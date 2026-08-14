# GoWindSun Website Change Log

All notable changes, updates, architectural decisions, and documentation releases for the **GoWindSun India Private Limited** website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to Semantic Versioning (`MAJOR.MINOR.PATCH`).

---

## [1.0.0] - 15 August 2026

### Documentation System Initial Release
- **Created Independent Documentation System:** Established `/website-documentation` containing 28 comprehensive, developer-grade markdown documents detailing every route, component, asset, styling token, calculation engine, API integration, and recovery procedure.
- **Global Rules & Principles:** Documented `00_GLOBAL_WEBSITE_RULES.md` including core design, development, data integrity, and living documentation directives.
- **Master Inventory:** Created `01_WEBSITE_INVENTORY.md` listing all 21+ routes, 40+ components, 25+ public media assets, static datasets, Excel databases, external APIs, and semver dependencies.
- **Technical Architecture:** Documented `02_WEBSITE_ARCHITECTURE.md` specifying Vite 6.1, React 19, TypeScript 5.7, Tailwind CSS 3.4, and client-side `HashRouter` routing architecture.

### Design System & Visual Language
- **Design System:** Documented `03_DESIGN_SYSTEM.md`, `04_COLOR_PALETTE.md`, and `05_TYPOGRAPHY.md` recording exact HEX/RGB color tokens, typography scales, dual-surface theme paradigms (`bg-white` vs `bg-[#06111F]`), glassmorphism utilities, and elevation shadows.
- **Navbar & Flag Badge:** Documented `06_NAVBAR.md` detailing top 3.5px tricolor accent stripe, fixed header scroll listeners, dropdown flyouts, and standalone SVG 24-spoke animated Indian flag badge (`<IndiaFlag />`).
- **Footer System:** Documented `07_FOOTER.md` recording 5-column layout, quick navigation, services directory, direct Pune contact details, legal links, and smooth scroll-to-top button.
- **Global Hero System:** Documented `09_HERO_SYSTEM.md` specifying standardized hero layout (`StandardHero.tsx`), background image filters (`brightness-[0.38] contrast-105`), gradient overlays, and typography hierarchy.

### Features, Portals & Calculators
- **Projects for Acquisition:** Documented `11_PROJECT_ACQUISITION.md` and `12_INTERACTIVE_INDIA_MAP.md` covering Wind, Solar, and Hybrid project clusters, SVG state zoom viewBoxes (`STATE_ZOOM_VIEWBOXES`), state dossiers, and ESC/Click-outside reset mechanics.
- **Knowledge Hub & Market Intelligence:** Documented `13_KNOWLEDGE_HUB.md`, `14_MARKET_INTELLIGENCE.md`, and `15_NEWS_SOURCES.md` specifying the mandatory 14-country target list, 14 concurrent RSS pipelines, round-robin interleave algorithm (`roundRobinInterleave`), C&I Open Access calculator, Land capacity estimator, and DPR whitepapers.
- **Currency & FX Engine:** Documented `16_CURRENCY_AND_FX.md` enforcing the mandatory rule: **NEVER REMOVE ORIGINAL CURRENCY**. Documented Frankfurter/ECB FX rate APIs, Indian numbering formatter (Crores/Lakhs), and regex price parser.
- **Tenders & Careers:** Documented `17_TENDERS.md` and `18_CAREERS.md` covering active procurement notices (`GWS-TND-2026-001` to `004`), supplier RFPs, and Young/Mid-Career professional application domains.
- **Contact & Forms:** Documented `19_FORMS_AND_CONTACT.md` detailing Zod schema validation, async state transitions, success states, and NDA data protection guidelines.

### Protected Pages & System Recovery
- **Protected Pages Registry:** Created `25_PROTECTED_AND_EXCLUDED_PAGES.md` listing the 10 protected pages (Home, About, Greenfield/Shovel Ready/Operational Wind & Solar, Tenders, Careers) exempt from unapproved batch modifications.
- **Backup & Recovery Manual:** Created `26_BACKUP_AND_RESTORE.md` providing step-by-step restoration instructions from scratch and defining physical backup requirements.
- **Pre-Launch Checklist:** Created `27_PRE_LAUNCH_CHECKLIST.md` providing a master verification checklist prior to live production deployment.
