"use server";

import { RequiresClass } from "@/services/requires.class";
import { useQuery } from "@tanstack/react-query";

export const useGetOrdersData = async () => {
  "use server";
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => RequiresClass.getOrdersData(),
    select: ({ data }) => data,
  });
};
