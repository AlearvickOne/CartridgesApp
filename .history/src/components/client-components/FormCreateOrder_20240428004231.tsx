"use client";

import { SocketApiClass } from "@/app/api/socket-api";
import React from "react";

export const FormCreateOrder = () => {
  const nameTitleOrder = "title-order";
  const namedescOrder = "desc-order";
  const namePriceOrder = "price-order";

  return (
    <>
      <form
        action={async (formdata) => {
          "use server";
          SocketApiClass.createOrder({
            title: formdata.get(nameTitleOrder)!.toString(),
            description: formdata.get(namedescOrder)!.toString(),
            price: Number(formdata.get(namePriceOrder)),
          });
        }}
        className="text-[18px]"
      >
        <div className="flex flex-wrap flex-col mb-5">
          <label className="px-3 py-[2px] mb-2">Title order</label>
          <input
            className="px-5 py-3 rounded-xl shadow-inset shadow-neutral-400"
            name={nameTitleOrder}
            type="text"
            defaultValue={"title "}
          />
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label className="px-3 py-[2px] mb-2">Price</label>
          <input
            className="px-5 py-3 rounded-xl shadow-inset shadow-neutral-400"
            name={namePriceOrder}
            type="number"
            defaultValue={"title "}
          />
        </div>
        <div className="flex flex-wrap flex-col mb-5">
          <label className="px-3 py-[2px] mb-2 ">Descriprion order</label>

          <textarea
            className="border-2 p-4 rounded-xl resize-none shadow-inset shadow-neutral-400"
            name={namedescOrder}
            rows={5}
            defaultValue={"description"}
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="text-right border-2 rounded-lg px-5 py-2">
            Create
          </button>
        </div>
      </form>
    </>
  );
};
