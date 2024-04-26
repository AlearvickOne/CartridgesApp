"use server";
import { LiLink } from "@/components/widgets/LiLink";
import { UsersAuthStore } from "@/stores/usersStore";

interface IHandleOut {
  handleOut: () => void;
}

const Header = ({}: IHandleOut) => {
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
          <LiLink link={"/lobby"}>Не оплаченные заказы</LiLink>
          <LiLink link={"/lobby/list"}>Оплаченные заказы</LiLink>
          {/* <ButtonLink fnOnClick={() => )}>Выход</ButtonLink> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
