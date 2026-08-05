import type { Request, Response } from "express";

/**
 * Sends a successful JSON response.
 *
 * @param res - The Express response object.
 * @param data - The payload to return under `data`.
 */
export function sendData(res: Response, data: unknown) {
  res.json({ success: true, data });
}

/**
 * Sends a 404 "not found" JSON error response.
 *
 * @param res - The Express response object.
 * @param message - A human-readable description of what wasn't found.
 */
export function sendNotFound(res: Response, message: string) {
  res
    .status(404)
    .json({ success: false, error: { code: "NOT_FOUND", message } });
}

/**
 * Sends a JSON error response with a custom status and error code.
 *
 * @param res - The Express response object.
 * @param status - The HTTP status code to respond with.
 * @param code - A machine-readable error code.
 * @param message - A human-readable error message.
 */
export function sendError(
  res: Response,
  status: number,
  code: string,
  message: string,
) {
  res.status(status).json({ success: false, error: { code, message } });
}

/**
 * Parses the `expand` query parameter into a set of relation names to include.
 *
 * @param req - The Express request object.
 * @returns The requested relation names, or an empty set if none were specified.
 */
export function parseExpand(req: Request): Set<string> {
  const raw = req.query.expand;
  if (typeof raw !== "string" || raw.length === 0) return new Set();
  return new Set(raw.split(",").map((part) => part.trim()));
}
