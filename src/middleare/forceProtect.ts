import { NextFunction, Request, Response } from "express";
import { ipAddresses } from "../constants/ip";

export const forceProtectMiddleware = (req, res, next) => {

  // add validation to count how many bad request that IP has.
  const ipAddress = req.socket.remoteAddress.split(":").slice(-1)[0];
  addIpIfDoesNotExist(ipAddress)

  const ipFound = ipAddresses.find((item) => item.ip === ipAddress);
  if (ipFound.count >= 5) {
    return res.status(429).json({ error: "Too Many Requests" });
  }

  req.user = {
    ip : ipAddress
  }

  console.log("forceProtectMiddleware ---> OK");
  next();
};

const addIpIfDoesNotExist = (ip: string) => {
  const ipFound = ipAddresses.find((item) => item.ip === ip);

  if (!ipFound) {
    ipAddresses.push({ ip, count: 0 });
  }
}