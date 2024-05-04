import { ReactNode } from "react";

export type TPaid = "paid" | "waiting" | "notPaid";

export interface IOrders {
  id: string | number;
  title: string;
  price: number;
  isPaid: TPaid;
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
  isPaidOrder: TPaid || TPaid[];
  orders?: [];
}

export interface IFormCreateOrder {
  createOrderForm: (formdata: FormData) => void;
}
