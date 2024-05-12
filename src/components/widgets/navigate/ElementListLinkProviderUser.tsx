"use client";

import { EnumRoles } from "@/types/enums";
import { ElementListLinkNav } from "./ElementListLinkNav";
import { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { StoreDataUser } from "@/stores/StoreDataUser";

interface ILinkProviderUser {
  link: string;
  children: ReactNode;
}

export const ElementListLinkProviderUser = observer(({ link, children }: ILinkProviderUser) => {
  return StoreDataUser.data?.role === EnumRoles.PROVIDER ? (
    <ElementListLinkNav link={link}>{children}</ElementListLinkNav>
  ) : (
    <></>
  );
});
