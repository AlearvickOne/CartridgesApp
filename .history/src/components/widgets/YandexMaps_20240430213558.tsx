"use client";

import { KeysClass } from "@/constants/constants";
import { RequiresClass } from "@/services/requires.class";
import { IYandexMapsProps } from "@/types/forms.interface";
import { YMaps, Map, SearchControl, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";

export const YandexMaps = ({ setAddress }: IYandexMapsProps) => {
  const [selectedAdress, setSelectedAdress] = useState<number[] | undefined>([
    55.751574,
    37.573856,
  ]);

  const handleSelectedAdress = (event: Map<string, number[]>) => {
    setSelectedAdress(event.get("coords"));
  };

  useEffect(() => {
    if (!selectedAdress) return;
    RequiresClass.getAddressFromCartCoordinate(selectedAdress!, setAddress);
  }, [selectedAdress]);

  const mapState = {
    center: selectedAdress,
    zoom: 9,
  };

  return (
    <YMaps
      query={{
        apikey: KeysClass.API_KEY_YANDEX_MAP,
        suggest_apikey:
          "https://suggest-maps.yandex.ru/v1/suggest?apikey=493aad11-7ef7-4088-89ca-fc24e71e3d53&text=бурдж",
      }}
    >
      <div>
        <Map className="w-full h-[13rem] my-1" state={mapState} onClick={handleSelectedAdress}>
          {selectedAdress && <Placemark geometry={selectedAdress} />}
          <SearchControl options={{ float: "right" }} />
        </Map>
      </div>
    </YMaps>
  );
};
