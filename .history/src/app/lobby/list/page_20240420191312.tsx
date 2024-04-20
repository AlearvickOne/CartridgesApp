"useServer";

import { LiOrder } from "@/components/widgets/LiOrder";
import { ordersStoreClass } from "@/stores/ordersStore";

export default function ListPage() {
  return (
    <div>
      <ul>
        {ordersStoreClass.orders.map(
          async ({ id, title, description, isStatusOrder }) =>
            isStatusOrder && (
              <LiOrder id={id} title={title} statusOrder={isStatusOrder}>
                {description}
              </LiOrder>
            )
        )}
      </ul>
    </div>
  );
}
