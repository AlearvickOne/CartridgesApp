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
      className="md:text-right rounded-lg md:px-2 w-full py-2 md:ml-5 mt-2  bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all"
      onClick={OnClickFn}
    >
      <div className="px-2">{children}</div>
    </button>
  );
};
