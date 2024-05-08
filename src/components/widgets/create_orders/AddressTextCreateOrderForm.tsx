import { FormDataNamingOrderClass } from "@/constants/constants";
import { TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { YandexMaps } from "../yandex-widgets/YandexMaps";

export const AddressTextCreateOrderForm = () => {
  const [address, setAddress] = useState<string>("");

  const setAdressClientOrder = useCallback(
    (address: string) => {
      setAddress(address);
    },
    [address]
  );

  return (
    <div className="flex flex-wrap flex-col mb-5">
      <label htmlFor="address-order" className="py-[2px] mb-2">
        Адрес заказчика услуги (Выберите на карте)
      </label>
      <TextField
        id="address-order"
        className="py-1 mb-2"
        name={FormDataNamingOrderClass.NAME_ADRESS_CLIENT_ORDER}
        type="text"
        defaultValue={address}
      />
      <YandexMaps setAddress={setAdressClientOrder} />
    </div>
  );
};
