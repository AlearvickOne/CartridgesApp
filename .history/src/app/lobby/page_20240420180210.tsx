"use client";

import React, { useState } from "react";

export default function Lobby() {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>();

  return (
    <div className="">
      <ul>
        <li className="flex justify-between items-center border-2 p-5 mb-8">
          <h4>заказ1</h4>
          <div className="buttons">
            <button className="mr-5 p-3 border-2">Оплатить</button>
            <button className="p-3 border-2">Подробнее</button>
          </div>
        </li>
        <li className="flex justify-between items-center border-2 p-5 mb-8">
          <h4>заказ1</h4>
          <div className="buttons">
            <button className="mr-5 p-3 border-2">Оплатить</button>
            <button className="p-3 border-2">Подробнее</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
