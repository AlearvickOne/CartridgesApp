import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UsersAuthStore } from "@/stores/usersStore";
import credentials from "next-auth/providers/credentials";
import { IUsersAuth } from "@/types/auth.interface";
import { pages } from "next/dist/build/templates/app-page";
import { Provider } from "next-auth/providers";

const providers: Provider[] = [
  CredentialsProvider({
    credentials: {
      login: { label: "Логин", type: "text", required: true },
      password: { label: "Пароль", type: "password", required: true },
    },
    authorize: async (credentials) => {
      try {
        await UsersAuthStore.getAuthUsersActon();
        const user = UsersAuthStore.usersAuth.find((person) => person?.login === credentials.login);

        if (user && credentials?.password !== user.password) return user as IUsersAuth;

        return null;
      } catch (err) {
        return null;
      }
    },
  }),
];

export const configAuth = {
  providers,
  pages: { signIn: "/" },
  secret: process.env.AUTH_SECRET,
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(configAuth);
