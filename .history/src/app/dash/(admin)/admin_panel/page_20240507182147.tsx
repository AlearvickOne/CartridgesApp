import React from "react";

export default async function AdminPanelPage() {
  return (
    <div>
      <button className="p-3 rounded-lg bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all">
        Очистить заказы
      </button>
      <div className="">
        <div id="CustomList" className=" rounded-lg p-2 bg-yellow-800 ">
          <ul className="p-5 overflow-auto h-[300px] bg-white z-10">
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
      </div>
    </div>
  );
}
