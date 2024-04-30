class FormDataNamingOrder {
  readonly NAME_TITLE_ORDER = "title-order";
  readonly NAME_DESC_ORDER = "desc-order";
  readonly NAME_PRICE_ORDER = "price-order";
  readonly NAME_ADRESS_CLIENT_ORDER = "address-client-order";
  readonly NAME_FILES_IMG_ORDER = "files-img-order";
}

class Keys {
  readonly API_KEY_YANDEX_MAP = process.env.NEXT_PUBLIC_YANDEX_MAPS_API;
}

export const FormDataNamingOrderClass = new FormDataNamingOrder();
export const KeysClass = new Keys();
