export type ProjectCategory = "wind" | "solar" | "hybrid";

export type ProjectStageKey =
  | "wind"
  | "wind-greenfield"
  | "wind-shovel-ready"
  | "wind-operational"
  | "solar"
  | "solar-greenfield"
  | "solar-shovel-ready"
  | "solar-operational"
  | "hybrid";

export interface AcquisitionProject {
  id: string;
  stateCode: string; // e.g. "IN-MH", "IN-GJ", "IN-RJ"
  stateName: string; // e.g. "Maharashtra", "Gujarat"
  district?: string;
  projectName?: string;
  projectType: ProjectCategory;
  stageKey?: ProjectStageKey;
  availableLand?: string;
  landArea?: string;
  potentialCapacity?: string;
  technology?: string;
  developmentStage?: string;
  gridConnectivity?: string;
  nearestSubstation?: string;
  substation?: string;
  transmissionAvailability?: string;
  location?: string;
  coordinates?: string;
  acquisitionStatus?: string;
  additionalNotes?: string;
}

export type StateProjectDataMap = Record<string, AcquisitionProject[]>;

export interface StateInfo {
  code: string;
  name: string;
  svgId: string;
}

export const INDIA_STATES: StateInfo[] = [
  { code: "IN-AP", name: "Andhra Pradesh", svgId: "ap" },
  { code: "IN-AR", name: "Arunachal Pradesh", svgId: "ar" },
  { code: "IN-AS", name: "Assam", svgId: "as" },
  { code: "IN-BR", name: "Bihar", svgId: "br" },
  { code: "IN-CT", name: "Chhattisgarh", svgId: "ct" },
  { code: "IN-GA", name: "Goa", svgId: "ga" },
  { code: "IN-GJ", name: "Gujarat", svgId: "gj" },
  { code: "IN-HR", name: "Haryana", svgId: "hr" },
  { code: "IN-HP", name: "Himachal Pradesh", svgId: "hp" },
  { code: "IN-JH", name: "Jharkhand", svgId: "jh" },
  { code: "IN-KA", name: "Karnataka", svgId: "ka" },
  { code: "IN-KL", name: "Kerala", svgId: "kl" },
  { code: "IN-MP", name: "Madhya Pradesh", svgId: "mp" },
  { code: "IN-MH", name: "Maharashtra", svgId: "mh" },
  { code: "IN-MN", name: "Manipur", svgId: "mn" },
  { code: "IN-ML", name: "Meghalaya", svgId: "ml" },
  { code: "IN-MZ", name: "Mizoram", svgId: "mz" },
  { code: "IN-NL", name: "Nagaland", svgId: "nl" },
  { code: "IN-OD", name: "Odisha", svgId: "or" },
  { code: "IN-PB", name: "Punjab", svgId: "pb" },
  { code: "IN-RJ", name: "Rajasthan", svgId: "rj" },
  { code: "IN-SK", name: "Sikkim", svgId: "sk" },
  { code: "IN-TN", name: "Tamil Nadu", svgId: "tn" },
  { code: "IN-TS", name: "Telangana", svgId: "ts" },
  { code: "IN-TR", name: "Tripura", svgId: "tr" },
  { code: "IN-UP", name: "Uttar Pradesh", svgId: "up" },
  { code: "IN-UT", name: "Uttarakhand", svgId: "ut" },
  { code: "IN-WB", name: "West Bengal", svgId: "wb" },
  { code: "IN-DL", name: "Delhi", svgId: "dl" },
  { code: "IN-JK", name: "Jammu & Kashmir", svgId: "jk" },
  { code: "IN-LA", name: "Ladakh", svgId: "la" },
];
