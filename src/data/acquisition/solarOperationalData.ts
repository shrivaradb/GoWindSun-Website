export interface SolarOperationalRecord {
  id: string;
  stateCode: string;
  stateName: string;
  district: string;
  ctuStu: string;
  capacityMW: string;
}

export const solarOperationalDataset: Record<string, SolarOperationalRecord[]> = {
  "IN-TN": [
    { id: "sop-tn-1", stateCode: "IN-TN", stateName: "Tamil Nadu", district: "Rasipalayam / Nalgonda", ctuStu: "STU", capacityMW: "24 MW AC (Operational)" },
    { id: "sop-tn-2", stateCode: "IN-TN", stateName: "Tamil Nadu", district: "Tamil Nadu Region", ctuStu: "STU", capacityMW: "110 MWp DC / 100 MW AC" },
  ],
  "IN-RJ": [
    { id: "sop-rj-1", stateCode: "IN-RJ", stateName: "Rajasthan", district: "Rajasthan Region", ctuStu: "STU", capacityMW: "15 MW AC (Operational)" },
  ],
};
