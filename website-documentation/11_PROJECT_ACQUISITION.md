Document: Project Acquisition System
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Projects for Acquisition Specification

This document details the architectural structure, state dossier panels, interactive map integration, project card schema, inquiry functionality, and raw Excel data sources for the **Projects for Acquisition** portal.

---

## 1. Portal Structure & Sub-Routes

The Acquisition platform is organized into three major technology sectors:

```text
/projects-for-acquisition/
├── wind/                        # Wind Projects Cluster
│   ├── greenfield/              # ~3,000 MW Greenfield Wind Sites (Protected)
│   ├── shovel-ready/            # Permitted Shovel-Ready Wind Projects (Protected)
│   └── operational/             # Operational Wind Assets >1.5 MW WTGs (Protected)
├── solar/                       # Solar Projects Cluster
│   ├── greenfield/              # Greenfield Solar Pipelines (Protected)
│   ├── shovel-ready/            # Permitted Shovel-Ready Solar Parks (Protected)
│   └── operational/             # Operational Solar Power Plants (Protected)
└── hybrid/                      # Solar-Wind Hybrid Cluster
    └── page.tsx                 # Co-located Wind-Solar Hybrid Sites
```

---

## 2. Interactive Map & State Selector Integration

Each technology cluster page embeds [`IndiaSvgMap.tsx`](file:///c:/Website/GoWindSun-Website/src/components/projects/IndiaSvgMap.tsx) configured with technology-specific color themes:

* **Wind Category Map:** Sky Blue Theme (`activeFill: "#D0E8F8"`, `activeStroke: "#0186D5"`, `selectedFill: "#0A4EA2"`).
* **Solar Category Map:** Warm Solar Orange Theme (`activeFill: "#FFEDD5"`, `activeStroke: "#F97316"`, `selectedFill: "#C2410C"`).
* **Hybrid Category Map:** Mint Emerald Theme (`activeFill: "#D1FAE5"`, `activeStroke: "#059669"`, `selectedFill: "#047857"`).

When a user clicks any active state on the India map (e.g., Gujarat `IN-GJ`, Rajasthan `IN-RJ`, Karnataka `IN-KA`, Tamil Nadu `IN-TN`, Maharashtra `IN-MH`, Andhra Pradesh `IN-AP`), the SVG canvas dynamically zooms into that state's exact bounding viewBox and renders the corresponding state dossier panel below.

---

## 3. Data Structure & Project Card Schema

Project data is maintained in [`src/data/acquisition/`](file:///c:/Website/GoWindSun-Website/src/data/acquisition/) (`windGreenfieldData.ts`, `solarGreenfieldData.ts`, `hybridData.ts`, etc.) derived from the master Excel source `1. Potential Wind and Solar Project Investment Options copy 2.xlsx`.

### 3.1 Data Schema Attributes
```typescript
export interface AcquisitionProject {
  id: string;
  projectName: string;
  stateCode: string;          // e.g. "IN-GJ", "IN-RJ", "IN-KA"
  stateName: string;          // e.g. "Gujarat", "Rajasthan"
  district: string;           // e.g. "Kutch", "Jaisalmer", "Devbhumi Dwarka"
  technology: "WIND" | "SOLAR" | "HYBRID";
  stage: "GREENFIELD" | "SHOVEL_READY" | "OPERATIONAL";
  capacityMW: number;         // Total MW capacity
  wtgRating?: string;         // e.g. "3.3 MW per turbine"
  landStatus: string;         // e.g. "Secured Private/Govt Land Package"
  gridEvacuation: string;     // e.g. "220kV / 400kV STU/CTU Substation"
  ppaStatus: string;          // e.g. "25-Year Merchant / Corporate PPA"
  tariffBenchmark?: string;   // e.g. "₹3.24 / kWh"
  status: "Available" | "Under Evaluation";
}
```

---

## 4. Inquiry & Acquisition Access Control

* Clicking **"Request Project Dossier"** or **"Inquire Acquisition Terms"** on any project card opens the [`UnderDevelopmentModal.tsx`](file:///c:/Website/GoWindSun-Website/src/components/ui/UnderDevelopmentModal.tsx) component or redirects to the corporate contact portal (`/contact`).
* Access to non-disclosure agreements (NDAs) and full bankable Detailed Project Reports (DPRs) is restricted to qualified institutional investors and IPPs.
