import io from "socket.io-client";

class SocketApi {
  SOCKET = io("http://localhost:8800/");

  createConnection(): void {
    this.SOCKET.on("connect", () => {
      console.log("connected");
    });

    this.SOCKET.on("disconnect", () => {
      console.log("disconnected");
    });
  }

  getOrders() {
    this.SOCKET.emit("getOrders");

    this.SOCKET.on("orders", (updatedOrders) => {
      console.log(updatedOrders);
    });
  }
}

export const SocketApiClass = new SocketApi();
