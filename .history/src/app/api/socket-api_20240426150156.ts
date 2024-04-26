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

    let ord = [{ id: 1, title: "", description: "", price: "", isPaid: false }];
    this.SOCKET.on("orders", (orders) => {
      ord = orders;
    });

    return ord;
  }

  createOrder(newOrder: { title: string; description: string; price: number }) {
    this.SOCKET.emit("createOrder", newOrder);
  }

  updateOrderIsPaidToTrue(id: number | string) {
    if (typeof id === "number") id = id.toString();

    this.SOCKET.emit("updateOrder", id);
  }
}

export const SocketApiClass = new SocketApi();
