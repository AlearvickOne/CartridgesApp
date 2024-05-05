import { SocketApiClass } from "@/api/socket-api";
import { useEffect, useState } from "react";

export const useCheckConnectSocketStatus = () => {
  const [status, setStatus] = useState<string>();

  SocketApiClass.connectionCheck(setStatus);
  console.log(status);

  return status;
};
