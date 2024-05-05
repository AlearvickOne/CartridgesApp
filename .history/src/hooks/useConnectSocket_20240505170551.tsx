import { SocketApiClass } from "@/api/socket-api";
import { useEffect } from "react";

export const useConnectSocket = () => {
  const connectSocket = () => {
    SocketApiClass.connectionCheck();
  };

  useEffect(() => {
    connectSocket();
  }, []);
};
