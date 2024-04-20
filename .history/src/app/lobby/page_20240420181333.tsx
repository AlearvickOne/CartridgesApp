"use server";

import { LIOrders } from "@/components/widgets/LIOrders";
import React, { useState } from "react";

export default async function Lobby() {
  return (
    <div className="">
      <ul>
        <LIOrders></LIOrders>
      </ul>
    </div>
  );
}
