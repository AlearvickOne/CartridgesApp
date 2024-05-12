import { OrderBasketServiceClass } from "@/api/services/orderBasket-services/orderBasket-service";
import { GET_BASKET, M_SET_ORDER_IN_BASKET } from "@/constants/constantsQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSetOrderInBasket = () => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: [M_SET_ORDER_IN_BASKET],
    mutationFn: (setData: { idOrder: number; idBasket: number }) => {
      return OrderBasketServiceClass.setOrderInBasket(setData.idOrder, setData.idBasket);
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [GET_BASKET] });
    },
  });
};
