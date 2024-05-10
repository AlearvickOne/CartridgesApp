"use client";

import { useGetProfileUser } from "@/hooks/ProfilesUser/useGetProfileUser";
import { localizationRoles } from "@/utils/localization";
import { useEffect } from "react";
import { CheckBoxOrderProvider } from "../orders/CheckBoxOrderProvider";
import { StoreDataUser } from "@/stores/StoreDataUser";

export const UserCard = () => {
  const { data, isSuccess } = useGetProfileUser();

  useEffect(() => {
    if (isSuccess) {
      const setUser = () => {
        StoreDataUser.setUserInData(data);
      };

      setUser();
    }
  }, [data]);

  return (
    <>
      <div className="min-w-[15rem] text-lg bg-slate-100 py-2 px-5 rounded-[10px] my-2">
        {isSuccess && (
          <span className="text-center">
            <h3>{`${data?.name} ${data?.surname}`}</h3>
            <hr className="border-2 my-2" />
            <h3>Вы: {localizationRoles(data?.role)}</h3>
          </span>
        )}
      </div>
      <>
        <CheckBoxOrderProvider dataUser={data} />
      </>
    </>
  );
};
