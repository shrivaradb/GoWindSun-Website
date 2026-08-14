Document: Knowledge Hub Specification
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Knowledge Hub Portal Specification

This document details the architectural components, interactive calculators, whitepaper repositories, live news feed integration, and market intelligence features of the **Knowledge Hub** portal ([`/knowledge-hub`](file:///c:/Website/GoWindSun-Website/src/app/knowledge-hub/page.tsx)).

---

## 1. Portal Architecture & Components

The Knowledge Hub portal is organized into 7 modular sections:

```text
/knowledge-hub (page.tsx)
├── KnowledgeHero.tsx            # Header & Live Ticker
├── ImportantNewsSection.tsx     # 14-Country Balanced Live Market Feed
├── ArticlesGrid.tsx             # Filterable Article Repository & Grid
├── ArticleModal.tsx             # Full Article Reader Dialog
├── OpenAccessCalculator.tsx     # C&I Industrial Open Access Tariff Calculator
├── LandCapacityCalculator.tsx   # Land Area vs MW Capacity Estimator
├── WhitepaperDownloads.tsx      # Bankable DPR & Technical Whitepaper Cards
└── KnowledgeAdvisoryCTA.tsx     # Advisory Consultation Banner
```

---

## 2. Interactive Engineering Calculators

### 2.1 C&I Open Access Savings Calculator (`OpenAccessCalculator.tsx`)
* **Purpose:** Enables high-consumption industrial and commercial energy consumers in India (MH, GJ, KA, TN, RJ, MP) to compute electricity cost savings from wheeling solar/wind open access power.
* **Input Parameters:** State selection, monthly DISCOM grid tariff (₹/kWh), monthly electricity consumption (kWh), contract demand (kVA), cross-subsidy surcharge (CSS) and wheeling charges.
* **Output Metrics:** Estimated annual savings (in ₹ Lakhs/Crores), effective levelized tariff, and CO2 offset reduction (tons).

### 2.2 Land Capacity Estimator (`LandCapacityCalculator.tsx`)
* **Purpose:** Calculates total land area required for utility-scale clean energy installations.
* **Calculation Benchmarks:**
  * **Solar PV:** ~3.5 to 4.0 Acres per MW (DC capacity).
  * **Onshore Wind:** ~1.5 to 2.0 Acres per WTG foundation + setback clearance corridor.
  * **Solar-Wind Hybrid:** ~4.5 to 5.5 Acres per MW (co-located optimized footprint).

---

## 3. Technical Whitepapers & DPR Repository

Managed via [`WhitepaperDownloads.tsx`](file:///c:/Website/GoWindSun-Website/src/components/knowledge/WhitepaperDownloads.tsx) and [`knowledgeData.ts`](file:///c:/Website/GoWindSun-Website/src/data/knowledgeData.ts):

* **Whitepaper 1:** *India 500 GW Non-Fossil Grid Integration DPR & Transmission Planning Brief*
* **Whitepaper 2:** *N-Type TOPCon vs HJT Solar Module Technical Efficiency & Degradation Audit*
* **Whitepaper 3:** *Onshore Wind Repowering Assessment: 1.5MW to 3.3MW+ Turbine Upgrades in Gujarat & Tamil Nadu*
* **Whitepaper 4:** *Utility Battery Energy Storage (BESS) Tariff Arbitration & Frequency Regulation Financial Model*
