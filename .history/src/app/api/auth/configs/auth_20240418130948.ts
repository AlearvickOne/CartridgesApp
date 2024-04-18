"use server";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UsersAuthStore } from "@/stores/usersStore";

import { IUsersAuth } from "@/types/auth.interface";

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
{
  
})
  ],
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
