import { NextFunction, Request, Response } from "express";

export const sanitizeMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const moveOn = true;
  if (!moveOn) return res.status(401).json({ error: "Sanitize error" });
  console.log("sanitizeMiddleware ---> OK");
  next();
};
