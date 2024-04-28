import React from "react";
import { LoadScript, GoogleMap } from "@react-google-maps/api";

export const GoogleMaps = () => {
  return <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API!}></LoadScript>;

  return <div>google-maps</div>;
};
