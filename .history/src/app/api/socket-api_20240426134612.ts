import io, { Socket } from "socket.io-client";

class SocketApi {
  socket: null | Socket = null;

  createConnection(): void {
    this.socket = io("http://localhost:8800/");

    this.socket.on("connect", () => {
      console.log("connected");
    });

    this.socket.on("disconnect", () => {
      console.log("disconnected");
    });
  }
}

export const SocketApiClass = new SocketApi();
