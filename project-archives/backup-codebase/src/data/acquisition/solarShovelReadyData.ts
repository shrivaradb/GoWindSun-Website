export interface SolarShovelReadyRecord {
  id: string;
  stateCode: string;
  stateName: string;
  district: string;
  ctuStu: string;
  capacityMW: string;
}

export const solarShovelReadyDataset: Record<string, SolarShovelReadyRecord[]> = {
  "IN-KA": [
    { id: "ssr-ka-1", stateCode: "IN-KA", stateName: "Karnataka", district: "Yadgir", ctuStu: "STU (Ramasamudra 220/110kV)", capacityMW: "50 MW DC / 35 MW AC" },
  ],
  "IN-TN": [
    { id: "ssr-tn-1", stateCode: "IN-TN", stateName: "Tamil Nadu", district: "Pudukkottai", ctuStu: "STU (230/110 kV)", capacityMW: "170 - 221 MWp" },
    { id: "ssr-tn-2", stateCode: "IN-TN", stateName: "Tamil Nadu", district: "Tuticorin", ctuStu: "STU (110/33kV)", capacityMW: "25 MW AC" },
    { id: "ssr-tn-3", stateCode: "IN-TN", stateName: "Tamil Nadu", district: "Vadakuvanthanam", ctuStu: "CTU (Vadakuvanthanam 400/230kV)", capacityMW: "150 MW" },
    { id: "ssr-tn-4", stateCode: "IN-TN", stateName: "Tamil Nadu", district: "Villupuram (Murukeri)", ctuStu: "STU (Murukeri 110/33kV)", capacityMW: "50 MW" },
  ],
  "IN-RJ": [
    { id: "ssr-rj-1", stateCode: "IN-RJ", stateName: "Rajasthan", district: "Bikaner", ctuStu: "CTU (Bikaner 400kV GSS)", capacityMW: "300 MW" },
    { id: "ssr-rj-2", stateCode: "IN-RJ", stateName: "Rajasthan", district: "Churu", ctuStu: "STU (220 kV)", capacityMW: "200 MW" },
  ],
  "IN-MH": [
    { id: "ssr-mh-1", stateCode: "IN-MH", stateName: "Maharashtra", district: "Ahilya Nagar", ctuStu: "STU (33 kV MSEDCL)", capacityMW: "25 MW AC" },
  ],
  "IN-GJ": [
    {
      id: "ssr-gj-1",
      stateCode: "IN-GJ",
      stateName: "Gujarat",
      district: "Gujarat Region",
      ctuStu: "CTU (220kV)",
      capacityMW: "300 MW",
    },
  ],
};
