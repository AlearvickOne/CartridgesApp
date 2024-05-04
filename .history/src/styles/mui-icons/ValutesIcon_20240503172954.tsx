import React from "react";
import RubleIconMui from "@mui/icons-material/CurrencyRuble";
import DollarIconMui from "@mui/icons-material/AttachMoney";

interface IRubleIcon {
  colorName: string;
}

export const RubleIcon = ({ colorName }: IRubleIcon) => {
  return <RubleIconMui sx={{ fontSize: "14px", margin: "0 2px", color: colorName }} />;
};
