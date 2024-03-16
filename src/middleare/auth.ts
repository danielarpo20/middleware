import { NextFunction, Request, Response } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (!token) res.status(400).json({ error: "Missing Authorization header" });
  console.log("pasa");

  next();
};
