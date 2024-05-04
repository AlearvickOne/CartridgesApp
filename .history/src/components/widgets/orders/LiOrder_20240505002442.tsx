"use client";

import { SocketApiClass } from "@/api/socket-api";
import { useState } from "react";
import RubleIcon from "@mui/icons-material/CurrencyRuble";
import { ILiOrder } from "@/types/orders.interface";

export const LiOrder = ({ ...propsOrder }: ILiOrder) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

  // TODO
  // const clickUpdatePaid = () => {
  //   return SocketApiClass.updateOrderIsPaidToTrue(propsOrder.id);
  // };

  const paidStatusButton = () => {
    const style = "inline mr-2 p-3";

    switch (propsOrder.isPaid) {
      case "paid":
        return <p className={style}>Оплачено 👍</p>;
      case "waiting":
        return <p className={style}>В корзине</p>;
      default:
        return (
          <button
            className="mr-2 p-3 border-2"
            type="submit"
            onClick={() => {
              SocketApiClass.setOrderInBasket(propsOrder.id);
            }}
          >
            Оплатить
          </button>
        );
    }
  };

  return (
    <>
      <li className="mb-8 border-2 p-5 mr-5 rounded-xl ml-6  bg-white  shadow-upmd shadow-zinc-500">
        <div className="grid grid-cols-3 gap-x-[1px]  items-center ">
          <h4 className="text-left">{propsOrder.title}</h4>
          <p
            className={`flex items-center ${
              propsOrder.isPaid === "paid" ? "text-green-600" : "text-red-600"
            } justify-center`}
          >
            {propsOrder.price} <RubleIcon sx={{ fontSize: "15px", margin: "0 8px" }} />
          </p>
          <div className="bg-violet-200 shadow-upmd hover:shadow-violet-400 transition-all">
            {paidStatusButton()}
            <button className="p-3 border-2" onClick={() => setIsOpenDesc(!isOpenDesc)}>
              Подробнее
            </button>
          </div>
        </div>
        {isOpenDesc && (
          <div>
            <div className="">
              <p>Дата заказа: {propsOrder.date}</p>
              {propsOrder.isPaid && <p>Дата оплаты: {propsOrder.datePaid}</p>}
              <p>Адрес заказа: {propsOrder.address} </p>
            </div>
            <hr className="my-3 border-stone-500" />
            <p>{propsOrder.children}</p>
          </div>
        )}
      </li>
    </>
  );
};
