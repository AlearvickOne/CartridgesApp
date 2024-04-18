import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UsersAuthStore } from "@/stores/usersStore";
import credentials from "next-auth/providers/credentials";
import { IUsersAuth } from "@/types/auth.interface";

export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        login: { label: "Логин", type: "text", required: true },
        password: { label: "Пароль", type: "password", required: true },
      },
      authorize: async (credentials) => {
        const currentUser = UsersAuthStore.usersAuth.find(
          (user) => user.login === credentials.login
        );

        return currentUser as IUsersAuth;
      },
    }),
  ],
});
