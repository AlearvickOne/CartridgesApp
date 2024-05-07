import { useQuery } from "@tanstack/react-query";
import React from "react";

export const getUser = () => {
  const { data } = useQuery({
    queryKey: ["getUser"],
  });
  return <div>getUser</div>;
};
