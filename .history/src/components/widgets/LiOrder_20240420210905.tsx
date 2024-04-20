"use client";

import { ordersStoreClass } from "@/stores/ordersStore";
import { useQuery } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

interface ILiOrder {
  id: string | number;
  title: string;
  statusOrder: boolean;
  children: ReactNode;
}

export const LiOrder = ({ id, title, statusOrder, children }: ILiOrder) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

  return (
    <>
      <li className="mb-8 border-2 p-5  ">
        <div className="flex justify-between items-center ">
          <h4>{title}</h4>
          <div className="buttons">
            {statusOrder ? (
              <p className="inline mr-5 p-3">Оплачено 👍</p>
            ) : (
              <button
                className="mr-5 p-3 border-2"
                onClick={() => ordersStoreClass.setOrderStatus(id, statusOrder)}
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
