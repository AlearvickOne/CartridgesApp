"use client";

import { LiOrder } from "@/components/widgets/LiOrder";
import { IGetListOrderInPage, IOrders } from "@/types/orders.interface";
import { useGetOrdersData } from "@/hooks/useGetOrdersData";
import stylesScroll from "@/styles/styles-customScroll.module.scss";
import { FilesStoreClass } from "@/stores/filesStore";

export const GetListOrdersInPage = ({ isPaidOrder }: IGetListOrderInPage) => {
  const orders = useGetOrdersData();

  console.log(FilesStoreClass.file);

  return (
    <div>
      {!orders ? (
        <p>Идет загрузка...</p>
      ) : (
        <ul className={`max-h-screen overflow-y-auto py-10   ${stylesScroll.customScroll}`}>
          {orders?.map(
            ({ id, title, price, description, isPaid, address, date, image }: IOrders) =>
              isPaid === isPaidOrder && (
                <LiOrder
                  key={id}
                  id={id}
                  price={price}
                  title={title}
                  isPaid={isPaid}
                  address={address}
                  date={date}
                  image={image}
                >
                  {description}
                </LiOrder>
              )
          )}
        </ul>
      )}
    </div>
  );
};
