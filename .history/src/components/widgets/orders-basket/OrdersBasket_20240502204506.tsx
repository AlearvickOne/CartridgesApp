"use client";

import { OrdersBasketWindow } from "./OrdersBasketWindow";
import { useEffect, useState } from "react";
import { OrdersBasketButtonOpenWindow } from "./OrdersBasketButtonOpenWindow";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useGetOrdersInBasket } from "@/hooks/useGetOrdersInBasket";

export const OrdersBasket = () => {
  const [isActiveWindowProducts, setIsActiveWindowProducts] = useState<boolean>(false);
  const [isAnim, setIsAnim] = useState<boolean>(false);
  const ordersInBasket = useGetOrdersInBasket();

  useEffect(() => {
    const timerEndAnimation = async () => {
      if (isAnim === false) {
        setTimeout(async () => {
          setIsActiveWindowProducts(false);
        }, 500);
      } else setIsActiveWindowProducts(true);
    };

    timerEndAnimation();
  }, [isAnim]);
  const handleAnim = () => {
    setIsAnim(!isActiveWindowProducts);
  };
  const ordersInBasket = useGetOrdersInBasket();
  const style = quantityNumbersStyle(ordersInBasket?.length);

  return (
    <>
      <>
        {isActiveWindowProducts && (
          <div
            className={`fixed bottom-32 right-20 z-50 p-5 border-2 rounded-xl ${
              stylesGradien.gradientToBottom
            } ${
              isAnim ? stylesAnims.scaleUpBottomRight : stylesAnims.scaleDownBottomRight
            } flex justify-center flex-col `}
          >
            <ul className="border-2 py-2 px-3 w-80 h-80  mb-2 rounded-lg bg-white overflow-auto">
              {ordersInBasket?.map(({ id, titleOrder, priceOrder }) => (
                <li key={id} className="border-2 p-2 flex justify-between items-center mb-2 h-auto">
                  <h6 className="max-w-24 break-words text-[14px]">{titleOrder}</h6>
                  <p className="text-[14px] flex items-center text-red-600">
                    {priceOrder}{" "}
                    <RubleIcon sx={{ fontSize: "14px", margin: "0 2px", color: "red" }} />
                  </p>
                  <button onClick={() => SocketApiClass.deleteOrderFromOrderBasket(id)}>
                    <DeleteIcon />
                  </button>
                </li>
              ))}
            </ul>
            <p className="my-2 text-white flex items-center justify-center">
              Общая сумма {reduceSumValue(ordersInBasket)}
              <RubleIcon sx={{ fontSize: "14px", margin: "0 2px", color: "white" }} />
            </p>
            {/* <button className=" border-2 px-2 py-4 rounded-lg bg-white">Оплатить</button> */}
            {/* <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: reduceSumValue(ordersInBasket).toString(),
                      currency_code: "USD",
                    },
                  },
                ],
                intent: "CAPTURE",
              });
            }}
          /> */}
          </div>
        )}
      </>
      <>
        {isActiveWindowProducts && (
          <div
            className={`fixed bottom-32 right-20 z-50 p-5 border-2 rounded-xl ${
              stylesGradien.gradientToBottom
            } ${
              isAnim ? stylesAnims.scaleUpBottomRight : stylesAnims.scaleDownBottomRight
            } flex justify-center flex-col `}
          >
            <ul className="border-2 py-2 px-3 w-80 h-80  mb-2 rounded-lg bg-white overflow-auto">
              {ordersInBasket?.map(({ id, titleOrder, priceOrder }) => (
                <li key={id} className="border-2 p-2 flex justify-between items-center mb-2 h-auto">
                  <h6 className="max-w-24 break-words text-[14px]">{titleOrder}</h6>
                  <p className="text-[14px] flex items-center text-red-600">
                    {priceOrder}{" "}
                    <RubleIcon sx={{ fontSize: "14px", margin: "0 2px", color: "red" }} />
                  </p>
                  <button onClick={() => SocketApiClass.deleteOrderFromOrderBasket(id)}>
                    <DeleteIcon />
                  </button>
                </li>
              ))}
            </ul>
            <p className="my-2 text-white flex items-center justify-center">
              Общая сумма {reduceSumValue(ordersInBasket)}
              <RubleIcon sx={{ fontSize: "14px", margin: "0 2px", color: "white" }} />
            </p>
            {/* <button className=" border-2 px-2 py-4 rounded-lg bg-white">Оплатить</button> */}
            {/* <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: reduceSumValue(ordersInBasket).toString(),
                      currency_code: "USD",
                    },
                  },
                ],
                intent: "CAPTURE",
              });
            }}
          /> */}
          </div>
        )}
      </>
    </>
  );
};
