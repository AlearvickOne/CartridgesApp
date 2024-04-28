import { Wrapper } from "@googlemaps/react-wrapper";
import { PropsWithChildren } from "react";

export const GoogleMapsProvider = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};
