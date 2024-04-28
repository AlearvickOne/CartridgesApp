import React from "react";
import { YMaps, Map } from "react-yandex-maps";

export const YandexMaps = () => {
  const mapState = {
    center: [55.751574, 37.573856],
    zoom: 9,
    controls: [],
  };

  return (
    <YMaps>
      <Map defaultState={mapState} />
      <div className=""></div>
    </YMaps>
  );
};
