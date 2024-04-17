import { UsersAuthStore } from "@/stores/usersStore";
import { useEffect } from "react";

export function useAuthUsers() {
  const { getAuthUsersActon, usersAuth } = UsersAuthStore;

  useEffect(() => {
    getAuthUsersActon();
  }, [getAuthUsersActon]);

  return { usersAuth };
}
