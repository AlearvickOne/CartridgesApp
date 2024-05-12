import { SocketApiClass } from "@/api/socket-api";
import { ButtonViolet } from "../ButtonViolet";
import { Checkbox } from "@mui/material";
import { useGetOrdersData } from "@/hooks/orders/useGetOrdersData";
import { useState } from "react";

export const OrdersDeleteMenu = () => {
  const [isDeletedOnlyPaid, setIsDeletedOnlyPaid] = useState<boolean>(false);
  const orders = useGetOrdersData();
  const [selectOrder, setSelectOrder] = useState<unknown>();

  return (
    <div
      id="ordersMenu"
      className="px-5 my-5 flex justify-between flex-col md:flex-row items-center w-full"
    >
      <div className="flex flex-col w-[20rem]">
        <select
          className="h-8 border-2 border-violet-800 rounded-[6px] text-center"
          onChange={(e) => setSelectOrder(e.target.value)}
        >
          {orders?.map(({ id }) => (
            <option key={id} value={id}>
              ID Заказа: {id}
            </option>
          ))}
        </select>
        <ButtonViolet
          typeBtn="submit"
          OnClickFn={() => SocketApiClass.deleteOrder(Number(selectOrder))}
          otherClasses="h-full  mt-2"
        >
          Удалить заказ
        </ButtonViolet>
      </div>
      <hr className="md:hidden w-full border-b-2 my-2 border-violet-800" />
      <div className="">
        <div>
          <label>
            Только оплаченные
            <Checkbox onClick={() => setIsDeletedOnlyPaid(!isDeletedOnlyPaid)} />
          </label>
        </div>
        <ButtonViolet
          typeBtn="submit"
          OnClickFn={() => SocketApiClass.deleteAllOrders(isDeletedOnlyPaid)}
          otherClasses="h-full"
        >
          Очистить все заказы
        </ButtonViolet>
      </div>
    </div>
  );
};
