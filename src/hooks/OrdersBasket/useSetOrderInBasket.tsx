import { OrderBasketServiceClass } from "@/api/services/orderBasket-services/orderBasket-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSetOrderInBasket = () => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ["setOrderInBasket"],
    mutationFn: (setData: { idOrder: number; idBasket: number }) => {
      return OrderBasketServiceClass.setOrderInBasket(setData.idOrder, setData.idBasket);
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["getBasket"] });
    },
  });
};
