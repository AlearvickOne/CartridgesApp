import { ReactNode } from "react";

export enum EPaid {
  paid = "paid",
  waiting = "waiting",
  notPaid = "notPaid",
}

export interface IOrders {
  id: string | number;
  title: string;
  price: number;
  isPaid: EPaid;
  address: string;
  date: string;
  datePaid: string;
  description: string;
}

export type IOrdersInArray = [IOrders];

export interface ILiOrder extends Omit<IOrders, "description"> {
  children: ReactNode;
}

export interface IGetListOrderInPage {
  isPaidOrder: boolean;
  orders?: [];
}

export interface IFormCreateOrder {
  createOrderForm: (formdata: FormData) => void;
}
