"use client";

import { useQuery } from "@tanstack/react-query";
import { OrderBasketServiceClass } from "@/api/services/orderBasket-services/orderBasket-service";
import { GET_BASKET } from "@/constants/constantsQuery";

export const useGetBasket = () => {
  return useQuery({
    queryKey: [GET_BASKET],
    queryFn: async () => await OrderBasketServiceClass.getBasket(),
  });
};
