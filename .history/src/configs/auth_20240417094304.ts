import type { AuthOptions } from "next-auth";
import YandexProvider from "next-auth/providers/yandex";

export const authConfig: AuthOptions = {
  providers: [
    YandexProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};
