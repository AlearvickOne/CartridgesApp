import React from "react";

export default async function AdminPanelPage() {
  return (
    <div>
      <button className="p-3 rounded-lg bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all">
        Очистить заказы
      </button>
      <div className="">
        <div
          id="CustomList"
          className=" rounded-lg  p-5 relative bg-red-300 before:static before:top-0 before:left-0 before:w-full before:h-full before: before:z-[-1]"
        >
          <ul className="p-5 overflow-auto h-[300px] bg-white z-10">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
