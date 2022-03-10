import { IOrder } from "../interfaces";

class OrderRepo {
  model: any;
  constructor(Model: any) {
    this.model = Model;
  }

  public createOrder = async (config: IOrder) => {
    return this.model.create({
      userId: config.id,
      price: config.price,
      goods: config.goods,
      type: "NEW",
    });
  };

  public getAllOrders = async (id: string) => {
    return this.model.findAll({
      where: { userId: id },
    });
  };
}

export default OrderRepo;
