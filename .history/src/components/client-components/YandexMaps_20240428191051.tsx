"use client";

import { YMaps, Map, SearchControl, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";

export const YandexMaps = () => {
  const [selectedAdress, setSelectedAdress] = useState<string>("");

  const handleSelectedAdress = (event: ) => {
    setSelectedAdress(event.get("coords"));
  };
  
  
  const mapState = {
    center: [55.751574, 37.573856],
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
        <Placemark defaultGeometry={[55.751574, 37.573856]} />
        <SearchControl options={{ float: "right" }} />
      </Map>
    </YMaps>
  );
};
