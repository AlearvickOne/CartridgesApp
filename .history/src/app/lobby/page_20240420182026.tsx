"use server";

import { LiOrder } from "@/components/widgets/LiOrder";

export default async function Lobby() {
  return (
    <div className="">
      <ul>
        <LiOrder></LiOrder>
        <LiOrder></LiOrder>
        <LiOrder></LiOrder>
        <LiOrder></LiOrder>
        <LiOrder></LiOrder>
      </ul>
    </div>
  );
}
