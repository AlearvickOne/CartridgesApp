import { usePaymentsOrdersFromBasket } from "@/hooks/OrdersBasket/usePaymentsOrdersFromBasket";
import { IBasket } from "@/types/orders-basket.interface";
import { PayPalButtons } from "@paypal/react-paypal-js";

interface IPayPalButton {
  dataBasket: IBasket;
  valute: number;
}

export const PayPalButton = ({ valute, dataBasket }: IPayPalButton) => {
  const paymentOrdersBasket = usePaymentsOrdersFromBasket();

  return (
    <>
      {/* <button onClick={() => paymentOrdersBasket.mutate(+dataBasket.id)}>Оплата</button> */}
      <PayPalButtons
        className="mb-2  w-full h-full"
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
    </>
  );
};
