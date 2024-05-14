import { Lobster, PT_Serif } from "next/font/google";

/* FONTS */

export const LOBSTER_FONT = Lobster({ subsets: ["latin"], weight: ["400"] });
export const PT_SERIF_FONT = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });
/* ----------------- */

class AllPages {
  readonly ADMIN_PANEL_PAGE = "/dash/admin_panel";
  readonly AUTORIZATION_PAGE = "/auth";
  readonly NOT_PAID_ORDERS_PAGE = "/dash/notpaid_orders";
  readonly YES_PAID_ORDERS_PAGE = "/dash/yespaid_orders";
  readonly CREATE_ORDER_PAGE = "/dash/create_order";
}

class FormDataNamingOrder {
  readonly NAME_TITLE_ORDER = "title-order";
  readonly NAME_DESC_ORDER = "desc-order";
  readonly NAME_PRICE_ORDER = "price-order";
  readonly NAME_ADRESS_CLIENT_ORDER = "address-client-order";
  readonly NAME_FILES_IMG_ORDER = "files-img-order";
  readonly NAME_DATE_ORIGIN_ORDER = "files-date-origin-order";
}

class Keys {
  readonly API_KEY_YANDEX_MAP = process.env.YANDEX_MAPS_API;
  readonly YANDEX_MAPS_GEO_API = process.env.YANDEX_MAPS_GEO_API;
}

export const AllPagesClass = new AllPages();
export const FormDataNamingOrderClass = new FormDataNamingOrder();
export const KeysClass = new Keys();
