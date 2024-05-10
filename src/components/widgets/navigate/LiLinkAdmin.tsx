"use client";

import { AllPagesClass } from "@/constants/constants";
import { EnumRoles } from "@/types/enums";
import { LiLink } from "./LiLink";
import { StoreDataUser } from "@/stores/StoreDataUser";
import { observer } from "mobx-react-lite";

export const LiLinkAdmin = observer(() => {
  return StoreDataUser.data?.role === EnumRoles.ADMIN ? (
    <LiLink link={AllPagesClass.ADMIN_PANEL_PAGE}>Админ панель</LiLink>
  ) : (
    <></>
  );
});
