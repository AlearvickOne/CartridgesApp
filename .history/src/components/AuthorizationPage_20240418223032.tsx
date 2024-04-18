"use client";
import styles from "@/styles/home/Home.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ISession {
  handleSubmit: (login: FormDataEntryValue | null, password: FormDataEntryValue | null) => void;
}

function AuthorizationPage({ handleSubmit }: ISession) {
  const sess = useSession();
  console.log(sess);

  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1 className="mb-5 text-center text-white text-xl">Авторизация</h1>
        <p className="mb-5 text-center text-white text-xl"></p>
        <form
          action={(formData) => {
            const fn = handleSubmit(formData.get("login"), formData.get("password"));
            console.log(handleSubmit);
            if (fn === null) return "";
          }}
          className={styles.authForm}
        >
          <input type="text" name="login" placeholder="Введите логин" />
          <input type="text" name="password" placeholder="Введите пароль" />
          <button type="submit">Войти в систему</button>
        </form>
      </div>
    </main>
  );
}

export default AuthorizationPage;
