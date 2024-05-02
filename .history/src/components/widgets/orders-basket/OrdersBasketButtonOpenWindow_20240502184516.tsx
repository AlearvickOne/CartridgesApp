import { quantityNumbersStyle } from "@/utils/quantityNumbersStyle";

import ShoppingIcon from "@mui/icons-material/ShoppingBasket";

export const OrdersBasketButtonOpenWindow = ({
  setIsAnim,
  isActiveWindowProducts,
  ordersInBasket,
}) => {
  const handleAnim = () => {
    setIsAnim(!isActiveWindowProducts);
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
