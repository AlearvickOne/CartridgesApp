import { reduceSumValue } from "@/utils/reduceCustom/reduceSumValue";
import { SocketApiClass } from "@/api/socket-api";

import stylesAnims from "@/styles/anims/anims.module.scss";
import stylesGradien from "@/styles/styles-gradient.module.scss";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import { useGetOrdersInBasket } from "@/hooks/useGetOrdersInBasket";
// import { PayPalButton } from "../pay-pal/PayPalButton";
import { DollarIcon, RubleIcon } from "@/styles/mui-icons/ValutesIcon";

interface IOrdersBasketWindow {
  isActiveWindowProducts: boolean;
  isAnim: boolean;
}

export const OrdersBasketWindow = ({ isActiveWindowProducts, isAnim }: IOrdersBasketWindow) => {
  const ordersInBasket = useGetOrdersInBasket();

  console.log(ordersInBasket);

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
            {ordersInBasket?.map(({ id, title, price }) => (
              <li key={id} className="border-2 p-2 grid grid-cols-3">
                <h6 className="max-w-24 break-words text-[14px] text-left">{title}</h6>
                <p className="text-[14px] flex justify-end items-center text-red-600">
                  {price} <RubleIcon colorName={"red"} />
                </p>
                <button onClick={() => SocketApiClass.deleteOrderFromBasket(id)}>
                  <DeleteIcon />
                </button>
              </li>
            ))}
          </ul>
          <p className="my-2 text-white flex items-center justify-center">
            Общая сумма {rubSum}
            <RubleIcon colorName={"white"} /> - {usdSum} <DollarIcon colorName={"while"} />
          </p>
          <button
            className=" border-2 px-2 py-4 rounded-lg bg-white"
            onClick={() => SocketApiClass.updateOrderIsPaidToTrue()}
          ></button>
          {/* <PayPalButton valute={usdSum} /> */}
        </div>
      )}
    </>
  );
};
