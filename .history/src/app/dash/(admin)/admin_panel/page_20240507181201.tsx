import React from "react";

export default async function AdminPanelPage() {
  return (
    <div>
      <button className="p-3 rounded-lg bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all">
        Очистить заказы
      </button>
      <div className="">
        <div id="CustomList" className="h-[300px] rounded-lg overflow-auto p-5 relative ">
          <div className="bg-red-300 absolute top-0 left-0 w-full h-full z-[-1]">
            <ul className="p-5 overflow-auto bg-white ">
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
    </div>
  );
}
