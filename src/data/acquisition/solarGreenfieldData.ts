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
    { id: "sg-mh-1", stateCode: "IN-MH", stateName: "Maharashtra", district: "Jalna", ctuStu: "STU", capacityMW: "100 MW" },
    { id: "sg-mh-2-a", stateCode: "IN-MH", stateName: "Maharashtra", district: "Washim", ctuStu: "STU", capacityMW: "100 MW (Land on Lease)" },
    { id: "sg-mh-2-b", stateCode: "IN-MH", stateName: "Maharashtra", district: "Washim", ctuStu: "STU", capacityMW: "100 MW (Land for Sale)" },
    { id: "sg-mh-3", stateCode: "IN-MH", stateName: "Maharashtra", district: "Chhatrapati Sambhajinagar", ctuStu: "STU", capacityMW: "150 MW" },
    { id: "sg-mh-4", stateCode: "IN-MH", stateName: "Maharashtra", district: "Dharashiv", ctuStu: "STU", capacityMW: "150 MW" },
    { id: "sg-mh-5", stateCode: "IN-MH", stateName: "Maharashtra", district: "Jalgaon", ctuStu: "STU", capacityMW: "100 MW" },
    { id: "sg-mh-6", stateCode: "IN-MH", stateName: "Maharashtra", district: "Chandrapur", ctuStu: "STU", capacityMW: "100 MW" },
    { id: "sg-mh-7", stateCode: "IN-MH", stateName: "Maharashtra", district: "Dhule", ctuStu: "STU", capacityMW: "400 MW" },
    { id: "sg-mh-8", stateCode: "IN-MH", stateName: "Maharashtra", district: "Ahilya Nagar", ctuStu: "STU", capacityMW: "200 MW" },
    { id: "sg-mh-9", stateCode: "IN-MH", stateName: "Maharashtra", district: "Yavatmal", ctuStu: "STU", capacityMW: "100 MW" },
    { id: "sg-mh-10", stateCode: "IN-MH", stateName: "Maharashtra", district: "Nashik", ctuStu: "STU", capacityMW: "100 MW" },
    { id: "sg-mh-11", stateCode: "IN-MH", stateName: "Maharashtra", district: "Nanded", ctuStu: "STU", capacityMW: "100 MW" },
    { id: "sg-mh-12", stateCode: "IN-MH", stateName: "Maharashtra", district: "Satara", ctuStu: "STU", capacityMW: "200 MW" },
    { id: "sg-mh-13", stateCode: "IN-MH", stateName: "Maharashtra", district: "Wardha", ctuStu: "STU", capacityMW: "100 MW" },
    { id: "sg-mh-14", stateCode: "IN-MH", stateName: "Maharashtra", district: "Akola", ctuStu: "STU", capacityMW: "50 MW" },
  ],
};
