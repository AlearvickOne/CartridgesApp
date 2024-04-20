import Header from "@/components/Header";
import React, { ReactNode } from "react";
import { observer } from "mobx-react";
interface IObserve {
  handleOut: () => void;
  children: ReactNode;
}

export const Observe = observer(({ handleOut, children }: IObserve) => {
  return (
    <div className="max-w-7xl m-auto bg-slate-50  border-x-2 border-b-2 border-black">
      <Header handleOut={handleOut} />
      <section className="px-5 mb-5">{children}</section>
    </div>
  );
});
