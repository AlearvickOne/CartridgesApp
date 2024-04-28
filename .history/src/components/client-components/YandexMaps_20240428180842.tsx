import React from "react";
import { YMaps, Map, ,SearchControl } from "@pbe/react-yandex-maps";

export const YandexMaps = () => {
  const mapState = {
    center: [55.751574, 37.573856],
    zoom: 9,
    controls: [],
  };

  console.log(1);

  return (
    <YMaps query={{ apikey: process.env.YANDEX_MAPS_API! }}>
      <div className="">
        <Map defaultState={mapState} style={{ width: "20rem", height: "20rem" }}>
          <SearchControl options={{ float: "right" }} />
        </Map>
      </div>
    </YMaps>
  );
};
