Document: Global Website Rules
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Global Development & Maintenance Rules

> **The GoWindSun website documentation is a living source of truth. It must evolve together with the website. No significant website change is considered complete until the corresponding documentation has been updated and the change has been recorded in CHANGELOG.md.**

> **The actual source code, assets, data, configuration, and backups remain the authoritative technical artifacts. The documentation describes and protects the knowledge required to understand, maintain, and restore them.**

---

## 1. Core Mandate & Design Philosophy

The GoWindSun India Private Limited website is designed to reflect an elite, corporate, developer-grade renewable energy engineering and IPP platform aesthetic. All ongoing maintenance, updates, and feature additions must strictly adhere to the following core directives:

### 1.1 Visual & Aesthetic Rules
* **Preserve Corporate Renewable Energy Branding:** Maintain the balance of deep corporate navy (`#06111F`, `#0B1E36`), crisp clean white surfaces, emerald green (`#059669`), electric sky blue (`#0186D5`), and solar amber (`#F97316`, `#EA580C`).
* **Preserve Typography Standards:** Primary typography is strictly bound to Inter / Geist Sans (`--font-geist-sans`). Technical data, tickers, codes, and badges must use JetBrains Mono (`--font-geist-mono`). Do NOT introduce unapproved web fonts.
* **Preserve Visual Hierarchy:** Maintain clear typography sizing, pill-shaped action buttons (`rounded-full`), `24px` / `32px` card corner radii (`rounded-3xl`), subtle glassmorphism (`.glass-panel`), and structured grid containers (`max-w-[1280px]`).

---

## 2. Developer & Architecture Rules

* **Do Not Modify Protected Pages:** Pages designated as protected (including Home, About, Greenfield/Shovel Ready/Operational Wind & Solar, Tenders, and Careers) must NEVER be altered during global batch refactoring or hero style changes without explicit authorization. Refer to [`25_PROTECTED_AND_EXCLUDED_PAGES.md`](file:///c:/Website/GoWindSun-Website/website-documentation/25_PROTECTED_AND_EXCLUDED_PAGES.md).
* **Avoid Unnecessary Component Rewrites:** Existing, fully functional React components (such as `Navbar.tsx`, `Footer.tsx`, `IndiaSvgMap.tsx`, `currencyService.ts`, `newsService.ts`) must not be refactored or rewritten unless fixing a verified bug or adding an explicitly requested feature.
* **Preserve Routing Architecture:** The application runs on Vite SPA with React Router `HashRouter` to maintain 100% compatibility with static GitHub Pages hosting. Navigation routes use Next.js-style file structure inside `src/app/`. Do NOT alter route paths unexpectedly.
* **No Unnecessary External Dependencies:** Do NOT install heavy third-party packages without evaluating existing utilities (`clsx`, `tailwind-merge`, `framer-motion`, `lucide-react`, `zod`).

---

## 3. Data Integrity & Content Rules

* **Zero Data Fabrication:** Never invent or hardcode dummy prices, fake FX rates, false project capacities, fabricated news headlines, or bogus tender statistics. All datasets must come from verified sources or official company datasets.
* **Preserve Source Attribution:** Every news article, market intelligence metric, and tender benchmark must cite its original source (e.g., SECI, BNetzA, BNEF, CRE, MITECO, Wood Mackenzie) with working URL links.
* **Original Currency Rule:** When reporting international equipment prices or tariffs (USD, EUR, RMB, DKK, SEK, TRY, AED, SAR, OMR, AUD), **NEVER remove the original reported currency**. The INR value is strictly supplementary and displayed alongside in parentheses, e.g., `RMB 6.44 Million (~₹7.70 Crore)`.

---

## 4. Documentation & Maintenance Workflow

Whenever a modification is made to the website, developers must execute the following 5-step maintenance workflow:

```text
Website Modification Requested
      ↓
Identify Affected Systems & Documentation Files
      ↓
Implement & Verify Code Changes (Build & TypeScript Check)
      ↓
Update Relevant Documentation File(s) in /website-documentation
      ↓
Update CHANGELOG.md with Version Increment & Description
```

1. **Check Exclusions First:** Consult `25_PROTECTED_AND_EXCLUDED_PAGES.md` before making any layout or styling adjustment.
2. **Update Specific Documentation Only:** Modify only the documents corresponding to the modified features. Do NOT touch unrelated documentation files.
3. **Log in CHANGELOG.md:** Record every significant release, bug fix, or data update in `CHANGELOG.md` with the date and version number.
4. **Update Version Headers:** If a document is updated, increment its version number and update `Last Updated: DD MMM YYYY`.
5. **Verify Against Code:** The codebase remains the technical source of truth. Ensure documentation strictly reflects current code reality.
