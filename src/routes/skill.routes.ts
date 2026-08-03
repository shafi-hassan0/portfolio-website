import { Router } from "express";
import { Skill } from "../models/skill.model";
import { sendData, sendNotFound, parseExpand } from "../lib/http";

export const skillRoutes = Router();

skillRoutes.get("/", async (req, res) => {
  const filter: Record<string, unknown> = { published: true };
  if (typeof req.query.type === "string") {
    filter.skillType = req.query.type;
  }
  const skills = await Skill.find(filter).sort({ order: 1 });
  sendData(res, skills);
});

skillRoutes.get("/:id", async (req, res) => {
  const expand = parseExpand(req);
  let query = Skill.findOne({ _id: req.params.id, published: true });
  if (expand.has("projects")) query = query.populate("relatedProjects");
  if (expand.has("experience")) query = query.populate("relatedExperience");
  const skill = await query;
  if (!skill) return sendNotFound(res, "Skill not found");
  sendData(res, skill);
});
