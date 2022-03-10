import OrderServices from "../services/OrderService";
import { Request, Response } from "express";

class OrderController {
  orderServices: OrderServices;
  constructor(OrderServices: OrderServices) {
    this.orderServices = OrderServices;
  }

  public createOrder = async (req: Request, res: Response) => {
    try {
      let { id, price, goods } = req.body;
      let data = await this.orderServices.createOrder({
        id,
        price,
        goods,
      });
      res.status(200).json({ data });
    } catch (e) {
      res.status(500).json({ error: "Internal error" });
    }
  };

  public getAllOrders = async (req: Request, res: Response) => {
    try {
      let { id } = req.body;
      let data = await this.orderServices.getAllOrders(id);
      res.status(200).json({ data });
    } catch (e) {
      res.status(500).json({ error: "Internal error" });
    }
  };
}

export default OrderController;
