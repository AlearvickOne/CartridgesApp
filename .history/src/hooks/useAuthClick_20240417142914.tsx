"use client";

import { IUsersAuth } from "@/types/auth.interface";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export const useAuthClick = (inputsAuth: IUsersAuth) => {
  const router = useRouter();

  e.preventDefault();

  const res = signIn("credentials", {
    login: inputsAuth.login,
    password: inputsAuth.password,
    redirect: false,
    callbackUrl: "/",
  });

  if (res && !res.error) {
    router.push("/lobby");
  } else {
    console.warn(res);
  }
};
