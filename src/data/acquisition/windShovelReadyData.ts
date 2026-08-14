export interface ShovelReadyWindRecord {
  id: string;
  stateCode: string;
  stateName: string;
  district: string;
  ctuStu: string;
  capacityMW: string;
}

export const shovelReadyWindExcelDataset: Record<string, ShovelReadyWindRecord[]> = {
  "IN-KA": [
    {
      id: "sr-w-1",
      stateCode: "IN-KA",
      stateName: "Karnataka",
      district: "Koppal",
      ctuStu: "STU",
      capacityMW: "100 MW",
    },
  ],
  "IN-MP": [
    {
      id: "sr-w-2",
      stateCode: "IN-MP",
      stateName: "Madhya Pradesh",
      district: "Mandsaur",
      ctuStu: "STU",
      capacityMW: "100 MW",
    },
  ],
  "IN-GJ": [
    {
      id: "sr-w-3",
      stateCode: "IN-GJ",
      stateName: "Gujarat",
      district: "Morbi",
      ctuStu: "STU",
      capacityMW: "45 MW Wind (85 MW Hybrid)",
    },
  ],
};
