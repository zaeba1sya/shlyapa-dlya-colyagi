import OrderController from "../controllers/OrderControllers";
import express, { Router } from "express";

class OrderRouter {
  private router: Router;
  constructor(OrderController: OrderController) {
    this.router = Router();
    this.router.post("/createOrder", OrderController.createOrder);
    this.router.post("/getAllOrders", OrderController.getAllOrders);
  }
}

export default OrderRouter;
