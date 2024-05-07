import { Button } from "@mui/material";
import React from "react";

export default async function AdminPanelPage() {
  return (
    <div>
      <Button className="p-3 rounded-lg bg-violet-200 hover:shadow-upmd hover:shadow-violet-400 transition-all">
        Очистить заказы
      </Button>
    </div>
  );
}
