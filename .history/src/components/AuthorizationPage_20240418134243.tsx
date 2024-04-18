"use server";
import styles from "@/styles/home/Home.module.scss";

import { useAuthState } from "@/hooks/useAuthState";
import { redirect } from "next/navigation";
import { auth } from "@/app/api/auth/configs/auth";

async function AuthorizationPage() {
  // const { inputsAuth, setInputLogin, setInputPassword } = useAuthState();

  const session = await auth();

  console.log("1"session);
  if (!session) redirect("/api/auth/signin");

  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1 className="mb-5 text-center text-white text-xl">Авторизация</h1>
        <p className="mb-5 text-center text-white text-xl"></p>
        {/* <form className={styles.authForm}>
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
          <button onClick={() => () => {}}>Войти в систему</button>
        </form> */}
      </div>
    </main>
  );
}

export default AuthorizationPage;
