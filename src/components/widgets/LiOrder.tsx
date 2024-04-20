"use client";

import { ReactNode, useState } from "react";

interface ILiOrder {
  id: string | number;
  title: string;
  isPaid: boolean;
  children: ReactNode;
}

export const LiOrder = ({ id, title, isPaid, children }: ILiOrder) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

  console.log("111111111111111111");

  return (
    <>
      <li className="mb-8 border-2 p-5  ">
        <div className="flex justify-between items-center ">
          <h4>{title}</h4>
          <div className="buttons">
            {isPaid ? (
              <p className="inline mr-5 p-3">Оплачено 👍</p>
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
