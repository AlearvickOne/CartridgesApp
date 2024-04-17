"use client";

import styles from "@/styles/home/Home.module.scss";
import { useCallback, useState } from "react";
import { useAuthState } from "@/hooks/useAuthState";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { error } from "console";

function AuthorizationPage() {
  const { inputsAuth, setInputLogin, setInputPassword } = useAuthState();
  const [isLoggined, setIsLoggined] = useState<boolean | null>(null);

  const router = useRouter();

  const onClickAuth = useCallback(
    async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      const res = await signIn("credentials", {
        login: inputsAuth.login,
        password: inputsAuth.password,
        redirect: false,
      });

      if (res && !res.error) {
        router.push("/lobby2");
      } else {
        console.warn(res);
      }
    },
    [inputsAuth.login, inputsAuth.password, router]
  );

  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1 className="mb-5 text-center text-white text-xl">Авторизация</h1>
        <p className="mb-5 text-center text-white text-xl">
          {isLoggined ? "Вы авторизованы" : isLoggined === null ? " " : "Введите верные данные"}
        </p>
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
          <button onClick={onClickAuth} disabled={isLoggined ? true : false}>
            Войти в систему
          </button>
        </form>
      </div>
    </main>
  );
}

export default AuthorizationPage;
