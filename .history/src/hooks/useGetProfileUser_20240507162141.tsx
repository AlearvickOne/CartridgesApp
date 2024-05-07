"use client";

import { UserServiceClass } from "@/api/services/user-service";
import { useQuery } from "@tanstack/react-query";

export const useGetProfileUser = () => {
  useQuery({
    queryKey: ["getUser"],
    queryFn: () => UserServiceClass.getUser(),
  });
};
