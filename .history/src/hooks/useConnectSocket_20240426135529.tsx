import { SocketApiClass } from "@/app/api/socket-api";
import { useEffect } from "react";

export const useConnectSocket = () => {
  const connectSocket = () => {
    SocketApiClass.connectionCheck();
  };

  useEffect(() => {
    connectSocket();
  }, []);
};
