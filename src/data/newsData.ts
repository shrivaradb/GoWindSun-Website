export type MetricType =
  | "EQUIPMENT PRICE"
  | "TURBINE PRICE"
  | "PROJECT CAPEX"
  | "TOTAL PROJECT COST"
  | "PPA / AUCTION TARIFF";

export interface KeyMetricData {
  metricType: MetricType;
  value: string;           // e.g. "$0.092", "$265,000", "$1,150", "€28.50", "₹3.24"
  currency: string;        // e.g. "USD", "INR", "EUR", "GBP", "TRY", "DKK", "AUD"
  unit: string;            // e.g. "/ Watt", "/ MW", "/ kW", "/ kWh", "/ MWh"
  detail?: string;         // e.g. "N-Type TOPCon Module", "Onshore 6.X MW Platform"
}

export interface AuctionScopeData {
  capacity: string;        // e.g. "4.0 GW", "1,200 MW"
  auctionRound?: string;   // e.g. "AR7", "Round 5", "YEKA RES-2026"
  authority?: string;      // e.g. "UK DESNZ", "BNetzA", "SECI", "CRE"
  winningBid?: string;     // e.g. "£73/MWh", "₹3.24/kWh"
  deadline?: string;       // e.g. "Q4 2026"
  contractType?: string;   // e.g. "20-Year CfD", "25-Year Sovereign PPA"
}

export type CountryCode =
  | "India 🇮🇳"
  | "China 🇨🇳"
  | "Germany 🇩🇪"
  | "Spain 🇪🇸"
  | "United Kingdom 🇬🇧"
  | "France 🇫🇷"
  | "Sweden 🇸🇪"
  | "Türkiye 🇹🇷"
  | "Denmark 🇩🇰"
  | "USA 🇺🇸"
  | "Saudi Arabia 🇸🇦"
  | "UAE 🇦🇪"
  | "Oman 🇴🇲"
  | "Australia 🇦🇺";

export type PrimaryCategory =
  | "Onshore & Offshore Wind"
  | "Solar PV & Projects"
  | "Tenders & Scope of Auctions"
  | "Pricing & CAPEX Benchmarks";

export interface NewsArticleItem {
  id: string;
  title: string;
  country: CountryCode;
  countryFlag: string;
  countryName: string;
  category: PrimaryCategory;
  subType?: "ONSHORE" | "OFFSHORE" | "SOLAR PV EQUIPMENT" | "SOLAR PROJECT";
  summary: string;
  source: string;
  date: string;
  url: string;
  metricData?: KeyMetricData;
  auctionScope?: AuctionScopeData;
  isFeatured?: boolean;
}

export const OFFICIAL_COUNTRIES: { code: CountryCode; flag: string; name: string; key: string }[] = [
  { code: "India 🇮🇳", flag: "🇮🇳", name: "India", key: "India" },
  { code: "China 🇨🇳", flag: "🇨🇳", name: "China", key: "China" },
  { code: "Germany 🇩🇪", flag: "🇩🇪", name: "Germany", key: "Germany" },
  { code: "Spain 🇪🇸", flag: "🇪🇸", name: "Spain", key: "Spain" },
  { code: "United Kingdom 🇬🇧", flag: "🇬🇧", name: "United Kingdom", key: "UK" },
  { code: "France 🇫🇷", flag: "🇫🇷", name: "France", key: "France" },
  { code: "Sweden 🇸🇪", flag: "🇸🇪", name: "Sweden", key: "Sweden" },
  { code: "Türkiye 🇹🇷", flag: "🇹🇷", name: "Türkiye", key: "Turkiye" },
  { code: "Denmark 🇩🇰", flag: "🇩🇰", name: "Denmark", key: "Denmark" },
  { code: "USA 🇺🇸", flag: "🇺🇸", name: "USA", key: "USA" },
  { code: "Saudi Arabia 🇸🇦", flag: "🇸🇦", name: "Saudi Arabia", key: "SaudiArabia" },
  { code: "UAE 🇦🇪", flag: "🇦🇪", name: "UAE", key: "UAE" },
  { code: "Oman 🇴🇲", flag: "🇴🇲", name: "Oman", key: "Oman" },
  { code: "Australia 🇦🇺", flag: "🇦🇺", name: "Australia", key: "Australia" },
];

export const PRIMARY_CATEGORIES: { id: PrimaryCategory; label: string; icon: string }[] = [
  { id: "Onshore & Offshore Wind", label: "🌬️ Onshore & Offshore Wind", icon: "wind" },
  { id: "Solar PV & Projects", label: "☀️ Solar PV & Projects", icon: "sun" },
  { id: "Tenders & Scope of Auctions", label: "📑 Tenders & Scope of Auctions", icon: "file" },
  { id: "Pricing & CAPEX Benchmarks", label: "💰 Pricing & CAPEX Benchmarks", icon: "tag" },
];

// Curated 14-Country Balanced Dataset (2 items per country = 28 distinct items)
export const IMPORTANT_NEWS_ARTICLES: NewsArticleItem[] = [
  // --- ROUND 1 (14 Countries) ---
  {
    id: "news-india-1",
    title: "SECI Issues 1.2 GW Inter-State Onshore Wind Tender Scope with 3.3MW+ High-Hub Guidelines",
    country: "India 🇮🇳",
    countryFlag: "🇮🇳",
    countryName: "INDIA",
    category: "Tenders & Scope of Auctions",
    subType: "ONSHORE",
    isFeatured: true,
    auctionScope: {
      capacity: "1,200 MW (1.2 GW)",
      authority: "Solar Energy Corp of India (SECI)",
      auctionRound: "ISTS Tranche XVI",
      winningBid: "₹3.24 / kWh ($38.80/MWh)",
      contractType: "25-Year PPA with Guaranteed Interconnection",
      deadline: "Q4 2026",
    },
    summary:
      "Solar Energy Corporation of India published detailed tender scope for 1,200 MW ISTS wind projects in Gujarat and Karnataka with guaranteed grid evacuation, discovering competitive tariff bids of ₹3.24/kWh.",
    source: "Source: SECI / Mercom India",
    date: "14 August 2026",
    url: "https://seci.co.in",
  },
  {
    id: "news-china-1",
    title: "Chinese Offshore Wind Turbine Bids Drop to ~$410/kW Baseline in Guangdong 16MW Procurement",
    country: "China 🇨🇳",
    countryFlag: "🇨🇳",
    countryName: "CHINA",
    category: "Pricing & CAPEX Benchmarks",
    subType: "OFFSHORE",
    metricData: {
      metricType: "TURBINE PRICE",
      value: "$410,000",
      currency: "USD",
      unit: "/ MW",
      detail: "14MW - 16MW Offshore Wind Turbine Generator Package",
    },
    summary:
      "Guangdong offshore procurement disclosures reveal top Chinese OEMs quoting 14MW - 16MW offshore wind turbine generator packages at RMB 2,950/kW (~$410/kW), establishing new global offshore price baselines.",
    source: "Source: BloombergNEF / China Energy News",
    date: "13 August 2026",
    url: "https://www.bnef.com",
  },
  {
    id: "news-germany-1",
    title: "Bundesnetzagentur Awards 2.5 GW North Sea Offshore Wind Auction Scope at Zero-Cent Bids",
    country: "Germany 🇩🇪",
    countryFlag: "🇩🇪",
    countryName: "GERMANY",
    category: "Tenders & Scope of Auctions",
    subType: "OFFSHORE",
    auctionScope: {
      capacity: "2,500 MW (2.5 GW)",
      authority: "Bundesnetzagentur (BNetzA)",
      auctionRound: "North Sea Sites N-9.1 & N-9.2",
      winningBid: "€0.00 / kWh (Zero Subsidy)",
      contractType: "25-Year Offshore Lease & Grid Guarantee",
      deadline: "Commissioning 2030",
    },
    summary:
      "Federal Network Agency (BNetzA) completed competitive bidding for North Sea offshore wind sites N-9.1 and N-9.2, securing zero-subsidy developer commitments with grid connection guarantees for 2030.",
    source: "Source: BNetzA / OffshoreWind.biz",
    date: "12 August 2026",
    url: "https://www.bundesnetzagentur.de",
  },
  {
    id: "news-spain-1",
    title: "Spanish Solar PV Utility Corporate PPA Tariffs Settle at €28.50/MWh Benchmark",
    country: "Spain 🇪🇸",
    countryFlag: "🇪🇸",
    countryName: "SPAIN",
    category: "Pricing & CAPEX Benchmarks",
    subType: "SOLAR PROJECT",
    metricData: {
      metricType: "PPA / AUCTION TARIFF",
      value: "€28.50",
      currency: "EUR",
      unit: "/ MWh",
      detail: "10-Year Corporate PPA (Bifacial Solar PV + Tracker)",
    },
    summary:
      "Techno-commercial PPA index reports indicate Spanish corporate solar Power Purchase Agreements stabilizing at €28.50/MWh ($31.20/MWh) for 10-year term off-take agreements in Andalucia and Extremadura.",
    source: "Source: PEXAPARK / PV Tech Europe",
    date: "11 August 2026",
    url: "https://www.pv-tech.org",
  },
  {
    id: "news-uk-1",
    title: "UK Energy Department Opens 10 GW AR7 Offshore Wind Tender Scope with £73/MWh Strike Price",
    country: "United Kingdom 🇬🇧",
    countryFlag: "🇬🇧",
    countryName: "UNITED KINGDOM",
    category: "Tenders & Scope of Auctions",
    subType: "OFFSHORE",
    auctionScope: {
      capacity: "10,000 MW (10.0 GW)",
      authority: "UK DESNZ",
      auctionRound: "Allocation Round 7 (AR7)",
      winningBid: "£73 / MWh (Fixed) | £176 / MWh (Floating)",
      contractType: "15-Year Contracts for Difference (CfD)",
      deadline: "Q1 2027",
    },
    summary:
      "The UK government unveiled the allocation framework and scope for Allocation Round 7 (AR7), offering £73/MWh strike prices for fixed-bottom offshore wind and £176/MWh for floating offshore wind projects.",
    source: "Source: UK DESNZ / Offshore Wind Journal",
    date: "10 August 2026",
    url: "https://www.gov.uk",
  },
  {
    id: "news-france-1",
    title: "French CRE Discovers €82.40/MWh Average Tariff in 1.5 GW Ground-Mounted Solar PV Auction",
    country: "France 🇫🇷",
    countryFlag: "🇫🇷",
    countryName: "FRANCE",
    category: "Tenders & Scope of Auctions",
    subType: "SOLAR PROJECT",
    auctionScope: {
      capacity: "1,520 MW (1.52 GW)",
      authority: "Commission de Régulation de l'Énergie (CRE)",
      auctionRound: "PPE2 Ground-Mounted Solar Round 5",
      winningBid: "€82.40 / MWh Average",
      contractType: "20-Year Feed-in Premium",
      deadline: "114 Awarded Projects",
    },
    summary:
      "Energy Regulatory Commission (CRE) finalized procurement results for Round 5 ground-mounted solar auctions across Nouvelle-Aquitaine and Occitanie, awarding 1,520 MW across 114 winning projects.",
    source: "Source: CRE France / PV Magazine France",
    date: "09 August 2026",
    url: "https://www.cre.fr",
  },
  {
    id: "news-sweden-1",
    title: "Swedish Onshore Wind Installed CAPEX Benchmark Settles at €1,150/kW in SE3 & SE4 Bidding Zones",
    country: "Sweden 🇸🇪",
    countryFlag: "🇸🇪",
    countryName: "SWEDEN",
    category: "Pricing & CAPEX Benchmarks",
    subType: "ONSHORE",
    metricData: {
      metricType: "PROJECT CAPEX",
      value: "€1,150",
      currency: "EUR",
      unit: "/ kW",
      detail: "Nordic Cold-Climate Onshore 6.X MW Wind Platform",
    },
    summary:
      "Nordic wind benchmark audits show onshore wind total installed project CAPEX averaging €1,150/kW ($1,250/kW) for high-hub cold-climate turbines equipped with active de-icing packages.",
    source: "Source: Svensk Vindenergi / Windpower Monthly",
    date: "08 August 2026",
    url: "https://svenskvindenergi.org",
  },
  {
    id: "news-turkiye-1",
    title: "Ministry of Energy Launches 2 GW YEKA RES & GES Tender Scope with Lira-Denominated Ceiling Tariffs",
    country: "Türkiye 🇹🇷",
    countryFlag: "🇹🇷",
    countryName: "TÜRKIYE",
    category: "Tenders & Scope of Auctions",
    subType: "ONSHORE",
    auctionScope: {
      capacity: "2,000 MW (2.0 GW)",
      authority: "Ministry of Energy & Natural Resources",
      auctionRound: "YEKA RES-2026 & GES-2026",
      winningBid: "₺1.05 / kWh Ceiling Tariff",
      contractType: "15-Year PPA + Local Content Requirement",
      deadline: "Q4 2026",
    },
    summary:
      "Türkiye's Ministry of Energy and Natural Resources announced tender documentation for YEKA RES-2026 (Wind) and YEKA GES-2026 (Solar) targeting 2,000 MW capacity with local equipment manufacturing mandates.",
    source: "Source: Republic of Türkiye Ministry of Energy",
    date: "07 August 2026",
    url: "https://www.enerji.gov.tr",
  },
  {
    id: "news-denmark-1",
    title: "Danish Energy Agency Opens 6 GW Offshore Wind Tender Scope for Kriegers Flak II & North Sea I",
    country: "Denmark 🇩🇰",
    countryFlag: "🇩🇰",
    countryName: "DENMARK",
    category: "Onshore & Offshore Wind",
    subType: "OFFSHORE",
    auctionScope: {
      capacity: "6,000 MW (6.0 GW)",
      authority: "Energistyrelsen (Danish Energy Agency)",
      auctionRound: "Danish Offshore Tender 2026",
      winningBid: "Un-subsidized / DKK 0.22/kWh Base",
      contractType: "30-Year Concession with 20% State Equity",
      deadline: "Q1 2027",
    },
    summary:
      "Danish Energy Agency (Energistyrelsen) published final tender conditions for 6 GW of un-subsidized offshore wind farms, featuring mandatory state co-ownership options and strict sustainability criteria.",
    source: "Source: Energistyrelsen Denmark",
    date: "06 August 2026",
    url: "https://ens.dk",
  },
  {
    id: "news-usa-1",
    title: "US Utility Solar PV Module & Inverter Procurement Pricing Benchmarks Settle at $0.26/W DDP",
    country: "USA 🇺🇸",
    countryFlag: "🇺🇸",
    countryName: "USA",
    category: "Pricing & CAPEX Benchmarks",
    subType: "SOLAR PV EQUIPMENT",
    metricData: {
      metricType: "EQUIPMENT PRICE",
      value: "$0.26",
      currency: "USD",
      unit: "/ Watt",
      detail: "N-Type TOPCon Solar Module (DDP US Port)",
    },
    summary:
      "Domestic content tax credit guidelines and utility procurement reports indicate US utility solar module delivered pricing averaging $0.26/W DDP, while total installed project CAPEX holds at $1.08/W ($1.08M/MW).",
    source: "Source: Wood Mackenzie Power & Renewables",
    date: "05 August 2026",
    url: "https://www.woodmac.com",
  },
  {
    id: "news-saudi-1",
    title: "Saudi SPPC & ACWA Power Announce 3.7 GW NREAP Round 5 Solar PV Auction Tariff at $0.0128/kWh",
    country: "Saudi Arabia 🇸🇦",
    countryFlag: "🇸🇦",
    countryName: "SAUDI ARABIA",
    category: "Solar PV & Projects",
    subType: "SOLAR PROJECT",
    auctionScope: {
      capacity: "3,700 MW (3.7 GW)",
      authority: "Saudi Power Procurement Company (SPPC)",
      auctionRound: "NREAP Round 5",
      winningBid: "$0.0128 / kWh ($12.80/MWh)",
      contractType: "25-Year Sovereign PPA",
      deadline: "Al Sadawi & Al Masa'a Sites",
    },
    summary:
      "Saudi Power Procurement Company (SPPC) awarded 3,700 MW utility solar PV auction scope across Al Sadawi and Al Masa'a sites at a record tariff of $0.0128/kWh ($12.80/MWh), backed by 25-year sovereign PPAs.",
    source: "Source: SPPC / Reuters Energy",
    date: "04 August 2026",
    url: "https://www.reuters.com",
  },
  {
    id: "news-uae-1",
    title: "EWEC Concludes 1.5 GW Khazna Solar PV Tender Scope with 4-Hour Battery Storage Integration",
    country: "UAE 🇦🇪",
    countryFlag: "🇦🇪",
    countryName: "UAE",
    category: "Solar PV & Projects",
    subType: "SOLAR PROJECT",
    auctionScope: {
      capacity: "1,500 MW (1.5 GW)",
      authority: "Emirates Water & Electricity Co (EWEC)",
      auctionRound: "Khazna Solar PV Project",
      winningBid: "$0.0135 / kWh",
      contractType: "30-Year BOO (Build, Own, Operate)",
      deadline: "Q4 2026",
    },
    summary:
      "Emirates Water and Electricity Company (EWEC) finalized commercial terms for the 1,500 MW Khazna Solar PV project in Abu Dhabi, incorporating grid-forming energy storage requirements.",
    source: "Source: EWEC Press Release",
    date: "03 August 2026",
    url: "https://www.ewec.ae",
  },
  {
    id: "news-oman-1",
    title: "Oman Hydrom Announces 1.5 GW Wind & Hybrid Project Tender Scope for Duqm Energy Corridor",
    country: "Oman 🇴🇲",
    countryFlag: "🇴🇲",
    countryName: "OMAN",
    category: "Onshore & Offshore Wind",
    subType: "ONSHORE",
    auctionScope: {
      capacity: "1,500 MW (1.5 GW)",
      authority: "Hydrom Oman",
      auctionRound: "Duqm Wind Phase I",
      winningBid: "$0.024 / kWh Levelized",
      contractType: "47-Year Land Usufruct & Power Agreement",
      deadline: "Commissioning 2028-2029",
    },
    summary:
      "Hydrom launched tender documentation for 1.5 GW onshore wind and green hydrogen power facilities in Oman's Al Wusta region, with commercial operations scheduled for 2028-2029.",
    source: "Source: Oman Hydrom / MEED",
    date: "02 August 2026",
    url: "https://www.hydrom.om",
  },
  {
    id: "news-australia-1",
    title: "AEMO Services Releases 2.5 GW REZ Tender Scope for NSW Wind & Solar Energy Storage Assets",
    country: "Australia 🇦🇺",
    countryFlag: "🇦🇺",
    countryName: "AUSTRALIA",
    category: "Tenders & Scope of Auctions",
    subType: "SOLAR PROJECT",
    auctionScope: {
      capacity: "2,500 MW (2.5 GW)",
      authority: "AEMO Services",
      auctionRound: "NSW EIIA Tender 6",
      winningBid: "A$0.052 / kWh ($34.50/MWh)",
      contractType: "Long-Term Energy Services Agreement (LTESA)",
      deadline: "Q4 2026",
    },
    summary:
      "AEMO Services published technical eligibility rules and financial scope for Tender 6 under the Electricity Infrastructure Investment Act, seeking 2.5 GW of long-duration wind, solar, and BESS capacity.",
    source: "Source: AEMO Services / RenewEconomy",
    date: "01 August 2026",
    url: "https://reneweconomy.com.au",
  },

  // --- ROUND 2 (14 Countries) ---
  {
    id: "news-india-2",
    title: "Utility Solar Turnkey EPC CAPEX Settles at ₹3.45 Crore/MW for 100MW+ Ground-Mounted Projects",
    country: "India 🇮🇳",
    countryFlag: "🇮🇳",
    countryName: "INDIA",
    category: "Pricing & CAPEX Benchmarks",
    subType: "SOLAR PROJECT",
    metricData: {
      metricType: "PROJECT CAPEX",
      value: "₹3.45 Crore",
      currency: "INR",
      unit: "/ MW",
      detail: "Ground-Mounted Solar PV Turnkey EPC (580W+ TOPCon Modules)",
    },
    summary:
      "Commercial techno-commercial audit disclosures show turnkey solar EPC project CAPEX averaging ₹3.45 Cr/MW ($412k/MW) for single-axis tracker projects in Rajasthan and Gujarat.",
    source: "Source: Mercom India Research",
    date: "31 July 2026",
    url: "https://mercomindia.com",
  },
  {
    id: "news-china-2",
    title: "N-Type TOPCon Solar Module & Cell Spot Prices Hold at $0.092/W FOB China Export Ports",
    country: "China 🇨🇳",
    countryFlag: "🇨🇳",
    countryName: "CHINA",
    category: "Pricing & CAPEX Benchmarks",
    subType: "SOLAR PV EQUIPMENT",
    metricData: {
      metricType: "EQUIPMENT PRICE",
      value: "$0.092",
      currency: "USD",
      unit: "/ Watt",
      detail: "N-Type TOPCon 580W+ Bifacial Panel (FOB China)",
    },
    summary:
      "Solar PV equipment spot indices show high-efficiency TOPCon bifacial panel prices holding steady at $0.092/W FOB China ports, while Heterojunction (HJT) solar modules trade at $0.112/W.",
    source: "Source: PV InfoLink / TrendForce",
    date: "30 July 2026",
    url: "https://www.pvinfolink.com",
  },
  {
    id: "news-germany-2",
    title: "German Onshore Wind Installed CAPEX Benchmark Settles at €1,280/kW Across SE3 Grid Corridors",
    country: "Germany 🇩🇪",
    countryFlag: "🇩🇪",
    countryName: "GERMANY",
    category: "Pricing & CAPEX Benchmarks",
    subType: "ONSHORE",
    metricData: {
      metricType: "PROJECT CAPEX",
      value: "€1,280",
      currency: "EUR",
      unit: "/ kW",
      detail: "Onshore 6.X MW Turbine + Substation Balance of Plant",
    },
    summary:
      "Techno-commercial benchmarking across German onshore wind developments shows installed CAPEX averaging €1,280/kW ($1,400/kW) including civil engineering and grid connection fees.",
    source: "Source: BWE / Energiewende Research",
    date: "29 July 2026",
    url: "https://www.wind-energie.de",
  },
  {
    id: "news-spain-2",
    title: "MITECO Opens 1.8 GW Renewable Auction Tender Scope for Onshore Wind & Solar Hybrids",
    country: "Spain 🇪🇸",
    countryFlag: "🇪🇸",
    countryName: "SPAIN",
    category: "Tenders & Scope of Auctions",
    subType: "ONSHORE",
    auctionScope: {
      capacity: "1,800 MW (1.8 GW)",
      authority: "MITECO Spain",
      auctionRound: "REER Round 4",
      winningBid: "€32.10 / MWh Ceiling",
      contractType: "12-Year Pay-as-Bid Offtake Contract",
      deadline: "Q4 2026",
    },
    summary:
      "Spain's Ministry for the Ecological Transition (MITECO) published auction scope for 1.8 GW of hybrid onshore wind and solar PV projects with priority access to grid substations.",
    source: "Source: MITECO Spain / El Periódico de la Energía",
    date: "28 July 2026",
    url: "https://www.miteco.gob.es",
  },
  {
    id: "news-uk-2",
    title: "UK Floating Offshore Wind Procurement CAPEX Benchmarks Settle at £2,450/kW for Celtic Sea Zone",
    country: "United Kingdom 🇬🇧",
    countryFlag: "🇬🇧",
    countryName: "UNITED KINGDOM",
    category: "Pricing & CAPEX Benchmarks",
    subType: "OFFSHORE",
    metricData: {
      metricType: "PROJECT CAPEX",
      value: "£2,450",
      currency: "GBP",
      unit: "/ kW",
      detail: "Floating Offshore Wind Total Installed Project CAPEX",
    },
    summary:
      "UK Crown Estate benchmarking reports show commercial floating offshore wind project CAPEX settling at £2,450/kW ($3,180/kW) for Celtic Sea 300MW test and commercial arrays.",
    source: "Source: ORE Catapult / RenewableUK",
    date: "27 July 2026",
    url: "https://www.renewableuk.com",
  },
  {
    id: "news-france-2",
    title: "French Ministry Releases 1 GW Floating Offshore Wind Tender Scope for Brittany & Mediterranean",
    country: "France 🇫🇷",
    countryFlag: "🇫🇷",
    countryName: "FRANCE",
    category: "Tenders & Scope of Auctions",
    subType: "OFFSHORE",
    auctionScope: {
      capacity: "1,000 MW (1.0 GW)",
      authority: "DGEC France",
      auctionRound: "AO5 & AO6 Floating Wind",
      winningBid: "€85.00 / MWh Target Strike Price",
      contractType: "20-Year CfD Framework",
      deadline: "Q1 2027",
    },
    summary:
      "French Energy Directorate (DGEC) published final qualifying scope for 1 GW floating offshore wind tenders off South Brittany and Gulf of Lion, incorporating strict local port content rules.",
    source: "Source: Ministère de la Transition Énergétique",
    date: "26 July 2026",
    url: "https://www.ecologie.gouv.fr",
  },
  {
    id: "news-sweden-2",
    title: "Swedish Solar PV Utility Project Pipeline Surges Past 4 GW with PPA Bids at SEK 0.42/kWh",
    country: "Sweden 🇸🇪",
    countryFlag: "🇸🇪",
    countryName: "SWEDEN",
    category: "Solar PV & Projects",
    subType: "SOLAR PROJECT",
    metricData: {
      metricType: "PPA / AUCTION TARIFF",
      value: "SEK 0.42",
      currency: "SEK",
      unit: "/ kWh",
      detail: "Ground-Mounted Solar PV Corporate Offtake Agreement",
    },
    summary:
      "Swedish Solar Energy Association confirmed utility solar PV pipeline reaching 4.2 GW with bilateral corporate PPA tariffs discovering SEK 0.42/kWh (€0.036/kWh) in SE3.",
    source: "Source: Svensk Solenergi",
    date: "25 July 2026",
    url: "https://svensksolenergi.se",
  },
  {
    id: "news-turkiye-2",
    title: "Turkish Solar PV Module & Cell Domestic Supply CAPEX Reaches $0.18/W Local Content Benchmark",
    country: "Türkiye 🇹🇷",
    countryFlag: "🇹🇷",
    countryName: "TÜRKIYE",
    category: "Pricing & CAPEX Benchmarks",
    subType: "SOLAR PV EQUIPMENT",
    metricData: {
      metricType: "EQUIPMENT PRICE",
      value: "$0.18",
      currency: "USD",
      unit: "/ Watt",
      detail: "Domestic Turkish-Manufactured TOPCon Solar Module",
    },
    summary:
      "Turkish Energy Market Regulatory Authority (EPDK) published domestic content benchmark pricing for YEKA GES solar projects utilizing local silicon cell manufacturing.",
    source: "Source: EPDK Türkiye",
    date: "24 July 2026",
    url: "https://www.epdk.gov.tr",
  },
  {
    id: "news-denmark-2",
    title: "Danish Onshore Wind Turbine Procurement Contracts Disclose DKK 4,850/kW Equipment Baseline",
    country: "Denmark 🇩🇰",
    countryFlag: "🇩🇰",
    countryName: "DENMARK",
    category: "Pricing & CAPEX Benchmarks",
    subType: "ONSHORE",
    metricData: {
      metricType: "TURBINE PRICE",
      value: "DKK 4,850",
      currency: "DKK",
      unit: "/ kW",
      detail: "Onshore Wind 6.X MW Turbine Supply Package",
    },
    summary:
      "Danish wind turbine supply disclosures reveal OEM onshore wind equipment packages for Jutland projects averaging DKK 4,850/kW (~$700/kW) excluding foundation civil works.",
    source: "Source: Brinckmann / Wind Denmark",
    date: "23 July 2026",
    url: "https://winddenmark.dk",
  },
  {
    id: "news-usa-2",
    title: "US Onshore Wind Project CAPEX Averages $1,320/kW Across ERCOT & MISO Supply Agreements",
    country: "USA 🇺🇸",
    countryFlag: "🇺🇸",
    countryName: "USA",
    category: "Pricing & CAPEX Benchmarks",
    subType: "ONSHORE",
    metricData: {
      metricType: "PROJECT CAPEX",
      value: "$1,320",
      currency: "USD",
      unit: "/ kW",
      detail: "Utility Onshore Wind Total Installed CAPEX",
    },
    summary:
      "Benchmark reports across North American wind developments indicate total installed project CAPEX holding at $1,320/kW including civil engineering, substation, and turbine equipment.",
    source: "Source: Wood Mackenzie Power & Renewables",
    date: "22 July 2026",
    url: "https://www.woodmac.com",
  },
  {
    id: "news-saudi-2",
    title: "Saudi Arabia Energy Ministry Opens 2.5 GW Wind Project Tender Scope for Yanbu & WAAD Al Shamal",
    country: "Saudi Arabia 🇸🇦",
    countryFlag: "🇸🇦",
    countryName: "SAUDI ARABIA",
    category: "Onshore & Offshore Wind",
    subType: "ONSHORE",
    auctionScope: {
      capacity: "2,500 MW (2.5 GW)",
      authority: "Ministry of Energy Saudi Arabia",
      auctionRound: "NREAP Wind Round 6",
      winningBid: "$0.021 / kWh Target Tariff",
      contractType: "25-Year BOO Offtake",
      deadline: "Q4 2026",
    },
    summary:
      "Saudi Ministry of Energy released pre-qualification scope for 2.5 GW onshore wind projects in Northern and Western provinces under the National Renewable Energy Program.",
    source: "Source: Saudi Ministry of Energy / MEED",
    date: "21 July 2026",
    url: "https://www.moenergy.gov.sa",
  },
  {
    id: "news-uae-2",
    title: "Dubai DEWA Discovers $0.0142/kWh Benchmark Tariff in 1 GW Mohammed bin Rashid Solar Phase VI",
    country: "UAE 🇦🇪",
    countryFlag: "🇦🇪",
    countryName: "UAE",
    category: "Tenders & Scope of Auctions",
    subType: "SOLAR PROJECT",
    auctionScope: {
      capacity: "1,000 MW (1.0 GW)",
      authority: "DEWA Dubai",
      auctionRound: "MBR Solar Park Phase VI",
      winningBid: "$0.0142 / kWh",
      contractType: "30-Year PPA with DEWA",
      deadline: "Commissioning 2027",
    },
    summary:
      "Dubai Electricity and Water Authority (DEWA) executed project agreements for 1,000 MW solar PV expansion utilizing 700W+ bifacial modules and single-axis tracking systems.",
    source: "Source: DEWA Press Office",
    date: "20 July 2026",
    url: "https://www.dewa.gov.ae",
  },
  {
    id: "news-oman-2",
    title: "Oman Energy Ministry Releases 1 GW Ibri Solar PV Phase III Tender Scope with BESS Integration",
    country: "Oman 🇴🇲",
    countryFlag: "🇴🇲",
    countryName: "OMAN",
    category: "Tenders & Scope of Auctions",
    subType: "SOLAR PROJECT",
    auctionScope: {
      capacity: "1,000 MW (1.0 GW)",
      authority: "Oman Power & Water Procurement (OPWP)",
      auctionRound: "Ibri III Solar PV + Storage",
      winningBid: "$0.0158 / kWh Tariff",
      contractType: "20-Year BOO Agreement",
      deadline: "Q4 2026",
    },
    summary:
      "Oman Power and Water Procurement Company (OPWP / Nama Power) issued request for proposals for 1,000 MW Ibri III solar PV project with integrated 2-hour battery energy storage.",
    source: "Source: Nama Power / Muscat Daily",
    date: "19 July 2026",
    url: "https://www.namapower.om",
  },
  {
    id: "news-australia-2",
    title: "Australian Offshore Wind Feasibility License Scope Granted for 5 GW Gippsland Coast Zone",
    country: "Australia 🇦🇺",
    countryFlag: "🇦🇺",
    countryName: "AUSTRALIA",
    category: "Onshore & Offshore Wind",
    subType: "OFFSHORE",
    auctionScope: {
      capacity: "5,000 MW (5.0 GW)",
      authority: "DCCEEW Australia",
      auctionRound: "Gippsland Offshore Feasibility License",
      winningBid: "Commercial Feasibility Grant",
      contractType: "7-Year Feasibility & Grid Access License",
      deadline: "VIC Offshore Target 2032",
    },
    summary:
      "Department of Climate Change, Energy, the Environment and Water (DCCEEW) awarded 12 offshore wind feasibility licenses off Victoria's Gippsland coast, enabling 5 GW project development.",
    source: "Source: DCCEEW / RenewEconomy",
    date: "18 July 2026",
    url: "https://www.dcceew.gov.au",
  },
];
