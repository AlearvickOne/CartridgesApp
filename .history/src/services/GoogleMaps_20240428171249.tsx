import React from "react";

export const GoogleMaps = () => {
  const refMap = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.MAP>();

  return <div>google-maps</div>;
};
