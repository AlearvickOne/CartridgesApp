"use server";

import { UsersAuthStore } from "@/stores/usersStore";
import Link from "next/link";
import { ButtonLink } from "./widgets/ButtonLink";
interface IHandleOut {
  handleOut: () => void;
}

const Header = ({ handleOut }: IHandleOut) => {
  if (!UsersAuthStore) return;

  const currentUser = UsersAuthStore.currentUser;

  return (
    <header className="flex justify-between items-center px-5 py-2 mb-5 border-b2 border-black">
      <div className="">
        <h4>{`${currentUser?.info?.userName} ${currentUser?.info?.userSurname}`}</h4>
        <h4>{UsersAuthStore.currentUser?.name}</h4>
      </div>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
