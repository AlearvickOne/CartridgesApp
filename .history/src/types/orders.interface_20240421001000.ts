export interface IOrders {
  id: string | number;
  title: string;
  description: string;
  isPaid: boolean;
}

interface IGetListOrderInPage {
  isPaidOrder: boolean;
}
