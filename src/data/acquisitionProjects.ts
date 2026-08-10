import { AcquisitionProject, StateProjectDataMap, INDIA_STATES } from "@/types/acquisition";

// IMPORTANT: Do NOT invent fictitious project figures or real-world developer claims.
// The placeholders below demonstrate full system functionality for key active states (e.g. Maharashtra, Gujarat, Rajasthan, Tamil Nadu, Karnataka).
// The user will replace these placeholders with authoritative project data.

export const windProjectsData: StateProjectDataMap = {
  "IN-MH": [
    {
      id: "wind-mh-01",
      stateCode: "IN-MH",
      stateName: "Maharashtra",
      district: "Satara / Sangli Region",
      projectName: "Wind Asset Opportunity - Maharashtra Corridor [SAMPLE DATA]",
      projectType: "wind",
      availableLand: "Identification & Leasehold Support Available",
      landArea: "Sample Land Parcel (Data to be provided)",
      potentialCapacity: "Sample MW Capacity (Data to be provided)",
      technology: "High-Hub Height Wind Turbine Generator (WTG) Platform",
      developmentStage: "Greenfield / DPR Stage",
      gridConnectivity: "STU Substation Interconnection Corridor",
      substation: "Nearby 132kV / 220kV Substation Corridor",
      transmissionAvailability: "Subject to MSETCL Bay Allocation",
      location: "Western Maharashtra Energy Zone",
      acquisitionStatus: "Open for Acquisition / Joint Development",
      additionalNotes: "This is a structured placeholder object. Authoritative acquisition metrics and parcel details will be inserted upon data provision.",
    },
  ],
  "IN-GJ": [
    {
      id: "wind-gj-01",
      stateCode: "IN-GJ",
      stateName: "Gujarat",
      district: "Kutch / Saurashtra Region",
      projectName: "Wind Asset Opportunity - Gujarat Corridor [SAMPLE DATA]",
      projectType: "wind",
      availableLand: "Identified Greenfield Land Sites",
      landArea: "Sample Parcel Area (Data to be provided)",
      potentialCapacity: "Sample MW Capacity (Data to be provided)",
      technology: "High-CUF Wind Turbine Platform",
      developmentStage: "Feasibility / Site Screening Stage",
      gridConnectivity: "GETCO / ISTS Evacuation Corridor",
      substation: "Nearby 220kV / 400kV Pooling Station",
      transmissionAvailability: "Subject to CTU / STU Bay Allotment",
      location: "Kutch / Dwarka High-Wind Corridor",
      acquisitionStatus: "Available for Strategic Investor",
      additionalNotes: "Structured placeholder ready for actual Gujarat wind project datasets.",
    },
  ],
  "IN-RJ": [
    {
      id: "wind-rj-01",
      stateCode: "IN-RJ",
      stateName: "Rajasthan",
      district: "Jaisalmer / Barmer Corridor",
      projectName: "Wind Asset Opportunity - Rajasthan High-Wind Zone [SAMPLE DATA]",
      projectType: "wind",
      availableLand: "Land Identification & RoW Clearance Ready",
      landArea: "Sample Hectare Parcel (Data to be provided)",
      potentialCapacity: "Sample Capacity Potential (Data to be provided)",
      technology: "Lattice Met Mast Verified WTG Sites",
      developmentStage: "WRA & Land Due Diligence",
      gridConnectivity: "RVPNL / ISTS Substation Corridor",
      substation: "220kV Pooling Substation Proximity",
      transmissionAvailability: "Grid Interconnection Feasibility Active",
      location: "Jaisalmer High-Velocity Corridor",
      acquisitionStatus: "Open for Acquisition / Co-Development",
      additionalNotes: "Structured placeholder ready for actual Rajasthan wind datasets.",
    },
  ],
  "IN-TN": [
    {
      id: "wind-tn-01",
      stateCode: "IN-TN",
      stateName: "Tamil Nadu",
      district: "Tirunelveli / Coimbatore Belt",
      projectName: "Wind Asset Opportunity - Southern Corridor [SAMPLE DATA]",
      projectType: "wind",
      availableLand: "Private & Leasehold Land Bank",
      landArea: "Sample Land Parcel (Data to be provided)",
      potentialCapacity: "Sample MW Potential (Data to be provided)",
      technology: "Class IIA / IIIA WTG Compatibility",
      developmentStage: "Micro-siting & DPR Preparation",
      gridConnectivity: "TANTRANSCO Grid Substation",
      substation: "110kV / 230kV Grid Substation",
      transmissionAvailability: "Subject to TANTRANSCO Bay Sanction",
      location: "Pass Corridor Tamil Nadu",
      acquisitionStatus: "Open for Partnership / Acquisition",
      additionalNotes: "Structured placeholder ready for Tamil Nadu wind project datasets.",
    },
  ],
};

export const solarProjectsData: StateProjectDataMap = {
  "IN-RJ": [
    {
      id: "solar-rj-01",
      stateCode: "IN-RJ",
      stateName: "Rajasthan",
      district: "Bhadla / Bikaner Solar Zone",
      projectName: "Solar Park Asset Opportunity - Rajasthan [SAMPLE DATA]",
      projectType: "solar",
      availableLand: "Clear-Title Solar Park Land Parcel",
      landArea: "Sample Acreage (Data to be provided)",
      potentialCapacity: "Sample MW Solar Capacity (Data to be provided)",
      technology: "Mono PERC / Bifacial Solar PV Modules with Single-Axis Trackers",
      developmentStage: "Clear-Title Land & DPR Ready",
      gridConnectivity: "ISTS Inter-State Transmission Grid",
      substation: "Nearby 400kV / 765kV PGCIL Substation",
      transmissionAvailability: "ISTS Bay Connection Feasibility",
      location: "Desert Solar Corridor, Rajasthan",
      acquisitionStatus: "Open for Outright Sale / Joint Venture",
      additionalNotes: "Structured placeholder ready for actual Rajasthan solar project datasets.",
    },
  ],
  "IN-MH": [
    {
      id: "solar-mh-01",
      stateCode: "IN-MH",
      stateName: "Maharashtra",
      district: "Solapur / Marathwada Belt",
      projectName: "Utility Solar Asset Opportunity - Maharashtra [SAMPLE DATA]",
      projectType: "solar",
      availableLand: "Encumbrance-Free Agricultural NA Land",
      landArea: "Sample Parcel Area (Data to be provided)",
      potentialCapacity: "Sample MW Capacity (Data to be provided)",
      technology: "High-Efficiency Ground-Mounted Solar Array",
      developmentStage: "Nodal Clearance & NA Land Stage",
      gridConnectivity: "MSETCL 132kV / 220kV Grid",
      substation: "MSETCL Evacuation Substation Proximity",
      transmissionAvailability: "STU Wheeling & Open Access Clearance",
      location: "Solapur High-GHI Solar Belt",
      acquisitionStatus: "Open for C&I PPA / IPP Acquisition",
      additionalNotes: "Structured placeholder ready for actual Maharashtra solar datasets.",
    },
  ],
  "IN-KA": [
    {
      id: "solar-ka-01",
      stateCode: "IN-KA",
      stateName: "Karnataka",
      district: "Pavagada / Tumkur Region",
      projectName: "Solar Park Opportunity - Karnataka Corridor [SAMPLE DATA]",
      projectType: "solar",
      availableLand: "Leasehold Solar Park Land",
      landArea: "Sample Parcel Size (Data to be provided)",
      potentialCapacity: "Sample MW Potential (Data to be provided)",
      technology: "Ground-Mounted Solar PV Infrastructure",
      developmentStage: "KREDL Allotment & Land Verification",
      gridConnectivity: "KPTCL 220kV Substation",
      substation: "Tumkur Pooling Substation",
      transmissionAvailability: "Subject to KPTCL Open Access Allocation",
      location: "Pavagada High Irradiance Zone",
      acquisitionStatus: "Open for Acquisition",
      additionalNotes: "Structured placeholder ready for actual Karnataka solar datasets.",
    },
  ],
  "IN-GJ": [
    {
      id: "solar-gj-01",
      stateCode: "IN-GJ",
      stateName: "Gujarat",
      district: "Patan / Radhanpur Corridor",
      projectName: "Utility Solar Opportunity - Gujarat [SAMPLE DATA]",
      projectType: "solar",
      availableLand: "Government Leasehold & Private Land",
      landArea: "Sample Land Parcel (Data to be provided)",
      potentialCapacity: "Sample MW Capacity (Data to be provided)",
      technology: "Bifacial Solar Module Technology",
      developmentStage: "GEDA Approval & DPR Phase",
      gridConnectivity: "GETCO Grid Network",
      substation: "GETCO 220kV Pooling Substation",
      transmissionAvailability: "GETCO Bay Allotment Pending",
      location: "North Gujarat Solar Corridor",
      acquisitionStatus: "Available for Strategic Investor",
      additionalNotes: "Structured placeholder ready for actual Gujarat solar datasets.",
    },
  ],
};

export const hybridProjectsData: StateProjectDataMap = {
  "IN-RJ": [
    {
      id: "hybrid-rj-01",
      stateCode: "IN-RJ",
      stateName: "Rajasthan",
      district: "Jaisalmer / Jodhpur Corridor",
      projectName: "Wind-Solar Hybrid Opportunity - Rajasthan [SAMPLE DATA]",
      projectType: "hybrid",
      availableLand: "Co-Located Wind-Solar Land Parcel",
      landArea: "Sample Co-Located Area (Data to be provided)",
      potentialCapacity: "Sample MW Wind + Solar Capacity (Data to be provided)",
      technology: "Co-Located Wind Turbines + Solar PV Array with BESS Readiness",
      developmentStage: "Co-Location DPR & Interconnection Feasibility",
      gridConnectivity: "Shared High-Voltage Pooling Substation (ISTS)",
      substation: "Nearby 400kV ISTS Substation",
      transmissionAvailability: "Optimized Transmission Capacity Factor Utilization",
      location: "Western Rajasthan Hybrid Zone",
      acquisitionStatus: "Open for Strategic Acquisition / IPP Platform",
      additionalNotes: "Structured placeholder ready for actual Rajasthan hybrid project datasets.",
    },
  ],
  "IN-GJ": [
    {
      id: "hybrid-gj-01",
      stateCode: "IN-GJ",
      stateName: "Gujarat",
      district: "Kutch Hybrid Zone",
      projectName: "Wind-Solar Hybrid Opportunity - Kutch [SAMPLE DATA]",
      projectType: "hybrid",
      availableLand: "Clear-Title Hybrid Site Land Bank",
      landArea: "Sample Parcel Size (Data to be provided)",
      potentialCapacity: "Sample Hybrid MW Potential (Data to be provided)",
      technology: "Bifacial Solar + High-Hub Wind Turbine Generators",
      developmentStage: "Land Acquisition & Evacuation Feasibility",
      gridConnectivity: "GETCO / ISTS Pooling Station",
      substation: "220kV / 400kV Kutch Pooling Substation",
      transmissionAvailability: "Shared Pooling Bay Connectivity",
      location: "Kutch Renewable Energy Park Zone",
      acquisitionStatus: "Available for Joint Venture",
      additionalNotes: "Structured placeholder ready for actual Gujarat hybrid datasets.",
    },
  ],
  "IN-MH": [
    {
      id: "hybrid-mh-01",
      stateCode: "IN-MH",
      stateName: "Maharashtra",
      district: "Western Maharashtra Corridor",
      projectName: "Wind-Solar Hybrid Opportunity - Maharashtra [SAMPLE DATA]",
      projectType: "hybrid",
      availableLand: "Integrated Hybrid Project Land Site",
      landArea: "Sample Acreage (Data to be provided)",
      potentialCapacity: "Sample Hybrid MW Capacity (Data to be provided)",
      technology: "Co-Located Solar Array & Wind Turbine Micro-Siting",
      developmentStage: "Pre-Feasibility & Land Screening",
      gridConnectivity: "MSETCL 220kV Grid Substation",
      substation: "MSETCL Regional Grid Substation",
      transmissionAvailability: "STU Shared Evacuation Corridor",
      location: "Satara / Sangli Energy Belt",
      acquisitionStatus: "Open for Acquisition",
      additionalNotes: "Structured placeholder ready for actual Maharashtra hybrid datasets.",
    },
  ],
  "IN-KA": [
    {
      id: "hybrid-ka-01",
      stateCode: "IN-KA",
      stateName: "Karnataka",
      district: "Chitradurga / Bellary Zone",
      projectName: "Wind-Solar Hybrid Opportunity - Karnataka [SAMPLE DATA]",
      projectType: "hybrid",
      availableLand: "Co-Located Solar & Wind Land Bank",
      landArea: "Sample Parcel Size (Data to be provided)",
      potentialCapacity: "Sample Hybrid Capacity (Data to be provided)",
      technology: "Shared Infrastructure Wind-Solar Hybrid",
      developmentStage: "KREDL Liaison & DPR Phase",
      gridConnectivity: "KPTCL 220kV Grid",
      substation: "KPTCL Regional Pooling Station",
      transmissionAvailability: "Subject to KPTCL Grid Approval",
      location: "Chitradurga Wind-Solar Corridor",
      acquisitionStatus: "Open for Strategic Acquisition",
      additionalNotes: "Structured placeholder ready for actual Karnataka hybrid datasets.",
    },
  ],
};

// Helper Functions
export const getDatasetByCategory = (category: "wind" | "solar" | "hybrid"): StateProjectDataMap => {
  switch (category) {
    case "wind":
      return windProjectsData;
    case "solar":
      return solarProjectsData;
    case "hybrid":
      return hybridProjectsData;
    default:
      return {};
  }
};

export const getProjectsByState = (
  category: "wind" | "solar" | "hybrid",
  stateCode: string
): AcquisitionProject[] => {
  const dataset = getDatasetByCategory(category);
  return dataset[stateCode] || [];
};

export const getActiveStateCodes = (category: "wind" | "solar" | "hybrid"): string[] => {
  const dataset = getDatasetByCategory(category);
  return Object.keys(dataset);
};

export const getStateNameByCode = (stateCode: string): string => {
  const state = INDIA_STATES.find((s) => s.code === stateCode);
  return state ? state.name : stateCode;
};
