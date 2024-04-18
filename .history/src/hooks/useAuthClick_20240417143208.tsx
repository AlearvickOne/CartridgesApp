"use client";

import { IUsersAuth } from "@/types/auth.interface";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export const useAuthClick = async (inputsAuth: IUsersAuth) => {
  const router = useRouter();

  return async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
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
};
