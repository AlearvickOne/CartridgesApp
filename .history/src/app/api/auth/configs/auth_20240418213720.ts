import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UsersAuthStore } from "@/stores/usersStore";
import credentials from "next-auth/providers/credentials";
import { IUsersAuth } from "@/types/auth.interface";
import { pages } from "next/dist/build/templates/app-page";
import { Provider } from "next-auth/providers";

const providers: Provider[] = [
  CredentialsProvider({
    authorize: async (credentials, req) => {
      await UsersAuthStore.getAuthUsersActon();
      const user = UsersAuthStore.usersAuth.find(
        (person) => person !== null && person?.login === credentials.login
      );

      if (user && credentials.password === user.password) return user as IUsersAuth;

      throw new Error("Filed ");
    },
  }),
];

export const configAuth = {
  providers,
  pages: { signIn: "/" },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signInError(error, redirect) {
      // Предотвращаем вывод ошибки в консоль
      // и перенаправляем пользователя на страницу входа с параметром ошибки
      if (error.status === 401 || error.status === 403) {
        redirect("/auth/signin?error=Invalid username or password");
      } else {
        throw new Error("Unexpected error during sign in: " + error.message);
      }
    },
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(configAuth);
