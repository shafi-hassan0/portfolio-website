import { Router } from "express";
import { Project } from "../models/project.model";
import { sendData, sendNotFound, parseExpand } from "../lib/http";

export const projectRoutes = Router();

projectRoutes.get("/", async (req, res) => {
  const filter: Record<string, unknown> = { published: true };
  if (typeof req.query.category === "string") {
    filter.category = req.query.category;
  }
  if (req.query.featured === "true") filter.featured = true;
  if (req.query.featured === "false") filter.featured = false;

  const projects = await Project.find(filter).sort({ order: 1 });
  sendData(res, projects);
});

projectRoutes.get("/:id", async (req, res) => {
  const expand = parseExpand(req);
  let query = Project.findOne({ _id: req.params.id, published: true });
  if (expand.has("skills")) query = query.populate("skillsUsed");
  const project = await query;
  if (!project) return sendNotFound(res, "Project not found");
  sendData(res, project);
});
