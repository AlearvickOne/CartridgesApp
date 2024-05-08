import { axiosWithAuth } from "@/api/interceptors";
import { IBasket } from "@/types/orders-basket.interface";

class OrderBasketService {
  private BASE_URL = "order/basket";
  private DELETE_ORDER_FROM_BASKET_URL = `${this.BASE_URL}/deleteOrderFromBasket`;

  async getBasket() {
    const response = await axiosWithAuth.get<IBasket>(this.BASE_URL);
    return response.data;
  }

  async deleteOrderFromBasket(id: string) {
    const response = await axiosWithAuth.patch(`${this.DELETE_ORDER_FROM_BASKET_URL}/${id}`);
    return response;
  }
}

export const OrderBasketServiceClass = new OrderBasketService();
