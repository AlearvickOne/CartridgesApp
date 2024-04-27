export interface IOrders {
  id: string | number;
  title: string;
  description: string;
  isPaid: boolean;
}

export interface IGetListOrderInPage {
  isPaidOrder: boolean;
  orders?: [];
}

interface IFormCreateOrder {
  createOrderfn: (formdata: FormData) => void;
}
