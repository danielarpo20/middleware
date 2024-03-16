import { Request, Response } from "express";

export const getOrdersController = () => {
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Call external service to get orders
      console.log("llega");

      const orders = {};

      res.status(200).json({ data: orders });
    } catch (error) {
      console.log("Get orders error");
    }
  };
};
