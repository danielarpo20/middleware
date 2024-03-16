import { Request, Response } from "express";

export const createOrdersController = () => {
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Call external service to create orders
      console.log("llega");

      const orders = {};

      res.status(200).json({ data: orders });
    } catch (error) {
      console.log("Create orders error");
    }
  };
};
