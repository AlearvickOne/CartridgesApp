import io, { Socket } from "socket.io-client";

class SocketApi {
  SOCKET = io("http://localhost:8800/");

  createConnection(): void {
    this.socket.on("connect", () => {
      console.log("connected");
    });

    this.socket.on("disconnect", () => {
      console.log("disconnected");
    });

    // --- LOGIC ---

    this.socket.emit("getOrders");

    this.socket.on("orders", (updatedOrders) => {
      console.log(updatedOrders);
    });
  }

  getOrders() {}
}

export const SocketApiClass = new SocketApi();
