"use server";

import { LiOrder } from "@/components/widgets/LiOrder";
import { ordersStoreClass } from "@/stores/ordersStore";

export default async function Lobby() {
  return (
    <div className="">
      <ul>
        <LiOrder id={"1"} title={"name"} isPaid={true}>
          {"desk"}
        </LiOrder>

        {/* {ordersStoreClass.orders?.map(
          ({ id, title, description, isPaid }) => (
          // !isPaid && (
          // )
        )} */}
      </ul>
    </div>
  );
}
