import { Schema, model } from "mongoose";

export const SKILL_TYPES = [
  "language",
  "framework",
  "library",
  "database",
  "tool",
  "platform",
  "soft-skill",
] as const;

export type SkillType = (typeof SKILL_TYPES)[number];

const skillSchema = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    skillType: { type: String, enum: SKILL_TYPES, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    yearsExperience: { type: Number, required: true },
    proficiency: { type: String, required: true },
    relatedProjects: [{ type: String, ref: "Project" }],
    relatedExperience: [{ type: String, ref: "Experience" }],
    icon: { type: String, default: "" },
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: true },
  },
  { versionKey: false },
);

export const Skill = model("Skill", skillSchema, "skills");
