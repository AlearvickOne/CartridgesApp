import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { IUser } from "@/types/auth.interface";
import { Provider } from "next-auth/providers";
import { signInSchema } from "../utils/zod";
import { ZodError } from "zod";
import { RequiresClass } from "@/services/requires.class";

const providers: Provider[] = [
  CredentialsProvider({
    credentials: {
      login: { label: "text", type: "text" },
    },
    authorize: async (credentials) => {
      try {
        const { login, password } = await signInSchema.parseAsync(credentials);

        const users = await RequiresClass.getUsersData();
        const user = users.find((person) => {
          if (person?.login === login && person.password === password) return person;
        });
        return user as IUser;
      } catch (error) {
        if (error instanceof ZodError) return "zod: user not found";
        return error!;
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
