export interface MarketIntelligenceItem {
  id: string;
  title: string;
  category: "equipment-prices" | "tenders" | "winning-bids" | "tariffs" | "procurement" | "market-trends";
  categoryLabel: string;
  region: "INDIA" | "CHINA" | "EUROPE" | "USA" | "GLOBAL";
  regionLabel: string;
  flagEmoji: string;
  date: string;
  updatedTimestamp: string;
  summary: string;
  keyMetric: {
    label: string;
    value: string;
    unit?: string;
    change?: string;
    isPositive?: boolean;
  };
  details: {
    overview: string;
    specifications?: { label: string; value: string }[];
    winningBidders?: { name: string; capacity: string; tariff: string }[];
    marketImpact: string;
    source: string;
  };
  tags: string[];
  featured?: boolean;
}

export interface EquipmentPriceIndex {
  id: string;
  name: string;
  category: "solar" | "wind" | "storage" | "substation";
  region: string;
  currentPrice: string;
  unit: string;
  periodTrend: string; // e.g. "-2.4% QoQ"
  isDecreasePositive: boolean; // true if price drop is good for developers
  historicalData: { month: string; price: number }[];
  description: string;
}

export const EQUIPMENT_PRICE_INDICES: EquipmentPriceIndex[] = [
  {
    id: "solar-topcon-module",
    name: "N-Type TOPCon Solar PV Module",
    category: "solar",
    region: "Global / China FOB",
    currentPrice: "$0.092",
    unit: "/Wp",
    periodTrend: "-3.1% QoQ",
    isDecreasePositive: true,
    historicalData: [
      { month: "Q3 2025", price: 0.104 },
      { month: "Q4 2025", price: 0.098 },
      { month: "Q1 2026", price: 0.095 },
      { month: "Q2 2026", price: 0.092 },
    ],
    description: "Benchmark FOB price for tier-1 N-Type TOPCon bifacial glass-glass modules (580W-620W) ex-China ports.",
  },
  {
    id: "wind-onshore-turbine",
    name: "Onshore Wind Turbine Generator (3.X - 5.X MW)",
    category: "wind",
    region: "India Ex-Works",
    currentPrice: "₹4.15",
    unit: "Cr / MW",
    periodTrend: "-1.8% QoQ",
    isDecreasePositive: true,
    historicalData: [
      { month: "Q3 2025", price: 4.35 },
      { month: "Q4 2025", price: 4.25 },
      { month: "Q1 2026", price: 4.20 },
      { month: "Q2 2026", price: 4.15 },
    ],
    description: "Average equipment Capex per MW for 3.3MW - 4.2MW onshore wind turbines including tower and nacelle in India.",
  },
  {
    id: "bess-container-lfp",
    name: "Utility-Scale LFP Battery Storage System",
    category: "storage",
    region: "Global Benchmark",
    currentPrice: "$64.50",
    unit: "/kWh",
    periodTrend: "-5.2% QoQ",
    isDecreasePositive: true,
    historicalData: [
      { month: "Q3 2025", price: 78.0 },
      { month: "Q4 2025", price: 72.5 },
      { month: "Q1 2026", price: 68.0 },
      { month: "Q2 2026", price: 64.5 },
    ],
    description: "2-hour and 4-hour containerized DC battery energy storage system (BESS) pack price utilizing LFP chemistry.",
  },
  {
    id: "wind-turbine-china",
    name: "China Domestic Onshore Turbine Bids",
    category: "wind",
    region: "China Domestic",
    currentPrice: "$182",
    unit: "/kW",
    periodTrend: "-2.0% QoQ",
    isDecreasePositive: true,
    historicalData: [
      { month: "Q3 2025", price: 198 },
      { month: "Q4 2025", price: 192 },
      { month: "Q1 2026", price: 186 },
      { month: "Q2 2026", price: 182 },
    ],
    description: "Average winning bid price for 6MW+ onshore wind turbine supply contracts across major Chinese state power auctions.",
  },
];

export const MARKET_INTELLIGENCE_ITEMS: MarketIntelligenceItem[] = [
  // --- INDIA ---
  {
    id: "seci-fdre-6-results",
    title: "SECI 1,200 MW Firm & Dispatchable RE (FDRE-VI) Auction Discloses Record L1 Tariff",
    category: "winning-bids",
    categoryLabel: "Winning Bids & Tariffs",
    region: "INDIA",
    regionLabel: "India",
    flagEmoji: "🇮🇳",
    date: "August 12, 2026",
    updatedTimestamp: "2026-08-12",
    featured: true,
    summary: "Solar Energy Corporation of India (SECI) announced tariff discovery for 1,200 MW FDRE-VI with mandatory 90% peak monthly availability. Winning L1 bids settled at ₹4.62/kWh with integrated BESS & Wind support.",
    keyMetric: {
      label: "Winning L1 Tariff",
      value: "₹4.62",
      unit: "/kWh",
      change: "-4.5% vs FDRE-V",
      isPositive: true,
    },
    details: {
      overview: "SECI completed the tariff auction for 1,200 MW Firm & Dispatchable Renewable Energy (FDRE) Tranche VI. The tender requires developers to supply 100% renewable power with peak hour dispatchability backed by solar PV, wind, and minimum 4-hour battery storage energy capacity.",
      specifications: [
        { label: "Tender Name", value: "SECI FDRE Tranche VI (1,200 MW)" },
        { label: "Peak Demand Dispatchability", value: "Minimum 90% Monthly Availability" },
        { label: "PPA Tenure", value: "25 Years with ISTS Grid Access" },
        { label: "Target Offtakers", value: "State Discoms across Western & Southern Grid" },
      ],
      winningBidders: [
        { name: "Acme Cleantech Solutions", capacity: "300 MW", tariff: "₹4.62 / kWh" },
        { name: "Sembcorp Green Infra", capacity: "300 MW", tariff: "₹4.63 / kWh" },
        { name: "Hero Future Energies", capacity: "250 MW", tariff: "₹4.65 / kWh" },
        { name: "Avaada Energy", capacity: "350 MW", tariff: "₹4.68 / kWh" },
      ],
      marketImpact: "Demonstrates growing bankability of round-the-clock (RTC) and firm dispatchable RE in India. The L1 tariff reduction reflects falling LFP battery storage prices ($64.50/kWh) and higher capacity utilization factors (CUF) exceeding 48% via co-located solar-wind assets.",
      source: "SECI Official Tender Results Bulletin",
    },
    tags: ["FDRE", "SECI", "BESS Storage", "L1 Tariff", "Solar-Wind Hybrid"],
  },
  {
    id: "guvnl-phase-xxv-solar-results",
    title: "GUVNL 500 MW Solar Phase XXV Auction Discovers L1 Tariff of ₹2.51/kWh in Gujarat",
    category: "winning-bids",
    categoryLabel: "Winning Bids & Tariffs",
    region: "INDIA",
    regionLabel: "India",
    flagEmoji: "🇮🇳",
    date: "August 02, 2026",
    updatedTimestamp: "2026-08-02",
    featured: false,
    summary: "Gujarat Urja Vikas Nigam Limited (GUVNL) concluded its 500 MW standalone solar tariff auction with greenfield grid connectivity. Lowest tariff awarded at ₹2.51/kWh for projects in Kutch RE Park.",
    keyMetric: {
      label: "L1 Solar Tariff",
      value: "₹2.51",
      unit: "/kWh",
      change: "Competitive L1",
      isPositive: true,
    },
    details: {
      overview: "GUVNL Phase XXV standalone solar tender attracted bids exceeding 2.8 GW for the offered 500 MW greenfield capacity. Low land acquisition costs in Gujarat solar parks and falling PV module pricing enabled highly bankable tariff rates.",
      specifications: [
        { label: "Tender Name", value: "GUVNL Solar Phase XXV (500 MW)" },
        { label: "Location", value: "Kutch Solar Park, Gujarat" },
        { label: "PPA Tenure", value: "25 Years with GUVNL" },
        { label: "CUF Requirement", value: "Minimum 24% Annual CUF" },
      ],
      winningBidders: [
        { name: "NTPC Renewable Energy", capacity: "200 MW", tariff: "₹2.51 / kWh" },
        { name: "SJVN Green Energy", capacity: "150 MW", tariff: "₹2.52 / kWh" },
        { name: "Torrent Power", capacity: "150 MW", tariff: "₹2.53 / kWh" },
      ],
      marketImpact: "Reinforces Gujarat's position as India's premier low-cost renewable generation corridor with robust state transmission utility (GETCO) pooling substation infrastructure.",
      source: "GUVNL Bidding Portal",
    },
    tags: ["GUVNL", "Solar Tariff", "Gujarat", "L1 Bid", "Kutch RE Park"],
  },
  {
    id: "ntpc-wind-1000mw-tender",
    title: "NTPC Issues 1,000 MW ISTS-Connected Wind Power Project Tender with Substation Interconnection",
    category: "tenders",
    categoryLabel: "Tenders & Auctions",
    region: "INDIA",
    regionLabel: "India",
    flagEmoji: "🇮🇳",
    date: "July 29, 2026",
    updatedTimestamp: "2026-07-29",
    featured: false,
    summary: "NTPC Renewable Energy invites bids for 1,000 MW wind energy capacity connected to Inter-State Transmission System (ISTS) in Gujarat, Karnataka, and Tamil Nadu.",
    keyMetric: {
      label: "Tender Capacity",
      value: "1,000",
      unit: "MW",
      change: "Open Tender",
      isPositive: true,
    },
    details: {
      overview: "NTPC REL has issued a global competitive bidding document for setting up 1,000 MW ISTS-connected wind projects. Developers are responsible for land acquisition, micrositing, turbine procurement, and 220kV pooling substation construction.",
      specifications: [
        { label: "Issuing Authority", value: "NTPC Renewable Energy Limited" },
        { label: "Capacity Offered", value: "1,000 MW Onshore Wind" },
        { label: "Eligible States", value: "Gujarat, Karnataka, Tamil Nadu" },
        { label: "Submission Deadline", value: "September 15, 2026" },
      ],
      marketImpact: "Drives demand for 3.3MW to 4.2MW high hub-height wind turbine generators (WTGs) across key windy resource corridors in Western and Southern India.",
      source: "NTPC REL Procurement Portal",
    },
    tags: ["NTPC", "Wind Tender", "ISTS Grid", "WTG Procurement", "Onshore Wind"],
  },

  // --- CHINA ---
  {
    id: "china-pv-module-pricing-q3",
    title: "China N-Type TOPCon Cell & Module Spot Prices Stabilize Near $0.092/Wp Amid Export Demand",
    category: "equipment-prices",
    categoryLabel: "Equipment Prices",
    region: "CHINA",
    regionLabel: "China",
    flagEmoji: "🇨🇳",
    date: "August 10, 2026",
    updatedTimestamp: "2026-08-10",
    featured: true,
    summary: "Tier-1 Chinese solar manufacturers report FOB module prices hovering between $0.088 and $0.094/Wp. Cell efficiencies for N-Type TOPCon 210mm rect-wafers hit 26.2% in mass production.",
    keyMetric: {
      label: "FOB Module Price",
      value: "$0.092",
      unit: "/Wp",
      change: "Stable (-0.4%)",
      isPositive: true,
    },
    details: {
      overview: "Price index tracking across major production hubs in Jiangsu, Zhejiang, and Anhui indicates wafer and cell prices entering a stabilization phase after 18 months of sharp margin compression.",
      specifications: [
        { label: "Wafer Format", value: "N-Type M10 / G12 Rectangular" },
        { label: "Average Cell Efficiency", value: "26.15% - 26.35%" },
        { label: "Glass Specs", value: "2.0mm + 2.0mm Bifacial Dual Glass" },
        { label: "Bifaciality Factor", value: "80% ± 5%" },
      ],
      marketImpact: "Low solar PV module prices continue to accelerate global utility-scale solar CAPEX efficiency, benefiting IPP project IRRs across emerging markets in Southeast Asia, Middle East, and Latin America.",
      source: "China Photovoltaic Industry Association (CPIA)",
    },
    tags: ["TOPCon", "PV Module", "China Export", "Solar Capex", "Polysilicon"],
  },
  {
    id: "china-offshore-wind-16mw-procurement",
    title: "China Huaneng Group Secures 16MW+ Offshore Turbine Supply Bids at Record Low $390/kW",
    category: "procurement",
    categoryLabel: "Equipment Procurement",
    region: "CHINA",
    regionLabel: "China",
    flagEmoji: "🇨🇳",
    date: "August 04, 2026",
    updatedTimestamp: "2026-08-04",
    featured: false,
    summary: "China State Power procurement for 2.4 GW Fujian offshore wind park awards 16MW - 18MW direct-drive turbine supply contracts at average ex-factory price of $390/kW ($390,000/MW).",
    keyMetric: {
      label: "Offshore WTG Bid",
      value: "$390",
      unit: "/kW",
      change: "-6.8% YoY",
      isPositive: true,
    },
    details: {
      overview: "China Huaneng Group's 2.4 GW offshore wind procurement in the Taiwan Strait awarded turbine supply packages to Goldwind, Mingyang, and Shanghai Electric. The 16MW+ platforms feature 260m rotor diameters.",
      specifications: [
        { label: "Procurement Volume", value: "2,400 MW (150 Turbines)" },
        { label: "Turbine Rating", value: "16 MW - 18 MW Direct Drive" },
        { label: "Rotor Diameter", value: "252m - 260m" },
        { label: "Substructure", value: "Jackets & Suction Caissons" },
      ],
      marketImpact: "Demonstrates unprecedented manufacturing scale in Chinese offshore wind turbine manufacturing, lowering levelized cost of energy (LCOE) for deep-water offshore wind development.",
      source: "China Renewable Energy Engineering Institute (CREEI)",
    },
    tags: ["China Offshore", "16MW WTG", "Goldwind", "Mingyang", "Offshore Wind"],
  },

  // --- EUROPE ---
  {
    id: "europe-offshore-wind-auction-2026",
    title: "North Sea Offshore Wind Auction Concludes with Zero-Subsidy Bids for 4.0 GW Capacity",
    category: "tenders",
    categoryLabel: "Tenders & Auctions",
    region: "EUROPE",
    regionLabel: "Europe",
    flagEmoji: "🇪🇺",
    date: "August 08, 2026",
    updatedTimestamp: "2026-08-08",
    featured: false,
    summary: "Denmark and Germany joint North Sea auction allocates 4.0 GW offshore wind zones with negative bidding concessions totaling €1.2 Billion paid to national grid operators for seabed development rights.",
    keyMetric: {
      label: "Allocated Capacity",
      value: "4.0",
      unit: "GW",
      change: "Zero Subsidy",
      isPositive: true,
    },
    details: {
      overview: "European offshore wind developers submitted competitive zero-subsidy bids for four 1.0 GW concessions in the German Bight and Danish North Sea sector. Next-generation 18 MW offshore wind turbines are scheduled for deployment by 2030.",
      specifications: [
        { label: "Auction Zone", value: "North Sea Offshore Hub (N-7.2 & N-9.1)" },
        { label: "Turbine Rating", value: "15 MW - 18 MW Direct Drive" },
        { label: "Seabed Concession Fee", value: "€300M per 1.0 GW Lease" },
        { label: "Target COD", value: "Q4 2030" },
      ],
      winningBidders: [
        { name: "Ørsted & TotalEnergies JV", capacity: "2,000 MW", tariff: "Zero-Subsidy + Concession" },
        { name: "RWE Renewables", capacity: "1,000 MW", tariff: "Zero-Subsidy + Concession" },
        { name: "Vattenfall Wind", capacity: "1,000 MW", tariff: "Zero-Subsidy + Concession" },
      ],
      marketImpact: "Reaffirms confidence in European offshore wind project economics, backed by corporate Virtual PPAs (VPPAs) with European industrial chemical and automotive conglomerates.",
      source: "Bundesnetzagentur & Danish Energy Agency",
    },
    tags: ["Offshore Wind", "North Sea", "Europe", "Zero-Subsidy", "Seabed Lease"],
  },
  {
    id: "europe-corporate-ppa-index-q3",
    title: "European Corporate RE PPA Price Index Eases to €68/MWh Driven by Solar Capture Efficiency",
    category: "tariffs",
    categoryLabel: "Winning Bids & Tariffs",
    region: "EUROPE",
    regionLabel: "Europe",
    flagEmoji: "🇪🇺",
    date: "July 24, 2026",
    updatedTimestamp: "2026-07-24",
    featured: false,
    summary: "Cross-border PPA analytics across Germany, Spain, and France report average 10-year corporate solar and wind PPA contract prices settling at €68.50/MWh.",
    keyMetric: {
      label: "Corporate PPA Rate",
      value: "€68.50",
      unit: "/MWh",
      change: "-3.8% YoY",
      isPositive: true,
    },
    details: {
      overview: "Commercial and industrial (C&I) corporate power purchase agreements (PPAs) in Europe experienced price stabilization following record installations of hybrid solar-wind assets and co-located BESS.",
      specifications: [
        { label: "Benchmark Contract", value: "10-Year Pay-as-Produced PPA" },
        { label: "Spain Solar PPA", value: "€42.00 - €48.00 / MWh" },
        { label: "Germany Wind PPA", value: "€72.00 - €78.00 / MWh" },
        { label: "Top Buyers", value: "Data Centers, Chemicals, Automotive OEMs" },
      ],
      marketImpact: "Facilitates long-term debt financing for European merchant renewable developers without relying on government Feed-in Premium (FiP) schemes.",
      source: "RE-Source Platform & PPA Market Intelligence",
    },
    tags: ["Corporate PPA", "Europe Tariffs", "Virtual PPA", "RE100", "Commercial RE"],
  },

  // --- USA ---
  {
    id: "usa-ira-bess-procurement-q3",
    title: "US Utility-Scale Storage Procurement Surges Following Domestic Content Battery Guidance",
    category: "procurement",
    categoryLabel: "Equipment Procurement",
    region: "USA",
    regionLabel: "USA",
    flagEmoji: "🇺🇸",
    date: "August 05, 2026",
    updatedTimestamp: "2026-08-05",
    featured: false,
    summary: "US IPPs lock in 14 GWh of containerized LFP storage contracts for 2027 delivery, qualifying for the 10% Domestic Content Tax Credit Add-on under the Inflation Reduction Act (IRA).",
    keyMetric: {
      label: "Contracted Storage",
      value: "14.2",
      unit: "GWh",
      change: "+28% YoY",
      isPositive: true,
    },
    details: {
      overview: "Following IRS safe-harbor guidance on domestic battery cell manufacturing, American renewable developers are accelerating BESS procurement to secure Investment Tax Credits (ITC) ranging from 40% to 50%.",
      specifications: [
        { label: "Chemistry", value: "Lithium Iron Phosphate (LFP)" },
        { label: "Domestic Content Bonus", value: "Qualified (+10% ITC Bonus)" },
        { label: "System Duration", value: "4-Hour Storage Systems" },
        { label: "Primary Interconnections", value: "CAISO, ERCOT, and PJM Grids" },
      ],
      marketImpact: "Accelerates local US cell manufacturing investment while driving 4-hour battery storage penetration to firm up intermittent solar PV output in Texas and California.",
      source: "US Clean Power Quarterly Market Report",
    },
    tags: ["US IRA", "BESS", "Domestic Content", "Storage Procurement", "ITC Tax Credit"],
  },
  {
    id: "ercot-solar-bess-ppa-auction",
    title: "ERCOT Market Texas Solar + 4-Hour Storage PPAs Settle at $42.50/MWh Levelized Rate",
    category: "tariffs",
    categoryLabel: "Winning Bids & Tariffs",
    region: "USA",
    regionLabel: "USA",
    flagEmoji: "🇺🇸",
    date: "July 20, 2026",
    updatedTimestamp: "2026-07-20",
    featured: false,
    summary: "Merchant energy storage and solar hybrid power agreements in Texas (ERCOT) achieve record low levelized tariffs of $42.50/MWh, backed by 4-hour battery ancillary market revenue stacking.",
    keyMetric: {
      label: "ERCOT Hybrid Rate",
      value: "$42.50",
      unit: "/MWh",
      change: "Competitive PPA",
      isPositive: true,
    },
    details: {
      overview: "Texas energy market IPPs are deploying co-located solar + BESS microgrids to capture ERCOT real-time market price spikes while fulfilling fixed 15-year corporate hedge contracts.",
      specifications: [
        { label: "Market Region", value: "ERCOT West & South Hubs" },
        { label: "Solar Capacity", value: "250 MW DC" },
        { label: "BESS Capacity", value: "100 MW / 400 MWh LFP" },
        { label: "Interconnection Voltage", value: "345 kV EHV Substation" },
      ],
      marketImpact: "Demonstrates market viability of merchant solar-plus-storage models without mandatory utility long-term PPA guarantees.",
      source: "ERCOT Market Data & FERC Filings",
    },
    tags: ["ERCOT", "Texas Solar", "BESS Hybrid", "Merchant Power", "USA Tariffs"],
  },

  // --- GLOBAL ---
  {
    id: "global-wind-turbine-price-index-2026",
    title: "Global Onshore Wind Turbine OEM Index Falls 2.2% as Supply Chains Normalize",
    category: "equipment-prices",
    categoryLabel: "Equipment Prices",
    region: "GLOBAL",
    regionLabel: "Global",
    flagEmoji: "🌎",
    date: "July 28, 2026",
    updatedTimestamp: "2026-07-28",
    featured: false,
    summary: "Global wind turbine price benchmarks for Western and Asian OEMs show steady easing in Capex per MW, driven by steel price stabilization, optimized 6MW+ platform logistics, and improved turbine availability.",
    keyMetric: {
      label: "Global Turbine Index",
      value: "$760",
      unit: "/kW",
      change: "-2.2% QoQ",
      isPositive: true,
    },
    details: {
      overview: "Analysis of global wind turbine supply contracts across North America, Europe, Asia, and Australia reveals price moderation following the 2023-2024 supply chain inflation cycle.",
      specifications: [
        { label: "Western OEMs Avg", value: "$820 - $890 / kW" },
        { label: "Chinese OEMs Avg (Ex-China)", value: "$480 - $560 / kW" },
        { label: "Rotor Diameters", value: "164m - 182m Onshore Platforms" },
        { label: "Full Service O&M", value: "€32,000 / MW / year" },
      ],
      marketImpact: "Improves financial feasibility for high-capacity factor wind projects in India, Brazil, Australia, and Northern Europe.",
      source: "Global Wind Energy Council (GWEC) & Market Analytics",
    },
    tags: ["Wind Turbine", "Global Index", "OEM Pricing", "Onshore Wind", "Capex"],
  },
  {
    id: "global-polysilicon-spot-index-q3",
    title: "Global Solar Grade Polysilicon Spot Prices Settle at $7.80/kg Across Major Producers",
    category: "equipment-prices",
    categoryLabel: "Equipment Prices",
    region: "GLOBAL",
    regionLabel: "Global",
    flagEmoji: "🌐",
    date: "July 15, 2026",
    updatedTimestamp: "2026-07-15",
    featured: false,
    summary: "Solar-grade polysilicon prices maintain low levels near $7.80/kg, providing sustained cost relief for N-type ingot and wafer manufacturing globally.",
    keyMetric: {
      label: "Polysilicon Spot",
      value: "$7.80",
      unit: "/kg",
      change: "Stable (-1.2%)",
      isPositive: true,
    },
    details: {
      overview: "Global polysilicon production capacity expansion in Inner Mongolia and Xinjiang has maintained high market liquidity, maintaining wafer feedstock costs below historical averages.",
      specifications: [
        { label: "Purity Grade", value: "N-Type High Purity (9N - 11N)" },
        { label: "Granular Poly Share", value: "24% Market Share" },
        { label: "Wafer Consumption", value: "1.9 font-g / Watt" },
      ],
      marketImpact: "Ensures low upstream raw material costs for solar module manufacturers in India, USA, Southeast Asia, and Europe.",
      source: "Global PV Supply Chain Index",
    },
    tags: ["Polysilicon", "Raw Materials", "Solar Supply Chain", "PV Ingot", "Wafer Feedstock"],
  },
];
