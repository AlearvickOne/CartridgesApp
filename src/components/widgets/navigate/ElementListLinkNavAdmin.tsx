"use client";

import { EnumRoles } from "@/types/enums";
import { ElementListLinkNav } from "./ElementListLinkNav";
import { StoreDataUser } from "@/stores/StoreDataUser";
import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

interface ILinkAdminUser {
  link: string;
  children: ReactNode;
}
export const ElementListLinkNavAdmin = observer(({ link, children }: ILinkAdminUser) => {
  return StoreDataUser.data?.role === EnumRoles.ADMIN ? (
    <ElementListLinkNav link={link}>{children}</ElementListLinkNav>
  ) : (
    <></>
  );
});
