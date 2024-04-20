import { observable, action, makeAutoObservable } from "mobx";

interface IOrders {
  id: string | number;
  title: string;
  description: string;
  isStatusOrder: boolean;
}

class ordersStore {
  orders: IOrders[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setOrderStatus = async (id: string | number, isStatusOrder: boolean) => {
    if (typeof id === "number") return (id = id.toString());

    this.orders?.forEach((thisOrder) => {
      if (thisOrder.id === id) {
        thisOrder.isStatusOrder = !isStatusOrder;
        console.log(thisOrder.isStatusOrder, isStatusOrder);
      }
    });
  };
}

export const ordersStoreClass = new ordersStore();
