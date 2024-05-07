"use client";

import { UserServiceForAdminClass } from "@/api/services/user-services/user-sevice.admin";
import { useQuery } from "@tanstack/react-query";

export const useGetProfilesUsers = () => {
  return useQuery({
    queryKey: ["getUsersProfiles"],
    queryFn: () => UserServiceForAdminClass.getUsers(),
  });
  return <div>useGetProfilesUsers</div>;
};
