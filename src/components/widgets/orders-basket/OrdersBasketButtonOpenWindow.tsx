import ShoppingIcon from "@mui/icons-material/ShoppingBasket";
import clsx from "clsx";
import { DisBoolean } from "@/types/Dispatch.types";
import { useGetBasket } from "@/hooks/OrdersBasket/useGetBasket";

interface IOrdersBasketButtonOpenWindow {
  setIsAnim: DisBoolean;
  isActiveWindowProducts: boolean;
}

export const OrdersBasketButtonOpenWindow = ({
  setIsAnim,
  isActiveWindowProducts,
}: IOrdersBasketButtonOpenWindow) => {
  const handleAnim = () => {
    setIsAnim(!isActiveWindowProducts);
  };
  const { data } = useGetBasket();

  return (
    <>
      {data?.orders !== undefined && (
        <div
          className={`fixed bottom-10 md:right-20 right-10 z-50 bg-slate-100 rounded-[17px] transition-all hover:shadow-upmd  hover:shadow-indigo-400 bg-gradient-to-b from-violet-400 to-indigo-600`}
        >
          <button className="relative  p-4 rounded-[12]" onClick={handleAnim}>
            <p
              className={`absolute bottom-[2.4rem] right-[2.2rem] rounded-full p-1 bg-red-600 ${clsx(
                {
                  "opacity-0": data.orders.length === 0,
                  "min-w-[2.2rem] min-h-2": data.orders.length! < 10,
                  "min-w-[2.3rem] min-h-2": data.orders.length! >= 10 && data.orders.length! < 100,
                  "min-w-2 min-h-2": data.orders.length! >= 100,
                }
              )} text-white`}
            >
              {data.orders.length}
            </p>
            <ShoppingIcon sx={{ fontSize: 30, color: "white" }} />
          </button>
        </div>
      )}
    </>
  );
};
