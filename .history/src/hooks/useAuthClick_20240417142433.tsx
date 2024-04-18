import { IUsersAuth } from "@/types/auth.interface";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, MouseEvent } from "react";

export const useAuthClick = useCallback((inputsAuth: IUsersAuth, e: MouseEvent<HTMLElement>) => {
  const router = useRouter();

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
}, []);
