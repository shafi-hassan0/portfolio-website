import { Router } from "express";
import { Education } from "../models/education.model";
import { sendData } from "../lib/http";

export const educationRoutes = Router();

educationRoutes.get("/", async (_req, res) => {
  const education = await Education.find({ published: true }).sort({
    startDate: -1,
  });
  sendData(res, education);
});
