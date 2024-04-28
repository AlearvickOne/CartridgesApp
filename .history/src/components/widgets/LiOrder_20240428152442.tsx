"use client";

import { SocketApiClass } from "@/app/api/socket-api";
import { ReactNode, useState } from "react";
import RubleIcon from "@mui/icons-material/CurrencyRuble";

interface ILiOrder {
  id: string | number;
  title: string;
  price: number;
  isPaid: boolean;
  children: ReactNode;
}

export const LiOrder = ({ id, title, price, isPaid, children }: ILiOrder) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

  return (
    <>
      <li className="mb-8 border-2 p-5 mr-5">
        <div className="flex justify-between items-center ">
          <h4>{title}</h4>
          <p className="flex items-center text-[2px]">
            {price} <RubleIcon className=" text-[2px] mx-2" />
          </p>
          <div className="buttons">
            {isPaid ? (
              <p className="inline mr-5 p-3">Оплачено 👍</p>
            ) : (
              <button
                className="mr-5 p-3 border-2"
                type="submit"
                onClick={() => SocketApiClass.updateOrderIsPaidToTrue(id)}
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
            <p>{children}</p>
          </div>
        )}
      </li>
    </>
  );
};
