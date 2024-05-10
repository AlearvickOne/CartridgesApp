import { OrderBasketServiceClass } from "@/api/services/orderBasket-services/orderBasket-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePaymentsOrdersFromBasket = () => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ["paymentsOrdersFromBasket"],
    mutationFn: (idBasket: number) => OrderBasketServiceClass.paymentsOrdersInBasket(idBasket),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["getBasket"] });
    },
  });
};
