import React from "react";
import { Yma, GoogleMap } from "react-yandex-maps";

export const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API!}>
      <GoogleMap />
    </LoadScript>
  );
};
