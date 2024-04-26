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

  getOrders() {
    this.SOCKET.emit("getOrders");

    this.SOCKET.on("orders", (orders) => {
      console.log(orders);
    });
  }

  createOrder(newOrder: { title: string; description: string; price: number }) {
    this.SOCKET.emit("createOrder", newOrder);
  }
}

export const SocketApiClass = new SocketApi();
