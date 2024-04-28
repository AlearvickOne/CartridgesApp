import { YMaps, Map, SearchControl, Placemark } from "@pbe/react-yandex-maps";

export const YandexMaps = () => {
  const mapState = {
    center: [55.751574, 37.573856],
    zoom: 9,
    controls: [],
  };

  return (
    <YMaps query={{ apikey: "95fba83b-8fb6-4222-90eb-7995cb591912" }}>
      <Map defaultState={mapState} style={{ width: "20rem", height: "20rem" }}>
        <Placemark defaultGeometry={[55.751574, 37.573856]} />
        <SearchControl options={{ float: "right" }} />
      </Map>
    </YMaps>
  );
};
