import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";

export const YandexMaps = () => {
  const mapState = {
    center: [55.751574, 37.573856],
    zoom: 9,
    controls: [],
  };

  console.log(1);

  return (
    <YMaps>
      <div className="">
        <Map data defaultState={mapState} style={{ width: "20rem", height: "20rem" }} />
      </div>
    </YMaps>
  );
};
