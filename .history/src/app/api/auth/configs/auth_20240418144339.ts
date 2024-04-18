import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UsersAuthStore } from "@/stores/usersStore";

import { IUsersAuth } from "@/types/auth.interface";
import credentials from "next-auth/providers/credentials";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
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

        if (user && credentials?.password === user.password) return user as ILogin;

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   providers: [
//     Credentials({
//       credentials: {
//         login: { label: "Логин", type: "text", required: true },
//         password: { label: "Пароль", type: "password", required: true },
//       },
//       authorize: async (credentials) => {
//         const currentUser = UsersAuthStore.usersAuth.find(
//           (user) => user.login === credentials.login
//         );

//         if (currentUser && currentUser.password === credentials.password) {
//           const { ...items } = currentUser;

//           return items as IUsersAuth;
//         }

//         return null;
//       },
//     }),
//   ],
// });
