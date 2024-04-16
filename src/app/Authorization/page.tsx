"use client";

import styles from "@/styles/home/Home.module.scss";
import { useQuery } from "@tanstack/react-query";
import { UsersAuthStore } from "@/stores/usersStore";
import { useAuthUsers } from "@/hooks/useAuthUsers";
import { useState } from "react";
import { useAuthState } from "@/hooks/useAuthState";

function AuthorizationPage() {
  const { usersAuth } = useAuthUsers();
  const { inputsAuth, setInputLogin, setInputPassword } = useAuthState();
  const [isLoggined, setIsLoggined] = useState<boolean>(false);

  const onClickAuth = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    usersAuth.forEach((user) => {
      if (inputsAuth.login === user.login && inputsAuth.password === user.password)
        setIsLoggined(true);
      else setIsLoggined(false);
    });
  };

  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1 className="mb-5 text-center text-white text-xl">Авторизация</h1>
        <p className="mb-5 text-center text-white text-xl">
          {isLoggined ? "Вы авторизованы" : "Вы не авторизованы"}
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
          <button onClick={onClickAuth}>Войти в систему</button>
        </form>
      </div>
    </main>
  );
}

export { AuthorizationPage };
