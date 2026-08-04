import { Router } from "express";
import emailjs from "@emailjs/nodejs";
import { sendData, sendError } from "../lib/http";
import { env } from "../config/env";
import { Contact } from "../models/contact.model";

export const contactRoutes = Router();

emailjs.init({
  publicKey: env.emailjsPublicKey,
  privateKey: env.emailjsPrivateKey,
});

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactRoutes.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return sendError(res, 400, "VALIDATION_ERROR", "Name, email, and message are required");
  }

  if (!EMAIL_REGEX.test(email)) {
    return sendError(res, 400, "VALIDATION_ERROR", "Invalid email format");
  }

  try {
    await Contact.create({ name, email, message });
  } catch (error) {
    console.error("Contact save error:", error);
    return sendError(res, 500, "SERVER_ERROR", "Failed to send message. Please try again later.");
  }

  try {
    await emailjs.send(env.emailjsServiceId, env.emailjsTemplateId, {
      from_name: name,
      reply_to: email,
      message,
    });

    sendData(res, { message: "Message sent successfully" });
  } catch (error) {
    console.error("EmailJS Error:", error);
    sendError(res, 500, "EMAIL_FAILED", "Message saved, but the notification email failed to send.");
  }
});
