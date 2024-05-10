"use client";

import { EnumRoles } from "@/types/enums";
import { LiLink } from "./LiLink";
import { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { StoreDataUser } from "@/stores/StoreDataUser";

interface ILinkProviderUser {
  link: string;
  children: ReactNode;
}

export const LiLinkProviderUser = observer(({ link, children }: ILinkProviderUser) => {
  return StoreDataUser.data?.role === EnumRoles.PROVIDER ? (
    <LiLink link={link}>{children}</LiLink>
  ) : (
    <></>
  );
});
