import { SocketApiClass } from "@/api/socket-api";
import { useEffect, useState } from "react";

export const useCheckConnectSocketStatus = () => {
  const [status, setStatus] = useState<string>();

  useEffect(() => {
    const statusFn = async () => {
      await SocketApiClass.connectionCheck(setStatus);
      console.log(status);
    };

    statusFn();
  }, [status]);

  return status;
};
