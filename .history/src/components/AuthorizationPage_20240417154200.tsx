"use client";

import styles from "@/styles/home/Home.module.scss";
import { useCallback, useState } from "react";
import { useAuthState } from "@/hooks/useAuthState";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { authConfig } from "@/configs/auth";

function AuthorizationPage() {
  const { inputsAuth, setInputLogin, setInputPassword } = useAuthState();

  const router = useRouter();

  const onClickAuth = () => {
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
    };
  };

  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1 className="mb-5 text-center text-white text-xl">Авторизация</h1>
        <p className="mb-5 text-center text-white text-xl"></p>
        <form className={styles.authForm}>
          <input
            type="text"
            placeholder="Введите логин"
            value={inputsAuth.login}
            onChange={(ev) => setInputLogin(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Введите пароль"
            value={inputsAuth.password}
            onChange={(ev) => setInputPassword(ev.target.value)}
          />
          <button onClick={onClickAuth}>Войти в систему</button>
        </form>
      </div>
    </main>
  );
}

export default AuthorizationPage;
