import { AllPagesClass } from "@/app/all-pages.class";
import { useGetProfileUser } from "@/hooks/useGetProfileUser";
import { EnumRoles } from "@/types/enums";
import React from "react";

export const LiLinkAdmin = () => {
  const { data } = useGetProfileUser();
  return data?.role === EnumRoles.ADMIN ? (
    <LiLink link={AllPagesClass.ADMIN_PANEL_PAGE}>Админ панель</LiLink>
  ) : (
    <></>
  );
};
