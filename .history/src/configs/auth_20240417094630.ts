import type { AuthOptions } from "next-auth";
import YandexProvider from "next-auth/providers/yandex";

export const authConfig: AuthOptions = {
  providers: [
    YandexProvider({
      clientId: "97f188c04ece48a6879ee7f7858d88a4",
      clientSecret: "06e0e0ab94fb485fad2dfdf8204985f8",
    }),
  ],
};
