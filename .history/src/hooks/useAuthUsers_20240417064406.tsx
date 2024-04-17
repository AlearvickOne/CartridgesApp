import { UsersAuthStore } from "@/stores/usersStore";
import { useEffect } from "react";

export function useAuthUsers() {
  const { getAuthUsersActon, usersAuth, currentUser } = UsersAuthStore;

  useEffect(() => {
    getAuthUsersActon();
  }, [getAuthUsersActon]);

  return { usersAuth, currentUser };
}
