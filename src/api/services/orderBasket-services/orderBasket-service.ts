import { axiosWithAuth } from "@/api/interceptors";
import { IBasket } from "@/types/orders-basket.interface";

class OrderBasketService {
  private BASE_URL = "order/basket";
  private DELETE_ORDER_FROM_BASKET_URL = `${this.BASE_URL}/deleteOrderFromBasket`;

  async getBasket() {
    const response = await axiosWithAuth.get<IBasket>(this.BASE_URL);
    return response.data;
  }

  async deleteOrderFromBasket(idOrder: string) {
    const response = await axiosWithAuth.patch(`${this.DELETE_ORDER_FROM_BASKET_URL}/${idOrder}`);
    return response;
  }

  async setOrderInBasket(idOrder: number, idBasket: number) {
    const response = await axiosWithAuth.patch(`${this.BASE_URL}/update/${idOrder}/${idBasket}`);
    return response;
  }

  async paymentsOrdersInBasket(idBasket: number) {
    const response = await axiosWithAuth.patch(`${this.BASE_URL}/payments/${idBasket}`);
    return response;
  }
}

export const OrderBasketServiceClass = new OrderBasketService();
