class FormDataNamingOrder {
  readonly NAME_TITLE_ORDER = "title-order";
  readonly NAME_DESC_ORDER = "desc-order";
  readonly NAME_PRICE_ORDER = "price-order";
  readonly NAME_ADRESS_CLIENT_ORDER = "address-client-order";
}

class Keys {
  readonly API_KEY = process.env.NEXT_PUBLIC_YANDEX_MAPS_API;
}

export const FormDataNamingOrderClass = new FormDataNamingOrder();
