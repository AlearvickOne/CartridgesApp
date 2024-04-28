"use client";

import { selectClasses } from "@mui/material";
import { YMaps, Map, SearchControl, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";
import Geocode from "react-geocode";

export const YandexMaps = () => {
  const [selectedAdress, setSelectedAdress] = useState<number[]>([55.751574, 37.573856]);

  const handleSelectedAdress = (event) => {
    setSelectedAdress(event.get("coords"));
  };

  useEffect(() => {
    const res = Geocode.fromLatLng(selectedAdress);
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
