import { Schema, model } from "mongoose";

const imageSchema = new Schema(
  {
    url: { type: String, required: true },
    caption: { type: String, default: "" },
  },
  { _id: false },
);

const projectSchema = new Schema(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    status: {
      type: String,
      enum: ["Completed", "In Progress", "Planned"],
      required: true,
    },
    skillsUsed: [{ type: String, ref: "Skill" }],
    githubUrl: { type: String, default: "" },
    demoUrl: { type: String, default: "" },
    images: [imageSchema],
    featured: { type: Boolean, default: false },
    dateCreated: { type: String, required: true },
    published: { type: Boolean, default: true },
  },
  { versionKey: false },
);

export const Project = model("Project", projectSchema, "projects");
