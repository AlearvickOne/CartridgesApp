import { UserServiceForAdminClass } from "@/api/services/user-services/user-sevice.admin";
import { useQuery } from "@tanstack/react-query";

export const useGetProfilesUsers = () => {
  return useQuery({
    queryKey: ["getUsers"],
    queryFn: () => UserServiceForAdminClass.getUsers(),
  });
};
