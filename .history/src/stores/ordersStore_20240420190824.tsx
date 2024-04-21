import { observable, action, makeObservable } from "mobx";

interface IOrders {
  id?: string | number;
  title?: string;
  description?: string;
  isStatusOrder?: boolean;
}

class ordersStore {
  orders: IOrders[] = [
    {
      id: "0",
      title: "Заказ 1",
      description: "Описание заказа 1",
      isStatusOrder: true,
    },
    {
      id: "1",
      title: "Заказ 2",
      description: "Описание заказа 2",
      isStatusOrder: true,
    },
    {
      id: "2",
      title: "Заказ 3",
      description: "Описание заказа 3",
      isStatusOrder: true,
    },
    {
      id: "3",
      title: "Заказ 4",
      description: "Описание заказа 4",
      isStatusOrder: true,
    },
    {
      id: "4",
      title: "Заказ 5",
      description: "Описание заказа 5",
      isStatusOrder: false,
    },
  ];

  constructor() {
    makeObservable(this, {
      orders: observable,
    });
  }

  setOrderStatus = async (id: string | number, isStatusOrder: boolean) => {
    if (typeof idOrder === "number") return (idOrder = idOrder.toString());

    this.orders.forEach((thisOrder) => {
      if (thisOrder === id) isStatusOrder = isStatusOrder;
    });
  };
}

export const ordersStoreClass = new ordersStore();