export interface IOrderInBasket {
  id: number | string;

  idOrder: number;
  titleOrder: string;
  priceOrder: number;
}

export type IOrderInBasketInArray = [IOrderInBasket];
