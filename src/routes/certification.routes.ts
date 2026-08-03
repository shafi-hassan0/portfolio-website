import { Router } from "express";
import { Certification } from "../models/certification.model";
import { sendData } from "../lib/http";

export const certificationRoutes = Router();

certificationRoutes.get("/", async (_req, res) => {
  const certifications = await Certification.find({ published: true }).sort({
    dateEarned: -1,
  });
  sendData(res, certifications);
});
