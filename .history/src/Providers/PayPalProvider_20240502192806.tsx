import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PayPalProvider = () => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "ASzdWRosy6BcupeB1NuwUql31dX5DhKuSJ2xwRx-Ua0sCsqrWhPj-v-8kiHI24HRSz5TZr1nJS4DQr1L",
      }}
    ></PayPalScriptProvider>
  );
};
