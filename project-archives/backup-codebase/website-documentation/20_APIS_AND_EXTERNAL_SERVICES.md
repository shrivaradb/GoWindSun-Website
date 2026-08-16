Document: APIs and External Services
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — APIs & External Services Specification

This document details every external API integration, data retrieval service, RSS conversion gateway, authentication method, fallback strategy, and failure behavior across the **GoWindSun India Private Limited** platform.

---

## 1. Security Safeguard Directive

> **SECURITY MANDATE: NEVER PLACE API SECRETS, PRIVATE KEYS, PASSWORDS, TOKENS, OR DATABASE CREDENTIALS INSIDE DOCUMENTATION OR COMMITTED CODE. ONLY DOCUMENT ENVIRONMENT VARIABLE NAMES AND PUBLIC APIS.**

---

## 2. Integration Directory

### 2.1 Frankfurter Foreign Exchange (ECB) Reference API
* **Service:** Frankfurter API (European Central Bank Reference Rates)
* **Purpose:** Fetches daily official central bank reference exchange rates for USD, EUR, GBP, CNY, DKK, SEK, TRY, AUD to compute precise INR equivalents.
* **Endpoint:** `https://api.frankfurter.dev/v1/latest?base=USD`
* **Authentication Method:** None (Public Open Access API)
* **Environment Variable:** `N/A` (Public endpoint)
* **Data Retrieved:** JSON object containing base currency `"USD"` and key-value rates object `{ INR: 83.95, EUR: 0.91, GBP: 0.78, CNY: 7.15, ... }`.
* **Refresh Frequency:** Fetched asynchronously on window initialization (`initializeFXRates()`).
* **Fallback Strategy:** Open ER-API fallback -> Static `FALLBACK_FX_RATES` dictionary in [`currencyService.ts`](file:///c:/Website/GoWindSun-Website/src/services/currencyService.ts).
* **Failure Behavior:** Gracefully catches network errors without throwing unhandled exceptions; UI seamlessly uses cached or fallback reference rates.

### 2.2 Open ER-API (Secondary FX Fallback)
* **Service:** Open Exchange Rates API
* **Purpose:** Secondary backup provider for global exchange rates if Frankfurter API is unreachable.
* **Endpoint:** `https://open.er-api.com/v6/latest/USD`
* **Authentication Method:** None (Public tier)
* **Environment Variable:** `N/A`
* **Data Retrieved:** Secondary USD exchange rate matrix.
* **Fallback Strategy:** Static `FALLBACK_FX_RATES`.

### 2.3 RSS2JSON Gateway Gateway Service
* **Service:** RSS2JSON Public API
* **Purpose:** Converts XML/RSS feeds from Google News search queries into structured JSON objects consumable by client-side React components.
* **Endpoint:** `https://api.rss2json.com/v1/api.json?rss_url=[ENCODED_RSS_URL]`
* **Authentication Method:** None (Public GET endpoint)
* **Data Retrieved:** JSON payload `{ status: "ok", items: [ { title, description, pubDate, link, author }, ... ] }`.
* **Refresh Frequency:** Cached in browser `localStorage` with a 30-minute Time-To-Live (`CACHE_TTL_MS = 30 * 60 * 1000`).
* **Fallback Strategy:** 28-item curated balanced dataset (`IMPORTANT_NEWS_ARTICLES` in [`newsData.ts`](file:///c:/Website/GoWindSun-Website/src/data/newsData.ts)).

### 2.4 Google News 14-Country RSS Search Feeds
* **Service:** Google News RSS Search Service
* **Purpose:** Provides live news headlines for 14 target countries (India, China, Germany, Spain, UK, France, Sweden, Türkiye, Denmark, USA, Saudi Arabia, UAE, Oman, Australia).
* **Endpoints:** 14 country-specific URL queries defined in `COUNTRY_QUERIES`.
* **Authentication Method:** None.
* **Failure Behavior:** Failed country queries return empty arrays without breaking other country pipelines (`Promise.all` error boundary).
