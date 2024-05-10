"use client";

import { AllPagesClass } from "@/constants/constants";
import { LiLink } from "@/components/widgets/navigate/LiLink";
import stylesGradient from "@/styles/styles-gradient.module.scss";
import { ButtonSignOut } from "../widgets/navigate/ButtonLink";
import { UserCard } from "../widgets/navigate/UserCard";
import { LiLinkAdmin } from "../widgets/navigate/LiLinkAdmin";
import { LiLinkProviderUser } from "../widgets/navigate/LiLinkProviderUser";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [isClickOpenMenu, setIsClickOpenMenu] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 md:hidden bg-violet-800 w-screen h-[3rem] border-b-2 border-blue-400 z-50">
        <button className="" onClick={() => setIsClickOpenMenu(!isClickOpenMenu)}>
          <MenuIcon sx={{ fontSize: "3rem", color: "white" }} />
        </button>
      </div>
      <header
        className={`fixed z-40 mt-10 md:mt-0 ${
          isClickOpenMenu ? "" : "hidden md:block"
        } w-full md:static md:flex md:flex-col justify-between items-center px-5 py-2 border-b-2 border-black md:w-[18rem] md:max-w-[18rem] h-screen ${
          stylesGradient.gradientToBottom
        }`}
      >
        <div>
          <UserCard />
        </div>
        <nav>
          <ul className="flex flex-col gap-5 my-2">
            <LiLinkAdmin />
            <LiLinkProviderUser link={AllPagesClass.CREATE_ORDER_PAGE}>
              Вписать свой заказ
            </LiLinkProviderUser>
            <LiLink link={AllPagesClass.NOT_PAID_ORDERS_PAGE}>Не оплаченные заказы</LiLink>
            <LiLink link={AllPagesClass.YES_PAID_ORDERS_PAGE}>Оплаченные заказы</LiLink>
          </ul>
        </nav>
        <div className="mt-5 md:mb-5">
          <ButtonSignOut />
        </div>
      </header>
    </>
  );
};

export default Header;
