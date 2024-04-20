import React from "react";

export const observe = () => {
  return (
    <div className="max-w-7xl m-auto bg-slate-50  border-x-2 border-b-2 border-black">
      <Header handleOut={handleOut} />
      <section className="px-5 mb-5">{children}</section>
    </div>
  );
};
