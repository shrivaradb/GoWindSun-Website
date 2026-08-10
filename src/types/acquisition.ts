export type ProjectCategory = "wind" | "solar" | "hybrid";

export interface AcquisitionProject {
  id: string;
  stateCode: string; // e.g. "IN-MH", "IN-GJ", "IN-RJ"
  stateName: string; // e.g. "Maharashtra", "Gujarat"
  district?: string;
  projectName?: string;
  projectType: ProjectCategory;
  availableLand?: string;
  landArea?: string;
  potentialCapacity?: string;
  technology?: string;
  developmentStage?: string;
  gridConnectivity?: string;
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
}

export const INDIA_STATES: StateInfo[] = [
  { code: "IN-AP", name: "Andhra Pradesh" },
  { code: "IN-AR", name: "Arunachal Pradesh" },
  { code: "IN-AS", name: "Assam" },
  { code: "IN-BR", name: "Bihar" },
  { code: "IN-CT", name: "Chhattisgarh" },
  { code: "IN-GA", name: "Goa" },
  { code: "IN-GJ", name: "Gujarat" },
  { code: "IN-HR", name: "Haryana" },
  { code: "IN-HP", name: "Himachal Pradesh" },
  { code: "IN-JH", name: "Jharkhand" },
  { code: "IN-KA", name: "Karnataka" },
  { code: "IN-KL", name: "Kerala" },
  { code: "IN-MP", name: "Madhya Pradesh" },
  { code: "IN-MH", name: "Maharashtra" },
  { code: "IN-MN", name: "Manipur" },
  { code: "IN-ML", name: "Meghalaya" },
  { code: "IN-MZ", name: "Mizoram" },
  { code: "IN-NL", name: "Nagaland" },
  { code: "IN-OD", name: "Odisha" },
  { code: "IN-PB", name: "Punjab" },
  { code: "IN-RJ", name: "Rajasthan" },
  { code: "IN-SK", name: "Sikkim" },
  { code: "IN-TN", name: "Tamil Nadu" },
  { code: "IN-TS", name: "Telangana" },
  { code: "IN-TR", name: "Tripura" },
  { code: "IN-UP", name: "Uttar Pradesh" },
  { code: "IN-UT", name: "Uttarakhand" },
  { code: "IN-WB", name: "West Bengal" },
  { code: "IN-DL", name: "Delhi" },
  { code: "IN-JK", name: "Jammu & Kashmir" },
  { code: "IN-LA", name: "Ladakh" },
];
