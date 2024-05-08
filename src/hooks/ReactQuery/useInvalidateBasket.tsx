"use client";
import { useQueryClient } from "@tanstack/react-query";

export const useInvalidateBasket = () => {
  const client = useQueryClient();
  console.log(2);
  return client.invalidateQueries({ queryKey: ["getBasket"] });
};
