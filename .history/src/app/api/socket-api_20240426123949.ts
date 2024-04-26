import io, { Socket } from "socket.io-client";
class SocketApi {
  static socket: null | Socket = null;

  static createConnection(): void {
    io("http://localhost:8800/");
  }
}
