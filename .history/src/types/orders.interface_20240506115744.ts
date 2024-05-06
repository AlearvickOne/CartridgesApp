import { ReactNode } from "react";
import { EnumPaidStatus } from "./enums";

export interface IOrders {
  id: string | number;
  title: string;
  price: number;
  isPaid: EnumPaidStatus;
  address: string;
  date: string;
  datePaid: string;
  description: string;
}

export interface ILiOrder extends Omit<IOrders, "description"> {
  children: ReactNode;
}

export interface IGetListOrderInPage {
  isPaidOrder: TPaid | TPaid[];
  orders?: [];
}

export interface IFormCreateOrder {
  createOrderForm: (formdata: FormData) => void;
}

export type IOrdersInArray = [IOrders];
export type IOrderNotDesc = Partial<Omit<IOrders, "description">>;
