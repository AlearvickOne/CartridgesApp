import type { AuthOptions, User } from "next-auth";
import { UsersAuthStore } from "@/stores/usersStore";
import Credentials from "next-auth/providers/credentials";
import { redirect } from "next/dist/server/api-utils";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        login: { label: "Логин", type: "text", required: true },
        password: { label: "Пароль", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials?.password) return null;

        await UsersAuthStore.getAuthUsersActon();

        const currentUser = UsersAuthStore.usersAuth.find(
          (user) => user.login === credentials.login
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;
          console.log("user" + userWithoutPass);
          return userWithoutPass as User;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};
