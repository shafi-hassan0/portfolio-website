import { Schema, model } from "mongoose";

const experienceSchema = new Schema(
  {
    _id: { type: String, required: true },
    company: { type: String, required: true },
    role: { type: String, required: true },
    logo: { type: String, default: "" },
    location: { type: String, required: true },
    employmentType: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, default: null },
    description: { type: String, required: true },
    responsibilities: [{ type: String }],
    skillsUsed: [{ type: String, ref: "Skill" }],
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: true },
  },
  { versionKey: false },
);

export const Experience = model("Experience", experienceSchema, "experiences");
