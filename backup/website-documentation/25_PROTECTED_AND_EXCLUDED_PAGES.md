Document: Protected and Excluded Pages
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Protected & Excluded Pages Directory

This document establishes the official registry of **Protected Pages**. These pages contain verified corporate content, specific hero layouts, specialized project option structures, or legal/tender notices, and **MUST NOT be modified or redesigned during global website batch updates** unless explicitly requested by the project owner.

---

## 1. Official Registry of Protected Pages

The following 10 pages are designated as **PROTECTED PAGES**:

| # | Page Name | Route Path | Component File Path | Protection Rationale |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Home / Main Page** | `/` | [`src/app/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/page.tsx) | Core corporate landing page, 4-slide hero slideshow, verified stats & bento grid |
| 2 | **About GoWindSun** | `/about` | [`src/app/about/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/about/page.tsx) | Corporate identity, vision, mission, stakeholder value, integrated capabilities |
| 3 | **Greenfield Wind** | `/projects-for-acquisition/wind/greenfield` | [`src/app/projects-for-acquisition/wind/greenfield/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/wind/greenfield/page.tsx) | Verified ~3,000 MW greenfield wind pipeline dossier across 6 Indian states |
| 4 | **Shovel Ready Wind** | `/projects-for-acquisition/wind/shovel-ready` | [`src/app/projects-for-acquisition/wind/shovel-ready/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/wind/shovel-ready/page.tsx) | Permitted shovel-ready wind project options & STU/CTU grid details |
| 5 | **Operational Wind** | `/projects-for-acquisition/wind/operational` | [`src/app/projects-for-acquisition/wind/operational/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/wind/operational/page.tsx) | Operational wind farm portfolios with individual turbine ratings > 1.5 MW |
| 6 | **Greenfield Solar** | `/projects-for-acquisition/solar/greenfield` | [`src/app/projects-for-acquisition/solar/greenfield/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/solar/greenfield/page.tsx) | Greenfield solar project options & land package dossiers |
| 7 | **Shovel Ready Solar** | `/projects-for-acquisition/solar/shovel-ready` | [`src/app/projects-for-acquisition/solar/shovel-ready/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/solar/shovel-ready/page.tsx) | Permitted shovel-ready solar park options |
| 8 | **Operational Solar** | `/projects-for-acquisition/solar/operational` | [`src/app/projects-for-acquisition/solar/operational/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/projects-for-acquisition/solar/operational/page.tsx) | Operational solar power plant portfolios & yield history |
| 9 | **Tenders & Procurement** | `/tenders` | [`src/app/tenders/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/tenders/page.tsx) | 4 official commercial notices (`GWS-TND-2026-001` to `004`), supplier RFPs |
| 10 | **Careers Programme** | `/careers` | [`src/app/careers/page.tsx`](file:///c:/Website/GoWindSun-Website/src/app/careers/page.tsx) | Young & Mid-Career Professional programme, 8 specialization domains |

---

## 2. Mandatory Rules for Developers

1. **Check First:** Prior to initiating any batch CSS, theme, global hero, or component refactoring, the developer **MUST inspect this document**.
2. **Exclusion Enforcement:** If a task asks to "update all heroes" or "change background styling", **Protected Pages MUST be excluded** from the batch edit unless the prompt explicitly mentions the protected page by name.
3. **Content Preservation:** Text content, project metrics, MW capacities, state dossiers, and tender IDs on protected pages MUST NEVER be altered, dummy-filled, or removed.
4. **Approval Required:** Any structural or layout modification to a protected page requires explicit confirmation from GoWindSun executive management.
