"use server";

import { AllPagesClass } from "@/constants/constants";
import { LiLink } from "@/components/widgets/navigate/LiLink";
import stylesGradient from "@/styles/styles-gradient.module.scss";
import { ButtonSignOut } from "../widgets/navigate/ButtonLink";
import { UserCard } from "../widgets/navigate/UserCard";
import { LiLinkAdmin } from "../widgets/navigate/LiLinkAdmin";
import { LiLinkProviderUser } from "../widgets/navigate/LiLinkProviderUser";

const Header = async () => {
  return (
    <header
      className={`flex flex-col justify-between items-center px-5 py-2 border-b-2 border-black w-[18rem] max-w-[18rem] h-screen ${stylesGradient.gradientToBottom}`}
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
      <div className="mb-5">
        <ButtonSignOut />
      </div>
    </header>
  );
};

export default Header;
