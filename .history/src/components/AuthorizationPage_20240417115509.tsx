"use client";

import styles from "@/styles/home/Home.module.scss";
import { useAuthUsers } from "@/hooks/useAuthUsers";
import { useCallback, useState } from "react";
import { useAuthState } from "@/hooks/useAuthState";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function AuthorizationPage() {
  const { usersAuth } = useAuthUsers();
  const { inputsAuth, setInputLogin, setInputPassword } = useAuthState();
  const [isLoggined, setIsLoggined] = useState<boolean | null>(null);

  const session = useSession();

  console.log(session);

  const router = useRouter();

  const onClickAuth = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      usersAuth.forEach((user) => {
        if (inputsAuth.login === user.login && inputsAuth.password === user.password) {
          setIsLoggined(true);
        } else setIsLoggined(false);
      });
    },
    [inputsAuth.login, inputsAuth.password, router, usersAuth]
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
