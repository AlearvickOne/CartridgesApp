import io from "socket.io-client";

class SocketApi {
  SOCKET = io("http://localhost:8800/");

  connectionCheck(): void {
    this.SOCKET.on("connect", () => {
      console.log("connected");
    });

    this.SOCKET.on("disconnect", () => {
      console.log("disconnected");
    });
  }

  getOrders(): Promise<
    [{ id: number; title: string; description: string; price: number; isPaid: boolean }]
  > {
    return new Promise((resolve) => {
      this.SOCKET.emit("getOrders");

      this.SOCKET.on("orders", (orders) => {
        return resolve(orders);
      });
    });
  }

  createOrder(newOrder: { title: string; description: string; price: number }) {
    this.SOCKET.emit("createOrder", newOrder);
    const res = this.getOrders();
    console.log(res);
  }

  updateOrderIsPaidToTrue(id: number | string) {
    if (typeof id === "number") id = id.toString();

    this.SOCKET.emit("updateOrder", id);
  }
}

export const SocketApiClass = new SocketApi();
