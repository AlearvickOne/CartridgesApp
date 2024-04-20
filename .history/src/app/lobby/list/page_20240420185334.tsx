"useServer";

import { LiOrder } from "@/components/widgets/LiOrder";
import { ordersStoreClass } from "@/stores/ordersStore";

export default function ListPage() {
  return (
    <div className="">
      <ul>
        {ordersStoreClass.orders.map(
          ({ title, description, isStatusOrder }) =>
            isStatusOrder && (
              <LiOrder title={title} statusOrder={isStatusOrder}>
                {description}
              </LiOrder>
            )
        )}
      </ul>
    </div>
  );
}
