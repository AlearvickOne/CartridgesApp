"use client";

import { useQuery } from "@tanstack/react-query";
import { OrderBasketServiceClass } from "@/api/services/orderBasket-services/orderBasket-service";

export const useGetBasket = () => {
  return useQuery({
    queryKey: ["getBasket"],
    queryFn: async () => await OrderBasketServiceClass.getBasket(),
  });
};
