import { UserServiceClass } from "@/api/services/user-service";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export const GetUser = () => {
  const { data } = useQuery({
    queryKey: ["getUser"],
    queryFn: () => UserServiceClass.getUser(),
  });

  console.log(data);
  return <div>getUser</div>;
};
