import { Router } from "express";
import { NowUpdate } from "../models/now-update.model";
import { sendData, sendNotFound } from "../lib/http";

export const nowRoutes = Router();

nowRoutes.get("/", async (_req, res) => {
  const now = await NowUpdate.findOne();
  if (!now) return sendNotFound(res, "Now update not found");
  sendData(res, now);
});
