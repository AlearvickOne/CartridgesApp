import { IUsersAuth } from "@/types/auth.interface";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

export const useAuthClick = (inputsAuth: IUsersAuth) => {
  const router = useRouter();

  useCallback(
    async (e: React.MouseEvent<HTMLElement>) => {
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
    },
    [inputsAuth.login, inputsAuth.password, router]
  );

  return <div>useAuthClick</div>;
};
