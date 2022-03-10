import type OrderRepo from "./repo";
import { IOrder } from "./interfaces";

class OrderServices {
  private orderRepo: OrderRepo;

  constructor(OrderRepo: OrderRepo) {
    this.orderRepo = OrderRepo;
  }

  public createOrder = async (config: IOrder) => {
    return await this.orderRepo.createOrder(config);
  };

  public getAllOrders = async (id: string) => {
    return await this.orderRepo.getAllOrders(id);
  };
}

export default OrderServices;
