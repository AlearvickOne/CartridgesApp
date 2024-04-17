import type { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authConfig: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};
