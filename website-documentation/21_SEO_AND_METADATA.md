Document: SEO and Metadata
Version: 1.1.0
Status: Active
Last Updated: 18 August 2026

# GoWindSun Website — SEO & Metadata Specification

This document details the search engine optimization (SEO) configurations, meta descriptions, Open Graph social tags, canonical URLs, semantic HTML hierarchy, and indexing guidelines for the **GoWindSun India Private Limited** web platform.

---

## 1. Global Meta Configuration (`site.ts` & `index.html`)

All primary meta tags are managed via [`src/config/site.ts`](file:///c:/Website/GoWindSun-Website/src/config/site.ts), [`index.html`](file:///c:/Website/GoWindSun-Website/index.html), and Next.js App Router metadata structures:

* **Official Site Title:** `GoWindSun India Private Limited`
* **Short Brand Name:** `GoWindSun`
* **Canonical Base URL:** `https://gowindsun.com` (`metadataBase: new URL("https://gowindsun.com")`)
* **Homepage Canonical:** `https://gowindsun.com/` (explicit trailing slash)
* **Meta Description:**
  > "Indian renewable energy engineering company delivering integrated clean energy infrastructure across utility-scale solar, wind, hybrid, and battery storage ecosystems."
* **Open Graph Image (`og:image`):** `https://gowindsun.com/logo.png`
* **Favicon & Apple Touch Icon:** Defined in [`index.html`](file:///c:/Website/GoWindSun-Website/index.html).

---

## 2. Semantic HTML & Heading Structure

To maximize accessibility and search engine indexing efficiency, every page enforces strict semantic HTML5 rules:

1. **Single `<h1>` Tag Rule:** Every page contains **exactly one `<h1>` tag** located within the main Hero section.
2. **Heading Hierarchy:**
   * `<h1>`: Main Page Title / Value Proposition.
   * `<h2>`: Major Section Headings (e.g., "Engineering Excellence", "Specialization Domains").
   * `<h3>`: Sub-sections, Card Titles, and Tender Notice Names.
   * `<h4>` / `<h5>`: Category Kickers and Metadata Labels.
3. **Semantic Landmarks:** Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` tags throughout.

---

## 3. Robots, Sitemap & Indexing

* **Indexing Directive:** All public corporate pages (`/`, `/about`, `/services`, `/projects-for-acquisition`, `/tenders`, `/careers`, `/knowledge-hub`, `/contact`, `/privacy`, `/terms`) are configured for full search engine indexing (`index, follow`).
* **Sitemap Generation:** Static XML sitemap [`public/sitemap.xml`](file:///c:/Website/GoWindSun-Website/public/sitemap.xml) mapping all active routes using `https://gowindsun.com/`.
* **Robots.txt:** [`public/robots.txt`](file:///c:/Website/GoWindSun-Website/public/robots.txt) references `Sitemap: https://gowindsun.com/sitemap.xml` with zero `noindex` block directives.
* **Canonical URL Rules:** Every route enforces a self-referencing canonical URL header pointing to the official non-www HTTPS domain `https://gowindsun.com/` (homepage) or `https://gowindsun.com/<path>` (subpages). Static HTML entry point `index.html` contains explicit `<link rel="canonical" href="https://gowindsun.com/">`.

