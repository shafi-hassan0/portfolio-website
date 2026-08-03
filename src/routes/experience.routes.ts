import { Router } from "express";
import { Experience } from "../models/experience.model";
import { sendData, sendNotFound, parseExpand } from "../lib/http";

export const experienceRoutes = Router();

experienceRoutes.get("/", async (req, res) => {
  const expand = parseExpand(req);
  let query = Experience.find({ published: true }).sort({ startDate: -1 });
  if (expand.has("skills")) query = query.populate("skillsUsed");
  const experiences = await query;
  sendData(res, experiences);
});

experienceRoutes.get("/:id", async (req, res) => {
  const expand = parseExpand(req);
  let query = Experience.findOne({ _id: req.params.id, published: true });
  if (expand.has("skills")) query = query.populate("skillsUsed");
  const experience = await query;
  if (!experience) return sendNotFound(res, "Experience not found");
  sendData(res, experience);
});
