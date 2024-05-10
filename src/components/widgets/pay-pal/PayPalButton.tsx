import { usePaymentsOrdersFromBasket } from "@/hooks/OrdersBasket/usePaymentsOrdersFromBasket";
import { IBasket } from "@/types/orders-basket.interface";
import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";

interface IPayPalButton {
  dataBasket: IBasket;
  valute: number;
}

export const PayPalButton = ({ valute, dataBasket }: IPayPalButton) => {
  const paymentOrdersBasket = usePaymentsOrdersFromBasket();

  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: valute.toString(),
                currency_code: "USD",
              },
            },
          ],
          intent: "CAPTURE",
        });
      }}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onApprove={async (data, action) => {
        try {
          return paymentOrdersBasket.mutate(+dataBasket.id);
        } catch (error) {
          console.log(error);
        }
      }}
    />
  );
};
