import { NextFunction, Request, Response } from "express";

export const forceProtectMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const moveOn = true;
  if (!moveOn) res.status(401).json({ error: "Force Protect error" });
  console.log("forceProtectMiddleware ---> OK");
  next();
};
