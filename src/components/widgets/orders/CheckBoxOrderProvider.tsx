"use client";

import { CheckBoxOrderProviderStore } from "@/stores/checkBoxOrderProviderStore";
import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";

export const CheckBoxOrderProvider = () => {
  const [isClickCheck, setIsClickCheck] = useState(false);

  useEffect(() => {
    const setClick = async () => {
      await CheckBoxOrderProviderStore.setClickProviderCheckBox(isClickCheck);
    };
    setClick();
  }, [isClickCheck]);

  return (
    <div className="bg-slate-100 p-2 pr-5 rounded-[10px]">
      <Checkbox onClick={() => setIsClickCheck(!isClickCheck)} id="myOrders" />
      <label className="ml-3" htmlFor="myOrders">
        Только свои заказы
      </label>
    </div>
  );
};
