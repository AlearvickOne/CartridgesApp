"use client";

import { selectClasses } from "@mui/material";
import { YMaps, Map, SearchControl, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";

export const YandexMaps = () => {
  const [selectedAdress, setSelectedAdress] = useState<number[] | undefined>([
    55.751574,
    37.573856,
  ]);

  const [error, setError] = useState<Error>();

  const apikey = process.env.YANDEX_MAPS_API;
  console.log(error);

  const handleSelectedAdress = (event: Map<string, number[]>) => {
    setSelectedAdress(event.get("coords"));
  };

  useEffect(() => {
    if (!selectClasses) return;

    fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${apikey}&format=json&geocode=${
        selectedAdress![1]
      },${selectedAdress![0]}`
    )
      .then((response) => response.json())
      .then((data) => {
        const address =
          data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty
            .GeocoderMetaData.text;
        console.log(address);
      })
      .catch((error) => console.error(error));
  }, [selectedAdress]);

  console.log(selectedAdress);
  const mapState = {
    center: selectedAdress,
    zoom: 9,
    controls: [],
  };

  const fn = () => {
    return (
      <Map
        state={mapState}
        onError={(error) => setError(error)}
        style={{ width: "20rem", height: "20rem" }}
        onClick={handleSelectedAdress}
      >
        {selectClasses && <Placemark geometry={selectedAdress} />}
        <SearchControl options={{ float: "right" }} />
      </Map>
    );
  };

  return <YMaps query={{ apikey: apikey }}></YMaps>;
};
