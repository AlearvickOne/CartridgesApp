import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";

const PayPalButton = (valute: number) => {
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

export default PayPalButton;
