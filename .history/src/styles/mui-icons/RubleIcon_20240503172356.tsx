import React from "react";
import RubleIcon from "@mui/icons-material/CurrencyRuble";

interface IRubleIcon {
  colorName: string;
}

export const RubleIcon = ({ colorName }) => {
  return <RubleIcon sx={{ fontSize: "14px", margin: "0 2px", color: "red" }} />;
};
