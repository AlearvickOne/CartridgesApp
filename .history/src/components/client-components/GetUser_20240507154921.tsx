"use client";

import { UserServiceClass } from "@/api/services/user-service";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrentUser = () => {
  const { data } = useQuery({
    queryKey: ["getUser"],
    queryFn: () => UserServiceClass.getUser(),
  });
};
