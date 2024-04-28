import { Wrapper } from "@googlemaps/react-wrapper";
import { PropsWithChildren } from "react";

export const GoogleMapsProvider = ({ children }: PropsWithChildren) => {
  return <Wrapper apiKey={process.env.GOOGLE_MAPS_API!}>{children}</Wrapper>;
};
