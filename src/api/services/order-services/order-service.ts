import { axiosWithAuth } from "@/api/interceptors";
import { IOrders } from "@/types/orders.interface";

class OrderService {
  private BASE_URL = "order";

  async getUserByIdProvider() {
    const response = await axiosWithAuth.get<IOrders[]>(this.BASE_URL);
    return response.data;
  }
}

export const OrderServiceClass = new OrderService();
