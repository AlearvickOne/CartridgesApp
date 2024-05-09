import { DisString } from "@/types/Dispatch.types";
import io from "socket.io-client";

class SocketApi {
  SOCKET = io("http://localhost:8800");

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

  getSordedOrdersByIdProvider(idProvider: number, setState: any) {
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

  setOrderInBasket(idOrder: number, idBasket: number) {
    this.SOCKET.emit("orderBasket:set", idOrder, idBasket);
  }
}

export const SocketApiClass = new SocketApi();
