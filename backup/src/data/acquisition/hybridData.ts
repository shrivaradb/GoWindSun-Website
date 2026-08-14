export interface HybridRecord {
  id: string;
  stateCode: string;
  stateName: string;
  district: string;
  ctuStu: string;
  capacityMW: string;
}

export const hybridDataset: Record<string, HybridRecord[]> = {
  "IN-RJ": [
    { id: "hy-rj-1", stateCode: "IN-RJ", stateName: "Rajasthan", district: "Jaisalmer (Ramgarh-2)", ctuStu: "CTU (220 kV Level)", capacityMW: "150 MW Wind + 200 MW Solar (350 MW Hybrid)" },
  ],
  "IN-MH": [
    { id: "hy-mh-1", stateCode: "IN-MH", stateName: "Maharashtra", district: "Buldhana", ctuStu: "STU (132/33 kV)", capacityMW: "100 MW Hybrid" },
    { id: "hy-mh-2", stateCode: "IN-MH", stateName: "Maharashtra", district: "Yavatmal", ctuStu: "STU (132/33 kV)", capacityMW: "100 MW Hybrid" },
    { id: "hy-mh-3", stateCode: "IN-MH", stateName: "Maharashtra", district: "Solapur", ctuStu: "STU (132/33 kV)", capacityMW: "100 MW Hybrid" },
    { id: "hy-mh-4", stateCode: "IN-MH", stateName: "Maharashtra", district: "Beed", ctuStu: "STU (220/132 kV)", capacityMW: "400 MW Hybrid" },
  ],
  "IN-GJ": [
    { id: "hy-gj-1", stateCode: "IN-GJ", stateName: "Gujarat", district: "Morbi", ctuStu: "STU (66 kV)", capacityMW: "45 MW Wind + 40 MWp Solar (85 MW Hybrid)" },
  ],
  "IN-TN": [
    { id: "hy-tn-1", stateCode: "IN-TN", stateName: "Tamil Nadu", district: "Virudhunagar (Kottur)", ctuStu: "STU (Virudhunagar 765/400kV)", capacityMW: "600 MW (200 MW Solar + 400 MW Wind)" },
    { id: "hy-tn-2", stateCode: "IN-TN", stateName: "Tamil Nadu", district: "Ottapidaram", ctuStu: "STU (Otapidaram 400/230kV)", capacityMW: "100 MW (75 MW Solar + 25 MW Wind)" },
  ],
};
