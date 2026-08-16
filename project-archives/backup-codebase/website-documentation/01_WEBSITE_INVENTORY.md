Document: Website Inventory
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Master Inventory

This document serves as the master technical inventory for all pages, components, assets, static/dynamic datasets, external services, APIs, and dependencies within the **GoWindSun India Private Limited** web platform.

---

## 1. Complete Route Inventory

| Route | Page File Path | Purpose / Description | Status |
| :--- | :--- | :--- | :--- |
| `/` | [`src/app/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/page.tsx) | Main Corporate Landing Page with hero slideshow, stats, bento grid, simulator & RFP section | Active (Protected) |
| `/about` | [`src/app/about/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/about/page.tsx) | Corporate Overview, vision, expertise, integrated engineering capabilities | Active (Protected) |
| `/about/our-journey` | [`src/app/about/our-journey/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/about/our-journey/page.tsx) | Company milestones, clean energy history, growth roadmap | Active |
| `/contact` | [`src/app/contact/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/contact/page.tsx) | Corporate contact page, office details, interactive RFP request form | Active |
| `/ipp-platform` | [`src/app/ipp-platform/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/ipp-platform/page.tsx) | Independent Power Producer (IPP) asset ownership platform showcase | Active |
| `/tenders` | [`src/app/tenders/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/tenders/page.tsx) | Renewable energy procurement notices, tender scope, supplier invitations | Active (Protected) |
| `/careers` | [`src/app/careers/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/careers/page.tsx) | Young & Mid-Career Professional application programme details & CV submission | Active (Protected) |
| `/knowledge-hub` | [`src/app/knowledge-hub/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/knowledge-hub/page.tsx) | Global 14-country market intelligence feed, calculators, DPR whitepapers | Active |
| `/privacy` | [`src/app/privacy/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/privacy/page.tsx) | Corporate Privacy Policy and data protection compliance document | Active |
| `/terms` | [`src/app/terms/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/terms/page.tsx) | Terms of Service & legal framework governing platform usage | Active |
| `/projects-for-acquisition` | [`src/app/projects-for-acquisition/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/page.tsx) | Master portal for Wind, Solar, and Hybrid project acquisition options | Active |
| `/projects-for-acquisition/wind` | [`src/app/projects-for-acquisition/wind/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/wind/page.tsx) | Wind Energy acquisition overview with interactive India Wind Map | Active |
| `/projects-for-acquisition/wind/greenfield` | [`src/app/projects-for-acquisition/wind/greenfield/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/wind/greenfield/page.tsx) | ~3,000 MW Greenfield Wind sites across GJ, RJ, KA, TN, MH, AP | Active (Protected) |
| `/projects-for-acquisition/wind/shovel-ready` | [`src/app/projects-for-acquisition/wind/shovel-ready/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/wind/shovel-ready/page.tsx) | Shovel-ready permitted wind project portfolios | Active (Protected) |
| `/projects-for-acquisition/wind/operational` | [`src/app/projects-for-acquisition/wind/operational/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/wind/operational/page.tsx) | Operational wind asset portfolios (>1.5 MW WTGs) | Active (Protected) |
| `/projects-for-acquisition/solar` | [`src/app/projects-for-acquisition/solar/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/solar/page.tsx) | Solar Energy acquisition overview with interactive India Solar Map | Active |
| `/projects-for-acquisition/solar/greenfield` | [`src/app/projects-for-acquisition/solar/greenfield/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/solar/greenfield/page.tsx) | Greenfield solar project pipeline options | Active (Protected) |
| `/projects-for-acquisition/solar/shovel-ready` | [`src/app/projects-for-acquisition/solar/shovel-ready/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/solar/shovel-ready/page.tsx) | Shovel-ready permitted solar project options | Active (Protected) |
| `/projects-for-acquisition/solar/operational` | [`src/app/projects-for-acquisition/solar/operational/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/solar/operational/page.tsx) | Operational solar power plant portfolios | Active (Protected) |
| `/projects-for-acquisition/hybrid` | [`src/app/projects-for-acquisition/hybrid/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/hybrid/page.tsx) | Co-located Solar-Wind Hybrid project acquisition options | Active |
| `/services` | [`src/app/services/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/services/page.tsx) | Comprehensive core services directory and category gateway | Active |
| `/services/project-development-epc` | [`src/app/services/project-development-epc/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/services/project-development-epc/page.tsx) | Turnkey EPC, land acquisition, EHV substations & civil engineering | Active |
| `/services/technical-consulting-advisory` | [`src/app/services/technical-consulting-advisory/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/services/technical-consulting-advisory/page.tsx) | Technical advisory, owner's engineer, AEP DPR yield assessments | Active |
| `/services/asset-management-operations` | [`src/app/services/asset-management-operations/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/services/asset-management-operations/page.tsx) | Long-term O&M, SCADA monitoring & preventive maintenance | Active |
| `/services/strategic-advisory-energy-market` | [`src/app/services/strategic-advisory-energy-market/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/services/strategic-advisory-energy-market/page.tsx) | Power market intelligence, regulatory advisory & tariff optimization | Active |
| `/services/renewable-energy-trading` | [`src/app/services/renewable-energy-trading/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/services/renewable-energy-trading/page.tsx) | Open access power trading, C&I bilateral PPAs & REC trading | Active |
| `*` | [`src/app/not-found.tsx`](file:///c:/Website/GoWindSun-Website/src/app/not-found.tsx) | 404 Custom Error page with return-to-home navigation | Active |

---

## 2. Reusable Component Inventory

### 2.1 Layout Components (`src/components/layout/`)
* [`Navbar.tsx`](file:///c:/Website/GoWindSun-Website/src/components/layout/Navbar.tsx): Primary sticky navigation header with India flag badge, dropdown menus & scroll detection.
* [`Footer.tsx`](file:///c:/Website/GoWindSun-Website/src/components/layout/Footer.tsx): 5-column universal dark footer with contact details, quick links & back-to-top button.
* [`MobileMenu.tsx`](file:///c:/Website/GoWindSun-Website/src/components/layout/MobileMenu.tsx): Responsive drawer menu for screens `<1024px`.
* [`SmoothScroll.tsx`](file:///c:/Website/GoWindSun-Website/src/components/layout/SmoothScroll.tsx): Lenis smooth scrolling wrapper component.

### 2.2 UI System Components (`src/components/ui/`)
* [`Button.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/Button.tsx): Standardized button component with primary, secondary, outline & link variants.
* [`Container.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/Container.tsx): Standard `max-w-[1280px]` content container wrapper.
* [`CountUp.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/CountUp.tsx): Numerical animation counter for key stats.
* [`IndiaFlag.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/IndiaFlag.tsx): Standalone SVG 24-spoke animated Indian tricolor flag badge.
* [`Section.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/Section.tsx): Wrapper component for section spacing.
* [`SectionHeading.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/SectionHeading.tsx): Standardized section title & subtitle header.
* [`StandardHero.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/StandardHero.tsx): Global standardized hero system component (`bg-[#06111F]`).
* [`UnderDevelopmentModal.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/UnderDevelopmentModal.tsx): Interactive popup modal for under-onboarding features.

### 2.3 Acquisition & Map Components (`src/components/projects/`)
* [`IndiaSvgMap.tsx`](file:///c:/Website/GoWindSun-Website/src/components/projects/IndiaSvgMap.tsx): Interactive SVG map powered by `@svg-maps/india` with state zoom viewboxes.
* [`GreenfieldWindStatePanel.tsx`](file:///c:/Website/GoWindSun-Website/src/components/projects/GreenfieldWindStatePanel.tsx): State dossier panel for Greenfield Wind projects.
* [`OperationalWindStatePanel.tsx`](file:///c:/Website/GoWindSun-Website/src/components/projects/OperationalWindStatePanel.tsx): State dossier panel for Operational Wind projects.
* [`ShovelReadyWindStatePanel.tsx`](file:///c:/Website/GoWindSun-Website/src/components/projects/ShovelReadyWindStatePanel.tsx): State dossier panel for Shovel-Ready Wind projects.
* [`SolarGreenfieldStatePanel.tsx`](file:///c:/Website/GoWindSun-Website/src/components/projects/SolarGreenfieldStatePanel.tsx): State dossier panel for Greenfield Solar projects.
* [`SolarShovelReadyStatePanel.tsx`](file:///c:/Website/GoWindSun-Website/src/components/projects/SolarShovelReadyStatePanel.tsx): State dossier panel for Shovel-Ready Solar projects.
* [`SolarOperationalStatePanel.tsx`](file:///c:/Website/GoWindSun-Website/src/components/projects/SolarOperationalStatePanel.tsx): State dossier panel for Operational Solar projects.
* [`HybridStatePanel.tsx`](file:///c:/Website/GoWindSun-Website/src/components/projects/HybridStatePanel.tsx): State dossier panel for Solar-Wind Hybrid projects.
* [`ProjectStatePanel.tsx`](file:///c:/Website/GoWindSun-Website/src/components/projects/ProjectStatePanel.tsx): Universal project state panel fallback.

### 2.4 Knowledge & Market Intelligence Components (`src/components/knowledge/`)
* [`ImportantNewsSection.tsx`](file:///c:/Website/GoWindSun-Website/src/components/knowledge/ImportantNewsSection.tsx): Live 14-country market intelligence feed & round-robin display cards.
* [`ArticlesGrid.tsx`](file:///c:/Website/GoWindSun-Website/src/components/knowledge/ArticlesGrid.tsx): Filterable articles grid component.
* [`ArticleModal.tsx`](file:///c:/Website/GoWindSun-Website/src/components/knowledge/ArticleModal.tsx): Article reader modal dialog.
* [`OpenAccessCalculator.tsx`](file:///c:/Website/GoWindSun-Website/src/components/knowledge/OpenAccessCalculator.tsx): Interactive C&I open access tariff savings calculator.
* [`LandCapacityCalculator.tsx`](file:///c:/Website/GoWindSun-Website/src/components/knowledge/LandCapacityCalculator.tsx): Land area vs MW capacity estimation tool.
* [`WhitepaperDownloads.tsx`](file:///c:/Website/GoWindSun-Website/src/components/knowledge/WhitepaperDownloads.tsx): Technical whitepaper download cards.
* [`KnowledgeHero.tsx`](file:///c:/Website/GoWindSun-Website/src/components/knowledge/KnowledgeHero.tsx): Knowledge Hub header component.
* [`KnowledgeAdvisoryCTA.tsx`](file:///c:/Website/GoWindSun-Website/src/components/knowledge/KnowledgeAdvisoryCTA.tsx): Advisory CTA banner.

### 2.5 Home Page Components (`src/components/home/`)
* `Hero.tsx`, `HeroSlideshow.tsx`, `Stats.tsx`, `PlatformBentoBlock.tsx`, `InteractiveEnergySimulator.tsx`, `Services.tsx`, `ProjectsPortfolio.tsx`, `IndustriesServed.tsx`, `EngineeringExcellence.tsx`, `IndiaPowerhouseSection.tsx`, `IntegratedSolutionsInfographic.tsx`, `MacroImpactStrip.tsx`, `TransitionDriversSection.tsx`, `ContactRfpSection.tsx`.

---

## 3. Data Files & Excel Sources Inventory

* [`src/data/newsData.ts`](file:///c:/Website/GoWindSun-Website/src/data/newsData.ts): Official 14-country definition, categories, and 28-item curated dataset fallback.
* [`src/data/marketIntelligenceData.ts`](file:///c:/Website/GoWindSun-Website/src/data/marketIntelligenceData.ts): Tariff benchmarks and equipment indices data.
* [`src/data/knowledgeData.ts`](file:///c:/Website/GoWindSun-Website/src/data/knowledgeData.ts): Whitepaper items and industry guides.
* [`src/data/acquisitionProjects.ts`](file:///c:/Website/GoWindSun-Website/src/data/acquisitionProjects.ts): Master acquisition project index exporter.
* [`src/data/acquisition/...`](file:///c:/Website/GoWindSun-Website/src/data/acquisition/): Specialized acquisition data files (`windGreenfieldData.ts`, `solarGreenfieldData.ts`, `hybridData.ts`, etc.).
* `1. Potential Wind and Solar Project Investment Options copy 2.xlsx`: Primary Excel database containing raw project pipeline metrics.
* `check wind solar hybrid (1).xlsx`: Secondary Excel project verification matrix.

---

## 4. External Services & APIs Inventory

1. **Frankfurter FX Reference API:** `https://api.frankfurter.dev/v1/latest?base=USD` (ECB reference rates).
2. **Open ER-API:** `https://open.er-api.com/v6/latest/USD` (Secondary FX fallback).
3. **RSS2JSON Gateway:** `https://api.rss2json.com/v1/api.json?rss_url=` (RSS feed conversion API).
4. **Google News RSS Feed Engine:** 14 country-specific RSS queries for live market intelligence retrieval.
