"use client";
import styles from "@/styles/home/Home.module.scss";
import { useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import { Lobster } from "next/font/google";
import { IAuthForm } from "@/types/auth.interface";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/api/services/authService";
import { AllPagesClass } from "@/app/all-pages.class";

const lobsterFont = Lobster({ subsets: ["latin"], weight: ["400"] });

function Authorization() {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAuthForm>({
    mode: "onChange",
  });

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IAuthForm) => {
      setIsClick(true);
      setIsError(false);
      return authService.main(isLoginForm ? "login" : "register", data);
    },
    onSuccess: () => {
      reset();
      push(AllPagesClass.NOT_PAID_ORDERS_PAGE);
    },
    onError: () => {
      setIsError(true);
      setIsClick(false);
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data);
  };
  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1
          className={`${lobsterFont.className} mb-5 text-center text-2xl border-b-2 border-black pb-2`}
        >
          Авторизация
        </h1>
        <form
          className={`${styles.authForm} ${lobsterFont.className}`}
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
