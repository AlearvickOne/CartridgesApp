import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UsersAuthStore } from "@/stores/usersStore";
import credentials from "next-auth/providers/credentials";

export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        login: { label: "Логин", type: "text", required: true },
        password: { label: "Пароль", type: "password", required: true },
      },
      authorize: async (credentials) => {
        const user = null;
      },
    }),
  ],
});
