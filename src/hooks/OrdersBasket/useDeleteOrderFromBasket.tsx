import { OrderBasketServiceClass } from "@/api/services/orderBasket-services/orderBasket-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteOrderFromBasket = () => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ["deleteOrderFromBasket"],
    mutationFn: (idOrder: string) => OrderBasketServiceClass.deleteOrderFromBasket(idOrder),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["getBasket"] });
    },
  });
};