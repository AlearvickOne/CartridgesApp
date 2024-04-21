"use client";

import { RequiresClass } from "@/services/requires.class";
import { useMutation } from "@tanstack/react-query";
import { ReactNode, SyntheticEvent, useState } from "react";

interface ILiOrder {
  id: string | number;
  title: string;
  isPaid: boolean;
  children: ReactNode;
}

export const LiOrder = ({ id, title, isPaid, children }: ILiOrder) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

  const { mutate } = useMutation({
    mutationKey: ["mutateIsPaid"],
    mutationFn: () => RequiresClass.setOrderDataIsPaidInDb(id, true),
    onSuccess: () => {
      alert("nutate");
    },
  });

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    mutate();
  };

  return (
    <>
      <li className="mb-8 border-2 p-5  ">
        <div className="flex justify-between items-center ">
          <h4>{title}</h4>
          <div className="buttons">
            {isPaid ? (
              <p className="inline mr-5 p-3">Оплачено 👍</p>
            ) : (
              <button className="mr-5 p-3 border-2" type="submit" onClick={(e) => submitHandler(e)}>
                Оплатить
              </button>
            )}
            <button className="p-3 border-2" onClick={() => setIsOpenDesc(!isOpenDesc)}>
              Подробнее
            </button>
          </div>
        </div>
        {isOpenDesc && (
          <div>
            <p>{children}</p>
          </div>
        )}
      </li>
    </>
  );
};
