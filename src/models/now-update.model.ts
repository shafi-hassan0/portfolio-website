import { Schema, model } from "mongoose";

const nowUpdateSchema = new Schema(
  {
    currentlyLearning: [{ type: String }],
    currentlyBuilding: [{ type: String }],
    recentlyCompleted: [{ type: String }],
    updatedDate: { type: String, required: true },
  },
  { versionKey: false },
);

export const NowUpdate = model("NowUpdate", nowUpdateSchema, "now_updates");
