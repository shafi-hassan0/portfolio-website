import { Schema, model } from "mongoose";

const educationSchema = new Schema(
  {
    school: { type: String, required: true },
    degree: { type: String, required: true },
    field: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    achievements: [{ type: String }],
    published: { type: Boolean, default: true },
    image: { type: String },
  },
  { versionKey: false },
);

export const Education = model("Education", educationSchema, "education");
