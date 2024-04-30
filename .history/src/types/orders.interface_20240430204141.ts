import { ReactNode } from "react";

export interface IOrders {
  id: string | number;
  title: string;
  price: number;
  isPaid: boolean;
  address: string;
  date: string;
  datePaid: string;
  description: string;
}

export interface ILiOrder extends Omit<IOrders, "description"> {
  children: ReactNode;
}

export interface IGetListOrderInPage {
  isPaidOrder: boolean;
  orders?: [];
}

export interface IFormCreateOrder {
  createOrderfn: (formdata: FormData) => void;
}