import { useRouter } from "next/navigation";
import React from "react";

export const useAuthClick = ({ inputsAuth }) => {
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
