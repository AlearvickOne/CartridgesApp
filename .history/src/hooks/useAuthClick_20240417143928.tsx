"use client";

import { IUsersAuth } from "@/types/auth.interface";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export const authClick = async (inputsAuth: IUsersAuth, e: MouseEvent<HTMLElement>) => {
  //   const router = useRouter();

  e.preventDefault();

  const res = await signIn("credentials", {
    login: inputsAuth.login,
    password: inputsAuth.password,
    redirect: false,
    callbackUrl: "/",
  });

  if (res && !res.error) {
    // router.push("/lobby");
    console.log("yes");
  } else {
    console.warn(res);
  }
};
