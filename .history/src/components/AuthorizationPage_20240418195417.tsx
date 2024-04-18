"use client";
import styles from "@/styles/home/Home.module.scss";
import { useAuthState } from "@/hooks/useAuthState";
import { FormEventHandler, MouseEventHandler } from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

interface ISession {
  handleSubmit: (login: string, password: string) => void;
}

function AuthorizationPage({ handleSubmit }: ISession) {
  const { inputsAuth, setInputLogin, setInputPassword } = useAuthState();

  const sess = useSession();
  console.log(sess);

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
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              try {
                handleSubmit(inputsAuth.login, inputsAuth.password);
              } catch (err) {
                console.warn(err);
              }
            }}
          >
            Войти в систему
          </button>
        </form>
      </div>
    </main>
  );
}

export default AuthorizationPage;
