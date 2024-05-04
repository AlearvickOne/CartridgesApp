import React from "react";
import RubleIconMui from "@mui/icons-material/CurrencyRuble";
import DollarIconMui from "@mui/icons-material/AttachMoney";

interface IIcon {
  colorName: string;
}

export const RubleIcon = ({ colorName }: IIcon) => {
  return <RubleIconMui sx={{ fontSize: "14px", margin: "0 2px", color: colorName }} />;
};

export const DollarIcon = ({colorName}: IIcon) => {
  return <DollarIconMui sx={{ fontSize: "14px", margin: "0 2px", color: colorName }}
}