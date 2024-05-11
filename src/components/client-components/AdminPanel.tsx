"use client";

import { LOBSTER_FONT } from "@/constants/constants";
import { useGetProfilesUsers } from "@/hooks/ProfilesUser/useGetProfilesUsers";
import { Checkbox } from "@mui/material";

import { useState } from "react";
import { ButtonViolet } from "../widgets/ButtonViolet";
import { TextField } from "@material-ui/core";
import { useDeleteUsers } from "@/hooks/ProfilesUser/useDeleteUsers";

export const AdminPanel = () => {
  const [usersPanel, setUsersPanel] = useState<number[]>([]);
  const { data } = useGetProfilesUsers();

  const deleteUsers = useDeleteUsers();

  const handleCheckBox = (setId: number) => {
    const userId = usersPanel.filter((id) => id === setId);

    userId[0] === setId
      ? setUsersPanel((prev) => prev.filter((id) => id !== setId))
      : setUsersPanel((prev) => [...prev, setId]);
  };

  return (
    <div className="py-24 overflow-auto h-screen w-full flex flex-center items-center flex-col">
      <div className="bg-stone-100 rounded-xl w-full h-screen pt-5 border-2 border-purple-600">
        <h1 className={` text-center text-xl ${LOBSTER_FONT.className}`}>Панель управления</h1>
        <hr className="border-b-2 my-2 border-violet-800" />
        <div className="px-5 mb-5">
          <div
            id="CustomListUsers"
            className="w-full rounded-lg p-2 bg-gradient-to-b from-violet-400 to-violet-600"
          >
            <ul className="p-5 overflow-auto h-[300px] bg-white z-10 rounded-xl">
              {data?.map((el) => (
                <li key={el.id} className="p-2 mb-2 border-2 rounded-[15px] flex justify-between">
                  <span className="hidden md:grid md:grid-cols-5 items-center justify-items-center md:w-full">
                    <p>{el.id}</p>
                    <p>{el.login}</p>
                    <p>{`${el.name} ${el.surname}`}</p>
                    <p>{el.role}</p>
                    <Checkbox onClick={() => handleCheckBox(+el.id)} />
                  </span>
                  <span className="grid grid-cols-3 md:hidden w-full justify-items-end text-[12px]">
                    <div className="justify-self-start">
                      <p>{el.id}</p>
                      <p>{el.login}</p>
                    </div>
                    <div className="text-center w-full">
                      <p>{`${el.name} ${el.surname}`}</p>
                      <hr className="border-black" />
                      <p>{el.role}</p>
                    </div>
                    <Checkbox onClick={() => handleCheckBox(+el.id)} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="md:flex gap-x-5 justify-between items-center my-2">
              <ButtonViolet
                typeBtn="submit"
                OnClickFn={() => deleteUsers.mutate({ arrayId: usersPanel })}
                otherClasses="h-full"
              >
                {usersPanel.length < 2 ? "Удалить пользователя" : "Удалить пользователей"}
              </ButtonViolet>
            </div>
          </div>
        </div>
        <h1 className={` text-center text-xl ${LOBSTER_FONT.className}`}>Удаление заказов</h1>
        <hr className="border-b-2 my-2 border-violet-800" />
        <div
          id="ordersMenu"
          className="px-5 my-5 flex justify-between flex-col md:flex-row items-center w-full"
        >
          <div className="flex flex-col w-[20rem]">
            <TextField className="px-3 py-1" type="text" placeholder="Введите id заказа" />
            <ButtonViolet typeBtn="submit" OnClickFn={() => {}} otherClasses="h-full  mt-2">
              Удалить заказ
            </ButtonViolet>
          </div>
          <hr className="md:hidden w-full border-b-2 my-2 border-violet-800" />
          <div className="">
            <div>
              <label>
                Только оплаченные
                <Checkbox />
              </label>
            </div>
            <ButtonViolet typeBtn="submit" OnClickFn={() => {}} otherClasses="h-full">
              Очистить все заказы
            </ButtonViolet>
          </div>
        </div>
      </div>
    </div>
  );
};
