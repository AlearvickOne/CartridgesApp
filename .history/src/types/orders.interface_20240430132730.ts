export interface IOrders {
  id: string | number;
  title: string;
  price: number;
  description: string;
  isPaid: boolean;
  address: string;
}

export interface IGetListOrderInPage {
  isPaidOrder: boolean;
  orders?: [];
}

export interface IFormCreateOrder {
  createOrderfn: (formdata: FormData) => void;
}
