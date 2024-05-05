import { SocketApiClass } from "@/api/socket-api";
import React, { useEffect, useState } from "react";

export const useCheckConnectSocketStatus = () => {
  const [status, setStatus] = useState<string>();

  useEffect(() => {
    SocketApiClass.connectionCheck(setStatus);
  });
};
