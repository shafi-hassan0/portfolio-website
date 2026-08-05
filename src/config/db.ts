import mongoose from "mongoose";
import { env } from "./env";

/**
 * Opens the Mongoose connection to MongoDB using the configured connection string.
 *
 * @returns A promise that resolves once the connection is established.
 */
export async function connectDb(): Promise<void> {
  await mongoose.connect(env.mongoUri);
}
