"use client";
import styles from "@/styles/home/Home.module.scss";
import { useAuthState } from "@/hooks/useAuthState";
import { FormEventHandler } from "react";
import { signIn } from "@/app/api/auth/configs/auth";

function AuthorizationPage({ session }) {
  // const { inputsAuth, setInputLogin, setInputPassword } = useAuthState();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault;

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      login: formData.get("login"),
      password: formData.get("password"),
      redirect: false,
      redirectTo: "/lobby",
    });
  };

  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1 className="mb-5 text-center text-white text-xl">Авторизация</h1>
        <p className="mb-5 text-center text-white text-xl"></p>
        <form onSubmit={} className={styles.authForm}>
          <input
            type="text"
            placeholder="Введите логин"
            // value={inputsAuth.login}
            // onChange={(ev) => setInputLogin(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Введите пароль"
            // value={inputsAuth.password}
            // onChange={(ev) => setInputPassword(ev.target.value)}
          />
          <button type="submit">Войти в систему</button>
        </form>
      </div>
    </main>
  );
}

export default AuthorizationPage;
