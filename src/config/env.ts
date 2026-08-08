import "dotenv/config";

/**
 * Reads a required environment variable, throwing if it isn't set.
 *
 * @param name - The environment variable's name.
 * @returns The variable's value.
 * @throws {Error} If the environment variable is missing or empty.
 */
function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  port: process.env.PORT ?? "3000",
  mongoUri: required("MONGODB_URI"),
  emailjsServiceId: required("EMAILJS_SERVICE_ID"),
  emailjsTemplateId: required("EMAILJS_TEMPLATE_ID"),
  emailjsPublicKey: required("EMAILJS_PUBLIC_KEY"),
  emailjsPrivateKey: required("EMAILJS_PRIVATE_KEY"),
  anthropicApiKey: required("ANTHROPIC_API_KEY"),
};
