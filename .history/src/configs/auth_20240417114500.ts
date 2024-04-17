import type { AuthOptions, User } from "next-auth";
import { UsersAuthStore } from "@/stores/usersStore";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Credentials({
      credentials: {
        login: { label: "text", type: "text", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials?.password) return null;

        await UsersAuthStore.getAuthUsersActon();

        const currentUser = UsersAuthStore.usersAuth.find(
          (user) => user.login === credentials.login
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass as User;
        }
      },
    }),
  ],
};
