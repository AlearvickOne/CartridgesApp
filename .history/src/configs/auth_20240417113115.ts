import type { AuthOptions } from "next-auth";
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
        if(!credentials?.login || !credentials?.password)
      },
    }),
  ],
};
