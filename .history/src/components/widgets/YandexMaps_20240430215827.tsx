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
        apikey: "95fba83b-8fb6-4222-90eb-7995cb591912",
        suggest_apikey: "51cb953e-f542-45b0-86f8-457566b32925",
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
