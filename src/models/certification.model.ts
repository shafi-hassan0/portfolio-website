import { Schema, model } from "mongoose";

const certificationSchema = new Schema(
  {
    name: { type: String, required: true },
    issuer: { type: String, required: true },
    dateEarned: { type: String, required: true },
    credentialUrl: { type: String, default: "" },
    image: { type: String, default: "" },
    published: { type: Boolean, default: true },
  },
  { versionKey: false },
);

export const Certification = model(
  "Certification",
  certificationSchema,
  "certifications",
);
