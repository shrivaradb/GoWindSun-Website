Document: SEO and Metadata
Version: 1.4.0
Status: Active
Last Updated: 22 August 2026

# GoWindSun Website — SEO & Metadata Specification

This document details the search engine optimization (SEO) configurations, meta descriptions, Open Graph social tags, canonical URLs, server-level 301 redirects, semantic HTML hierarchy, and indexing guidelines for the **GoWindSun India Private Limited** web platform.

---

## 1. Global Meta Configuration (`site.ts` & `index.html`)

All primary meta tags are managed via [`src/config/site.ts`](file:///c:/Website/GoWindSun-Website/src/config/site.ts), [`index.html`](file:///c:/Website/GoWindSun-Website/index.html), and Next.js App Router metadata structures:

* **Official Site Title:** `GoWindSun India Private Limited`
* **Short Brand Name:** `GoWindSun`
* **Canonical Base URL:** `https://www.gowindsun.com` (`metadataBase: new URL("https://www.gowindsun.com")`)
* **Homepage Canonical:** `https://www.gowindsun.com/` (explicit trailing slash)
* **Meta Description:**
  > "Indian renewable energy engineering company delivering integrated clean energy infrastructure across utility-scale solar, wind, hybrid, and battery storage ecosystems."
* **Open Graph Image (`og:image`):** `https://www.gowindsun.com/logo.png`
* **Favicon & Apple Touch Icon:** Defined in [`index.html`](file:///c:/Website/GoWindSun-Website/index.html).

---

## 2. Server-Level 301 Redirect System & Hostname Canonicalization (`.htaccess`)

To enforce `https://www.gowindsun.com/` as the single canonical source of truth, a server-level HTTP 301 Permanent Redirect is enforced at the Apache / cPanel web server level via [`public/.htaccess`](file:///c:/Website/GoWindSun-Website/public/.htaccess).

### 2.1 Apache `.htaccess` Configuration Rules
```apache
# Enforce HTTPS and 301 Permanent Redirect from non-www to www
<IfModule mod_rewrite.c>
  RewriteEngine On

  # 1. Return 410 Gone for legacy WordPress endpoints and RSS feeds
  RewriteCond %{REQUEST_URI} ^/(wp-login\.php|wp-admin|wp-content|wp-includes|xmlrpc\.php|feed|wp-json) [NC,OR]
  RewriteCond %{REQUEST_URI} \.php$ [NC]
  RewriteRule ^ - [R=410,L]

  # 2. Redirect non-www (gowindsun.com) to https://www.gowindsun.com/
  RewriteCond %{HTTP_HOST} ^gowindsun\.com$ [NC]
  RewriteRule ^(.*)$ https://www.gowindsun.com/$1 [L,R=301]

  # 3. Redirect HTTP to HTTPS for www.gowindsun.com
  RewriteCond %{HTTPS} !=on
  RewriteCond %{HTTP:X-Forwarded-Proto} !https
  RewriteCond %{HTTP:X-Forwarded-SSL} !=on
  RewriteRule ^(.*)$ https://www.gowindsun.com/$1 [L,R=301]

  # 4. SPA Routing Fallback for HTML5 / Client-Side Routing
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
```

### 2.2 cPanel Deployment Protocol
1. Running `npm run build` compiles `public/.htaccess` directly into `dist/.htaccess`.
2. Uploading `dist/` contents into cPanel `public_html/` ensures Apache processes the 301 redirect before any client-side JavaScript evaluates.
3. Enabling **"Show Hidden Files (dotfiles)"** in cPanel File Manager ensures `.htaccess` remains active.

### 2.3 Live HTTP Verification Command
```bash
curl.exe -ILs https://gowindsun.com/
```
**Expected Live Response:**
- Status: `HTTP/1.1 301 Moved Permanently`
- Location: `https://www.gowindsun.com/`

---

## 3. Semantic HTML & Heading Structure

To maximize accessibility and search engine indexing efficiency, every page enforces strict semantic HTML5 rules:

1. **Single `<h1>` Tag Rule:** Every page contains **exactly one `<h1>` tag** located within the main Hero section.
2. **Heading Hierarchy:**
   * `<h1>`: Main Page Title / Value Proposition.
   * `<h2>`: Major Section Headings (e.g., "Engineering Excellence", "Specialization Domains").
   * `<h3>`: Sub-sections, Card Titles, and Tender Notice Names.
   * `<h4>` / `<h5>`: Category Kickers and Metadata Labels.
3. **Semantic Landmarks:** Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` tags throughout.

---

## 4. Robots, Sitemap & Indexing

* **Indexing Directive:** All public corporate pages (`/`, `/about`, `/services`, `/projects-for-acquisition`, `/tenders`, `/careers`, `/knowledge-hub`, `/contact`, `/privacy`, `/terms`) are configured for full search engine indexing (`index, follow`).
* **Sitemap Generation:** Static XML sitemap [`public/sitemap.xml`](file:///c:/Website/GoWindSun-Website/public/sitemap.xml) mapping all active routes using `https://www.gowindsun.com/`.
* **Robots.txt:** [`public/robots.txt`](file:///c:/Website/GoWindSun-Website/public/robots.txt) references `Sitemap: https://www.gowindsun.com/sitemap.xml` with zero `noindex` block directives.
* **Canonical URL Rules:** Every route enforces a self-referencing canonical URL header pointing to the official WWW HTTPS domain `https://www.gowindsun.com/` (homepage) or `https://www.gowindsun.com/<path>` (subpages). Static HTML entry point `index.html` contains explicit `<link rel="canonical" href="https://www.gowindsun.com/">`.

---

## 5. Favicon System & Google Search Result Snippet Icons

To guarantee proper favicon display beside links in Google Search results and browser tabs, the site adheres to [Google Search Central Favicon Guidelines](https://developers.google.com/search/docs/appearance/favicon-in-search):

### 5.1 Asset Specifications & File Matrix

| Asset Filename | Dimensions | Format | Purpose / Target Device |
| :--- | :--- | :--- | :--- |
| `logo.png` | `1024x1024` | RGBA PNG | Master high-res transparent emblem (Open Graph `og:image` & navbar header) |
| `favicon.ico` | Multi (16/32/48) | ICO | Root browser fallback & legacy search engine crawlers (`/favicon.ico`) |
| `favicon.png` | `48x48` | PNG | Primary Google Search result snippet icon (meets 48px square requirement) |
| `favicon-16x16.png` | `16x16` | PNG | Standard desktop browser tab favicon |
| `favicon-32x32.png` | `32x32` | PNG | High-DPI / Retina desktop browser tab favicon |
| `apple-touch-icon.png` | `180x180` | PNG | Apple iOS home screen bookmark icon |
| `android-chrome-192x192.png` | `192x192` | PNG | Mobile Chrome / PWA web app icon (Medium density) |
| `android-chrome-512x512.png` | `512x512` | PNG | Mobile Chrome / PWA web app icon (High density) |
| `site.webmanifest` | JSON | Manifest | Web application manifest (`theme_color: #059669`) |

### 5.2 HTML Head Declarations (`index.html`)

```html
<!-- Primary Favicons & Icons for Browsers and Google Search -->
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#059669" />
```

### 5.3 Googlebot-Favicons Crawling & CDN Cache Behavior
1. **Root-Relative Paths:** All icon references use root-relative `/` URLs (e.g. `/favicon.ico`, `/favicon.png`). Relative paths like `./logo.png` are prohibited because they resolve to non-existent URLs (404) when Google crawls subpages like `/services`.
2. **Asynchronous Favicon Indexing:** Google uses a dedicated, low-frequency background crawler (`Googlebot-Favicons`). Google caches favicons per domain variant (`gowindsun.com` vs `www.gowindsun.com`).
3. **CDN Cache Verification:** Live API verification via `https://www.google.com/s2/favicons?domain=gowindsun.com` confirms Google's CDN holds the updated emblem asset.



