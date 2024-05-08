import React, { ReactNode } from "react";

interface IButtonViolet {
  typeBtn: "button" | "submit" | "reset";
  OnClickFn: () => void;
  children: ReactNode;
}

export const ButtonViolet = ({ typeBtn, OnClickFn, children }: IButtonViolet) => {
  return (
    <button
      type={typeBtn}
      className="text-right rounded-lg px-5 py-2 ml-5  bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all"
      onClick={OnClickFn}
    >
      {children}
    </button>
  );
};
