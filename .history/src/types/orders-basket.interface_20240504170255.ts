import { IOrders } from "./orders.interface";

export interface IOrderInBasket {
  id: number | string;
  orders: IOrders[];
}

export type IOrderInBasketInArray = [IOrderInBasket];
