import { Router } from "express";
import { StoryChapter } from "../models/story-chapter.model";
import { sendData, sendNotFound } from "../lib/http";

export const storyChapterRoutes = Router();

storyChapterRoutes.get("/", async (_req, res) => {
  const chapters = await StoryChapter.find({ published: true }).sort({ order: 1 });
  sendData(res, chapters);
});

storyChapterRoutes.get("/:id", async (req, res) => {
  const chapter = await StoryChapter.findOne({
    _id: req.params.id,
    published: true,
  });
  if (!chapter) return sendNotFound(res, "Story chapter not found");
  sendData(res, chapter);
});
