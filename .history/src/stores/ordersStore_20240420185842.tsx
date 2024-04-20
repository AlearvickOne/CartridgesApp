import { observable, action, makeObservable } from "mobx";

class ordersStore {
  orders = [
    {
        id: "0"
      title: "Заказ 1",
      description: "Описание заказа 1",
      isStatusOrder: true,
    },
    {
      title: "Заказ 2",
      description: "Описание заказа 2",
      isStatusOrder: true,
    },
    {
      title: "Заказ 3",
      description: "Описание заказа 3",
      isStatusOrder: true,
    },
    {
      title: "Заказ 4",
      description: "Описание заказа 4",
      isStatusOrder: true,
    },
    {
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

  const setOrderStatus = async(isStatusOrder) => {
    await this.orders = 
  }
}

export const ordersStoreClass = new ordersStore();
