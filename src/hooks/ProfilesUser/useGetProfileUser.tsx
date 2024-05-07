"use client";

import { UserServiceClass } from "@/api/services/user-services/user-service";
import { useQuery } from "@tanstack/react-query";

export const useGetProfileUser = () => {
  return useQuery({
    queryKey: ["getUser"],
    queryFn: async () => await UserServiceClass.getUser(),
  });
};
