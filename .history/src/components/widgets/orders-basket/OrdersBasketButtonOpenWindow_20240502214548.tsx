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

  const quantityNumbersStyle = (quantity: number | undefined): string => {
    console.log(quantity);
    const style = "rounded-full border-[2px] p-1 bg-red-600";

    if (quantity === undefined || quantity === 0) return "";

    if (quantity < 10) return style + " min-w-[2.2rem] min-h-2";
    else if (quantity >= 10 && quantity < 100) return style + " min-w-[2.3rem] min-h-2";
    else return style + " min-w-2 min-h-2";
  };

  return (
    <>
      <div className="fixed bottom-10 right-20 z-50">
        <button className="relative border-2 border-black p-4 rounded-[12]" onClick={handleAnim}>
          <p
            className={`absolute bottom-[2.4rem] right-[2.2rem] ${quantityNumbersStyle(
              ordersInBasket?.length
            )} text-white`}
          >
            {ordersInBasket?.length}
          </p>
          <ShoppingIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
    </>
  );
};
