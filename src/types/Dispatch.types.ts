import { Dispatch, SetStateAction } from "react";
import { IOrders } from "./orders.interface";

export type DisBoolean = Dispatch<SetStateAction<boolean>>;
export type DisNumber = Dispatch<SetStateAction<number | undefined>>;
export type DisString = Dispatch<SetStateAction<string | undefined>>;
export type DisArrayBoolean = Dispatch<SetStateAction<boolean[] | undefined>>;
export type DisArrayNumber = Dispatch<SetStateAction<number[] | undefined>>;
export type DisArrayString = Dispatch<SetStateAction<string[] | undefined>>;

export type DisArrayOrders = Dispatch<SetStateAction<IOrders[] | undefined>>;

export type DispatchObjectCreateOrderForm = Dispatch<
  SetStateAction<{
    titleValue: string;
    titleValueHelper: string;
    priceValue: string;
    priceValueHelper: string;
  }>
>;
