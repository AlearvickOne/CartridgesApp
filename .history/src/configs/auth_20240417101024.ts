import type { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authConfig: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.YANDEX_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};
