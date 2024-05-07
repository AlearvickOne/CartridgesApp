import { AllPagesClass } from "@/app/all-pages.class";
import { useGetProfileUser } from "@/hooks/useGetProfileUser";
import React from "react";

export const LiLinkAdmin = () => {
  const { data } = useGetProfileUser();
  return <LiLink link={AllPagesClass.ADMIN_PANEL_PAGE}>Админ панель</LiLink>;
};
