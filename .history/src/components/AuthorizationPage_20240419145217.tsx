"use client";
import styles from "@/styles/home/Home.module.scss";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";

interface ISession {
  handleSubmit: (login: FormDataEntryValue | null, password: FormDataEntryValue | null) => void;
}

function AuthorizationPage({ handleSubmit }: ISession) {
  const [isClick, setIsClick] = useState<boolean>(false);

  const session = useSession();

  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1 className="mb-5 text-center text-white text-xl">Авторизация</h1>
        <p className="mb-5 text-center text-white text-xl">{isClick ? "" : "Не верные данные"}</p>
        <form
          action={async (formData) => {
            const res = await handleSubmit(formData.get("login"), formData.get("password"));
            typeof res !== "undefined" ? setIsClick(false) : setIsClick(true);
          }}
          className={styles.authForm}
        >
          <input type="text" name="login" placeholder="Введите логин" />
          <input type="text" name="password" placeholder="Введите пароль" />
          <button type="submit">
            {isClick ? <SyncIcon className="animate-spin" /> : "Войти в систему"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default AuthorizationPage;
