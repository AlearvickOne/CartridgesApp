"use server";

import { useQuery } from "@tanstack/react-query";

export const useGetOrdersData = async () => {
  const { data } = useQuery({
    queryKey: ["orders"],
  });

  return <div>useGetOrdersData</div>;
};
