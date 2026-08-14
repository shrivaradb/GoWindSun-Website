export interface OperationalWindRecord {
  id: string;
  stateCode: string;
  stateName: string;
  district: string;
  ctuStu: string;
  capacityMW: string;
}

export const operationalWindDataset: Record<string, OperationalWindRecord[]> = {
  "IN-MH": [
    {
      id: "op-w-1",
      stateCode: "IN-MH",
      stateName: "Maharashtra",
      district: "Dhule Region",
      ctuStu: "STU (MSETCL 220kV)",
      capacityMW: "50 MW (Operational)",
    },
  ],
  "IN-RJ": [
    {
      id: "op-w-2",
      stateCode: "IN-RJ",
      stateName: "Rajasthan",
      district: "Jaisalmer Region",
      ctuStu: "STU / CTU",
      capacityMW: "75 MW (Operational)",
    },
  ],
  "IN-TN": [
    {
      id: "op-w-3",
      stateCode: "IN-TN",
      stateName: "Tamil Nadu",
      district: "Muppandal / Kayathar",
      ctuStu: "STU (TANTRANSCO)",
      capacityMW: "60 MW (Operational)",
    },
  ],
};
