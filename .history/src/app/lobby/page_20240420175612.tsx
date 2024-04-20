import React from "react";

export default function Lobby() {
  return (
    <div className="">
      <ul>
        <li className="flex justify-between border-2 p-5 mb-8">
          <h4>заказ1</h4>
          <div className="buttons">
            <button className="mr-5 p-3">Оплатить</button>
            <button>Подробнее</button>
          </div>
        </li>
        <li className="flex justify-between border-2 p-5">
          <h4>заказ1</h4>
          <div className="buttons">
            <button className="mr-5">Оплатить</button>
            <button>Подробнее</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
