export type CountryCode = "INDIA" | "CHINA" | "GERMANY" | "UAE";
export type CategoryType = "Wind Turbines" | "Solar PV" | "Tenders" | "Auctions" | "Market Reports";
export type TechnologyType = "Wind" | "Solar" | "Hybrid" | "Storage";
export type WindType = "Onshore" | "Offshore" | "N/A";
export type PriceType =
  | "WTG Bid Price"
  | "WTG Equipment Price"
  | "Wind Project CAPEX"
  | "Wind EPC Price"
  | "Solar Module Price"
  | "Solar Cell Price"
  | "Solar Inverter Price"
  | "Solar EPC Price"
  | "Solar Project CAPEX"
  | "Winning Auction Tariff"
  | "Procurement Contract Value"
  | "Market Benchmark"
  | "Not Publicly Disclosed";

export interface IntelligenceItem {
  id: string;
  title: string;
  country: CountryCode;
  countryLabel: string;
  flagEmoji: string;
  technology: TechnologyType;
  windType?: WindType;
  category: CategoryType;
  priceType: PriceType;
  priceDisplay: string; // e.g. "RMB 1,609/kW" or "US$0.10/W"
  currencyCode?: string; // e.g. "CNY", "USD", "EUR", "AED", "INR"
  priceValueInINR?: string;
  scope: string; // e.g. "WTG Equipment Only" or "Total Project CAPEX"
  buyerOrAuthority?: string;
  capacity?: string;
  tenderStatus?: "Open" | "Awarded" | "Closed" | "N/A";
  publicationDate: string;
  sourceName: string;
  sourceUrl: string;
  summary: string;
  keyHighlights: string[];
  tags: string[];
  featured?: boolean;
}

export interface BenchmarkItem {
  id: string;
  technology: "Wind" | "Solar";
  country: CountryCode;
  countryLabel: string;
  flagEmoji: string;
  title: string;
  priceValue: string;
  priceType: PriceType;
  convertedINR: string;
  scope: string;
  date: string;
  sourceName: string;
  sourceUrl: string;
}

// Backward Compatibility Aliases
export type MarketIntelligenceItem = IntelligenceItem;
export type EquipmentPriceIndex = BenchmarkItem;

// ----------------------------------------------------
// 1. STRUCTURED INTERNATIONAL PRICE BENCHMARK TABLE
// ----------------------------------------------------
export const BENCHMARK_PRICE_TABLE: BenchmarkItem[] = [
  {
    id: "bm-wind-china",
    technology: "Wind",
    country: "CHINA",
    countryLabel: "China",
    flagEmoji: "🇨🇳",
    title: "Onshore WTG Average Bidding Price",
    priceValue: "RMB 1,609 / kW",
    priceType: "WTG Bid Price",
    convertedINR: "~₹1.90 Crore / MW",
    scope: "WTG Bidding Price (Equipment Supply Only, Ex-Works)",
    date: "March 2026",
    sourceName: "Goldwind Q1 2026 Results",
    sourceUrl: "https://www.goldwind.com/en/investors/financial-reports/",
  },
  {
    id: "bm-wind-india",
    technology: "Wind",
    country: "INDIA",
    countryLabel: "India",
    flagEmoji: "🇮🇳",
    title: "Tata Power–Suzlon 700 MW Project Investment",
    priceValue: "₹6,000 Crore Total",
    priceType: "Wind Project CAPEX",
    convertedINR: "~₹8.57 Crore / MW",
    scope: "Full Project Investment (Land, EHV Transmission & WTG EPC)",
    date: "August 2025",
    sourceName: "Business Standard",
    sourceUrl: "https://www.business-standard.com/companies/news/tata-power-suzlon-rs-6000-cr-andhra-pradesh-wind-project-125081201578_1.html",
  },
  {
    id: "bm-wind-germany",
    technology: "Wind",
    country: "GERMANY",
    countryLabel: "Germany / Europe",
    flagEmoji: "🇩🇪",
    title: "European OEM Onshore Turbine Order Value",
    priceValue: "€36 Billion Backlog",
    priceType: "WTG Equipment Price",
    convertedINR: "China WTG prices ~20-40% lower vs European OEMs",
    scope: "European OEM Equipment Price & Backlog Realization",
    date: "Q2 2026",
    sourceName: "Financial Times / Vestas",
    sourceUrl: "https://www.ft.com/content/17de7308-9e97-405a-ab5e-9b0dddab36b4",
  },
  {
    id: "bm-solar-germany",
    technology: "Solar",
    country: "GERMANY",
    countryLabel: "Germany / Global",
    flagEmoji: "🇩🇪",
    title: "Global Crystalline PV Module Selling Price",
    priceValue: "US$ 0.10 / W",
    priceType: "Solar Module Price",
    convertedINR: "~₹8.30 / Wp",
    scope: "Global Average PV Module Selling Price (FOB)",
    date: "2025 / 2026",
    sourceName: "Fraunhofer ISE Photovoltaics Report",
    sourceUrl: "https://www.ise.fraunhofer.de/content/dam/ise/de/documents/publications/studies/Photovoltaics-Report.pdf",
  },
  {
    id: "bm-solar-china",
    technology: "Solar",
    country: "CHINA",
    countryLabel: "China",
    flagEmoji: "🇨🇳",
    title: "N-Type TOPCon Solar Cell Spot Benchmark",
    priceValue: "RMB 0.26 / W",
    priceType: "Solar Cell Price",
    convertedINR: "~₹3.05 / Wp",
    scope: "M10/G12 TOPCon Cell Spot Transaction Price",
    date: "2026",
    sourceName: "EnergyTrend",
    sourceUrl: "https://www.energytrend.com/solar-price.html",
  },
  {
    id: "bm-solar-uae",
    technology: "Solar",
    country: "UAE",
    countryLabel: "UAE",
    flagEmoji: "🇦🇪",
    title: "Al Dhafra 2 GW Solar IPP Electricity Tariff",
    priceValue: "AED 4.97 fils / kWh",
    priceType: "Winning Auction Tariff",
    convertedINR: "~US$ 1.35 cents / kWh",
    scope: "25-Year IPP Power Purchase Agreement Tariff",
    date: "Official Benchmark",
    sourceName: "Emirates News Agency (WAM) / EWEC",
    sourceUrl: "https://www.wam.ae/en/article/hszra9cy-abu-dhabi-power-corporation-announces-worlds",
  },
];

// ----------------------------------------------------
// 2. VERIFIED MARKET INTELLIGENCE ITEMS (BALANCED 4X4)
// ----------------------------------------------------
export const INTELLIGENCE_ITEMS: IntelligenceItem[] = [
  // --- INDIA (🇮🇳) ---
  {
    id: "ind-01",
    title: "Tata Power & Suzlon Sign Agreement for 700 MW Wind Energy Project",
    country: "INDIA",
    countryLabel: "India",
    flagEmoji: "🇮🇳",
    technology: "Wind",
    windType: "Onshore",
    category: "Wind Turbines",
    priceType: "Wind Project CAPEX",
    priceDisplay: "₹6,000 Crore Total (~₹8.57 Cr / MW)",
    priceValueInINR: "₹8.57 Cr / MW",
    scope: "Full Project Investment (Land, EHV Transmission & WTG Supply)",
    buyerOrAuthority: "Tata Power / Suzlon Energy",
    capacity: "700 MW",
    publicationDate: "12 August 2025",
    sourceName: "Business Standard",
    sourceUrl: "https://www.business-standard.com/companies/news/tata-power-suzlon-rs-6000-cr-andhra-pradesh-wind-project-125081201578_1.html",
    summary: "Tata Power and Suzlon Energy inked an agreement for a 700 MW wind power project in Andhra Pradesh valued at ₹6,000 crore (~₹8.57 crore/MW). Note: Figure represents total project CAPEX, not pure WTG equipment cost.",
    keyHighlights: [
      "Total Project Investment: ₹6,000 Crore for 700 MW capacity",
      "Calculated CAPEX Benchmark: ~₹8.57 Crore / MW",
      "Scope includes site development, civil foundations, EHV evacuation, and WTG supply",
    ],
    tags: ["India", "Wind CAPEX", "Suzlon", "Tata Power", "Onshore Wind"],
    featured: true,
  },
  {
    id: "ind-02",
    title: "Premier Energies Secures 1.6 GW Solar Cell & Module Orders Worth ₹2,577 Crore",
    country: "INDIA",
    countryLabel: "India",
    flagEmoji: "🇮🇳",
    technology: "Solar",
    category: "Solar PV",
    priceType: "Procurement Contract Value",
    priceDisplay: "₹2,577 Crore Order Value (~₹1.61 Cr / MW)",
    priceValueInINR: "₹1.61 Cr / MW (~₹16.10 / Wp)",
    scope: "Cell and Module Supply (Multi-Year Contract Execution)",
    buyerOrAuthority: "Premier Energies Limited",
    capacity: "1.6 GW (1,600 MW)",
    publicationDate: "April 2026",
    sourceName: "JMK Research & Analytics",
    sourceUrl: "https://jmkresearch.com/renewable-sector-published-reports/",
    summary: "Premier Energies reported receiving 1.6 GW of solar cell and module supply orders worth ₹2,577 crore. The reported figure reflects a multi-year combined cell and module contract.",
    keyHighlights: [
      "Order Volume: 1.6 GW (1,600 MW) combined cells and modules",
      "Total Contract Value: ₹2,577 Crore",
      "Calculated Average Scope Value: ~₹1.61 Crore / MW (~₹16.1 / W)",
    ],
    tags: ["India", "Solar Module", "Solar Cell", "Premier Energies", "TOPCon"],
    featured: true,
  },
  {
    id: "ind-03",
    title: "Indian Solar Module Makers Face Cell Shortages & ~35% Project CAPEX Rise",
    country: "INDIA",
    countryLabel: "India",
    flagEmoji: "🇮🇳",
    technology: "Solar",
    category: "Market Reports",
    priceType: "Solar Cell Price",
    priceDisplay: "Modules with domestic cells cost ~2x vs Chinese cell imports",
    scope: "Domestic Content Requirement (ALMM/DCR) Impact on Solar CAPEX",
    publicationDate: "23 July 2026",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com/business/energy/indias-solar-push-idles-factories-unable-shake-reliance-china-2026-07-23/",
    summary: "Indian module manufacturers face severe domestic-cell supply shortages. Modules manufactured with domestic Indian cells cost almost double compared to Chinese imported cells, resulting in a potential ~35% project CAPEX rise.",
    keyHighlights: [
      "Domestic Indian cell cost premium: ~2x compared to Chinese imported cells",
      "Estimated short-term project CAPEX impact: ~35% increase",
      "Underlines critical domestic cell capacity bottleneck in ALMM/DCR compliance",
    ],
    tags: ["India", "Reuters", "Solar Cell Shortage", "CAPEX Impact", "ALMM"],
  },
  {
    id: "ind-04",
    title: "Ganesh Green Bharat Secures ₹430+ Crore Order for 630 Wp TOPCon Modules",
    country: "INDIA",
    countryLabel: "India",
    flagEmoji: "🇮🇳",
    technology: "Solar",
    category: "Solar PV",
    priceType: "Procurement Contract Value",
    priceDisplay: "₹430+ Crore Contract Value",
    scope: "630 Wp TOPCon Bifacial Glass-Glass Module Supply",
    buyerOrAuthority: "Ganesh Green Bharat",
    publicationDate: "April 2026",
    sourceName: "JMK Research & Analytics",
    sourceUrl: "https://jmkresearch.com/renewable-sector-published-reports/",
    summary: "Ganesh Green Bharat bagged a significant procurement order worth over ₹430 crore for high-efficiency 630 Wp TOPCon bifacial modules for utility-scale solar project construction across India.",
    keyHighlights: [
      "Module Specification: 630 Wp TOPCon Bifacial Glass-Glass",
      "Total Procurement Order: ₹430+ Crore",
      "Confirms accelerating adoption of N-Type TOPCon technology in Indian utility projects",
    ],
    tags: ["India", "TOPCon", "Ganesh Green Bharat", "Solar Module"],
  },

  // --- CHINA (🇨🇳) ---
  {
    id: "chn-01",
    title: "Goldwind Q1 2026 Results Report Onshore WTG Bidding Price at RMB 1,609/kW",
    country: "CHINA",
    countryLabel: "China",
    flagEmoji: "🇨🇳",
    technology: "Wind",
    windType: "Onshore",
    category: "Wind Turbines",
    priceType: "WTG Bid Price",
    priceDisplay: "RMB 1,609 / kW (~US$ 220 / kW)",
    priceValueInINR: "~₹1.90 Crore / MW",
    scope: "WTG Bidding Price (Equipment Supply Benchmark, Ex-Works)",
    buyerOrAuthority: "Goldwind / China Wind Industry Bids",
    publicationDate: "March 2026",
    sourceName: "Goldwind Official Q1 2026 Report",
    sourceUrl: "https://www.goldwind.com/en/investors/financial-reports/",
    summary: "Goldwind's Q1 2026 report confirms average domestic onshore wind turbine bidding prices stabilized at RMB 1,609/kW. For reference: 4 MW turbine ≈ RMB 6.44M; 5 MW turbine ≈ RMB 8.05M; 6 MW turbine ≈ RMB 9.65M.",
    keyHighlights: [
      "Official WTG Bidding Benchmark: RMB 1,609 / kW",
      "4 MW Turbine Equipment Price: ~RMB 6.44 Million",
      "5 MW Turbine Equipment Price: ~RMB 8.05 Million",
      "6 MW Turbine Equipment Price: ~RMB 9.65 Million",
    ],
    tags: ["China", "Goldwind", "WTG Bid Price", "Onshore Wind", "Turbine Pricing"],
    featured: true,
  },
  {
    id: "chn-02",
    title: "PowerChina Launches 31 GW Solar Module & 35 GW Wind Turbine Procurement",
    country: "CHINA",
    countryLabel: "China",
    flagEmoji: "🇨🇳",
    technology: "Hybrid",
    category: "Tenders",
    priceType: "Procurement Contract Value",
    priceDisplay: "31 GW Solar Modules + 35 GW Wind Turbines",
    scope: "Centralized Framework Equipment Procurement (24GW TOPCon, 3GW HJT, 4GW BC)",
    buyerOrAuthority: "PowerChina Corporation",
    capacity: "31 GW Solar / 35 GW Wind",
    tenderStatus: "Open",
    publicationDate: "15 December 2025",
    sourceName: "PV Magazine Global",
    sourceUrl: "https://www.pv-magazine.com/news/",
    summary: "PowerChina announced a massive 2026 procurement programme covering 31 GW of PV modules (24 GW TOPCon, 3 GW HJT, 4 GW back-contact), 31 GW of inverters, and 35 GW of wind turbine generators.",
    keyHighlights: [
      "Solar Module Procurement: 31 GW total (24 GW TOPCon, 3 GW HJT, 4 GW BC)",
      "Wind Turbine Procurement: 35 GW onshore and offshore WTG capacity",
      "One of the world's largest centralized clean energy procurement frameworks",
    ],
    tags: ["China", "PowerChina", "Centralized Procurement", "TOPCon", "HJT", "WTG"],
    featured: true,
  },
  {
    id: "chn-03",
    title: "CWEA Data Shows 2025–2026 Onshore Wind Turbine Bids at RMB 1,600–1,700/kW",
    country: "CHINA",
    countryLabel: "China",
    flagEmoji: "🇨🇳",
    technology: "Wind",
    windType: "Onshore",
    category: "Market Reports",
    priceType: "WTG Bid Price",
    priceDisplay: "RMB 1,600 – 1,700 / kW",
    priceValueInINR: "~₹1.88 – ₹2.00 Crore / MW",
    scope: "National Winning Bid Price Range across Utility Tenders",
    publicationDate: "2025 / 2026",
    sourceName: "China Wind Energy Association (CWEA) / 36Kr",
    sourceUrl: "https://eu.36kr.com/en/p/3876353711635072",
    summary: "China Wind Energy Association market analysis indicates onshore wind turbine winning bids across domestic utility tenders maintained a steady range of RMB 1,600–1,700 per kW for 5MW+ class platforms.",
    keyHighlights: [
      "Winning Onshore WTG Bid Range: RMB 1,600 – 1,700 / kW",
      "Covers 5 MW to 8 MW onshore turbine generators",
      "Demonstrates high pricing stability in Chinese OEM bidding competition",
    ],
    tags: ["China", "CWEA", "Wind Turbine Price", "Onshore Wind"],
  },
  {
    id: "chn-04",
    title: "EnergyTrend Chinese N-Type Solar Cell Prices Spot Benchmark at RMB 0.26/W",
    country: "CHINA",
    countryLabel: "China",
    flagEmoji: "🇨🇳",
    technology: "Solar",
    category: "Solar PV",
    priceType: "Solar Cell Price",
    priceDisplay: "RMB 0.26 / W (~US$ 0.036 / W)",
    priceValueInINR: "~₹3.05 / Wp",
    scope: "M10/G12 TOPCon Solar Cell Spot Transaction Price",
    publicationDate: "Recent Spot Benchmark",
    sourceName: "EnergyTrend",
    sourceUrl: "https://www.energytrend.com/solar-price.html",
    summary: "EnergyTrend spot price tracking shows Chinese N-type solar cell transaction prices hovering around RMB 0.26/W, reflecting ongoing supply-chain cost optimization and aggressive upstream wafer efficiency.",
    keyHighlights: [
      "N-Type TOPCon Cell Spot Price: RMB 0.26 / W",
      "Equivalent USD Price: ~US$ 0.036 / W",
      "Upstream pressure continues to drive wafer and cell cost efficiencies",
    ],
    tags: ["China", "EnergyTrend", "Solar Cell", "TOPCon", "Spot Price"],
  },

  // --- GERMANY (🇩🇪) ---
  {
    id: "deu-01",
    title: "Fraunhofer ISE Photovoltaics Report: Global Average Module Price at US$0.10/W",
    country: "GERMANY",
    countryLabel: "Germany",
    flagEmoji: "🇩🇪",
    technology: "Solar",
    category: "Market Reports",
    priceType: "Solar Module Price",
    priceDisplay: "US$ 0.10 / W (~€0.092 / W)",
    priceValueInINR: "~₹8.30 / Wp",
    scope: "Global Average PV Module Selling Price (FOB)",
    publicationDate: "2025 / 2026",
    sourceName: "Fraunhofer Institute for Solar Energy Systems (ISE)",
    sourceUrl: "https://www.ise.fraunhofer.de/content/dam/ise/de/documents/publications/studies/Photovoltaics-Report.pdf",
    summary: "Fraunhofer ISE's flagship Photovoltaics Report confirms global average module selling prices held near historic lows at ~US$0.10/W (€0.092/W) for high-efficiency crystalline silicon modules.",
    keyHighlights: [
      "Global Benchmark Price: US$ 0.10 / W (~€0.092 / W)",
      "Comprehensive historical price learning curve analysis",
      "Identifies crystalline silicon efficiency gains and manufacturing scale economics",
    ],
    tags: ["Germany", "Fraunhofer ISE", "Solar Module Price", "Global Benchmark"],
    featured: true,
  },
  {
    id: "deu-02",
    title: "Germany Wraps Up 482 MW Solar-Plus-Storage Tender at Average €0.0534/kWh",
    country: "GERMANY",
    countryLabel: "Germany",
    flagEmoji: "🇩🇪",
    technology: "Solar",
    category: "Auctions",
    priceType: "Winning Auction Tariff",
    priceDisplay: "€0.0534 / kWh (Range: €0.0475 - €0.0559/kWh)",
    priceValueInINR: "~₹4.85 / kWh",
    scope: "Co-Located Solar PV + BESS Auction Tariff",
    buyerOrAuthority: "Bundesnetzagentur (German Federal Network Agency)",
    capacity: "482 MW Awarded",
    tenderStatus: "Awarded",
    publicationDate: "26 June 2026",
    sourceName: "PV Magazine Global / Bundesnetzagentur",
    sourceUrl: "https://www.pv-magazine.com/news/",
    summary: "Germany's Federal Network Agency awarded 482 MW of solar-plus-storage capacity in its June 2026 tender round with winning bid tariffs averaging €0.0534/kWh (~US$0.058/kWh).",
    keyHighlights: [
      "Awarded Volume: 482 MW solar-plus-storage co-located capacity",
      "Average Winning Tariff: €0.0534 / kWh (~US$ 0.058 / kWh)",
      "Winning Tariff Range: €0.0475 / kWh to €0.0559 / kWh",
    ],
    tags: ["Germany", "Auction Tariff", "Solar Storage", "Bundesnetzagentur"],
    featured: true,
  },
  {
    id: "deu-03",
    title: "German Wholesale Market Solar Module Spot Benchmark at €0.11/Wp",
    country: "GERMANY",
    countryLabel: "Germany",
    flagEmoji: "🇩🇪",
    technology: "Solar",
    category: "Solar PV",
    priceType: "Solar Module Price",
    priceDisplay: "€0.11 / Wp (~US$ 0.12 / Wp)",
    priceValueInINR: "~₹9.90 / Wp",
    scope: "European Wholesale Distribution Benchmark for TOPCon Modules",
    publicationDate: "2026 Benchmark",
    sourceName: "EnergieFluss24",
    sourceUrl: "https://www.energiefluss24.de/photovoltaik/jinko-solar",
    summary: "Wholesale market indicators for Germany show standard tier-1 N-Type TOPCon glass-glass PV modules pricing around €0.11/W at the commercial distribution level across Central Europe.",
    keyHighlights: [
      "German Wholesale Module Price: €0.11 / Wp",
      "Reflects commercial import distribution and European warehousing costs",
      "Applicable for commercial ground-mount and rooftop solar EPC projects in Europe",
    ],
    tags: ["Germany", "Solar Module Price", "Wholesale Spot", "TOPCon"],
  },
  {
    id: "deu-04",
    title: "Vestas Reports 3.35 GW Q2 Onshore Wind Turbine Orders & €36 Billion Backlog",
    country: "GERMANY",
    countryLabel: "Germany",
    flagEmoji: "🇩🇪",
    technology: "Wind",
    windType: "Onshore",
    category: "Wind Turbines",
    priceType: "WTG Equipment Price",
    priceDisplay: "European OEM WTG Prices ~20–40% Higher vs Chinese Bids",
    scope: "European OEM Order Value & Order Intake Margin Realization",
    buyerOrAuthority: "Vestas Wind Systems",
    capacity: "3.35 GW (Q2 Orders)",
    publicationDate: "Q2 2026",
    sourceName: "Financial Times",
    sourceUrl: "https://www.ft.com/content/17de7308-9e97-405a-ab5e-9b0dddab36b4",
    summary: "Vestas recorded 3.35 GW of new onshore wind turbine orders in Q2 2026 with total order backlog expanding to €36 billion, demonstrating recovering European order volumes and stabilized OEM pricing margins.",
    keyHighlights: [
      "Q2 Onshore Order Volume: 3.35 GW",
      "Total Equipment & Service Backlog: €36 Billion",
      "FT Market Analysis: Chinese WTG prices remain ~20–40% lower than European OEM alternatives",
    ],
    tags: ["Germany", "Vestas", "Wind Turbine Price", "Financial Times", "European OEM"],
  },

  // --- UAE (🇦🇪) ---
  {
    id: "uae-01",
    title: "Abu Dhabi 2 GW Utility Solar IPP Achieves Tariff of AED 4.97 Fils/kWh",
    country: "UAE",
    countryLabel: "UAE",
    flagEmoji: "🇦🇪",
    technology: "Solar",
    category: "Auctions",
    priceType: "Winning Auction Tariff",
    priceDisplay: "AED 4.97 fils / kWh (US$ 1.35 cents / kWh)",
    priceValueInINR: "~₹1.13 / kWh",
    scope: "25-Year IPP Power Purchase Agreement Tariff",
    buyerOrAuthority: "Abu Dhabi Power Corporation / EWEC",
    capacity: "2,000 MW (2 GW)",
    tenderStatus: "Awarded",
    publicationDate: "Official Benchmark",
    sourceName: "Emirates News Agency (WAM) / EWEC",
    sourceUrl: "https://www.wam.ae/en/article/hszra9cy-abu-dhabi-power-corporation-announces-worlds",
    summary: "Abu Dhabi Power Corporation / EWEC awarded the 2 GW Al Dhafra Solar PV IPP at a competitive electricity tariff of AED 4.97 fils per kWh (US$1.35 cents/kWh), highlighting Gulf region solar scale economics.",
    keyHighlights: [
      "Winning IPP Tariff: AED 4.97 fils / kWh (US$ 1.35 cents / kWh)",
      "Project Capacity: 2,000 MW (2 GW) single-site solar PV plant",
      "25-Year PPA structure with EWEC off-taker security",
    ],
    tags: ["UAE", "Abu Dhabi", "Auction Tariff", "EWEC", "Utility Solar"],
    featured: true,
  },
  {
    id: "uae-02",
    title: "Etihad ESCO Launches 2026 Commercial Solar EPC & 25-Year O&M Tenders",
    country: "UAE",
    countryLabel: "UAE",
    flagEmoji: "🇦🇪",
    technology: "Solar",
    category: "Tenders",
    priceType: "Solar EPC Price",
    priceDisplay: "Turnkey EPC + 25-Year Lifecycle O&M Scope",
    scope: "Turnkey Commercial EPC, DEWA Grid Interconnection & 25-Yr Maintenance",
    buyerOrAuthority: "Etihad ESCO / DEWA",
    tenderStatus: "Open",
    publicationDate: "2026 Ongoing Tenders",
    sourceName: "Etihad ESCO Official Portal",
    sourceUrl: "https://etihadesco.ae/",
    summary: "Etihad ESCO issued ongoing tenders for building retrofits and rooftop/ground-mounted solar PV projects across Dubai requiring full EPC execution, DEWA grid interconnection, and 25-year O&M governance.",
    keyHighlights: [
      "Scope: Full EPC procurement, installation, and 25-year long-term O&M",
      "Location: Dubai, UAE (DEWA Grid Connection)",
      "Provides transparent UAE commercial procurement benchmarks",
    ],
    tags: ["UAE", "Etihad ESCO", "DEWA", "Solar EPC", "Dubai"],
    featured: true,
  },
  {
    id: "uae-03",
    title: "DEWA & EWEC Issue Procurement Tenders for 400kV EHV Evacuation Substations",
    country: "UAE",
    countryLabel: "UAE",
    flagEmoji: "🇦🇪",
    technology: "Hybrid",
    category: "Tenders",
    priceType: "Procurement Contract Value",
    priceDisplay: "Turnkey EHV Grid Substation & Cable Evacuation",
    scope: "400kV/132kV GIS Switchgear, Transformers & Evacuation Infrastructure",
    buyerOrAuthority: "DEWA / EWEC Utilities",
    tenderStatus: "Open",
    publicationDate: "2026 Tenders",
    sourceName: "Emirates News Agency (WAM)",
    sourceUrl: "https://www.wam.ae/en/article/hszra9cy-abu-dhabi-power-corporation-announces-worlds",
    summary: "UAE utility entities DEWA and EWEC released procurement invitations for 400kV/132kV Gas Insulated Switchgear (GIS) substations, high-voltage underground cabling, and SCADA automation to support utility solar expansion.",
    keyHighlights: [
      "Substation Voltage Rating: 400kV / 132kV GIS Switchgear",
      "Scope: Substation civil works, power transformers, EHV underground cabling, and SCADA",
      "Facilitates grid evacuation for major solar and storage parks in UAE",
    ],
    tags: ["UAE", "DEWA", "EWEC", "EHV Substation", "Grid Evacuation"],
  },
  {
    id: "uae-04",
    title: "GCC Solar PV Equipment Procurement Benchmark: TOPCon Modules CIF Jebel Ali",
    country: "UAE",
    countryLabel: "UAE",
    flagEmoji: "🇦🇪",
    technology: "Solar",
    category: "Market Reports",
    priceType: "Solar Module Price",
    priceDisplay: "US$ 0.105 – US$ 0.115 / W (CIF Jebel Ali)",
    priceValueInINR: "~₹8.70 – ₹9.55 / Wp",
    scope: "580W+ N-Type TOPCon Bifacial Glass-Glass CIF Import Price",
    publicationDate: "2026 Benchmark",
    sourceName: "EnergyTrend / PV Magazine",
    sourceUrl: "https://www.pv-magazine.com/news/",
    summary: "Procurement benchmark data for the UAE and GCC region indicates utility-scale TOPCon bifacial glass-glass modules deliver CIF Jebel Ali prices in the US$0.105–0.115/W range for multi-hundred MW orders.",
    keyHighlights: [
      "TOPCon CIF Jebel Ali Import Price: US$ 0.105 – 0.115 / W",
      "Specification: 580W+ N-Type TOPCon Bifacial Glass-Glass",
      "Reflects shipping freight and Middle East port clearance costs",
    ],
    tags: ["UAE", "Jebel Ali", "TOPCon Module", "CIF Pricing"],
  },
];

// ----------------------------------------------------
// 3. BALANCED COUNTRY INTERLEAVING UTILITY
// ----------------------------------------------------
export function getBalancedItems(
  items: IntelligenceItem[],
  selectedCountry: CountryCode | "ALL",
  selectedCategory: CategoryType | "ALL",
  searchQuery: string
): IntelligenceItem[] {
  // Filter by category and search query first
  const filtered = items.filter((item) => {
    if (selectedCategory !== "ALL" && item.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchesTitle = item.title.toLowerCase().includes(q);
      const matchesSummary = item.summary.toLowerCase().includes(q);
      const matchesSource = item.sourceName.toLowerCase().includes(q);
      const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
      return matchesTitle || matchesSummary || matchesSource || matchesTags;
    }
    return true;
  });

  // If a specific country is selected, return filtered list for that country
  if (selectedCountry !== "ALL") {
    return filtered.filter((item) => item.country === selectedCountry);
  }

  // If ALL COUNTRIES: Interleave evenly across [INDIA, CHINA, GERMANY, UAE]
  const countries: CountryCode[] = ["INDIA", "CHINA", "GERMANY", "UAE"];
  const buckets: Record<CountryCode, IntelligenceItem[]> = {
    INDIA: [],
    CHINA: [],
    GERMANY: [],
    UAE: [],
  };

  filtered.forEach((item) => {
    if (buckets[item.country]) {
      buckets[item.country].push(item);
    }
  });

  const result: IntelligenceItem[] = [];
  const maxLen = Math.max(...countries.map((c) => buckets[c].length));

  for (let i = 0; i < maxLen; i++) {
    countries.forEach((country) => {
      if (buckets[country][i]) {
        result.push(buckets[country][i]);
      }
    });
  }

  return result;
}

export const EQUIPMENT_PRICE_INDICES = BENCHMARK_PRICE_TABLE;
export const MARKET_INTELLIGENCE_ITEMS = INTELLIGENCE_ITEMS;
