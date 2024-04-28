import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { PropsWithChildren } from "react";

export const GoogleMapsProvider = ({ children }: PropsWithChildren) => {
  const render = (statusGoogle: Status) => {
    console.log(statusGoogle);
  };

  return <Wrapper apiKey={process.env.GOOGLE_MAPS_API!}>{children}</Wrapper>;
};
