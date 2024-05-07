import React from "react";

export default async function AdminPanelPage() {
  return (
    <div>
      <button className="p-3 rounded-lg bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all">
        Очистить заказы
      </button>
      <div className="">
        <div id="CustomList" className="bg-white h-[300px] rounded-lg overflow-auto">
          <div className="border-2 p-10 bg-red-300">
            <ul className="p-5 overflow-hidden bg-red-300">
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
