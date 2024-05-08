import { EnumPaidStatus } from "./enums";

export interface IBasket {
  id: number | string;
  orders: IOrdersBasket[];
}

export interface IOrdersBasket {
  id: number | string;
  title: string;
  description: string;
  price: number;
  isPaid: EnumPaidStatus;
}

export type IOrderInBasketInArray = [IBasket];
