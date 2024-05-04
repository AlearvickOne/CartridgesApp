"use server";
import { AllPagesClass } from "@/app/all-pages.class";
import { LiLink } from "@/components/widgets/LiLink";

import stylesGradient from "@/styles/styles-gradient.module.scss";

interface IHandleOut {
  handleOut: () => void;
}

const Header = ({}: IHandleOut) => {
  return (
    <header
      className={`flex flex-col justify-between items-center px-5 py-2 border-b-2 border-black w-[18rem] max-w-[18rem] h-screen ${stylesGradient.gradientToBottom}`}
    >
      <div className="text-lg bg-slate-100 py-2 px-5 rounded-[10px]">
        <h3>{`${"name"} ${"surname"}`}</h3>
        <hr className="border-2 my-2" />
        <h3>Аккаунт: {"login"}</h3>
      </div>
      <nav>
        <ul className="flex flex-col gap-5">
          <LiLink link={AllPagesClass.CREATE_ORDER_PAGE}>Добавить заказ</LiLink>
          <LiLink link={AllPagesClass.NOT_PAID_ORDERS_PAGE}>Не оплаченные заказы</LiLink>
          <LiLink link={AllPagesClass.YES_PAID_ORDERS_PAGE}>Оплаченные заказы</LiLink>
        </ul>
      </nav>
      <div className="mb-5">
        <LiLink link={AllPagesClass.YES_PAID_ORDERS_PAGE}>Выход</LiLink>
      </div>
    </header>
  );
};

export default Header;
