export interface HybridRecord {
  id: string;
  stateCode: string;
  stateName: string;
  district: string;
  ctuStu: string;
  capacityMW: string;
  stage?: "Greenfield" | "Shovel Ready" | "Operational";
}

export const hybridDataset: Record<string, HybridRecord[]> = {
  "IN-RJ": [
    { id: "hy-rj-1", stateCode: "IN-RJ", stateName: "Rajasthan", district: "Jaisalmer (Ramgarh-2)", ctuStu: "CTU", capacityMW: "150 MW Wind + 200 MW Solar (350 MW Hybrid)" },
  ],
  "IN-MH": [
    { id: "hy-mh-1", stateCode: "IN-MH", stateName: "Maharashtra", district: "Buldhana", ctuStu: "STU", capacityMW: "100 MW Hybrid" },
    { id: "hy-mh-2", stateCode: "IN-MH", stateName: "Maharashtra", district: "Yavatmal", ctuStu: "STU", capacityMW: "100 MW Hybrid" },
    { id: "hy-mh-3", stateCode: "IN-MH", stateName: "Maharashtra", district: "Solapur", ctuStu: "STU", capacityMW: "100 MW Hybrid" },
    { id: "hy-mh-4", stateCode: "IN-MH", stateName: "Maharashtra", district: "Beed", ctuStu: "STU", capacityMW: "400 MW Hybrid" },
  ],
  "IN-GJ": [
    { id: "hy-gj-1", stateCode: "IN-GJ", stateName: "Gujarat", district: "Morbi", ctuStu: "STU", capacityMW: "45 MW Wind + 40 MWp Solar (85 MW Hybrid)", stage: "Shovel Ready" },
    { id: "hy-gj-2", stateCode: "IN-GJ", stateName: "Gujarat", district: "Bhachau Kutch", ctuStu: "STU / CTU", capacityMW: "100 MW Wind + 180 MW Solar (280 MW Hybrid)" },
    { id: "hy-gj-3", stateCode: "IN-GJ", stateName: "Gujarat", district: "Mevasa Kutch", ctuStu: "STU", capacityMW: "45 MW Wind + 25 MW Solar (70 MW Hybrid)" },
  ],
  "IN-TN": [
    { id: "hy-tn-1", stateCode: "IN-TN", stateName: "Tamil Nadu", district: "Virudhunagar (Kottur)", ctuStu: "STU", capacityMW: "600 MW (200 MW Solar + 400 MW Wind)" },
    { id: "hy-tn-2", stateCode: "IN-TN", stateName: "Tamil Nadu", district: "Ottapidaram", ctuStu: "STU", capacityMW: "100 MW (75 MW Solar + 25 MW Wind)" },
  ],
};
