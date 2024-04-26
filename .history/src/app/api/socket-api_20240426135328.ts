import io, { Socket } from "socket.io-client";

class SocketApi {
  SOCKET = io("http://localhost:8800/");

  createConnection(): void {
    this.SOCKET.on("connect", () => {
      console.log("connected");
    });

    this.SOCKET.on("disconnect", () => {
      console.log("disconnected");
    });

    // --- LOGIC ---

    this.SOCKET.emit("getOrders");

    this.SOCKET.on("orders", (updatedOrders) => {
      console.log(updatedOrders);
    });
  }

  getOrders() {}
}

export const SocketApiClass = new SocketApi();
