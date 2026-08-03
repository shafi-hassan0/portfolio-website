export interface NowUpdateSeed {
  currentlyLearning: string[];
  currentlyBuilding: string[];
  recentlyCompleted: string[];
  updatedDate: string;
}

export const nowUpdateData: NowUpdateSeed | null = {
  currentlyLearning: [
    "Angular Advanced Patterns",
    "Docker",
    "Backend API Development",
  ],
  currentlyBuilding: ["Personal Portfolio Platform"],
  recentlyCompleted: [],
  updatedDate: "2026-08-03",
};
