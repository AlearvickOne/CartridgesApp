"use client";
import styles from "@/styles/home/Home.module.scss";
import { useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import { IAuthForm } from "@/types/auth.interface";
import { useForm, SubmitHandler } from "react-hook-form";
import { LOBSTER_FONT } from "@/constants/constants";
import { useMutationAuth } from "@/hooks/Auth/useMutationAuth";

function Authorization() {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAuthForm>({
    mode: "onChange",
  });

  const { mutate } = useMutationAuth(setIsClick, setIsError, isLoginForm, reset);

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data);
  };
  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1
          className={`${LOBSTER_FONT.className} mb-5 text-center text-2xl border-b-2 border-black pb-2`}
        >
          Авторизация
        </h1>
        <form
          className={`${styles.authForm} ${LOBSTER_FONT.className}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Введите логин"
            {...register("login", {
              required: true,
              maxLength: 20,
              minLength: 5,
              pattern: /^[^\s]+$/,
            })}
          />
          <input
            type="password"
            placeholder="Введите пароль"
            {...register("password", {
              required: true,
              maxLength: 20,
              minLength: 8,
              pattern: /^[^\s]+$/,
            })}
          />
          {errors && <span>Поля являются обязательными</span>}

          {isError && <p>Неверный логин или пароль</p>}
          <button type="submit" className={isClick ? styles.disabled : ""}>
            {isClick ? <SyncIcon className="animate-spin" /> : "Войти в систему"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Authorization;
