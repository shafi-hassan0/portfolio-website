import type { Request, Response } from "express";

export function sendData(res: Response, data: unknown) {
  res.json({ success: true, data });
}

export function sendNotFound(res: Response, message: string) {
  res
    .status(404)
    .json({ success: false, error: { code: "NOT_FOUND", message } });
}

export function sendError(
  res: Response,
  status: number,
  code: string,
  message: string,
) {
  res.status(status).json({ success: false, error: { code, message } });
}

export function parseExpand(req: Request): Set<string> {
  const raw = req.query.expand;
  if (typeof raw !== "string" || raw.length === 0) return new Set();
  return new Set(raw.split(",").map((part) => part.trim()));
}
