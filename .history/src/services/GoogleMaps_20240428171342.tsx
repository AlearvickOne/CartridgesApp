import React from "react";

export const GoogleMaps = () => {
  const refMap = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<() => void>();

  return <div>google-maps</div>;
};
