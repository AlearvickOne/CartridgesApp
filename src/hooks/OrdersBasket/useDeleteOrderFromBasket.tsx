import { OrderBasketServiceClass } from "@/api/services/orderBasket-services/orderBasket-service";
import { useMutation } from "@tanstack/react-query";
import { useInvalidateBasket } from "../ReactQuery/useInvalidateBasket";

export const useDeleteOrderFromBasket = () => {
  return useMutation({
    mutationKey: ["deleteOrderFromBasket"],
    mutationFn: (idOrder: string) => OrderBasketServiceClass.deleteOrderFromBasket(idOrder),
    onSuccess: () => {
      console.log(1);
      useInvalidateBasket();
    },
  });
};
