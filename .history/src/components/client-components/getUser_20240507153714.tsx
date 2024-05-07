import { UserServiceClass } from "@/api/services/user-service";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export const getUser = () => {
  const { data } = useQuery({
    queryKey: ["getUser"],
    queryFn: () => UserServiceClass.getUser(),
  });
  return <div>getUser</div>;
};
