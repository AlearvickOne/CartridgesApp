"use server";
import { LiLink } from "@/components/widgets/LiLink";
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
    <header className="flex justify-between items-center px-5 py-2 mb-5 border-b-2 border-black">
      <div className=" text-lg">
        <h3>{`${currentUser?.info?.userName} ${currentUser?.info?.userSurname}`}</h3>
        <hr className="border-2 my-2" />
        <h3>Аккаунт: {UsersAuthStore.currentUser?.name}</h3>
      </div>
      <nav>
        <ul className="flex gap-5">
          <LiLink link={"/lobby/list"}>Добавить заказ</LiLink>
          <li className="border-2 p-4 rounded-md border-black min-w-40 text-center">
            <Link href={"/lobby"}>Не оплаченные заказы</Link>
          </li>
          <li className="border-2 p-4 rounded-md border-black min-w-40 text-center">
            <Link href={"/lobby/list"}>Оплаченные заказы</Link>
          </li>

          <li className="border-2 p-4 rounded-md border-black  min-w-40 text-center">
            <ButtonLink fnOnClick={handleOut} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
