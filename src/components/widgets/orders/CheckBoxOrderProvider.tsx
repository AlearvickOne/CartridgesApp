"use client";
import { CheckBoxOrderProviderStore } from "@/stores/checkBoxOrderProviderStore";
import { IUser } from "@/types/auth.interface";
import { EnumRoles } from "@/types/enums";
import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";

interface ICheckBox {
  dataUser: IUser | undefined;
}

export const CheckBoxOrderProvider = ({ dataUser }: ICheckBox) => {
  const [isClickCheck, setIsClickCheck] = useState(false);

  useEffect(() => {
    const setClick = async () => {
      await CheckBoxOrderProviderStore.setClickProviderCheckBox(isClickCheck);
    };
    setClick();
  }, [isClickCheck]);

  return (
    <>
      {dataUser?.role === EnumRoles.PROVIDER && (
        <div className="bg-slate-100 p-2 pr-5 rounded-[10px] text-center">
          <Checkbox onClick={() => setIsClickCheck(!isClickCheck)} id="myOrders" />

          <label className="ml-3" htmlFor="myOrders">
            Только мои заказы
          </label>
        </div>
      )}
    </>
  );
};
