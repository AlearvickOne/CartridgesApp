"use client";

import React, { useState } from "react";

interface ILiOrder {
  title: string;
  children: ReactNode;
}

export const LiOrder = ({ title, description }) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

  return (
    <>
      <li className="mb-8 border-2 p-5  ">
        <div className="flex justify-between items-center ">
          <h4>заказ1</h4>
          <div className="buttons">
            <button className="mr-5 p-3 border-2">Оплатить</button>
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
