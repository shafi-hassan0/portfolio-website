export interface NowUpdateSeed {
  currentlyLearning: string[];
  currentlyBuilding: string[];
  recentlyCompleted: string[];
  updatedDate: string;
}

export const nowUpdateData: NowUpdateSeed | null = {
  currentlyLearning: ["Full Stack Development"],
  currentlyBuilding: ["Portfolio UI Testing"],
  recentlyCompleted: ["Portfolio Website", "Portfolio API Testing"],
  updatedDate: "2026-08-06",
};
