"use client";

import { memo, useState } from "react";
import RubleIcon from "@mui/icons-material/CurrencyRuble";
import { ILiOrder } from "@/types/orders.interface";
import { EnumPaidStatus, EnumRoles } from "@/types/enums";
import { useGetBasket } from "@/hooks/OrdersBasket/useGetBasket";

import { useSetOrderInBasket } from "@/hooks/OrdersBasket/useSetOrderInBasket";
import { StoreDataUser } from "@/stores/StoreDataUser";
import { ButtonViolet } from "../ButtonViolet";

export const ElementListOrders = memo(({ ...propsOrder }: ILiOrder) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

  const bakset = useGetBasket();
  const setOrderInBasket = useSetOrderInBasket();

  const paidStatusButton = () => {
    const style = "inline mr-2 text-nowrap py-3 md:text-center";

    switch (propsOrder.isPaid) {
      case "paid":
        return <p className={style}>Оплачено</p>;
      case "waiting":
        return <p className={style}>В корзине</p>;
      default:
        return StoreDataUser.data?.role === EnumRoles.CLIENT ? (
          <ButtonViolet
            typeBtn="submit"
            OnClickFn={() => {
              setOrderInBasket.mutate({ idOrder: propsOrder.id, idBasket: +bakset.data!.id });
            }}
          >
            Оплатить
          </ButtonViolet>
        ) : (
          <p className={style}>В ожидании</p>
        );
    }
  };

  return (
    <>
      <li className="md:mb-8 border-2 md:border-white border-gray-700 md:p-5 md:mr-5 rounded-xl md:ml-6 md:w-auto w-full bg-slate-50 md:shadow-upmd md:shadow-zinc-500 md:text-[18px] text-[12px] p-2 mr-2 mb-5 ">
        <div className="grid grid-cols-4 items-center gap-x-3  md:justify-items-center">
          <h4 className="justify-self-start text-wrap">{propsOrder.title}</h4>
          <p
            className={`flex items-center ${
              propsOrder.isPaid === "paid" ? "text-green-600" : "text-red-600"
            } justify-center`}
          >
            {propsOrder.price} <RubleIcon sx={{ fontSize: "15px", margin: "0 8px" }} />
          </p>
          {paidStatusButton()}
          <ButtonViolet typeBtn="button" OnClickFn={() => setIsOpenDesc(!isOpenDesc)}>
            Подробнее
          </ButtonViolet>
        </div>
        {isOpenDesc && (
          <div className="mt-3">
            <div>
              {StoreDataUser.data?.role === EnumRoles.ADMIN && <p>id Заказа: {propsOrder.id}</p>}
              <p>Дата заказа: {propsOrder.date}</p>
              {propsOrder.isPaid === EnumPaidStatus.PAID && (
                <p>Дата оплаты: {propsOrder.datePaid}</p>
              )}
              <p>Адрес заказа: {propsOrder.address} </p>
            </div>
            <hr className="my-3 border-stone-500" />
            <p className=" break-words">{propsOrder.children}</p>
          </div>
        )}
      </li>
    </>
  );
});
