import { DisArrayOrders, DisString } from "@/types/Dispatch.types";

import io from "socket.io-client";

class SocketApi {
  SOCKET = io(process.env.BASE_URL!);

  async connectionCheck(setStatus: DisString) {
    if (this.SOCKET.connected) {
      setStatus("connected");
    }

    // Обработчик события, срабатывающий при потере соединения
    this.SOCKET.on("disconnect", async () => {
      setStatus("disconnected");
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getOrders(setState: any) {
    this.SOCKET.emit("getOrders");

    this.SOCKET.on("orders", (orders) => {
      setState(orders);
    });
  }

  getSordedOrdersByIdProvider(idProvider: number, setState: DisArrayOrders) {
    this.SOCKET.emit("orders:getSortByIdProvider", idProvider);

    this.SOCKET.on("orders:sordedByIdProvider", (orders) => {
      setState(orders);
    });
  }

  createOrder(newOrder: {
    idProvider: number;
    title: string;
    description: string;
    price: number;
    address: string;
    date: string;
  }) {
    this.SOCKET.emit("createOrder", newOrder);
  }

  deleteOrder(idOrder: number) {
    this.SOCKET.emit("order:delete", idOrder);
  }

  deleteAllOrders(onlyPaid: boolean) {
    this.SOCKET.emit("order:deleteAllOrders", onlyPaid);
  }

  setOrderInBasket(idOrder: number, idBasket: number) {
    this.SOCKET.emit("orderBasket:set", idOrder, idBasket);
  }
}

export const SocketApiClass = new SocketApi();
