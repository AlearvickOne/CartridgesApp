import { OrderBasketServiceClass } from "@/api/services/orderBasket-services/orderBasket-service";
import { M_DELETE_ORDER_FROM_BASKET, GET_BASKET } from "@/constants/constantsQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteOrderFromBasket = () => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: [M_DELETE_ORDER_FROM_BASKET],
    mutationFn: (idOrder: string) => OrderBasketServiceClass.deleteOrderFromBasket(idOrder),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [GET_BASKET] });
    },
  });
};
