import { RequiresClass } from "@/services/requires.class";
import { useQuery } from "@tanstack/react-query";

export const useGetOrdersData = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => RequiresClass.getOrdersData(),
    select: ({ data }) => data,
  });
};
