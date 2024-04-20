import { RequiresClass } from "@/services/requires.class";
import { observable, action, makeAutoObservable } from "mobx";

interface IOrders {
  id: string | number;
  title: string;
  description: string;
  isPaid: boolean;
}

class ordersStore {
  orders: IOrders[] = [
    {
      id: "0",
      title: "title 1",
      description: "desc 1",
      isPaid: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  getOrders = async (orders: IOrders[]) => {
    this.orders = await RequiresClass.getOrdersData();
  };

  setOrderStatus = async (id: string | number, isPaid: boolean) => {
    if (typeof id === "number") return (id = id.toString());

    this.orders?.forEach((thisOrder) => {
      if (thisOrder.id === id) {
        thisOrder.isPaid = !isPaid;
        console.log(thisOrder.isPaid, isPaid);
      }
    });
  };
}

export const ordersStoreClass = new ordersStore();
