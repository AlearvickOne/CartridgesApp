import { UserServiceForAdminClass } from "@/api/services/user-services/user-sevice.admin";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteUsers = () => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ["deleteUsers"],
    mutationFn: (options: { arrayId: number[] }) =>
      UserServiceForAdminClass.deleteUsers(options.arrayId),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["getUsers"] });
    },
  });
};
