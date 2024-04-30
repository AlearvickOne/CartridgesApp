"use client";

import { SocketApiClass } from "@/app/api/socket-api";
import { useState } from "react";
import RubleIcon from "@mui/icons-material/CurrencyRuble";
import { ILiOrder } from "@/types/orders.interface";

export const LiOrder = ({ id, title, price, children, isPaid, address, date }: ILiOrder) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);
  const [datePaid, setDatePaid] = useState<string>();

  return (
    <>
      <li className="mb-8 border-2 p-5 mr-5">
        <div className="flex justify-between items-center ">
          <h4>{title}</h4>
          <p className={`flex items-center ${isPaid ? "text-green-600" : "text-red-600"}`}>
            {price} <RubleIcon sx={{ fontSize: "15px", margin: "0 8px" }} />
          </p>
          <div className="buttons">
            {isPaid ? (
              <p className="inline mr-5 p-3">Оплачено 👍</p>
            ) : (
              <button
                className="mr-5 p-3 border-2"
                type="submit"
                onClick={() => {
                  setDatePaid(new Date().toLocaleDateString());
                  SocketApiClass.updateOrderIsPaidToTrue(id);
                }}
              >
                Оплатить
              </button>
            )}
            <button className="p-3 border-2" onClick={() => setIsOpenDesc(!isOpenDesc)}>
              Подробнее
            </button>
          </div>
        </div>
        {isOpenDesc && (
          <div>
            <div className="">
              <p>Дата заказа: {date}</p>
              {isPaid && <p>Дата оплаты: {datePaid}</p>}
              <p>Адрес заказа: {address} </p>
            </div>
            <hr className="my-3 border-stone-500" />
            <p>{children}</p>
          </div>
        )}
      </li>
    </>
  );
};
