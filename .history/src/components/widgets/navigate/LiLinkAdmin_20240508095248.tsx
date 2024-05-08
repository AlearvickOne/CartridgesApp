"use client";

import { AllPagesClass } from "@/constants/constants";
import { useGetProfileUser } from "@/hooks/ProfilesUser/useGetProfileUser";
import { EnumRoles } from "@/types/enums";
import { LiLink } from "./LiLink";

export const LiLinkAdmin = () => {
  const { data } = useGetProfileUser();
  return data?.role === EnumRoles.ADMIN ? (
    <LiLink link={AllPagesClass.ADMIN_PANEL_PAGE}>Админ панель</LiLink>
  ) : (
    <></>
  );
};
