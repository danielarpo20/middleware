import { Request, Response } from "express";
import { userTokens } from "../constants/token";
import { addCacheResponse } from "../constants/cache";

export class OrdersController {
  async getOrders(req, res): Promise<Response> {
    try {
      console.log("Get orders Service")
      const orders = [
        {
          id: 1,
          name: "Order 1",
        },
        {
          id: 2,
          name: "Order 2",
        },
      ]

      const tokenInfo = userTokens.find((item)=> item.role === req.user.role)
      addCacheResponse("/api/orders/", req.user.role, { data: {orders, permissions: tokenInfo.permission} });
      
      return res.status(200).json({ data: {orders, permissions: tokenInfo.permission} });
    } catch (error) {
      console.log("Get orders error");
    }
  }
}