import React from "react";

export default async function AdminPanelPage() {
  return (
    <div className=" bg-stone-400 h-screen w-full flex flex-center items-center flex-col">
      <div
        id="CustomListUsers"
        className="w-full rounded-lg p-2 bg-gradient-to-b from-violet-400 to-violet-600"
      >
        <ul className="p-5 overflow-auto h-[300px] bg-white z-10 rounded-xl">
          <li className="p-2 mb-2 border-2 rounded-[15px]">1</li>
          <li className="p-2 mb-2 border-2 rounded-[15px]">1</li>{" "}
          <li className="p-2 mb-2 border-2 rounded-[15px]">1</li>{" "}
          <li className="p-2 mb-2 border-2 rounded-[15px]">1</li>{" "}
          <li className="p-2 mb-2 border-2 rounded-[15px]">1</li>{" "}
          <li className="p-2 mb-2 border-2 rounded-[15px]">1</li>{" "}
          <li className="p-2 mb-2 border-2 rounded-[15px]">1</li>{" "}
          <li className="p-2 mb-2 border-2 rounded-[15px]">1</li>
        </ul>
        <div className="flex justify-between items-center my-2">
          <button className="p-3 rounded-lg bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all">
            Удалить пользователя
          </button>
          <button className="p-3 rounded-lg bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all">
            Удалить всех
          </button>
        </div>
      </div>
      <div id="ordersMenu" className="my-5 flex justify-between items-center">
        <div className="flex flex-col">
          <input className="mb-3" type="text" placeholder="id заказа" />
          <button className="p-3 rounded-lg bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all">
            Удалить заказ
          </button>
        </div>
        <button className="p-3 rounded-lg bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all">
          Очистить все заказы
        </button>
      </div>
    </div>
  );
}
