"use client";

import { selectClasses } from "@mui/material";
import { YMaps, Map, SearchControl, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";

export const YandexMaps = () => {
  const [selectedAdress, setSelectedAdress] = useState<number[]>([55.751574, 37.573856]);

  const handleSelectedAdress = (event) => {
    setSelectedAdress(event.get("coords"));
  };

  useEffect(() => {
    fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.YANDEX_MAPS_API}&format=json&geocode=${selectedAdress[0]},${selectedAdress[1]}`
    )
      .then((response) => response.json())
      .then((data) => {
        const address =
          data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty
            .GeocoderMetaData.text;
        console.log(address);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(selectedAdress);
  const mapState = {
    center: selectedAdress,
    zoom: 9,
    controls: [],
  };

  return (
    <YMaps query={{ apikey: "95fba83b-8fb6-4222-90eb-7995cb591912" }}>
      <Map
        defaultState={mapState}
        style={{ width: "20rem", height: "20rem" }}
        onClick={handleSelectedAdress}
      >
        {selectClasses && <Placemark geometry={selectedAdress} />}
        <SearchControl options={{ float: "right" }} />
      </Map>
    </YMaps>
  );
};