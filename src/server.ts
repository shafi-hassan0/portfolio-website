import express from "express";
import cors from "cors";
import path from "node:path";
import { env } from "./config/env";
import { connectDb } from "./config/db";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "..", "public", "images")));

app.get("/api/health", async (_req, res) => {
  res.json({
    success: true,
    data: {
      status: "healthy",
      database: "connected",
    },
  });
});

async function start() {
  await connectDb();
  app.listen(env.port, () => {
    console.log(`API listening on port ${env.port}`);
  });
}

start();
