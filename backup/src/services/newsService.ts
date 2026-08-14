/**
 * Live Automatic News Intelligence Engine for GoWindSun Knowledge Hub
 * UNDERLYING RETRIEVAL ARCHITECTURE — 14 INDEPENDENT COUNTRY PIPELINES
 * 
 * Pipeline:
 * 14 Individual Country Searches (Promise.all)
 *   ↓
 * Separate Country Buckets (newsByCountry)
 *   ↓
 * Country Event-Location Validation
 *   ↓
 * Category Classification (Wind, Solar, Tenders, Pricing)
 *   ↓
 * Strict Deduplication & Quality Filter
 *   ↓
 * Geographic Balancing (Round-Robin Display Selection)
 */

import {
  NewsArticleItem,
  CountryCode,
  PrimaryCategory,
  KeyMetricData,
  AuctionScopeData,
  OFFICIAL_COUNTRIES,
  IMPORTANT_NEWS_ARTICLES,
} from "@/data/newsData";

// Define 14 Independent Country Query Sets
const COUNTRY_QUERIES: { country: CountryCode; flag: string; name: string; query: string }[] = [
  {
    country: "India 🇮🇳",
    flag: "🇮🇳",
    name: "INDIA",
    query: "https://news.google.com/rss/search?q=(India+OR+SECI+OR+MNRE)+AND+(%22wind+tender%22+OR+%22solar+pv%22+OR+tariff+OR+%22wind+turbine%22+OR+%22solar+auction%22)&hl=en-IN&gl=IN&ceid=IN:en",
  },
  {
    country: "China 🇨🇳",
    flag: "🇨🇳",
    name: "CHINA",
    query: "https://news.google.com/rss/search?q=(China+OR+Chinese)+AND+(%22offshore+wind%22+OR+%22wind+turbine+price%22+OR+%22module+price%22+OR+TOPCon+OR+%22solar+pv%22)&hl=en-US&gl=US&ceid=US:en",
  },
  {
    country: "Germany 🇩🇪",
    flag: "🇩🇪",
    name: "GERMANY",
    query: "https://news.google.com/rss/search?q=(Germany+OR+German+OR+BNetzA)+AND+(%22offshore+wind%22+OR+%22wind+auction%22+OR+%22solar+tender%22+OR+%22wind+capex%22)&hl=en-US&gl=US&ceid=US:en",
  },
  {
    country: "Spain 🇪🇸",
    flag: "🇪🇸",
    name: "SPAIN",
    query: "https://news.google.com/rss/search?q=(Spain+OR+Spanish)+AND+(%22solar+pv%22+OR+%22solar+PPA%22+OR+%22wind+farm%22+OR+tender+OR+%22renewable+auction%22)&hl=en-US&gl=US&ceid=US:en",
  },
  {
    country: "United Kingdom 🇬🇧",
    flag: "🇬🇧",
    name: "UNITED KINGDOM",
    query: "https://news.google.com/rss/search?q=(UK+OR+%22United+Kingdom%22+OR+DESNZ)+AND+(%22offshore+wind%22+OR+%22CfD+tender%22+OR+%22strike+price%22+OR+floating)&hl=en-GB&gl=GB&ceid=GB:en",
  },
  {
    country: "France 🇫🇷",
    flag: "🇫🇷",
    name: "FRANCE",
    query: "https://news.google.com/rss/search?q=(France+OR+French+OR+CRE)+AND+(%22solar+auction%22+OR+%22offshore+wind%22+OR+tender+OR+PPE2)&hl=en-US&gl=US&ceid=US:en",
  },
  {
    country: "Sweden 🇸🇪",
    flag: "🇸🇪",
    name: "SWEDEN",
    query: "https://news.google.com/rss/search?q=(Sweden+OR+Swedish)+AND+(%22wind+power%22+OR+%22onshore+wind%22+OR+%22wind+capex%22+OR+%22solar+PPA%22)&hl=en-US&gl=US&ceid=US:en",
  },
  {
    country: "Türkiye 🇹🇷",
    flag: "🇹🇷",
    name: "TÜRKIYE",
    query: "https://news.google.com/rss/search?q=(Turkey+OR+Turkiye+OR+YEKA)+AND+(%22wind+tender%22+OR+%22solar+tender%22+OR+YEKA+OR+GES)&hl=en-US&gl=US&ceid=US:en",
  },
  {
    country: "Denmark 🇩🇰",
    flag: "🇩🇰",
    name: "DENMARK",
    query: "https://news.google.com/rss/search?q=(Denmark+OR+Danish+OR+Energistyrelsen)+AND+(%22offshore+wind%22+OR+%22wind+tender%22+OR+%22turbine+supply%22)&hl=en-US&gl=US&ceid=US:en",
  },
  {
    country: "USA 🇺🇸",
    flag: "🇺🇸",
    name: "USA",
    query: "https://news.google.com/rss/search?q=(USA+OR+US+OR+MISO+OR+ERCOT)+AND+(%22wind+turbine%22+OR+%22solar+pv%22+OR+%22wind+capex%22+OR+%22solar+PPA%22)&hl=en-US&gl=US&ceid=US:en",
  },
  {
    country: "Saudi Arabia 🇸🇦",
    flag: "🇸🇦",
    name: "SAUDI ARABIA",
    query: "https://news.google.com/rss/search?q=(%22Saudi+Arabia%22+OR+SPPC+OR+ACWA)+AND+(%22solar+auction%22+OR+%22solar+pv%22+OR+tariff+OR+NREAP)&hl=en-US&gl=US&ceid=US:en",
  },
  {
    country: "UAE 🇦🇪",
    flag: "🇦🇪",
    name: "UAE",
    query: "https://news.google.com/rss/search?q=(UAE+OR+EWEC+OR+Dubai)+AND+(%22solar+tender%22+OR+%22solar+pv%22+OR+auction+OR+Khazna)&hl=en-US&gl=US&ceid=US:en",
  },
  {
    country: "Oman 🇴🇲",
    flag: "🇴🇲",
    name: "OMAN",
    query: "https://news.google.com/rss/search?q=(Oman+OR+Hydrom)+AND+(%22wind+tender%22+OR+%22solar+pv%22+OR+corridor+OR+OPWP)&hl=en-US&gl=US&ceid=US:en",
  },
  {
    country: "Australia 🇦🇺",
    flag: "🇦🇺",
    name: "AUSTRALIA",
    query: "https://news.google.com/rss/search?q=(Australia+OR+AEMO)+AND+(%22solar+auction%22+OR+%22wind+tender%22+OR+%22REZ+tender%22+OR+LTESA)&hl=en-AU&gl=AU&ceid=AU:en",
  },
];

const RSS2JSON_ENDPOINT = "https://api.rss2json.com/v1/api.json?rss_url=";
const CACHE_KEY = "gowindsun_14country_balanced_news_cache_v7";
const CACHE_TTL_MS = 30 * 60 * 1000;

/**
 * Event Location Validation Rule
 * Determines country strictly based on WHERE the project/tender/auction/event is occurring.
 * (e.g. A Chinese company winning an Australian project -> Country is Australia 🇦🇺)
 */
function validateEventLocation(text: string, defaultCountry: CountryCode): { country: CountryCode; flag: string; name: string } {
  const t = text.toLowerCase();

  // Check explicit geographic project references in order
  if (t.includes("in india") || t.includes("gujarat") || t.includes("rajasthan") || t.includes("seci"))
    return { country: "India 🇮🇳", flag: "🇮🇳", name: "INDIA" };

  if (t.includes("in china") || t.includes("inner mongolia") || t.includes("guangdong") || t.includes("shanghai"))
    return { country: "China 🇨🇳", flag: "🇨🇳", name: "CHINA" };

  if (t.includes("in germany") || t.includes("bnetza") || t.includes("north sea n-9") || t.includes("berlin"))
    return { country: "Germany 🇩🇪", flag: "🇩🇪", name: "GERMANY" };

  if (t.includes("in spain") || t.includes("andalucia") || t.includes("extremadura") || t.includes("miteco"))
    return { country: "Spain 🇪🇸", flag: "🇪🇸", name: "SPAIN" };

  if (t.includes("in uk") || t.includes("in the uk") || t.includes("united kingdom") || t.includes("celtic sea") || t.includes("desnz"))
    return { country: "United Kingdom 🇬🇧", flag: "🇬🇧", name: "UNITED KINGDOM" };

  if (t.includes("in france") || t.includes("cre france") || t.includes("nouvelle-aquitaine") || t.includes("occitanie"))
    return { country: "France 🇫🇷", flag: "🇫🇷", name: "FRANCE" };

  if (t.includes("in sweden") || t.includes("se3") || t.includes("se4") || t.includes("svensk vindenergi"))
    return { country: "Sweden 🇸🇪", flag: "🇸🇪", name: "SWEDEN" };

  if (t.includes("in turkey") || t.includes("in turkiye") || t.includes("yeka ges") || t.includes("yeka res"))
    return { country: "Türkiye 🇹🇷", flag: "🇹🇷", name: "TÜRKIYE" };

  if (t.includes("in denmark") || t.includes("energistyrelsen") || t.includes("kriegers flak"))
    return { country: "Denmark 🇩🇰", flag: "🇩🇰", name: "DENMARK" };

  if (t.includes("in usa") || t.includes("in US") || t.includes("miso") || t.includes("ercot") || t.includes("texas"))
    return { country: "USA 🇺🇸", flag: "🇺🇸", name: "USA" };

  if (t.includes("in saudi") || t.includes("saudi arabia") || t.includes("sppc") || t.includes("al sadawi"))
    return { country: "Saudi Arabia 🇸🇦", flag: "🇸🇦", name: "SAUDI ARABIA" };

  if (t.includes("in uae") || t.includes("abu dhabi") || t.includes("ewec") || t.includes("khazna"))
    return { country: "UAE 🇦🇪", flag: "🇦🇪", name: "UAE" };

  if (t.includes("in oman") || t.includes("hydrom") || t.includes("duqm") || t.includes("nama power"))
    return { country: "Oman 🇴🇲", flag: "🇴🇲", name: "OMAN" };

  if (t.includes("in australia") || t.includes("aemo") || t.includes("nsw rez") || t.includes("gippsland"))
    return { country: "Australia 🇦🇺", flag: "🇦🇺", name: "AUSTRALIA" };

  const matched = OFFICIAL_COUNTRIES.find((c) => c.code === defaultCountry);
  return matched ? { country: matched.code, flag: matched.flag, name: matched.name } : { country: "India 🇮🇳", flag: "🇮🇳", name: "INDIA" };
}

function classifyPrimaryCategory(
  title: string,
  summary: string
): { category: PrimaryCategory; subType: "ONSHORE" | "OFFSHORE" | "SOLAR PV EQUIPMENT" | "SOLAR PROJECT" } {
  const text = `${title} ${summary}`.toLowerCase();

  const isTender = text.includes("tender") || text.includes("auction") || text.includes("scope") || text.includes("yeka") || text.includes("cfd") || text.includes("ltesa");
  const isPricing = text.includes("price") || text.includes("pricing") || text.includes("cost") || text.includes("capex") || text.includes("tariff") || text.includes("bnef");

  if (isTender) {
    const subType = text.includes("offshore") ? "OFFSHORE" : text.includes("solar") ? "SOLAR PROJECT" : "ONSHORE";
    return { category: "Tenders & Scope of Auctions", subType };
  }

  if (isPricing) {
    const subType = text.includes("module") || text.includes("inverter") || text.includes("cell") ? "SOLAR PV EQUIPMENT" : text.includes("offshore") ? "OFFSHORE" : "ONSHORE";
    return { category: "Pricing & CAPEX Benchmarks", subType };
  }

  if (text.includes("wind")) {
    const subType = text.includes("offshore") ? "OFFSHORE" : "ONSHORE";
    return { category: "Onshore & Offshore Wind", subType };
  }

  const subType = text.includes("module") || text.includes("cell") || text.includes("wafer") ? "SOLAR PV EQUIPMENT" : "SOLAR PROJECT";
  return { category: "Solar PV & Projects", subType };
}

function extractAuctionScopeData(text: string): AuctionScopeData | undefined {
  const capMatch = text.match(/([0-9,.]+\s*(?:GW|MW))/i);
  if (!capMatch) return undefined;

  const bidMatch = text.match(/(?:₹|€|£|\$|A\$|₺|DKK|SEK)\s*[0-9,.]+\s*(?:\/|\s*per\s*)(?:kWh|MWh|MW|W)/i);

  return {
    capacity: capMatch[1],
    winningBid: bidMatch ? bidMatch[0] : undefined,
  };
}

function extractMetricData(text: string): KeyMetricData | undefined {
  const dollarMwMatch = text.match(/\$([0-9,.]+)\s*(?:per|\/)\s*(MW|kW|Watt|W|kWh|MWh)/i);
  if (dollarMwMatch) {
    const unit = dollarMwMatch[2].toUpperCase();
    const type = unit === "WATT" || unit === "W" ? "EQUIPMENT PRICE" : unit === "KW" || unit === "MW" ? "TURBINE PRICE" : "PPA / AUCTION TARIFF";
    return {
      metricType: type,
      value: `$${dollarMwMatch[1]}`,
      currency: "USD",
      unit: `/${unit}`,
    };
  }

  const eurMatch = text.match(/€([0-9,.]+)\s*(?:per|\/)?\s*(MWh|kWh|MW|kW)/i);
  if (eurMatch) {
    return {
      metricType: "PPA / AUCTION TARIFF",
      value: `€${eurMatch[1]}`,
      currency: "EUR",
      unit: `/${eurMatch[2]}`,
    };
  }

  const inrMatch = text.match(/(?:₹|INR|Rs\.?)\s*([0-9,.]+)\s*(?:per|\/)?\s*(kWh|unit|MW|Cr)/i);
  if (inrMatch) {
    return {
      metricType: "PPA / AUCTION TARIFF",
      value: `₹${inrMatch[1]}`,
      currency: "INR",
      unit: `/${inrMatch[2]}`,
    };
  }

  return undefined;
}

function cleanText(htmlText: string): string {
  const doc = new DOMParser().parseFromString(htmlText || "", "text/html");
  let text = doc.body.textContent || "";
  text = text.replace(/<[^>]*>?/gm, "").trim();
  if (text.length > 250) {
    text = text.substring(0, 247) + "...";
  }
  return text;
}

function extractSource(item: any): { title: string; source: string } {
  let rawTitle = item.title || "";
  let source = "Source: Clean Energy Intelligence";

  if (rawTitle.includes(" - ")) {
    const parts = rawTitle.split(" - ");
    const srcName = parts.pop()?.trim();
    rawTitle = parts.join(" - ").trim();
    if (srcName) {
      source = `Source: ${srcName}`;
    }
  } else if (item.author) {
    source = `Source: ${item.author}`;
  }

  return { title: rawTitle, source };
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "Recent";
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Recent";
  }
}

/**
 * Individual Country Pipeline Fetcher Function
 */
async function fetchSingleCountryPipeline(
  queryObj: typeof COUNTRY_QUERIES[0]
): Promise<NewsArticleItem[]> {
  const items: NewsArticleItem[] = [];
  try {
    const apiUrl = `${RSS2JSON_ENDPOINT}${encodeURIComponent(queryObj.query)}`;
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) return items;

    const data = await res.json();
    if (data.status !== "ok" || !Array.isArray(data.items)) return items;

    const seenTitles = new Set<string>();

    for (const item of data.items) {
      const { title, source } = extractSource(item);
      const summary = cleanText(item.description || item.content || "");

      const normalizedTitle = title.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (seenTitles.has(normalizedTitle)) continue;
      seenTitles.add(normalizedTitle);

      const location = validateEventLocation(`${title} ${summary}`, queryObj.country);
      const { category, subType } = classifyPrimaryCategory(title, summary);
      const auctionScope = extractAuctionScopeData(`${title} ${summary}`);
      const metricData = extractMetricData(`${title} ${summary}`);

      items.push({
        id: `mkt-${Math.random().toString(36).substring(2, 9)}`,
        title,
        country: location.country,
        countryFlag: location.flag,
        countryName: location.name,
        category,
        subType,
        summary: summary || title,
        source,
        date: formatDate(item.pubDate),
        url: item.link || "https://news.google.com",
        auctionScope,
        metricData,
      });

      // Cap at 3 items per country per fetch to prevent any single country from dominating
      if (items.length >= 3) break;
    }
  } catch (err) {
    console.warn(`Fetch failed for ${queryObj.country}:`, err);
  }
  return items;
}

/**
 * Strict Round-Robin Geographic Balancing Algorithm
 * Interleaves 1 item per country at a time to ensure zero country dominance
 */
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

/**
 * Main Fetcher Function: Executes 14 Country Pipelines in Parallel (Promise.all)
 */
export async function fetchLiveRenewableNews(): Promise<{
  articles: NewsArticleItem[];
  lastUpdated: string;
  isLive: boolean;
  debugStats?: Record<string, number>;
}> {
  if (typeof window !== "undefined") {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        const age = Date.now() - parsed.timestamp;
        if (age < CACHE_TTL_MS && parsed.articles && parsed.articles.length > 0) {
          return {
            articles: parsed.articles,
            lastUpdated: new Date(parsed.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isLive: true,
            debugStats: parsed.debugStats,
          };
        }
      }
    } catch (e) {
      console.warn("Error reading cache:", e);
    }
  }

  // Initialize 14 Country Result Buckets
  const countryBuckets = new Map<CountryCode, NewsArticleItem[]>();
  const debugStats: Record<string, number> = {};

  for (const c of OFFICIAL_COUNTRIES) {
    countryBuckets.set(c.code, []);
    debugStats[c.name] = 0;
  }

  try {
    // 14 Concurrent Country Searches via Promise.all
    const results = await Promise.all(
      COUNTRY_QUERIES.map((q) => fetchSingleCountryPipeline(q))
    );

    // Populate Country Buckets strictly based on validated country
    results.flat().forEach((article) => {
      const bucket = countryBuckets.get(article.country);
      if (bucket && bucket.length < 3) {
        bucket.push(article);
        debugStats[article.countryName] = (debugStats[article.countryName] || 0) + 1;
      }
    });
  } catch (err) {
    console.warn("Live feed fetch error, utilizing fallback curated 14-country dataset:", err);
  }

  // Check total retrieved live articles
  let totalLive = 0;
  countryBuckets.forEach((bucket) => {
    totalLive += bucket.length;
  });

  // If live pipelines returned sufficient results, balance round-robin
  if (totalLive >= 8) {
    const balancedArticles = roundRobinInterleave(countryBuckets);
    if (balancedArticles.length > 0) balancedArticles[0].isFeatured = true;

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ timestamp: Date.now(), articles: balancedArticles, debugStats })
        );
      } catch (e) {
        console.warn("Error setting cache:", e);
      }
    }

    return {
      articles: balancedArticles,
      lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isLive: true,
      debugStats,
    };
  }

  // Fallback to Curated 14-Country Balanced Dataset
  const curatedBuckets = new Map<CountryCode, NewsArticleItem[]>();
  for (const c of OFFICIAL_COUNTRIES) curatedBuckets.set(c.code, []);

  IMPORTANT_NEWS_ARTICLES.forEach((art) => {
    const bucket = curatedBuckets.get(art.country);
    if (bucket) {
      bucket.push(art);
      debugStats[art.countryName] = (debugStats[art.countryName] || 0) + 1;
    }
  });

  const balancedCurated = roundRobinInterleave(curatedBuckets);
  if (balancedCurated.length > 0) balancedCurated[0].isFeatured = true;

  return {
    articles: balancedCurated,
    lastUpdated: "Curated 14-Country Balanced Feed",
    isLive: false,
    debugStats,
  };
}
