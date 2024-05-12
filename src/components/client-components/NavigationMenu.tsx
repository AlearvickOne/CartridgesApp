"use client";

import { AllPagesClass } from "@/constants/constants";
import { ElementListLinkNav } from "@/components/widgets/navigate/ElementListLinkNav";
import stylesGradient from "@/styles/styles-gradient.module.scss";
import { ButtonSignOut } from "../widgets/navigate/ButtonLink";
import { UserCard } from "../widgets/navigate/UserCard";
import { ElementListLinkNavAdmin } from "../widgets/navigate/ElementListLinkNavAdmin";
import { ElementListLinkProviderUser } from "../widgets/navigate/ElementListLinkProviderUser";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const NavigationMenu = () => {
  const [isClickOpenMenu, setIsClickOpenMenu] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 md:hidden bg-violet-800 w-screen h-[3rem] border-b-2 border-blue-400 z-50 ">
        <button onClick={() => setIsClickOpenMenu(!isClickOpenMenu)}>
          <MenuIcon sx={{ fontSize: "3rem", color: "white" }} />
        </button>
      </div>
      <header
        className={`fixed z-40 mt-10 md:mt-0 w-screen h-screen ${
          isClickOpenMenu ? "" : "hidden md:block"
        } w-full md:static md:flex md:flex-col justify-between items-center px-5 py-2 border-b-2 border-black md:w-[18rem] md:max-w-[18rem] h-screen ${
          stylesGradient.gradientToBottom
        }`}
      >
        <div>
          <UserCard />
        </div>
        <nav>
          <button
            className="w-full cursor-default"
            onClick={() => setIsClickOpenMenu(!isClickOpenMenu)}
          >
            <ul className="flex flex-col gap-5 my-2">
              <ElementListLinkNavAdmin link={AllPagesClass.ADMIN_PANEL_PAGE}>
                Админ панель
              </ElementListLinkNavAdmin>
              <ElementListLinkProviderUser link={AllPagesClass.CREATE_ORDER_PAGE}>
                Вписать свой заказ
              </ElementListLinkProviderUser>
              <ElementListLinkNav link={AllPagesClass.NOT_PAID_ORDERS_PAGE}>
                Не оплаченные заказы
              </ElementListLinkNav>
              <ElementListLinkNav link={AllPagesClass.YES_PAID_ORDERS_PAGE}>
                Оплаченные заказы
              </ElementListLinkNav>
            </ul>
          </button>
        </nav>
        <div className="mt-5 md:mb-5 text-center">
          <ButtonSignOut />
        </div>
      </header>
    </>
  );
};
