import { Schema, model } from "mongoose";

const imageSchema = new Schema(
  {
    url: { type: String, required: true },
    caption: { type: String, default: "" },
  },
  { _id: false },
);

const storyChapterSchema = new Schema(
  {
    chapterNumber: { type: Number, required: true },
    title: { type: String, required: true },
    dateStart: { type: String, required: true },
    dateEnd: { type: String, required: true },
    content: { type: String, required: true },
    images: [imageSchema],
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: true },
  },
  { versionKey: false },
);

export const StoryChapter = model(
  "StoryChapter",
  storyChapterSchema,
  "story_chapters",
);
