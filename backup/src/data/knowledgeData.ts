export interface ArticleItem {
  id: string;
  title: string;
  category: "Open Access & Commercial" | "Utility Engineering" | "Regulatory & Policy" | "Asset Acquisition & M&A";
  readTime: string;
  date: string;
  author: string;
  summary: string;
  keyTakeaways: string[];
  fullContent: string[];
  isFeatured?: boolean;
}

export interface WhitepaperItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  fileSize: string;
  pages: number;
  format: "PDF Dossier" | "Technical Guide" | "Policy Handbook";
  summary: string;
  highlights: string[];
}

export const KNOWLEDGE_CATEGORIES = [
  "All Topics",
  "Open Access & Commercial",
  "Utility Engineering",
  "Regulatory & Policy",
  "Asset Acquisition & M&A",
] as const;

export const KNOWLEDGE_ARTICLES: ArticleItem[] = [
  {
    id: "art-group-captive-vs-third-party",
    title: "Navigating Group Captive vs. Third-Party Sale Sourcing Models in India",
    category: "Open Access & Commercial",
    readTime: "8 min read",
    date: "August 2026",
    author: "GoWindSun Commercial Structuring Desk",
    isFeatured: true,
    summary:
      "A technical and financial breakdown comparing Group Captive (26% equity, 51% consumption) vs. Third-Party Open Access sale models for C&I off-takers across MH, GJ, RJ, KA, and TN.",
    keyTakeaways: [
      "100% Cross-Subsidy Surcharge (CSS) & Additional Surcharge (AS) exemption under Group Captive rules.",
      "Equity contribution requirement of ~26% of equity capital per MW allocated.",
      "Net per-unit tariff savings of ₹1.80 to ₹3.50/kWh compared to Discom grid tariffs.",
      "Discom NOC approval timelines and banking settlement windows across key industrial states.",
    ],
    fullContent: [
      "Commercial and Industrial (C&I) power off-takers in India consuming high-voltage electricity can optimize their annual energy bill by 20% to 40% through Open Access renewable energy procurement.",
      "Under the Electricity Rules 2005, the Group Captive model mandates that captive power consumers collectively hold at least 26% of the equity share capital in the Special Purpose Vehicle (SPV) project company and consume at least 51% of the total generated electricity on an annual aggregate basis.",
      "By satisfying these dual statutory requirements, off-takers gain full exemption from Cross-Subsidy Surcharge (CSS) and Additional Surcharge (AS), yielding substantially higher per-unit savings compared to Third-Party Sale arrangements where CSS and AS are fully levied by state Discoms.",
      "GoWindSun structures bankable Group Captive SPV frameworks, managing equity subscription, PPA execution, Discom wheeling approvals, and monthly energy accounting reconciliation.",
    ],
  },
  {
    id: "art-cuf-optimization-hybrid-bess",
    title: "Maximizing CUF with Co-Located Wind-Solar Hybrid & BESS Systems",
    category: "Utility Engineering",
    readTime: "12 min read",
    date: "July 2026",
    author: "GoWindSun Engineering & Yield Advisory",
    isFeatured: true,
    summary:
      "Engineering blueprint analyzing diurnal wind-solar generation synergy, shared high-voltage pooling substation design, and Battery Energy Storage System (BESS) integration to achieve 45-50% CUF.",
    keyTakeaways: [
      "Diurnal complementarity: Daytime solar peak matches evening/night-time wind generation peak.",
      "Shared 220kV/400kV transmission line & pooling bay reduces grid CAPEX by 30-40%.",
      "BESS integration enables peak-shaving, DSM compliance, and firm dispatchable green power.",
      "PVSyst solar yield simulation co-optimized with 120m LiDAR wind resource mast data.",
    ],
    fullContent: [
      "Standalone solar or wind power plants face inherent capacity factor limitations (solar CUF ~22-26%, wind CUF ~30-38%). By co-locating solar PV arrays and high-hub wind turbine generators (WTGs) at the same geographic site, developers achieve diurnal generation synergy.",
      "Solar generation peaks during midday hours, whereas coastal and inland wind speeds in states like Gujarat, Rajasthan, and Tamil Nadu peak during late afternoon, evening, and night hours. Co-locating both generators allows maximum utilization of the contracted transmission evacuation capacity.",
      "Shared pooling infrastructure—including 33kV/220kV transformers, circuit breakers, busbars, and transmission bays—significantly lowers infrastructure CAPEX while increasing grid capacity utilization factor (CUF) up to 45-50%.",
      "GoWindSun provides turnkey engineering, PVSyst yield modeling, wind mast data analysis, and BESS dimensioning for utility-scale hybrid assets across India.",
    ],
  },
  {
    id: "art-open-access-charges-wheeling",
    title: "Demystifying Open Access Charges: STU vs. CTU Inter-State Wheeling",
    category: "Open Access & Commercial",
    readTime: "10 min read",
    date: "July 2026",
    author: "GoWindSun Energy Market Services",
    summary:
      "A complete guide to Transmission Charges, Wheeling Losses, Additional Surcharge, Banking Charges, and landing cost calculation for intra-state and inter-state power wheeling.",
    keyTakeaways: [
      "Inter-state CTU ISTS transmission charge waivers for eligible renewable projects.",
      "Intra-state STU wheeling charges (Rs/kWh) and transmission loss deductions (3-5%).",
      "State-wise banking policies: Annual vs. Monthly vs. Peak/Off-Peak banking settlement.",
      "Land landing cost vs. grid distance trade-off matrix.",
    ],
    fullContent: [
      "Understanding the complete breakdown of Open Access charges is critical for evaluating the net delivered cost of green electricity at the consumer's boundary meter.",
      "Intra-State Open Access involves wheeling power through the State Transmission Utility (STU) grid (e.g., MSETCL in Maharashtra, GETCO in Gujarat, KPTCL in Karnataka, RVPNL in Rajasthan, TANGEDCO in Tamil Nadu). Charges include STU transmission charges, Discom wheeling charges, cross-subsidy surcharge, additional surcharge, and state electricity duty.",
      "Inter-State Open Access utilizes the Central Transmission Utility (CTU / PGCIL) grid, connecting projects in high-resource states (e.g., Rajasthan solar or Gujarat wind) to off-takers in neighboring industrial states. ISTS transmission waivers and transmission losses must be dynamically factored into 25-year financial models.",
    ],
  },
  {
    id: "art-ctu-stu-grid-evacuation-blueprint",
    title: "CTU / STU Grid Evacuation & Substation Bay Allocation Blueprint",
    category: "Utility Engineering",
    readTime: "9 min read",
    date: "June 2026",
    author: "GoWindSun Grid & Substation Engineering Desk",
    summary:
      "Step-by-step technical guide for securing 220kV / 400kV / 765kV grid connectivity, transformer MVA sizing, line distance optimization, and ROW clearance.",
    keyTakeaways: [
      "CTU Stage-I and Stage-II connectivity approval workflow under CERC regulations.",
      "STU feasibility application, bay availability check, and system study reports.",
      "Substation transformer MVA capacity headroom analysis (e.g., 2x500MVA or 6x500MVA GSS).",
      "Right-of-Way (ROW) line route survey and private land corridor acquisition strategies.",
    ],
    fullContent: [
      "Securing firm grid evacuation capacity is the primary hurdle in utility-scale renewable power development. A project with identified land cannot proceed without confirmed substation bay allocation and grid feasibility NOC.",
      "This whitepaper details the technical requirements for interfacing with CTU (PGCIL) 220kV/400kV/765kV Grid Sub Stations (GSS) and STU regional pooling stations.",
      "Key engineering parameters include calculating short-circuit fault levels, transformer MVA loading limits, line impedance, harmonic distortion, and reactive power compensation requirements (STATCOM/Capacitor Banks).",
    ],
  },
  {
    id: "art-geoa-rules-state-tracker",
    title: "Green Energy Open Access (GEOA) Rules: State Implementation Tracker",
    category: "Regulatory & Policy",
    readTime: "6 min read",
    date: "June 2026",
    author: "GoWindSun Regulatory Advisory",
    summary:
      "Tracking 100 kW threshold lowering, single-window nodal approval portals, and CERC/SERC regulatory updates across major industrial states.",
    keyTakeaways: [
      "Lowering of Open Access eligibility threshold from 1 MW to 100 kW.",
      "Central Nodal Portal (greenopenaccess.in) for unified approval timeline enforcement.",
      "Standardized cross-subsidy surcharge and additional surcharge caps.",
      "Uniform banking policy provisions for green energy generators and off-takers.",
    ],
    fullContent: [
      "The Ministry of Power's Green Energy Open Access (GEOA) Rules have transformed corporate clean energy procurement in India by reducing the minimum contract demand threshold from 1,000 kW (1 MW) to 100 kW.",
      "This enables mid-sized commercial buildings, manufacturing units, data centers, and hospital chains to directly purchase green power from off-site solar, wind, and hybrid plants.",
      "This briefing tracks state-by-state adoption status, SERC tariff orders, and single-window application workflows for fast-track Open Access approval.",
    ],
  },
  {
    id: "art-shovel-ready-due-diligence-checklist",
    title: "The 4-Point Due Diligence Checklist for Shovel-Ready Renewable Assets",
    category: "Asset Acquisition & M&A",
    readTime: "9 min read",
    date: "May 2026",
    author: "GoWindSun M&A & Advisory Desk",
    summary:
      "A rigorous due diligence framework covering 30-Year Land Title Search, NA Conversion status, Grid Connectivity NOC validity, and STU/CTU Bay Allocation confirmation.",
    keyTakeaways: [
      "30-Year Revenue Land Title Search & encumbrance-free verification.",
      "NA (Non-Agricultural) conversion status and land lease/outright purchase legalities.",
      "Grid Connectivity Permission validity, COD commitment timeline, and bay allotment status.",
      "CTU / STU consultancy fee, connectivity premium (Rs. Lakhs/MW), and GST compliance.",
    ],
    fullContent: [
      "Acquiring shovel-ready renewable energy project opportunities requires rigorous multi-disciplinary due diligence across legal title, regulatory NOCs, grid evacuation, and land encumbrances.",
      "GoWindSun's 4-Point Due Diligence protocol evaluates: 1) State & District Land Bank Title Search, 2) CTU/STU Evacuation Sanctions & Bay Allocation, 3) Statutory Nodal Approvals & Environmental/Forest Clearances, and 4) Commercial Premium Structuring.",
      "This guide helps investors and IPPs avoid costly execution delays and ensure rapid COD (Commercial Operation Date) achievement.",
    ],
  },
];

export interface WhitepaperItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  fileSize: string;
  pages: number;
  format: "PDF Dossier" | "Technical Guide" | "Policy Handbook";
  summary: string;
  highlights: string[];
  fullPaperSections: { heading: string; body: string }[];
}

export const KNOWLEDGE_WHITEPAPERS: WhitepaperItem[] = [
  {
    id: "wp-corporate-renewable-playbook",
    title: "India Corporate Renewable Power Procurement Playbook 2026",
    subtitle: "Strategic Blueprint for C&I Power Off-Takers",
    category: "Open Access & Commercial",
    fileSize: "4.2 MB",
    pages: 36,
    format: "PDF Dossier",
    summary:
      "Comprehensive strategic playbook outlining Group Captive equity structuring, Third-Party Open Access tariffs, Discom wheeling charges, and net electricity cost optimization for corporate consumers.",
    highlights: [
      "State-wise Discom Tariff vs Open Access Landing Cost Matrix",
      "Step-by-step Group Captive 26% Equity & 51% Consumption Legal Framework",
      "Financial ROI, Payback Period & 25-Year PPA Model Templates",
    ],
    fullPaperSections: [
      {
        heading: "1. EXECUTIVE SUMMARY & INDIAN C&I POWER LANDSCAPE",
        body: "Commercial and Industrial (C&I) consumers in India account for over 49% of total electricity consumption nationwide. Facing rising Discom retail grid tariffs (averaging ₹8.00 to ₹11.50/kWh), corporate off-takers are aggressively shifting toward off-site utility-scale solar, wind, and hybrid power procurement. This playbook provides the definitive strategic, legal, and financial roadmap for structuring 25-year corporate power purchase agreements (PPAs).",
      },
      {
        heading: "2. GROUP CAPTIVE REGULATORY FRAMEWORK (RULE 3 OF ELECTRICITY RULES 2005)",
        body: "Under Rule 3 of the Electricity Rules 2005, a power plant qualifies as a Captive Generating Plant (CGP) if captive consumers collectively hold not less than 26% of the equity share capital (with voting rights) in the Special Purpose Vehicle (SPV) and consume at least 51% of the total electricity generated on an annual aggregate basis. Meeting these dual statutory thresholds guarantees complete exemption from Cross-Subsidy Surcharge (CSS) and Additional Surcharge (AS), delivering per-unit savings of ₹1.80 to ₹3.50/kWh.",
      },
      {
        heading: "3. CROSS-SUBSIDY SURCHARGE (CSS) & ADDITIONAL SURCHARGE (AS) MECHANICS",
        body: "State Electricity Regulatory Commissions (SERCs) levy CSS and AS on Third-Party Sale Open Access to protect Discom revenues from high-tariff C&I exit. CSS ranges from ₹1.50 to ₹2.40/kWh depending on voltage level, while AS ranges from ₹0.80 to ₹1.45/kWh. Under Group Captive, the statutory CSS and AS exemption turns off-site renewable power into a lender-grade, bankable asset class with predictable 25-year levelized cost of energy (LCOE).",
      },
      {
        heading: "4. STATE TARIFF COMPARISON MATRIX (MH, GJ, RJ, KA, TN)",
        body: "• Maharashtra (MSEDCL/MSETCL): Industrial Discom Tariff ~₹9.20/kWh | Group Captive Landed ~₹4.90/kWh | Savings: 46.7%\n• Gujarat (GUVNL/GETCO): Industrial Discom Tariff ~₹8.50/kWh | Group Captive Landed ~₹4.70/kWh | Savings: 44.7%\n• Rajasthan (RRC/RVPNL): Industrial Discom Tariff ~₹8.80/kWh | Group Captive Landed ~₹4.60/kWh | Savings: 47.7%\n• Karnataka (BESCOM/KPTCL): Industrial Discom Tariff ~₹8.20/kWh | Group Captive Landed ~₹4.80/kWh | Savings: 41.4%\n• Tamil Nadu (TANGEDCO): Industrial Discom Tariff ~₹8.90/kWh | Group Captive Landed ~₹4.90/kWh | Savings: 44.9%",
      },
      {
        heading: "5. CORPORATE PPA FINANCIAL STRUCTURING & TARIFF MODELS",
        body: "Off-takers can choose between two PPA structures:\n1. Fixed Levelized Tariff Model: A fixed per-unit rate (e.g., ₹4.50/kWh) for 25 years with no escalation, insulating the corporate balance sheet against utility tariff inflation.\n2. Discount-to-Tariff Model: A guaranteed percentage discount (e.g., 25% to 35% below prevailing Discom HT retail tariffs), offering dynamic savings indexed to utility rate adjustments.",
      },
      {
        heading: "6. BANKING SETTLEMENT WINDOWS & ENERGY ACCOUNTING",
        body: "Energy banking provisions permit generators to inject surplus energy into the state grid during off-peak hours and draw it back during peak operations. Banking charges (typically 2% to 8% in-kind or in Rs/kWh) and settlement cycles (monthly in MH/GJ vs. annual in RJ) dictate solar-wind ratio sizing and battery storage requirements.",
      },
      {
        heading: "7. DISCOM NOC WORKFLOW & NODAL SINGLE-WINDOW APPROVALS",
        body: "Securing Open Access permissions involves: 1) Initial Standing Clearance from SLDC, 2) Feasibility & Metering Sanction from STU, 3) SPV Equity Shareholding Audit by Discom/SLDC, and 4) Final Open Access Agreement (OAA) execution. Under Green Energy Open Access (GEOA) rules, nodal approvals must be granted within a mandated 15-day timeline.",
      },
      {
        heading: "8. LEGAL RISK MITIGATION & CHANGE-IN-LAW CLAUSES",
        body: "Bankable corporate PPAs include explicit clauses addressing: Change-in-Law (reimbursing statutory tax or surcharge changes), Force Majeure, Discom Grid Curtailment Compensation, Minimum Off-Take Guarantees (Take-or-Pay), and SPV Equity Buyback mechanisms upon contract expiry.",
      },
      {
        heading: "9. 25-YEAR CASHFLOW ROI & PAYBACK MODEL",
        body: "For a 10 MW Group Captive solar/wind allocation (consuming ~1.8 Crore units annually), average net annual energy savings range between ₹3.5 Crores to ₹5.2 Crores. The initial captive equity investment of ~₹2.6 Crores yields an equity payback period under 8 months, with internal rate of return (IRR) exceeding 32%.",
      },
      {
        heading: "10. CONCLUSION & STRATEGIC IMPLEMENTATION ROADMAP",
        body: "Corporate renewable power procurement is no longer merely an ESG compliance check—it is a mission-critical financial strategy for lowering operating costs. GoWindSun provides turnkey advisory, SPV equity structuring, land/grid development, and 25-year PPA operational management across India.",
      },
    ],
  },
  {
    id: "wp-grid-evacuation-handbook",
    title: "Utility-Scale Grid Evacuation & Substation Engineering Handbook",
    subtitle: "Technical Reference Guide for 220kV / 400kV / 765kV Interconnection",
    category: "Utility Engineering",
    fileSize: "6.8 MB",
    pages: 48,
    format: "Technical Guide",
    summary:
      "Engineering reference manual detailing CTU (PGCIL) and STU substation bay allocations, transformer MVA capacity sizing, short-circuit calculations, and line route survey protocols.",
    highlights: [
      "CTU PGCIL Stage-I & Stage-II Connectivity Workflow",
      "Substation Transformer MVA & Transmission Line Capacity Calculations",
      "Right-of-Way (ROW) Land Corridor Acquisition & Clearance Checklists",
    ],
    fullPaperSections: [
      {
        heading: "1. INTRODUCTION TO HIGH-VOLTAGE INTERCONNECTION IN INDIA",
        body: "Utility-scale solar, wind, and hybrid power plants require firm, non-curtailed electrical transmission capacity. Connecting multi-megawatt generation assets into Central Transmission Utility (CTU / PGCIL) or State Transmission Utility (STU) networks demands rigorous electrical engineering, fault level modeling, and substation bay allocation.",
      },
      {
        heading: "2. CTU PGCIL STAGE-I & STAGE-II CONNECTIVITY PROCEDURES",
        body: "Under CERC Inter-State Transmission System (ISTS) Connectivity Regulations:\n• Stage-I Connectivity: Grants preliminary eligibility to secure grid connectivity based on project capacity and location.\n• Stage-II Connectivity: Requires proof of land ownership/lease (100% boundary secured), financial bank guarantees, and financial closure. Stage-II awards firm evacuation bay allotment at 220kV, 400kV, or 765kV ISTS substations.",
      },
      {
        heading: "3. STU REGIONAL POOLING SUBSTATION BAY ALLOTMENT WORKFLOW",
        body: "Connecting to STU grids (e.g., GETCO, MSETCL, RVPNL, KPTCL, TANGEDCO) involves a comprehensive Load Flow Study (LFS) and Short Circuit Study conducted by the State Nodal Agency. Feasibility reports evaluate thermal conductor ratings, busbar short-circuit withstand capacity (40kA/63kA for 1s/3s), and voltage regulation.",
      },
      {
        heading: "4. TRANSFORMER MVA CAPACITY & SHORT-CIRCUIT CALCULATIONS",
        body: "Power transformer sizing guidelines:\n• 33kV / 110kV Pooling: 25 MVA to 50 MVA Power Transformers\n• 33kV / 220kV Interconnection: 100 MVA, 160 MVA, or 315 MVA Auto-Transformers\n• 220kV / 400kV ISTS Pooling: 500 MVA (3x166.6 MVA single-phase units) or 1500 MVA GSS banks\nShort-circuit calculations ensure that prospective fault currents do not exceed circuit breaker breaking capacities.",
      },
      {
        heading: "5. TRANSMISSION LINE CONDUCTOR SIZING & LOSS MINIMIZATION",
        body: "Selection of overhead transmission conductors (ACSR Panther, ACSR Zebra, AL59, HTLS conductors):\n• 33kV Lines: Up to 15 MW capacity over <10 km\n• 110kV / 132kV Lines: Up to 80 MW capacity over <25 km\n• 220kV Double Circuit (D/C) Lines: Up to 300 MW capacity over <40 km\n• 400kV D/C Lines: Up to 1200 MW capacity over long-haul corridors\nHigh-Temperature Low-Sag (HTLS) conductors allow 1.8x power transfer over existing Right-of-Way corridors.",
      },
      {
        heading: "6. RIGHT-OF-WAY (ROW) CORRIDOR SURVEY & CLEARANCE PROTOCOLS",
        body: "Transmission line alignment requires detailed DGPS (Differential Global Positioning System) and Drone LiDAR surveys. ROW width statutory requirements:\n• 66kV Line ROW: 18 meters\n• 110kV / 132kV Line ROW: 27 meters\n• 220kV Line ROW: 35 meters\n• 400kV Line ROW: 46 meters\n• 765kV Line ROW: 64 meters\nSecuring crop/tree compensation agreements and tower foundation land permissions prevents execution delays.",
      },
      {
        heading: "7. STATCOM, CAPACITOR BANKS & REACTIVE POWER COMPENSATION",
        body: "CERC and CEA technical standards mandate strict grid voltage and reactive power management. Solar inverters and wind WTG converters must operate between 0.95 leading to 0.95 lagging power factor. Dynamic Reactive Power Compensation via STATCOMs or switched shunt capacitor banks maintains power factor compliance at the Interconnection Point.",
      },
      {
        heading: "8. PROTECTION SCHEMES & SCADA TELEMETRY INTEGRATION",
        body: "Substation protection engineering includes Line Differential Protection (87L), Distance Protection (21), Transformer Differential (87T), Overcurrent & Earth Fault (50/51/50N/51N), and Breaker Failure (50BF). Real-time telemetry via IEC 60870-5-104 or DNP3 protocols transmits data to State Load Despatch Centres (SLDC) and RLDC.",
      },
      {
        heading: "9. STATUTORY CLEARANCES CHECKLIST",
        body: "Mandatory statutory approvals before energization:\n1. CEA (Central Electricity Authority) Inspectorate Energization Approval\n2. Aviation Clearance from AAI (Airport Authority of India) for high-rise towers/WTGs\n3. Forest & Wildlife NOC for line corridors traversing forest boundaries\n4. PTCC (Power & Telecommunication Coordination Committee) Clearance\n5. Railway & Highway Crossing Sanctions",
      },
      {
        heading: "10. CONCLUSION & TURNKEY EXECUTION BLUEPRINT",
        body: "Grid evacuation engineering is the backbone of utility-scale renewable assets. GoWindSun provides complete turnkey substation EPC, transmission line construction, CTU/STU liaisoning, and SCADA integration across India.",
      },
    ],
  },
  {
    id: "wp-hybrid-cuf-optimization",
    title: "Wind-Solar Hybrid Co-Location & Yield Optimization Whitepaper",
    subtitle: "Achieving 45-50% CUF via Diurnal Synergy & BESS Integration",
    category: "Utility Engineering",
    fileSize: "5.1 MB",
    pages: 32,
    format: "PDF Dossier",
    summary:
      "In-depth technical whitepaper on diurnal wind-solar generation synergy, PVSyst and 120m LiDAR resource co-optimization, shared pooling CAPEX savings, and BESS dimensioning.",
    highlights: [
      "Diurnal Generation Synergy Data from GJ, RJ & TN Renewable Corridors",
      "Shared 220kV Pooling Substation & Busbar CAPEX Optimization",
      "BESS Peak Shifting & QCA / DSM Forecasting Penalty Reduction",
    ],
    fullPaperSections: [
      {
        heading: "1. EXECUTIVE OVERVIEW OF HYBRID ENERGY ECONOMICS",
        body: "Standalone solar PV plants generate power during daylight hours with an average Annual Capacity Utilization Factor (CUF) of 22% to 26%. Standalone wind farms achieve CUFs of 32% to 38%. Combining wind turbines and solar PV arrays at the same location—utilizing shared evacuation infrastructure—increases annual plant CUF to 45-50%, optimizing transmission bay utilization and dramatically lowering Levelized Cost of Energy (LCOE).",
      },
      {
        heading: "2. DIURNAL GENERATION SYNERGY & RESOURCE DATA",
        body: "Resource analysis across India's top renewable corridors (Kutch in Gujarat, Jaisalmer in Rajasthan, and Tuticorin/Tirunelveli in Tamil Nadu) reveals strong complementary generation curves:\n• Solar Peak: 10:00 AM to 03:30 PM (Solar GHI ~1,950 to 2,050 kWh/m²)\n• Wind Peak: 04:30 PM to 07:00 AM (Mean annual wind speeds 7.2 to 8.5 m/s at 120m hub height)\nBy sizing solar DC capacity and wind AC capacity appropriately, generation overlap at peak transmission capacity remains under 4-6%, which can be easily absorbed or stored.",
      },
      {
        heading: "3. TRANSMISSION CAPACITY UTILIZATION FACTOR (CUF) MAXIMIZATION",
        body: "For a 100 MW contracted grid evacuation capacity, a standalone 100 MW solar plant evacuates ~210 million units (kWh) per year. A 100 MW Wind-Solar Hybrid plant (e.g., 75 MW Solar + 50 MW Wind) evacuates over 390 million units annually through the exact same 100 MW evacuation bay, doubling the revenue throughput per MW of grid infrastructure.",
      },
      {
        heading: "4. SHARED 220kV POOLING SUBSTATION & CAPEX REDUCTION",
        body: "Co-locating wind and solar assets delivers 25% to 35% CAPEX savings in balance-of-plant (BOP) infrastructure:\n• Shared 33kV/220kV Power Transformers & Circuit Breakers\n• Single Transmission Line Corridor to STU/CTU Substation\n• Integrated Control Room, SCADA, & Civil Infrastructure\n• Shared O&M Staff & Security Footprint",
      },
      {
        heading: "5. PVSYST SOLAR YIELD & 120M LIDAR WIND DATA CO-OPTIMIZATION",
        body: "Yield estimation requires joint simulation modeling. Solar yield is modeled in PVSyst using 3D shadow analysis for bifacial modules on single-axis trackers. Wind yield is calculated using WAsP/WindPRO based on 12-24 month 120m/140m LiDAR mast measurements. Micro-siting algorithms ensure solar arrays do not cast shadows on WTG maintenance pads or incur wake losses.",
      },
      {
        heading: "6. BATTERY ENERGY STORAGE SYSTEM (BESS) DIMENSIONING",
        body: "Integrating a Battery Energy Storage System (BESS) converts variable hybrid power into Firm and Dispatchable Renewable Energy (FDRE). Technical parameters:\n• Chemistry: Lithium Iron Phosphate (LFP) for high cycle life (>6,000 cycles at 80% DoD) and thermal stability.\n• C-Rate: 0.5C to 1C battery sizing for 2-hour to 4-hour peak duration shifting.\n• Inverter/PCS: Bi-directional Power Conversion System with grid-forming capability.",
      },
      {
        heading: "7. BESS PEAK SHAVING & ARBITRAGE FINANCIAL MODELING",
        body: "BESS absorbs excess solar/wind generation during mid-day or off-peak periods when grid transmission is constrained, and dispatches it during peak evening hours (06:00 PM to 10:00 PM) when Discom peak tariffs commands a ₹2.50 to ₹4.00/kWh premium under Time-of-Day (ToD) tariff structures.",
      },
      {
        heading: "8. QCA SCHEDULING & DSM PENALTY REDUCTION",
        body: "Under CERC Deviation Settlement Mechanism (DSM) regulations, generators face financial penalties if actual generation deviates by >10% from scheduled generation. Hybrid plants significantly smooth short-term cloud cover or wind gust volatility, reducing forecasting error below 4% and minimizing QCA penalties.",
      },
      {
        heading: "9. ENVIRONMENTAL & MICRO-CLIMATE IMPACT ASSESSMENT",
        body: "Hybrid plants minimize total land footprint per MWh delivered. Environmental due diligence includes bird/bat collision monitoring, acoustic noise propagation modeling (<45 dB at boundary), and soil stabilization beneath solar panels to prevent erosion.",
      },
      {
        heading: "10. CONCLUSION & TURNKEY HYBRID DEVELOPMENT ROADMAP",
        body: "Wind-Solar Hybrid infrastructure with optional BESS storage is the gold standard for utility-scale clean power. GoWindSun offers full EPC, micro-siting yield optimization, shared substation construction, and 25-year operations management across India.",
      },
    ],
  },
  {
    id: "wp-open-access-banking-policy-matrix",
    title: "State-wise Open Access Banking Policy & Wheeling Tariff Handbook",
    subtitle: "Regulatory Matrix across MH, GJ, RJ, KA & TN",
    category: "Regulatory & Policy",
    fileSize: "3.9 MB",
    pages: 28,
    format: "Policy Handbook",
    summary:
      "Authoritative regulatory compilation analyzing CERC and SERC tariff orders, Open Access wheeling charges, transmission loss deductions, and banking settlement rules across top industrial states.",
    highlights: [
      "Side-by-side Regulatory Tariff Matrix across 5 Key States",
      "Banking Charge Settlement Windows (Monthly vs Annual)",
      "Green Energy Open Access (GEOA) 100 kW Threshold Rules",
    ],
    fullPaperSections: [
      {
        heading: "1. EXECUTIVE REGULATORY SUMMARY & GEOA RULES 2022/2024",
        body: "The Ministry of Power's Green Energy Open Access (GEOA) Rules have reshaped state-level Open Access frameworks across India. Key national mandates include lowering Open Access eligibility to 100 kW, establishing a Central Nodal Portal for 15-day application turnaround, standardizing cross-subsidy surcharge calculation, and prohibiting arbitrary Discom load-curtailment.",
      },
      {
        heading: "2. 100 KW ELIGIBILITY THRESHOLD LOWERING & NODAL PORTAL",
        body: "Previously, Open Access was restricted to consumers with contract demand >1,000 kW (1 MW). Lowering the limit to 100 kW unlocks Open Access for mid-market commercial buildings, cold storage units, auto-ancillary factories, and textile hubs. Applications processed via greenopenaccess.in are deemed approved if nodal agencies do not respond within 15 days.",
      },
      {
        heading: "3. STATE POLICY MATRIX: MAHARASHTRA (MERC / MSETCL / MSEDCL)",
        body: "• STU Transmission Charge: ₹0.38 / kWh\n• Discom Wheeling Charge (HT): ₹0.72 / kWh\n• Transmission & Distribution Loss: 3.18% (Transmission) + 6.0% (Wheeling)\n• Banking Charges: 2% in-kind energy deduction\n• Banking Settlement Window: Monthly billing cycle; unutilized energy lapses or is purchased at APPC rates.",
      },
      {
        heading: "4. STATE POLICY MATRIX: GUJARAT (GERC / GETCO / GUVNL)",
        body: "• STU Transmission Charge: ₹0.41 / kWh\n• Discom Wheeling Charge: ₹0.19 / kWh\n• Wheeling Losses: 3.5% for 66kV and above\n• Banking Charges: ₹1.50 / unit for energy banked under captive models\n• Banking Settlement Window: Monthly settlement; peak-hour banking restricted during high-demand windows.",
      },
      {
        heading: "5. STATE POLICY MATRIX: RAJASTHAN (RERC / RVPNL / DISCOMS)",
        body: "• STU Transmission Charge: ₹0.28 / kWh\n• Discom Wheeling Charge: ₹0.22 / kWh\n• Transmission Losses: 3.4%\n• Banking Charges: 5% in-kind deduction\n• Banking Settlement Window: Annual settlement cycle ending March 31st; ideal for seasonal solar/wind generation profile balancing.",
      },
      {
        heading: "6. STATE POLICY MATRIX: KARNATAKA (KERC / KPTCL / BESCOM)",
        body: "• STU Transmission Charge: ₹0.35 / kWh\n• Discom Wheeling Charge: ₹0.48 / kWh\n• Transmission Losses: 3.25%\n• Banking Charges: 2% in-kind deduction\n• Banking Settlement Window: Monthly cycle; stringent peak-hour injection/drawal constraints for solar generators.",
      },
      {
        heading: "7. STATE POLICY MATRIX: TAMIL NADU (TNERC / TANTRANSCO / TANGEDCO)",
        body: "• STU Transmission Charge: ₹0.44 / kWh\n• Discom Wheeling Charge: ₹0.85 / kWh\n• Transmission & Distribution Loss: 4.0%\n• Banking Charges: 14% for wind assets (traditional policy) / 6% for new solar/wind assets under GEOA rules\n• Banking Settlement Window: Annual banking for eligible wind assets.",
      },
      {
        heading: "8. BANKING CHARGES, RESTRICTIONS & MONTHLY RECONCILIATION",
        body: "Energy banking acts as a virtual battery provided by state Discoms. However, SERCs are increasingly replacing annual banking with monthly settlement or peak/off-peak Time-of-Day (ToD) restrictions. Off-takers must size solar and wind assets to match their hourly load curve or incorporate BESS storage.",
      },
      {
        heading: "9. CROSS-SUBSIDY SURCHARGE (CSS) & ADDITIONAL SURCHARGE CAPS",
        body: "GEOA rules cap Cross-Subsidy Surcharge at 20% of the HT retail Discom tariff. Additional Surcharge is being phased out for green energy consumers who pay fixed Discom demand charges, removing unfair double-taxation on Open Access power.",
      },
      {
        heading: "10. CONCLUSION & STRATEGIC POLICY OUTLOOK",
        body: "State Open Access policies evolve rapidly with new SERC tariff orders. GoWindSun's Regulatory Desk monitors daily policy notifications, providing corporate off-takers with real-time tariff landing cost audits and regulatory compliance monitoring across India.",
      },
    ],
  },
];
