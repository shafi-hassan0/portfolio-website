import express from "express";
import cors from "cors";
import path from "node:path";
import { env } from "./config/env";
import { connectDb } from "./config/db";
import { storyChapterRoutes } from "./routes/story-chapter.routes";
import { experienceRoutes } from "./routes/experience.routes";
import { projectRoutes } from "./routes/project.routes";
import { skillRoutes } from "./routes/skill.routes";
import { certificationRoutes } from "./routes/certification.routes";
import { educationRoutes } from "./routes/education.routes";
import { nowRoutes } from "./routes/now.routes";
import { contactRoutes } from "./routes/contact.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  "/images",
  express.static(path.join(__dirname, "..", "public", "images")),
);

app.get("/api/health", async (_req, res) => {
  res.json({
    success: true,
    data: {
      status: "healthy",
      database: "connected",
    },
  });
});

app.use("/api/story-chapters", storyChapterRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/now", nowRoutes);
app.use("/api/contact", contactRoutes);

app.use(
  (
    err: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    if (err instanceof Error && err.name === "CastError") {
      return res.status(404).json({
        success: false,
        error: { code: "NOT_FOUND", message: "Resource not found" },
      });
    }
    console.error(err);
    res.status(500).json({
      success: false,
      error: { code: "SERVER_ERROR", message: "Something went wrong" },
    });
  },
);

async function start() {
  await connectDb();
  app.listen(env.port, () => {
    console.log(`API listening on port ${env.port}`);
  });
}

start();
