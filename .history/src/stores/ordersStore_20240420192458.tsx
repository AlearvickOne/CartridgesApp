import { observable, action, makeObservable } from "mobx";

interface IOrders {
  id: string | number;
  title: string;
  description: string;
  isStatusOrder: boolean;
}

class ordersStore {
  orders: IOrders[] = [
    {
      id: "0",
      title: "Заказ 1",
      description: "Описание заказа 1",
      isStatusOrder: false,
    },
    {
      id: "1",
      title: "Заказ 2",
      description: "Описание заказа 2",
      isStatusOrder: false,
    },
    {
      id: "2",
      title: "Заказ 3",
      description: "Описание заказа 3",
      isStatusOrder: false,
    },
    {
      id: "3",
      title: "Заказ 4",
      description: "Описание заказа 4",
      isStatusOrder: false,
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
      setOrderStatus: action,
    });
  }

  setOrderStatus = async (id: string | number, isStatusOrder: boolean) => {
    if (typeof id === "number") return (id = id.toString());

    this.orders.forEach((thisOrder) => {
      if (thisOrder.id === id) {
        thisOrder.isStatusOrder = isStatusOrder;
      }
      console.log(this.orders, isStatusOrder);
    });
  };
}

export const ordersStoreClass = new ordersStore();
