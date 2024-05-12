import { OrderBasketServiceClass } from "@/api/services/orderBasket-services/orderBasket-service";
import { GET_BASKET, M_PAYMENTS_ORDERS_FROM_BASKET } from "@/constants/constantsQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePaymentsOrdersFromBasket = () => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: [M_PAYMENTS_ORDERS_FROM_BASKET],
    mutationFn: (idBasket: number) => OrderBasketServiceClass.paymentsOrdersInBasket(idBasket),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [GET_BASKET] });
    },
  });
};
