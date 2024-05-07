"use client";

import { UserServiceClass } from "@/api/services/user-service";
import { useQuery } from "@tanstack/react-query";

export const useGetProfileUser = () => {
  returnuseQuery({
    queryKey: ["getUser"],
    queryFn: () => UserServiceClass.getUser(),
  });
};
