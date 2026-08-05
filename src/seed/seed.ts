import mongoose from "mongoose";
import { connectDb } from "../config/db";
import { StoryChapter } from "../models/story-chapter.model";
import { Experience } from "../models/experience.model";
import { Project } from "../models/project.model";
import { Skill } from "../models/skill.model";
import { Certification } from "../models/certification.model";
import { Education } from "../models/education.model";
import { NowUpdate } from "../models/now-update.model";
import { storyChaptersData } from "./data/story-chapters.data";
import { experiencesData } from "./data/experiences.data";
import { projectsData } from "./data/projects.data";
import { skillsData } from "./data/skills.data";
import { certificationsData } from "./data/certifications.data";
import { educationData } from "./data/education.data";
import { nowUpdateData } from "./data/now-update.data";

/**
 * Replaces a collection's contents with the given seed data.
 *
 * @param model - The Mongoose model for the collection to seed.
 * @param data - The documents to insert; if empty, the collection is left untouched.
 * @param label - A human-readable name for the collection, used in log output.
 * @returns A promise that resolves once seeding for this collection completes.
 */
async function seedCollection<T>(
  model: mongoose.Model<any>,
  data: T[],
  label: string,
) {
  if (data.length === 0) {
    console.log(`Skipping ${label} — no seed data yet`);
    return;
  }
  await model.deleteMany({});
  await model.insertMany(data);
  console.log(`Seeded ${label}: ${data.length} document(s)`);
}

/**
 * Connects to the database and reseeds every collection with its seed data.
 *
 * @returns A promise that resolves once all collections have been seeded.
 */
async function run() {
  await connectDb();

  await seedCollection(StoryChapter, storyChaptersData, "story_chapters");
  await seedCollection(Experience, experiencesData, "experiences");
  await seedCollection(Project, projectsData, "projects");
  await seedCollection(Skill, skillsData, "skills");
  await seedCollection(Certification, certificationsData, "certifications");
  await seedCollection(Education, educationData, "education");

  if (nowUpdateData === null) {
    console.log("Skipping now_updates — no seed data yet");
  } else {
    await NowUpdate.deleteMany({});
    await NowUpdate.create(nowUpdateData);
    console.log("Seeded now_updates: 1 document");
  }

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
