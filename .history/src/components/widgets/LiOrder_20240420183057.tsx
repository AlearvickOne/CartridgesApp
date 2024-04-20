"use client";

import React, { PropsWithChildren, ReactNode, useState } from "react";

interface ILiOrder {
  title: string;
  statusOrder: boolean;
  children: ReactNode;
}

export const LiOrder = ({ title, statusOrder, children }: ILiOrder) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

  return (
    <>
      <li className="mb-8 border-2 p-5  ">
        <div className="flex justify-between items-center ">
          <h4>{title}</h4>
          <div className="buttons">
            {statusOrder ? (
              <div className="mr-5 p-3 border-2">Оплачено 👍</div>
            ) : (
              <button className="mr-5 p-3 border-2">Оплатить</button>
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
