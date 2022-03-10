interface IOrder {
  id: string;
  price: number;
  goods: Array<string>;
  type?: string;
}

export type { IOrder };
