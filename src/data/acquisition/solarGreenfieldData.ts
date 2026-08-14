export interface SolarGreenfieldRecord {
  id: string;
  stateCode: string;
  stateName: string;
  district: string;
  ctuStu: string;
  capacityMW: string;
}

export const solarGreenfieldDataset: Record<string, SolarGreenfieldRecord[]> = {
  "IN-MH": [
    { id: "sg-mh-1", stateCode: "IN-MH", stateName: "Maharashtra", district: "Jalna", ctuStu: "STU (132/33 kV)", capacityMW: "100 MW" },
    { id: "sg-mh-2", stateCode: "IN-MH", stateName: "Maharashtra", district: "Washim", ctuStu: "STU (132/33 kV)", capacityMW: "100 MW" },
    { id: "sg-mh-3", stateCode: "IN-MH", stateName: "Maharashtra", district: "Sambhaji Nagar", ctuStu: "STU (220/132/33 kV)", capacityMW: "150 MW" },
    { id: "sg-mh-4", stateCode: "IN-MH", stateName: "Maharashtra", district: "Dharashiv", ctuStu: "STU (220/132 kV)", capacityMW: "150 MW" },
    { id: "sg-mh-5", stateCode: "IN-MH", stateName: "Maharashtra", district: "Jalgaon", ctuStu: "STU (132/33 kV)", capacityMW: "100 MW" },
    { id: "sg-mh-6", stateCode: "IN-MH", stateName: "Maharashtra", district: "Chandrapur", ctuStu: "STU (132/33 kV)", capacityMW: "100 MW" },
    { id: "sg-mh-7", stateCode: "IN-MH", stateName: "Maharashtra", district: "Dhule", ctuStu: "STU (765/400 kV)", capacityMW: "400 MW" },
    { id: "sg-mh-8", stateCode: "IN-MH", stateName: "Maharashtra", district: "Ahilya Nagar", ctuStu: "STU (200/132 kV)", capacityMW: "200 MW" },
    { id: "sg-mh-9", stateCode: "IN-MH", stateName: "Maharashtra", district: "Yavatmal", ctuStu: "STU (132/33 kV)", capacityMW: "100 MW" },
    { id: "sg-mh-10", stateCode: "IN-MH", stateName: "Maharashtra", district: "Nashik", ctuStu: "STU (132/33 kV)", capacityMW: "100 MW" },
    { id: "sg-mh-11", stateCode: "IN-MH", stateName: "Maharashtra", district: "Nanded", ctuStu: "STU (220/132/33 kV)", capacityMW: "100 MW" },
    { id: "sg-mh-12", stateCode: "IN-MH", stateName: "Maharashtra", district: "Satara", ctuStu: "STU (220/132 kV)", capacityMW: "200 MW" },
    { id: "sg-mh-13", stateCode: "IN-MH", stateName: "Maharashtra", district: "Wardha", ctuStu: "STU (132/33 kV)", capacityMW: "100 MW" },
  ],
};
