Document: Pages and Routes
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Complete Pages & Routes Specification

This document provides a comprehensive route map detailing every page, route path, functional purpose, hero system specification, core sections, CTAs, data dependencies, and active status for the **GoWindSun India Private Limited** web platform.

---

## 1. Master Route Dossier

### 1.1 Home / Main Corporate Landing Page
* **Route:** `/`
* **File Path:** [`src/app/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/page.tsx)
* **Purpose:** Primary corporate landing page introducing GoWindSun's integrated clean energy capabilities across wind, solar, hybrid, BESS, and IPP platform.
* **Hero System:** Custom 4-slide automatic image carousel (`Hero.tsx` & `HeroSlideshow.tsx`) using background visuals `hero_slideshow_1.png` to `4.png`.
* **Main Sections:** Hero Slideshow, Macro Impact Strip, Stats Bar (`~3,000 MW` pipeline), Bento Grid Platform Block, Interactive Energy Simulator, Core Services, Industries Served, Engineering Excellence, Contact RFP Section.
* **CTA:** "Submit Project RFP" / "Explore Projects for Acquisition".
* **Data Dependencies:** [`siteConfig`](file:///c:/Website/GoWindSun-Website/src/config/site.ts).
* **Status:** Active (Protected Page).

### 1.2 About GoWindSun
* **Route:** `/about`
* **File Path:** [`src/app/about/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/about/page.tsx)
* **Purpose:** Corporate philosophy, leadership vision, engineering expertise, and stakeholder value proposition.
* **Hero System:** Dark Standard Hero with title "Indian Renewable Energy Engineering & IPP Platform".
* **Main Sections:** About Hero, Who We Are, Vision & Mission, Our Expertise, Integrated Capabilities, Stakeholder Value, Tech Section, Why GoWindSun, About CTA.
* **Status:** Active (Protected Page).

### 1.3 Our Journey
* **Route:** `/about/our-journey`
* **File Path:** [`src/app/about/our-journey/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/about/our-journey/page.tsx)
* **Purpose:** Chronological growth milestones, key project achievements, and company development history.
* **Hero System:** Standard Hero with background image.
* **Main Sections:** Milestones timeline, strategic growth phases.
* **Status:** Active.

### 1.4 Contact Us
* **Route:** `/contact`
* **File Path:** [`src/app/contact/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/contact/page.tsx)
* **Purpose:** Interactive corporate consultation request and project inquiry submission portal.
* **Hero System:** Standard Hero with background [`contact_hero.png`](file:///c:/Website/GoWindSun-Website/public/images/contact_hero.png).
* **Main Sections:** Contact Form (`ContactForm.tsx`), Office Locations (Pune, MH), Direct Phone/Email credentials.
* **Special Functionality:** Zod schema form validation, simulated async API submission, success state feedback ("Enquiry Received").
* **Status:** Active.

### 1.5 IPP Platform
* **Route:** `/ipp-platform`
* **File Path:** [`src/app/ipp-platform/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/ipp-platform/page.tsx)
* **Purpose:** Independent Power Producer (IPP) asset ownership model showcase across utility solar and wind portfolios.
* **Hero System:** Standard Hero with background [`ipp-platform.png`](file:///c:/Website/GoWindSun-Website/public/images/ipp-platform.png).
* **Main Sections:** IPP Business Model, Asset Ownership Structure, Risk Management, Yield Optimization.
* **Status:** Active.

### 1.6 Tenders & Procurement Notices
* **Route:** `/tenders`
* **File Path:** [`src/app/tenders/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/tenders/page.tsx)
* **Purpose:** Official commercial procurement notices, tender scope announcements, and supplier invitations.
* **Hero System:** Standard Dark Hero (`StandardHero.tsx`) with background [`tenders_procurement_hero.png`](file:///c:/Website/GoWindSun-Website/public/images/tenders_procurement_hero.png).
* **Main Sections:** Category Filter Cards (Wind, Solar, Hybrid, Storage), Filter & Search Bar, Active Tenders Cards (4 active notices: Operational Wind/Solar, Shovel-Ready Sites, C&I PPAs, HV-EHV Equipment Suppliers), Mailto Proposal Submissions.
* **Status:** Active (Protected Page).

### 1.7 Careers Programme
* **Route:** `/careers`
* **File Path:** [`src/app/careers/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/careers/page.tsx)
* **Purpose:** Call for Applications for Young & Mid-Career Professionals in Wind, Solar, Power Systems & Regulatory Affairs.
* **Hero System:** Standard Dark Hero (`StandardHero.tsx`).
* **Main Sections:** Call for Applications Banner, 8 Specialization Domains (Wind, Solar, Power Systems, RE Markets, Regulatory, Storage, Project Finance, Tech), Candidate Profiles ("Who Can Apply"), Submission Desk (`director@gowindsun.com`).
* **Status:** Active (Protected Page).

### 1.8 Knowledge Hub
* **Route:** `/knowledge-hub`
* **File Path:** [`src/app/knowledge-hub/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/knowledge-hub/page.tsx)
* **Purpose:** Global 14-country renewable energy market intelligence feed, tariff benchmarks, interactive calculators, and DPR whitepapers.
* **Hero System:** Knowledge Hub Hero Header with live market status ticker.
* **Main Sections:** Live 14-Country Balanced News Feed (`ImportantNewsSection.tsx`), Category Filters, Open Access Calculator, Land Capacity Calculator, Whitepaper Downloads, Advisory CTA.
* **Data Dependencies:** [`newsService.ts`](file:///c:/Website/GoWindSun-Website/src/services/newsService.ts), [`currencyService.ts`](file:///c:/Website/GoWindSun-Website/src/services/currencyService.ts), [`newsData.ts`](file:///c:/Website/GoWindSun-Website/src/data/newsData.ts).
* **Status:** Active.

---

## 2. Projects for Acquisition Cluster

| Route Path | Hero Image | Protected Status | State Dossier Panels Included |
| :--- | :--- | :--- | :--- |
| `/projects-for-acquisition` | [`PROJECTS FOR ACQUISITION.png`](file:///c:/Website/GoWindSun-Website/public/PROJECTS%20FOR%20ACQUISITION.png) | Active | Master Overview Cards |
| `/projects-for-acquisition/wind` | [`WIND PROJECTS FOR ACQUISITION.png`](file:///c:/Website/GoWindSun-Website/public/WIND%20PROJECTS%20FOR%20ACQUISITION.png) | Active | India Wind SVG Map & State Selector |
| `/projects-for-acquisition/wind/greenfield` | [`Land Acquisition.png`](file:///c:/Website/GoWindSun-Website/public/Land%20Acquisition.png) | **Protected** | Gujarat, Rajasthan, Karnataka, Tamil Nadu, Maharashtra, Andhra Pradesh |
| `/projects-for-acquisition/wind/shovel-ready` | [`WIND PROJECTS FOR ACQUISITION.png`](file:///c:/Website/GoWindSun-Website/public/WIND%20PROJECTS%20FOR%20ACQUISITION.png) | **Protected** | Shovel-Ready Wind Sites |
| `/projects-for-acquisition/wind/operational` | [`WIND PROJECTS FOR ACQUISITION.png`](file:///c:/Website/GoWindSun-Website/public/WIND%20PROJECTS%20FOR%20ACQUISITION.png) | **Protected** | Operational Wind Farms (>1.5 MW WTGs) |
| `/projects-for-acquisition/solar` | [`SOLAR PROJECTS FOR ACQUISITION..png`](file:///c:/Website/GoWindSun-Website/public/SOLAR%20PROJECTS%20FOR%20ACQUISITION..png) | Active | India Solar SVG Map & State Selector |
| `/projects-for-acquisition/solar/greenfield` | [`SOLAR PROJECTS FOR ACQUISITION..png`](file:///c:/Website/GoWindSun-Website/public/SOLAR%20PROJECTS%20FOR%20ACQUISITION..png) | **Protected** | Greenfield Solar Pipelines |
| `/projects-for-acquisition/solar/shovel-ready` | [`SOLAR PROJECTS FOR ACQUISITION..png`](file:///c:/Website/GoWindSun-Website/public/SOLAR%20PROJECTS%20FOR%20ACQUISITION..png) | **Protected** | Shovel-Ready Solar Parks |
| `/projects-for-acquisition/solar/operational` | [`SOLAR PROJECTS FOR ACQUISITION..png`](file:///c:/Website/GoWindSun-Website/public/SOLAR%20PROJECTS%20FOR%20ACQUISITION..png) | **Protected** | Operational Solar Power Plants |
| `/projects-for-acquisition/hybrid` | [`WIND-SOLAR HYBRID PROJECTS.png`](file:///c:/Website/GoWindSun-Website/public/WIND-SOLAR%20HYBRID%20PROJECTS.png) | Active | Co-located Wind-Solar Hybrid Sites |

---

## 3. Services Cluster

* `/services`: Core Services Overview Gateway (`ServicesGateway.tsx`, `Services4CategoriesOverview.tsx`).
* `/services/project-development-epc`: Turnkey EPC, Land Acquisition, EHV Substations (`project development.png`).
* `/services/technical-consulting-advisory`: Independent Technical Advisory, Bankable DPR Feasibility (`technical advisory.png`).
* `/services/asset-management-operations`: Asset O&M, SCADA Monitoring, Preventive Maintenance (`asset management.png`).
* `/services/strategic-advisory-energy-market`: Regulatory Advisory, PPA Structuring, Tariff Optimization (`strategic_advisory_hero.png`).
* `/services/renewable-energy-trading`: Open Access Power Trading, C&I Offtake Agreements (`RENEWABLE ENERGY TRADING.png`).
