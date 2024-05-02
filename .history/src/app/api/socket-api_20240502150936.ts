import { IOrderInBasketInArray } from "@/types/orders-basket.interface";
import { Dispatch, SetStateAction } from "react";
import io from "socket.io-client";

class SocketApi {
  SOCKET = io("http://localhost:8800");

  connectionCheck(): void {
    this.SOCKET.on("connect", () => {
      console.log("connected");
    });

    this.SOCKET.on("disconnect", () => {
      console.log("disconnected");
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
    console.log(newOrder);
    this.SOCKET.emit("createOrder", newOrder);
  }

  updateOrderIsPaidToTrue(id: number | string) {
    if (typeof id === "number") id = id.toString();
    this.SOCKET.emit("updateOrder", id);
  }

  // --- ORDERS BASKET

  getOrdersFromBasket(setState: Dispatch<SetStateAction<IOrderInBasketInArray | undefined>>) {
    this.SOCKET.emit("orderBasket: get");

    this.SOCKET.on("ordersBasket", (ordersBasket) => {
      setState(ordersBasket);
      console.log(ordersBasket);
    });
  }

  setOrderInOrderBasket(idOrder: number | string) {
    this.SOCKET.emit("setOrderInOrderBasket", idOrder);
  }
}

export const SocketApiClass = new SocketApi();
