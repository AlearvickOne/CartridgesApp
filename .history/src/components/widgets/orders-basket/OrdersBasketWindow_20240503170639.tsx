import { reduceSumValue } from "@/utils/reduceCustom/reduceSumValue";
import { SocketApiClass } from "@/app/api/socket-api";

import RubleIcon from "@mui/icons-material/CurrencyRuble";
import stylesAnims from "@/styles/anims/anims.module.scss";
import stylesGradien from "@/styles/styles-gradient.module.scss";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useGetOrdersInBasket } from "@/hooks/useGetOrdersInBasket";

interface IOrdersBasketWindow {
  isActiveWindowProducts: boolean;
  isAnim: boolean;
}

export const OrdersBasketWindow = ({ isActiveWindowProducts, isAnim }: IOrdersBasketWindow) => {
  const ordersInBasket = useGetOrdersInBasket();

  const rubSum = reduceSumValue(ordersInBasket, "rub");
  const usdSum = reduceSumValue(ordersInBasket, "usd");

  return (
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
            Общая сумма {rubSum}
            <RubleIcon sx={{ fontSize: "14px", margin: "0 2px", color: "white" }} /> - {usdSum} USD
          </p>
          {/* <button className=" border-2 px-2 py-4 rounded-lg bg-white">Оплатить</button> */}
          <PayPalButtons valute={usdSum} />
        </div>
      )}
    </>
  );
};
