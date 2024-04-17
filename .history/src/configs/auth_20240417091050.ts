import type { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authConfig: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: "1230036940246618153",
      clientSecret: "6580b8e3a8c1921df4b79276cf3962cb48506a606f8a00114c00bc6597ebb194",
    }),
  ],
};
