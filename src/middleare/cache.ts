import { NextFunction, Request, Response } from "express";

export const cacheMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cache = true;
  if (cache) res.status(200).json({ data: cache });
  console.log("pasa");

  next();
};
