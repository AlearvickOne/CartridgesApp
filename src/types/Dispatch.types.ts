import { Dispatch, SetStateAction } from "react";
import { IOrders } from "./orders.interface";

export type DisBoolean = Dispatch<SetStateAction<boolean>>;
export type DisNumber = Dispatch<SetStateAction<number>>;
export type DisString = Dispatch<SetStateAction<string>>;
export type DisArrayBoolean = Dispatch<SetStateAction<boolean[]>>;
export type DisArrayNumber = Dispatch<SetStateAction<number[]>>;
export type DisArrayString = Dispatch<SetStateAction<string[]>>;

export type DisArrayOrders = Dispatch<SetStateAction<IOrders[] | undefined>>;

export type DispatchObjectCreateOrderForm = Dispatch<
  SetStateAction<{
    titleValue: string;
    titleValueHelper: string;
    priceValue: string;
    priceValueHelper: string;
  }>
>;
