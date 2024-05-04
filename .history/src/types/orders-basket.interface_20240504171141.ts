import { TPaid } from "./orders.interface";

export interface IBasket {
  id: number | string;
  orders: IOrdersBasket[];
}

export interface IOrdersBasket {
  id: number | string;
  title: string;
  description: string;
  price: number;
  isPaid: TPaid;
}

export type IOrderInBasketInArray = [IBasket];
