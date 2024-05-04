import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";

const PayPalButton = () => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: usdSum.toString(),
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
