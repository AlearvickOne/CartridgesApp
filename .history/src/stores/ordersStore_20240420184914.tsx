import { observable, action, makeObservable } from "mobx";

class ordesStore {
  orders = [
    {
      title: "Заказ 1",
      description: "Описание заказа 1",
      isStatusOrder: false,
    },
    {
      title: "Заказ 2",
      description: "Описание заказа 2",
      isStatusOrder: false,
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
}
