import { useGetOrdersInBasket } from "@/hooks/useGetOrdersInBasket";
import { quantityNumbersStyle } from "@/utils/quantityNumbersStyle";

import ShoppingIcon from "@mui/icons-material/ShoppingBasket";
import { Dispatch, SetStateAction } from "react";

interface IOrdersBasketButtonOpenWindow {
  setIsAnim: Dispatch<SetStateAction<boolean>>;
  isActiveWindowProducts: boolean;
}

export const OrdersBasketButtonOpenWindow = ({
  setIsAnim,
  isActiveWindowProducts,
}: IOrdersBasketButtonOpenWindow) => {
  const handleAnim = () => {
    setIsAnim(!isActiveWindowProducts);
  };
  const ordersInBasket = useGetOrdersInBasket();
  const style = quantityNumbersStyle(ordersInBasket?.length);
  console.log(style);
  return (
    <>
      <div className="fixed bottom-10 right-20 z-50">
        <button className="relative border-2 border-black p-4 rounded-[12]" onClick={handleAnim}>
          <p
            className={`absolute bottom-[2.4rem] right-[2.2rem] rounded-full border-[2px] p-1 bg-red-600 text-white`}
          >
            {ordersInBasket?.length}
          </p>
          <ShoppingIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
    </>
  );
};
