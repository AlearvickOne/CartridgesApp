import { Lobster } from "next/font/google";

class FormDataNamingOrder {
  readonly NAME_TITLE_ORDER = "title-order";
  readonly NAME_DESC_ORDER = "desc-order";
  readonly NAME_PRICE_ORDER = "price-order";
  readonly NAME_ADRESS_CLIENT_ORDER = "address-client-order";
  readonly NAME_FILES_IMG_ORDER = "files-img-order";
  readonly NAME_DATE_ORIGIN_ORDER = "files-date-origin-order";
}

class Keys {
  readonly API_KEY_YANDEX_MAP = process.env.NEXT_PUBLIC_YANDEX_MAPS_API;
  readonly YANDEX_MAPS_GEO_API = process.env.NEXT_PUBLIC_YANDEX_MAPS_GEO_API;
}

class Fonts {
  readonly LOBSTER = Lobster({ subsets: ["latin"], weight: ["400"] });
  readonly PT_SERIF = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });
}

export const FormDataNamingOrderClass = new FormDataNamingOrder();
export const KeysClass = new Keys();
export const FontsClass = new Fonts();
