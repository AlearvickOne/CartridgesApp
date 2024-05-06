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

const caveat = Lobster({ subsets: ["latin"], weight: ["400"] });

function Authorization() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAuthForm>({
    mode: "onChange",
  });
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IAuthForm) => authService.main(isLoginForm ? "login" : "register", data),
    onSuccess: () => {
      reset();
      push(AllPagesClass.NOT_PAID_ORDERS_PAGE);
    },
    onError: (e) => console.log(e),
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1
          className={`${caveat.className} mb-5 text-center text-2xl border-b-2 border-black pb-2`}
        >
          Авторизация
        </h1>
        <form
          className={`${styles.authForm} ${caveat.className}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Введите логин"
            {...register("login", {
              required: "login is required",
              maxLength: 20,
              minLength: 5,
              pattern: /^[^\s]+$/,
            })}
          />
          {errors.login && <span>This field is required</span>}
          <input
            type="password"
            placeholder="Введите пароль"
            {...register("password", {
              required: "password is required",
              maxLength: 20,
              minLength: 8,
              pattern: /^[^\s]+$/,
            })}
          />
          {errors.password && <span>This field is required</span>}

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
