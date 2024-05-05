import { IBasket } from "@/types/orders-basket.interface";
import { Dispatch, SetStateAction } from "react";
import io from "socket.io-client";

class SocketApi {
  SOCKET = io("http://localhost:8800");

  async connectionCheck(setStatus: React.Dispatch<React.SetStateAction<string | undefined>>) {
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

  createOrder(newOrder: {
    title: string;
    description: string;
    price: number;
    address: string;
    date: string;
  }) {
    this.SOCKET.emit("createOrder", newOrder);
  }

  updateOrderIsPaidToTrue() {
    this.SOCKET.emit("updateOrder");
  }

  // --- ORDERS BASKET

  getOrdersFromBasket(setState: Dispatch<SetStateAction<IBasket | undefined>>) {
    this.SOCKET.emit("orderBasket:get");

    this.SOCKET.on("orderBasket:geted", (ordersBasket) => {
      setState(ordersBasket);
    });
  }

  setOrderInBasket(idOrder: number | string) {
    this.SOCKET.emit("orderBasket:set", idOrder);
  }

  deleteOrderFromBasket(idOrderBasket: number | string) {
    this.SOCKET.emit("orderBasket:delete", idOrderBasket);
  }
}

export const SocketApiClass = new SocketApi();
