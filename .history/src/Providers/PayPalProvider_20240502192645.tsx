import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PayPalProvider = () => {
  return <PayPalScriptProvider options={{ clientId: "" }}></PayPalScriptProvider>;
};
