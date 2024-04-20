"use server";

import { UsersAuthStore } from "@/stores/usersStore";
import Link from "next/link";
import { ButtonLink } from "./widgets/ButtonLink";
interface IHandleOut {
  handleOut: () => void;
}

const Navigation = ({ handleOut }: IHandleOut) => {
  if (!UsersAuthStore) return;

  const currentUser = UsersAuthStore.currentUser;

  return (
    <header className="flex justify-between items-center px-5 py-2 mb-5 border-b-2 border-black">
      <div className="">
        <p>{`${currentUser?.info?.userName} $ {currentUser?.info?.userSurname}`}</p>
        <p>{UsersAuthStore.currentUser?.name}</p>
      </div>
      <ul className="flex gap-5">
        <li className="border-2 p-1 rounded-md border-black">
          <Link href={"/lobby/list"}>Добавить заказ</Link>
        </li>
        <li className="border-2 p-1 rounded-md border-black">
          <Link href={"/lobby"}>Не оплаченные заказы</Link>
        </li>
        <li className="border-2 p-1 rounded-md border-black">
          <Link href={"/lobby/list"}>Оплаченные заказы</Link>
        </li>

        <li className="border-2 p-1 rounded-md border-black">
          <ButtonLink fnOnClick={handleOut} />
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
