"use client";
import styles from "@/styles/home/Home.module.scss";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";

interface ISession {
  handleSubmit: (login: FormDataEntryValue | null, password: FormDataEntryValue | null) => void;
}

function AuthorizationPage({ handleSubmit }: ISession) {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | unknown>("");

  const session = useSession();
  console.log(isClick);

  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1 className="mb-5 text-center text-xl">Авторизация</h1>
        <form
          action={async (formData) => {
            const res = await handleSubmit(formData.get("login"), formData.get("password"));
            typeof res !== "undefined" ? setIsClick(false) : setIsClick(true);
            setErrorMessage(res);
          }}
          className={styles.authForm}
        >
          <input type="text" name="login" placeholder="Введите логин" disabled={isClick} />
          <input type="text" name="password" placeholder="Введите пароль" />
          <button
            type="submit"
            onClick={() => setIsClick(true)}
            // className={isClick ? styles.disabled : ""}
          >
            {isClick ? <SyncIcon className="animate-spin" /> : "Войти в систему"}
          </button>

          {isClick ? (
            <></>
          ) : (
            <p className="mt-5 text-center text-rose-800 text-xl">{errorMessage as string}</p>
          )}
        </form>
      </div>
    </main>
  );
}

export default AuthorizationPage;
