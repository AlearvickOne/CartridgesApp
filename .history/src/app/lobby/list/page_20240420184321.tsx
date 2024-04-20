import { LiOrder } from "@/components/widgets/LiOrder";
import { orders } from "../page";

export default function ListPage() {
  return (
    <div className="">
      <ul>
        {orders.map(
          ({ title, description, isStatusOrder }) =>
            !isStatusOrder && (
              <LiOrder title={title} statusOrder={isStatusOrder}>
                {description}
              </LiOrder>
            )
        )}
      </ul>
    </div>
  );
}
