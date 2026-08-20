export interface OperationalWindRecord {
  id: string;
  stateCode: string;
  stateName: string;
  district: string;
  ctuStu: string;
  capacityMW: string;
}

export const operationalWindDataset: Record<string, OperationalWindRecord[]> = {};
