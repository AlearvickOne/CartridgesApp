"use client";

import { SocketApiClass } from "@/app/api/socket-api";
import { useState } from "react";
import RubleIcon from "@mui/icons-material/CurrencyRuble";
import { ILiOrder } from "@/types/orders.interface";
import { ListOfProductsStore } from "@/stores/storeListOfProducts";

export const LiOrder = ({ ...propsOrder }: ILiOrder) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

  const clickUpdatePaid = () => {
    return SocketApiClass.updateOrderIsPaidToTrue(propsOrder.id);
  };


  return (
    <>
      <li className="mb-8 border-2 p-5 mr-5">
        <div className="flex justify-between items-center ">
          <h4>{propsOrder.title}</h4>
          <p
            className={`flex items-center ${propsOrder.isPaid ? "text-green-600" : "text-red-600"}`}
          >
            {propsOrder.price} <RubleIcon sx={{ fontSize: "15px", margin: "0 8px" }} />
          </p>
          <div className="buttons">
            {propsOrder.isPaid ? (
              <p className="inline mr-5 p-3">Оплачено 👍</p>
            ) : (
              <button className="mr-5 p-3 border-2" type="submit" onClick={clickUpdatePaid}>
                Оплатить
              </button>
            )}
            <button className="p-3 border-2" onClick={() => ListOfProductsStore.setInList({id: propsOrder.id, propsOrder.})}>
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
