import React from "react";

export default function Lobby() {
  return (
    <div className="">
      <ul>
        <li className="flex justify-between">
          <h4>заказ1</h4>
          <div className="buttons">
            <button className="mr-5">оплатить</button>
            <button>подробнее</button>
          </div>
        </li>
        <li>
          <h4>заказ2</h4>
        </li>
      </ul>
    </div>
  );
}
