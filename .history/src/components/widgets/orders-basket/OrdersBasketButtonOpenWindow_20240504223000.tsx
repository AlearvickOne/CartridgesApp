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
  const style = ordersInBasket !== undefined && quantityNumbersStyle(ordersInBasket!.length);
  console.log(style);
  return (
    <>
      <div
        className={`fixed bottom-10 right-20 z-50 bg-slate-100 rounded-[17px] transition-all hover:shadow-upmd  hover:shadow-indigo-400 bg-gradient-to-b from-violet-400 to-indigo-600`}
      >
        <button className="relative  p-4 rounded-[12]" onClick={handleAnim}>
          <p className={`absolute bottom-[2.4rem] right-[2.2rem] ${style} text-white`}>
            {ordersInBasket?.length}
          </p>
          <ShoppingIcon sx={{ fontSize: 30, color: "white" }} />
        </button>
      </div>
    </>
  );
};
