import { AcquisitionProject, StateProjectDataMap, INDIA_STATES, ProjectStageKey } from "@/types/acquisition";
import {
  windProjects,
  windGreenfieldProjects,
  windShovelReadyProjects,
  windOperationalProjects,
} from "./windProjects";
import {
  solarProjects,
  solarGreenfieldProjects,
  solarShovelReadyProjects,
  solarOperationalProjects,
} from "./solarProjects";
import { hybridProjects } from "./hybridProjects";

export {
  windProjects,
  windGreenfieldProjects,
  windShovelReadyProjects,
  windOperationalProjects,
  solarProjects,
  solarGreenfieldProjects,
  solarShovelReadyProjects,
  solarOperationalProjects,
  hybridProjects,
};

// Helper Functions
export const getDatasetByCategory = (key: ProjectStageKey | string): StateProjectDataMap => {
  switch (key) {
    case "wind":
      return windProjects;
    case "wind-greenfield":
      return windGreenfieldProjects;
    case "wind-shovel-ready":
      return windShovelReadyProjects;
    case "wind-operational":
      return windOperationalProjects;
    case "solar":
      return solarProjects;
    case "solar-greenfield":
      return solarGreenfieldProjects;
    case "solar-shovel-ready":
      return solarShovelReadyProjects;
    case "solar-operational":
      return solarOperationalProjects;
    case "hybrid":
      return hybridProjects;
    default:
      return {};
  }
};

export const getProjectsByState = (
  key: ProjectStageKey | string,
  stateCode: string
): AcquisitionProject[] => {
  const dataset = getDatasetByCategory(key);
  return dataset[stateCode] || [];
};

export const getActiveStateCodes = (key: ProjectStageKey | string): string[] => {
  const dataset = getDatasetByCategory(key);
  return Object.keys(dataset);
};

export const getStateNameByCode = (stateCode: string): string => {
  const state = INDIA_STATES.find((s) => s.code === stateCode);
  return state ? state.name : stateCode;
};
