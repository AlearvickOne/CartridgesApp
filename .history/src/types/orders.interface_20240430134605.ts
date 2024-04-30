import { ReactNode } from "react";

export interface IOrders {
  id: string | number;
  title: string;
  price: number;
  description?: string;
  children?: ReactNode;
  isPaid: boolean;
  address: string;
  date: Date;
  image: File;
}

interface ILiOrder extends IOrders {
  id: string | number;
  title: string;
  price: number;
  isPaid: boolean;
  children: ReactNode;
}

export interface IGetListOrderInPage {
  isPaidOrder: boolean;
  orders?: [];
}

export interface IFormCreateOrder {
  createOrderfn: (formdata: FormData) => void;
}
