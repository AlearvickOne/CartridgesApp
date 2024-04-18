import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UsersAuthStore } from "@/stores/usersStore";
import credentials from "next-auth/providers/credentials";
import { IUsersAuth } from "@/types/auth.interface";
import { pages } from "next/dist/build/templates/app-page";
import { Provider } from "next-auth/providers";
import { error } from "console";

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid login or password";
}

const providers: Provider[] = [
  CredentialsProvider({
    authorize: async (credentials) => {
      await UsersAuthStore.getAuthUsersActon();
      const user = UsersAuthStore.usersAuth.find((person) => person?.login === credentials.login);

      if (user && credentials.password === user.password) return user as IUsersAuth;

      throw new InvalidLoginError();
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
