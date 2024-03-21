import { NextFunction, Request, Response } from "express";
import { userTokens } from "../constants/token";
import { addCountToIp, resetIpCount } from "../constants/ip";

export const authMiddleware = (req, res, next
) => {
  const token = req.headers["authorization"];

  if (!token) {
    addCountToIp(req.user.ip)
    res.status(400).json({ error: "Missing Authorization header" });
  }
  
  
  let roleValition = false;
  userTokens.some((item)=> {
    if (item.token === token) {
      req.user.role = item.role;
      roleValition = true;
    }
  })

  if (!roleValition) {
    addCountToIp(req.user.ip)
    return res.status(401).json({ error: "Unauthorized" });
  }

  
  resetIpCount(req.user.ip)
  console.log("authMiddleware ---> OK");
  next();
};
