Document: News Sources & Intelligence Engine
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — News Sources & Intelligence Engine Specification

This document details the underlying retrieval pipelines, event-location validation rules, RSS feed query definitions, category classification algorithms, round-robin interleaving logic, and source attribution standards for the live news intelligence engine in [`src/services/newsService.ts`](file:///c:/Website/GoWindSun-Website/src/services/newsService.ts).

---

## 1. Engine Architecture & 14-Country Retrieval Pipelines

The intelligence engine executes 14 independent country search pipelines concurrently using JavaScript `Promise.all`:

```text
14 Individual Country Searches (Promise.all via RSS2JSON)
      ↓
Separate Country Buckets (countryBuckets Map)
      ↓
Event Location Validation (validateEventLocation)
      ↓
Category & Metric Extraction (classifyPrimaryCategory, extractMetricData)
      ↓
Strict Round-Robin Geographic Balancing (roundRobinInterleave)
      ↓
30-Minute LocalStorage Cache (gowindsun_14country_balanced_news_cache_v7)
```

---

## 2. Verified Source Query Catalog

Every source query targets official tender authorities, government energy ministries, market research organizations, or industry publication feeds:

| Country | Source Authorities & Keywords Target | RSS Feed URL |
| :--- | :--- | :--- |
| **India 🇮🇳** | SECI, MNRE, Mercom India, Wind/Solar Tenders | `...q=(India+OR+SECI+OR+MNRE)+AND+(%22wind+tender%22+OR+%22solar+pv%22)` |
| **China 🇨🇳** | BloombergNEF, China Energy News, TOPCon, Offshore | `...q=(China+OR+Chinese)+AND+(%22offshore+wind%22+OR+%22module+price%22)` |
| **Germany 🇩🇪** | Bundesnetzagentur (BNetzA), OffshoreWind.biz, BWE | `...q=(Germany+OR+German+OR+BNetzA)+AND+(%22offshore+wind%22+OR+%22wind+auction%22)` |
| **Spain 🇪🇸** | MITECO, PEXAPARK, PV Tech Europe, Corporate PPAs | `...q=(Spain+OR+Spanish)+AND+(%22solar+pv%22+OR+%22solar+PPA%22)` |
| **United Kingdom 🇬🇧** | UK DESNZ, Crown Estate, Offshore Wind Journal | `...q=(UK+OR+%22United+Kingdom%22+OR+DESNZ)+AND+(%22offshore+wind%22+OR+%22CfD+tender%22)` |
| **France 🇫🇷** | CRE France, Ministère Transition Énergétique, PPE2 | `...q=(France+OR+French+OR+CRE)+AND+(%22solar+auction%22+OR+%22offshore+wind%22)` |
| **Sweden 🇸🇪** | Svensk Vindenergi, Svensk Solenergi, SE3/SE4 Bids | `...q=(Sweden+OR+Swedish)+AND+(%22wind+power%22+OR+%22onshore+wind%22)` |
| **Türkiye 🇹🇷** | Ministry of Energy, EPDK, YEKA RES & GES Tenders | `...q=(Turkey+OR+Turkiye+OR+YEKA)+AND+(%22wind+tender%22+OR+%22solar+tender%22)` |
| **Denmark 🇩🇰** | Energistyrelsen (Danish Energy Agency), Wind Denmark | `...q=(Denmark+OR+Danish+OR+Energistyrelsen)+AND+(%22offshore+wind%22)` |
| **USA 🇺🇸** | Wood Mackenzie, ERCOT, MISO, TOPCon Benchmarks | `...q=(USA+OR+US+OR+MISO+OR+ERCOT)+AND+(%22wind+turbine%22+OR+%22solar+pv%22)` |
| **Saudi Arabia 🇸🇦** | SPPC, Ministry of Energy, ACWA Power, NREAP | `...q=(%22Saudi+Arabia%22+OR+SPPC+OR+ACWA)+AND+(%22solar+auction%22)` |
| **UAE 🇦🇪** | EWEC, DEWA, Dubai Electricity & Water Authority | `...q=(UAE+OR+EWEC+OR+Dubai)+AND+(%22solar+tender%22+OR+%22solar+pv%22)` |
| **Oman 🇴🇲** | Hydrom Oman, Nama Power, OPWP, Duqm Corridor | `...q=(Oman+OR+Hydrom)+AND+(%22wind+tender%22+OR+%22solar+pv%22)` |
| **Australia 🇦🇺** | AEMO Services, DCCEEW, RenewEconomy, LTESA | `...q=(Australia+OR+AEMO)+AND+(%22solar+auction%22+OR+%22wind+tender%22)` |

---

## 3. Strict Round-Robin Geographic Balancing Algorithm

To prevent any single country (such as India or USA) from dominating the feed, the engine executes a round-robin interleave function (`roundRobinInterleave`):

```typescript
function roundRobinInterleave(countryBuckets: Map<CountryCode, NewsArticleItem[]>): NewsArticleItem[] {
  const result: NewsArticleItem[] = [];
  let itemsAdded = true;
  let roundIndex = 0;

  while (itemsAdded) {
    itemsAdded = false;
    for (const c of OFFICIAL_COUNTRIES) {
      const bucket = countryBuckets.get(c.code);
      if (bucket && bucket[roundIndex]) {
        result.push(bucket[roundIndex]);
        itemsAdded = true;
      }
    }
    roundIndex++;
  }
  return result;
}
```

* **Effect:** The feed selects 1 item from India, 1 from China, 1 from Germany, 1 from Spain, etc., cycling through all 14 countries in order.

---

## 4. Fallback Curated Dataset

If offline or if live API calls fail, the system falls back to a 28-item curated balanced dataset in [`newsData.ts`](file:///c:/Website/GoWindSun-Website/src/data/newsData.ts) containing exactly 2 high-impact items per target country.
