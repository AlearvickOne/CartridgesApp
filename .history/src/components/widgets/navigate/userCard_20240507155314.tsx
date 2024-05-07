import React from "react";

export const UserCard = () => {
  return (
    <div className="text-lg bg-slate-100 py-2 px-5 rounded-[10px] my-2">
      <h3>{`${"name"} ${"surname"}`}</h3>
      <hr className="border-2 my-2" />
      <h3>Аккаунт: {"login"}</h3>
    </div>
  );
};
