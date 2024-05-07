"use client";

import { useGetProfilesUsers } from "@/hooks/ProfilesUser/useGetProfilesUsers";
import { Checkbox, TextField } from "@material-ui/core";
import { Lobster } from "next/font/google";

const lobsterFont = Lobster({ subsets: ["latin"], weight: ["400"] });

export const AdminPanel = () => {
  const { data } = useGetProfilesUsers();

  return (
    <div className="py-24  overflow-auto h-screen w-full flex flex-center items-center flex-col">
      <div className="bg-stone-100 rounded-xl w-full h-screen pt-5 border-2 border-purple-600">
        <h1 className={` text-center text-xl ${lobsterFont.className}`}>Панель управления</h1>
        <hr className="border-b-2 my-2 border-violet-800" />
        <div className="px-5 mb-5">
          <div
            id="CustomListUsers"
            className="w-full rounded-lg p-2 bg-gradient-to-b from-violet-400 to-violet-600"
          >
            <ul className="p-5 overflow-auto h-[300px] bg-white z-10 rounded-xl">
              {data?.map((el) => (
                <li className="p-2 mb-2 border-2 rounded-[15px] flex justify-between">
                  <p>{el.id}</p>
                  <p>{el.login}</p>
                  <p>{`${el.name} ${el.surname}`}</p>
                  <p>{el.role}</p>
                </li>
              ))}
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
        <h1 className={` text-center text-xl ${lobsterFont.className}`}>Удаление заказов</h1>
        <hr className="border-b-2 my-2 border-violet-800" />
        <div id="ordersMenu" className="px-5 my-5 flex justify-between items-center w-full">
          <div className="flex flex-col w-[20rem]">
            <TextField className="px-3 py-1" type="text" placeholder="Введите id заказа" />
            <button className="mt-5 p-3 rounded-lg bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all">
              Удалить заказ
            </button>
          </div>
          <div className="flex flex-column">
            <div className="">
              <label htmlFor="">
                Только выполненные
                <Checkbox value={"Только выполненные"} />
              </label>
            </div>
            <button className="p-3 rounded-lg bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all">
              Очистить все заказы
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
