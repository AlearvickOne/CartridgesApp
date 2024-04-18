import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UsersAuthStore } from "@/stores/usersStore";
import credentials from "next-auth/providers/credentials";
import { IUsersAuth } from "@/types/auth.interface";
import { pages } from "next/dist/build/templates/app-page";

export const configAuth = {
  providers: [
    CredentialsProvider({
      name: "User Credential",
      credentials: {
        login: { label: "Логин", type: "text", required: true },
        password: { label: "Пароль", type: "password", required: true },
      },
      authorize: async (credentials) => {
        await UsersAuthStore.getAuthUsersActon();
        const user = UsersAuthStore.usersAuth.find((person) => person?.login === credentials.login);

        if (user && credentials?.password === user.password) return user as IUsersAuth;

        return null;
      },
    }),
  ],
  pages: { signIn: "/" },
  secret: process.env.NEXTAUTH_SECRET,
};

export const providerMap = configAuth.providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { login: providerData.login, password: providerData.password };
  }
});

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(configAuth);
