"use client";

import { useGetProfileUser } from "@/hooks/useGetProfileUser";
import React from "react";

export const UserCard = () => {
  const { data } = useGetProfileUser();

  return (
    <div className="text-lg bg-slate-100 py-2 px-5 rounded-[10px] my-2">
      <h3>{`${data?.userName} ${data?.userSurname}`}</h3>
      <hr className="border-2 my-2" />
      <h3>Аккаунт: {data?.role}</h3>
    </div>
  );
};
