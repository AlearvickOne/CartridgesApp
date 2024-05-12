import { ReactNode } from "react";

interface IButtonViolet {
  typeBtn: "button" | "submit" | "reset";
  OnClickFn: () => void;
  children: ReactNode;
  otherClasses?: string;
}

export const ButtonViolet = ({ typeBtn, OnClickFn, otherClasses, children }: IButtonViolet) => {
  return (
    <button
      type={typeBtn}
      className={`rounded-lg md:px-2 w-full p-2   bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all ${otherClasses}`}
      onClick={OnClickFn}
    >
      {children}
    </button>
  );
};
