import io, { Socket } from "socket.io-client";
class SocketApi {
  static socket: null | Socket = null;

  static createConnection(): void {
    this.socket = io("http://localhost:8800/");

    this.socket.on("connect", () => {});
  }
}
