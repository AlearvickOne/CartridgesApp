import { reduceSumValue } from "@/utils/reduceCustom/reduceSumValue";

import stylesAnims from "@/styles/anims/anims.module.scss";
import stylesGradien from "@/styles/styles-gradient.module.scss";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import { useGetBasket } from "@/hooks/OrdersBasket/useGetBasket";
// import { PayPalButton } from "../pay-pal/PayPalButton";
import { DollarIcon, RubleIcon } from "@/styles/mui-icons/ValutesIcon";
import { useDeleteOrderFromBasket } from "@/hooks/OrdersBasket/useDeleteOrderFromBasket";

interface IOrdersBasketWindow {
  isActiveWindowProducts: boolean;
  isAnim: boolean;
}

export const OrdersBasketWindow = ({ isActiveWindowProducts, isAnim }: IOrdersBasketWindow) => {
  const { data } = useGetBasket();
  const { mutate } = useDeleteOrderFromBasket();
  const rubSum = reduceSumValue(data?.orders, "rub");
  const usdSum = reduceSumValue(data?.orders, "usd");

  return (
    <>
      {isActiveWindowProducts && (
        <div
          className={`fixed bottom-32 right-20 z-50 p-5 rounded-xl ${
            stylesGradien.gradientToBottom
          } ${
            isAnim ? stylesAnims.scaleUpBottomRight : stylesAnims.scaleDownBottomRight
          } flex justify-center flex-col shadow-upmd shadow-indigo-900`}
        >
          <ul className="border-2 py-2 px-3 w-80 h-80  mb-2 rounded-lg bg-white overflow-auto">
            {data?.orders?.map(({ id, title, price }) => (
              <li key={id} className="border-2 p-2 grid grid-cols-3 mb-2">
                <h6 className="max-w-24 break-words text-[14px] text-left">{title}</h6>
                <p className="text-[14px] flex justify-end items-center text-red-600">
                  {price} <RubleIcon colorName={"red"} />
                </p>
                <button className="text-end" onClick={() => mutate(id.toString())}>
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
            // onClick={() => SocketApiClass.paymentOrdersInBasket(0)}
          ></button>
          {/* <PayPalButton valute={usdSum} /> */}
        </div>
      )}
    </>
  );
};
