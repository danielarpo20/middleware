import { Request, Response } from "express";
import { userTokens } from "../constants/token";

export class OrdersController {
  async getOrders(req, res): Promise<Response> {
    try {
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
      return res.status(200).json({ data: {orders, permissions: tokenInfo.permission} });
    } catch (error) {
      console.log("Get orders error");
    }
  }
}