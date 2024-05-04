import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";

interface IPayPalButton {
  valute: number;
}

export const PayPalButton = ({ valute }: IPayPalButton) => {
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
    />
  );
};
