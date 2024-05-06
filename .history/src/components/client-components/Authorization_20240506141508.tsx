"use client";
import styles from "@/styles/home/Home.module.scss";
import { useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import { deleteSpaceInText } from "@/utils/deleteSpaceInText";
import { Lobster } from "next/font/google";
import { IAuthForm } from "@/types/auth.interface";
import { useForm, SubmitHandler } from "react-hook-form";

const caveat = Lobster({ subsets: ["latin"], weight: ["400"] });

function Authorization() {
  const { register, handleSubmit, reset } = useForm<IAuthForm>({
    mode: "onChange",
  });

  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1
          className={`${caveat.className} mb-5 text-center text-2xl border-b-2 border-black pb-2`}
        >
          Авторизация
        </h1>
        <form className={`${styles.authForm} ${caveat.className}`}>
          <input
            type="text"
            name="login"
            placeholder="Введите логин"
            maxLength={20}
            onChange={(e) => deleteSpaceInText(e)}
          />
          <input
            type="text"
            name="password"
            placeholder="Введите пароль"
            maxLength={20}
            onChange={(e) => deleteSpaceInText(e)}
          />
          <button
            type="submit"
            onClick={() => setIsClick(true)}
            className={isClick ? styles.disabled : ""}
          >
            {isClick ? <SyncIcon className="animate-spin" /> : "Войти в систему"}
          </button>

          {isClick ? <></> : <p className="mt-5 text-center text-rose-800 text-xl">{}</p>}
        </form>
      </div>
    </main>
  );
}

export default Authorization;
