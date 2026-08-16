import { StateProjectDataMap } from "@/types/acquisition";

// 1. GREENFIELD WIND PROJECTS DATASET
export const windGreenfieldProjects: StateProjectDataMap = {
  "IN-MH": [
    {
      id: "wind-gf-mh-01",
      stateCode: "IN-MH",
      stateName: "Maharashtra",
      district: "Satara / Sangli Ridge",
      projectName: "Satara Greenfield Wind Site Opportunity",
      projectType: "wind",
      stageKey: "wind-greenfield",
      availableLand: "Identification & Leasehold Support Ready",
      landArea: "Sample Greenfield Area",
      potentialCapacity: "Sample Capacity",
      technology: "High-Hub Height Wind Turbine Generator (WTG)",
      developmentStage: "Greenfield / Site Screening",
      gridConnectivity: "STU Substation Interconnection Corridor",
      substation: "MSETCL 132kV / 220kV Substation",
      transmissionAvailability: "MSETCL Bay Allocation Eligible",
      location: "Satara High-Wind Corridor",
      acquisitionStatus: "Open for Acquisition",
      additionalNotes: "Greenfield wind project dataset for Maharashtra.",
    },
  ],
  "IN-GJ": [
    {
      id: "wind-gf-gj-01",
      stateCode: "IN-GJ",
      stateName: "Gujarat",
      district: "Kutch High-Velocity Zone",
      projectName: "Kutch Greenfield Wind Site Opportunity",
      projectType: "wind",
      stageKey: "wind-greenfield",
      availableLand: "Identified Greenfield Land Parcels",
      landArea: "Sample Greenfield Area",
      potentialCapacity: "Sample Capacity",
      technology: "High-CUF Wind Turbine Platform",
      developmentStage: "Feasibility / WRA Phase",
      gridConnectivity: "GETCO / ISTS Interconnection Corridor",
      substation: "220kV / 400kV Kutch Pooling Station",
      transmissionAvailability: "Subject to GETCO / CTU Bay Allotment",
      location: "Kutch Energy Belt",
      acquisitionStatus: "Available for Strategic Investor",
      additionalNotes: "Greenfield wind project dataset for Gujarat.",
    },
  ],
};

// 2. SHOVEL READY WIND PROJECTS DATASET
export const windShovelReadyProjects: StateProjectDataMap = {
  "IN-RJ": [
    {
      id: "wind-sr-rj-01",
      stateCode: "IN-RJ",
      stateName: "Rajasthan",
      district: "Jaisalmer Belt",
      projectName: "Jaisalmer Shovel-Ready Wind Park",
      projectType: "wind",
      stageKey: "wind-shovel-ready",
      availableLand: "Land Possession & RoW Clearances Complete",
      landArea: "Sample Shovel-Ready Acreage",
      potentialCapacity: "Sample Capacity",
      technology: "Class IIA Met Mast Validated WTGs",
      developmentStage: "Shovel-Ready / Evacuation NOC In-Hand",
      gridConnectivity: "RVPNL / ISTS Substation Bay Approved",
      substation: "220kV RVPNL Pooling Substation",
      transmissionAvailability: "Grid Interconnection Granted",
      location: "Jaisalmer High-Wind Corridor",
      acquisitionStatus: "Shovel-Ready / Open for EPC",
      additionalNotes: "Shovel-ready wind project dataset for Rajasthan.",
    },
  ],
  "IN-TN": [
    {
      id: "wind-sr-tn-01",
      stateCode: "IN-TN",
      stateName: "Tamil Nadu",
      district: "Tirunelveli Pass",
      projectName: "Muppandal Shovel-Ready Wind Corridor",
      projectType: "wind",
      stageKey: "wind-shovel-ready",
      availableLand: "Private Clear-Title Land Secured",
      landArea: "Sample Shovel-Ready Area",
      potentialCapacity: "Sample Capacity",
      technology: "Class IIA High-CUF WTG Platform",
      developmentStage: "Nodal Approval & Micro-Siting Done",
      gridConnectivity: "TANTRANSCO Grid Substation",
      substation: "110kV / 230kV TANTRANSCO Substation",
      transmissionAvailability: "TANTRANSCO Bay Allotment Complete",
      location: "Southern Wind Pass Corridor",
      acquisitionStatus: "Shovel-Ready for Acquisition",
      additionalNotes: "Shovel-ready wind project dataset for Tamil Nadu.",
    },
  ],
};

// 3. OPERATIONAL WIND PROJECTS DATASET
export const windOperationalProjects: StateProjectDataMap = {
  "IN-MH": [
    {
      id: "wind-op-mh-01",
      stateCode: "IN-MH",
      stateName: "Maharashtra",
      district: "Dhule Region",
      projectName: "Dhule Operational Wind Asset (Commissioned)",
      projectType: "wind",
      stageKey: "wind-operational",
      availableLand: "Fully Commissioned Site Footprint",
      landArea: "Commissioned Project Area",
      potentialCapacity: "Operational Capacity",
      technology: "Commissioned Multi-Megawatt WTG Array",
      developmentStage: "Operational / Generation Active",
      gridConnectivity: "Synchronized MSETCL Grid Line",
      substation: "MSETCL 220kV Grid Substation",
      transmissionAvailability: "Active Power Evacuation",
      location: "Dhule Wind Park",
      acquisitionStatus: "Operational Asset Sale / Equity Transfer",
      additionalNotes: "Operational wind asset with active generation history.",
    },
  ],
};

// 4. OVERVIEW WIND PROJECTS DATASET (Combines all stage datasets for wind overview page)
export const windProjects: StateProjectDataMap = {
  ...windGreenfieldProjects,
  "IN-RJ": [
    ...(windGreenfieldProjects["IN-RJ"] || []),
    ...(windShovelReadyProjects["IN-RJ"] || []),
  ],
  "IN-MH": [
    ...(windGreenfieldProjects["IN-MH"] || []),
    ...(windOperationalProjects["IN-MH"] || []),
  ],
  "IN-TN": [...(windShovelReadyProjects["IN-TN"] || [])],
  "IN-GJ": [...(windGreenfieldProjects["IN-GJ"] || [])],
};
