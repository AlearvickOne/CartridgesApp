"use client";

import { useGetProfileUser } from "@/hooks/ProfilesUser/useGetProfileUser";
import { EnumRoles } from "@/types/enums";
import { LiLink } from "./LiLink";
import { ReactNode } from "react";

interface ILinkProviderUser {
  link: string;
  children: ReactNode;
}

export const LiLinkProviderUser = ({ link, children }: ILinkProviderUser) => {
  const { data } = useGetProfileUser();
  return data?.role === EnumRoles.PROVIDER ? <LiLink link={link}>{children}</LiLink> : <></>;
};
