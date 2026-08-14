Document: Footer Specification
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Footer Specification

This document details the layout structure, link hierarchy, corporate contact credentials, legal compliance links, and scroll-to-top mechanics for the primary footer component in [`src/components/layout/Footer.tsx`](file:///c:/Website/GoWindSun-Website/src/components/layout/Footer.tsx).

---

## 1. Structure & Technical Properties

* **Theme & Background:** Deep dark navy background (`bg-[#06111F]`) with light slate text (`text-slate-300`) and top border (`border-t border-slate-800/80`).
* **Padding:** `pt-20 pb-12` (`80px` top padding, `48px` bottom padding).
* **Grid Layout:** 5-column responsive flex grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10`).

---

## 2. Five-Column Column Layout Breakdown

### Column 1: Corporate Profile & Logo Branding (Spans 2 Columns Wide)
* **Branding:** Contains GoWindSun logo emblem ([`/logo.png`](file:///c:/Website/GoWindSun-Website/public/logo.png), `h-[72px]`) and logo text image ([`/images/logo_text.png`](file:///c:/Website/GoWindSun-Website/public/images/logo_text.png), `h-[42px]`).
* **Summary Text:**
  > "GoWindSun India Private Limited is a renewable energy engineering, consulting, and project development company, as well as an Independent Power Producer (IPP), delivering integrated solutions across wind, solar, hybrid power projects, Battery Energy Storage Systems (BESS), and energy advisory services."

### Column 2: Quick Navigation Links
* **Header Label:** `QUICK NAVIGATION` in Emerald Green (`text-[#059669] font-mono text-xs font-bold uppercase`).
* **Links:**
  1. Home (`/`)
  2. About GoWindSun (`/about`)
  3. Our Journey (`/about/our-journey`)
  4. IPP Platform (`/ipp-platform`)
  5. Knowledge Hub (`/knowledge-hub`)
  6. Tenders & Procurement (`/tenders`)
  7. Careers (`/careers`)
  8. Contact Us (`/contact`)

### Column 3: Core Services Directory
* **Header Label:** `OUR SERVICES` in Electric Sky Blue (`text-[#0186D5] font-mono text-xs font-bold uppercase`).
* **Links:**
  1. Services Overview (`/services`)
  2. Project Development & EPC (`/services/project-development-epc`)
  3. Technical Consulting & Advisory (`/services/technical-consulting-advisory`)
  4. Asset Management & Operations (`/services/asset-management-operations`)
  5. Strategic Advisory & Energy Markets (`/services/strategic-advisory-energy-market`)

### Column 4: Direct Corporate Contact Details
* **Header Label:** `DIRECT CONTACT` in Solar Gold (`text-[#F99D1C] font-mono text-xs font-bold uppercase`).
* **Contact Data:**
  * **Headquarters:** `MapPin` icon -> GoWindSun India Pvt. Ltd. Pune, Maharashtra – India
  * **Primary Email:** `Mail` icon -> `director@gowindsun.com`
  * **Secondary Email:** `Mail` icon -> `gowindnsun@gmail.com`
  * **Phone Number:** `Phone` icon -> `+91 90110 71 864` (`tel:+919011071864`)

---

## 3. Universal Bottom Bar & Scroll-to-Top

Positioned below a divider line (`border-b border-slate-800/80 pb-16`):

1. **Copyright Notice:** `© 2026 GoWindSun India Private Limited. All rights reserved.`
2. **Legal & Compliance Links:**
   * Tenders (`/tenders`)
   * Careers (`/careers`)
   * Privacy Policy (`/privacy`)
   * Terms of Service (`/terms`)
   * RFP Submission (`/contact`)
3. **Scroll-to-Top Action Button:**
   * Interactive rounded button (`p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white`).
   * Triggers smooth window scroll to top:
     ```typescript
     window.scrollTo({ top: 0, behavior: "smooth" });
     ```
