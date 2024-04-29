"use client";

import { YMaps, Map, SearchControl, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useRef, useState } from "react";

interface IYandexMapsProps {
  setAddress: (address: string) => void;
}

export const YandexMaps = ({ setAddress }: IYandexMapsProps) => {
  const apikey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API;

  const [selectedAdress, setSelectedAdress] = useState<number[] | undefined>([
    55.751574,
    37.573856,
  ]);

  const refButtonFile = useRef();

  const handleSelectedAdress = (event: Map<string, number[]>) => {
    setSelectedAdress(event.get("coords"));
  };

  useEffect(() => {
    if (!selectedAdress) return;

    fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${apikey}&format=json&geocode=${selectedAdress[1]},${selectedAdress[0]}`
    )
      .then((response) => response.json())
      .then((data) => {
        const address =
          data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty
            .GeocoderMetaData.text;
        setAddress(address);
      })
      .catch((error) => console.error(error));
  }, [selectedAdress]);

  const mapState = {
    center: selectedAdress,
    zoom: 9,
  };

  return (
    <YMaps query={{ apikey: apikey }}>
      <div>
        <Map className="w-full h-[13rem] my-1" state={mapState} onClick={handleSelectedAdress}>
          {selectedAdress && <Placemark geometry={selectedAdress} />}
          <SearchControl options={{ float: "right" }} />
        </Map>
      </div>
    </YMaps>
  );
};
