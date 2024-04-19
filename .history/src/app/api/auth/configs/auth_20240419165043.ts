import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UsersAuthStore } from "@/stores/usersStore";
import { IUsersAuth } from "@/types/auth.interface";
import { Provider } from "next-auth/providers";
import { signInSchema } from "../utils/zod";
import { ZodError } from "zod";

const providers: Provider[] = [
  CredentialsProvider({
    credentials: {
      login: { label: "text", type: "text" },
    },
    authorize: async (credentials) => {
      try {
        const { login, password } = await signInSchema.parseAsync(credentials);

        await UsersAuthStore.getAuthUsersActon();
        const user = UsersAuthStore.usersAuth.find((person) => {
          if (person?.login === login && person.password === password) return person;
        });

        if (!user) {
          throw Error("user not found");
        }

        return user as IUsersAuth;
      } catch (error) {
        if (error instanceof ZodError) return null;
        return null;
      }
    },
  }),
];

export const configAuth = {
  providers,
  // pages: { signIn: "/" },
  secret: process.env.AUTH_SECRET,
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(configAuth);
