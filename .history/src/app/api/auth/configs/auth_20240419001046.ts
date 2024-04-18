import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UsersAuthStore } from "@/stores/usersStore";
import { IUsersAuth } from "@/types/auth.interface";
import { Provider } from "next-auth/providers";
import { signInSchema } from "../utils/zod";

const providers: Provider[] = [
  CredentialsProvider({
    authorize: async (credentials) => {
      try{
        const {login, password} = await signInSchema.parseAsync(credentials)

        await UsersAuthStore.getAuthUsersActon();
        const user = UsersAuthStore.usersAuth.find((person) => person?.login === login);
  
        if (user && credentials.password === user.password) return user as IUsersAuth;
  
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
