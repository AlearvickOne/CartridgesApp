"use client";
import styles from "@/styles/home/Home.module.scss";
import { useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import { ILoginForm, IRegisterForm } from "@/types/auth.interface";
import { useForm, SubmitHandler } from "react-hook-form";
import { LOBSTER_FONT } from "@/constants/constants";
import { useMutationAuth } from "@/hooks/Auth/useMutationAuth";
import { EnumRoles } from "@/types/enums";

function Authorization() {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginForm | IRegisterForm>({
    mode: "onChange",
  });

  const { mutate } = useMutationAuth(setIsClick, setIsError, isLoginForm, reset);

  const onSubmit: SubmitHandler<ILoginForm | IRegisterForm> = (data) => {
    mutate(data);
  };
  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1
          className={`${LOBSTER_FONT.className} mb-5 text-center text-2xl border-b-2 border-black pb-2`}
        >
          {isLoginForm ? "Авторизация" : "Регистрация"}
        </h1>
        <form
          className={`${styles.authForm} ${LOBSTER_FONT.className}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          {isLoginForm ? (
            <>
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
            </>
          ) : (
            <>
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
                  minLength: 5,
                  pattern: /^[^\s]+$/,
                })}
              />
              <input
                type="email"
                placeholder="Введите email"
                {...register("email", {
                  required: true,
                  maxLength: 20,
                  minLength: 5,
                  pattern: /^[^\s]+$/,
                })}
              />
              <input
                type="text"
                placeholder="Введите ваше имя"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  minLength: 5,
                  pattern: /^[^\s]+$/,
                })}
              />
              <input
                type="text"
                placeholder="Введите вашу фамилию"
                {...register("surname", {
                  required: true,
                  maxLength: 20,
                  minLength: 5,
                  pattern: /^[^\s]+$/,
                })}
              />
              <div className="flex flex-col  mb-4">
                <label htmlFor="role" className="text-center text-xl mb-2">
                  Кто вы?
                </label>
                <select
                  id="role"
                  className="text-center p-2 text-xl"
                  {...register("role", {
                    required: true,
                    maxLength: 20,
                    minLength: 5,
                    pattern: /^[^\s]+$/,
                  })}
                >
                  <option value={EnumRoles.PROVIDER}>Исполнитель заказа</option>
                  <option value={EnumRoles.CLIENT}>Клиент</option>
                </select>
              </div>
            </>
          )}

          {errors && <span className="text-center">Проверьте введенные данные</span>}

          {isError && <p className="text-center">Неверный логин или пароль</p>}
          <button type="submit" className={`${isClick ? styles.disabled : ""} mt-2`}>
            {isClick ? <SyncIcon className="animate-spin" /> : "Войти в систему"}
          </button>
          <button
            type="button"
            className="mt-2"
            onClick={() => {
              setIsLoginForm(!isLoginForm);
              reset();
            }}
          >
            {!isLoginForm ? "Авторизация" : "Регистрация"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Authorization;
