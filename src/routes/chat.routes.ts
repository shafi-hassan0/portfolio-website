import { Router } from "express";
import rateLimit from "express-rate-limit";
import Anthropic from "@anthropic-ai/sdk";
import { sendData, sendError } from "../lib/http";
import { env } from "../config/env";
import { getChatContext, isLikelyRelevant } from "../lib/chat-context";

export const chatRoutes = Router();

const client = new Anthropic({ apiKey: env.anthropicApiKey });

const OFF_TOPIC_REPLY =
  "I can only answer questions about Shafi's background, experience, skills, and projects.";
const MAX_MESSAGE_LENGTH = 500;

const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 6,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: "RATE_LIMITED",
      message: "Too many messages, please wait a moment and try again.",
    },
  },
});

chatRoutes.post("/", chatLimiter, async (req, res) => {
  const { message } = req.body;

  if (typeof message !== "string" || message.trim().length === 0) {
    return sendError(res, 400, "VALIDATION_ERROR", "message is required");
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return sendError(res, 400, "VALIDATION_ERROR", "message is too long");
  }

  const context = await getChatContext();

  // Relevance gate: obviously off-topic questions never reach the API.
  if (!isLikelyRelevant(message, context.keywords)) {
    return sendData(res, { reply: OFF_TOPIC_REPLY });
  }

  try {
    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 400,
      system: [
        {
          type: "text",
          text: context.systemPrompt,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [{ role: "user", content: message }],
    });

    const textBlock = response.content.find((block) => block.type === "text");
    sendData(res, { reply: textBlock?.text ?? OFF_TOPIC_REPLY });
  } catch (error) {
    console.error("Chat error:", error);
    sendError(
      res,
      500,
      "SERVER_ERROR",
      "Failed to get a response. Please try again later.",
    );
  }
});
