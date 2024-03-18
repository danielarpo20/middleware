import { NextFunction, Request, Response } from "express";
import { userTokens } from "../constants/token";

export const authMiddleware = (req, res, next
) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(400).json({ error: "Missing Authorization header" });
  
  let roleValition = false;
  userTokens.some((item)=> {
    if (item.token === token) {
      req.user = { role : item.role };
      roleValition = true;
    }
  })

  if (!roleValition) return res.status(401).json({ error: "Unauthorized" });

  console.log("authMiddleware ---> OK");
  next();
};
