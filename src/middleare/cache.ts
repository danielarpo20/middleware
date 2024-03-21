import { NextFunction, Request, Response } from "express";
import { getCacheResponse } from "../constants/cache";

export const cacheMiddleware = (
  req,
  res,
  next
) => {

  const cacheResponse = getCacheResponse(req.path, req.user.role);
  if (cacheResponse) {
    console.log("CacheMiddleware - Response cached ---> OK")
    return res.status(200).json(cacheResponse.response);
  }

  console.log("CacheMiddleware ---> OK")
  next();
};
