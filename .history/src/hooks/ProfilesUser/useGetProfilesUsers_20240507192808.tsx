"use client";

import { useQuery } from "@tanstack/react-query";

export const useGetProfilesUsers = () => {
  return useQuery({
    queryKey: ["getUsersProfiles"],
  });
  return <div>useGetProfilesUsers</div>;
};
