"use client";
import styles from "@/styles/home/Home.module.scss";
import { ChangeEvent, useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import { IRegisterForm } from "@/types/auth.interface";
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
  } = useForm<IRegisterForm>({
    mode: "onChange",
  });

  const { mutate } = useMutationAuth(setIsClick, setIsError, isLoginForm, reset);

  const changeInput = (type: string, e: ChangeEvent<HTMLInputElement>) => {
    const login = /[^a-zA-Z0-9]/g;
    const password = /[^a-zA-Z0-9]/g;
    const email = /[^a-zA-Z0-9.@_-]/g;
    const nameOrSurname = /[^a-zA-Zа-яА-Я]/g;

    if (type === "login") {
      e.target.value = e.target.value.replace(login, "");
    } else if (type === "password") {
      e.target.value = e.target.value.replace(password, "");
    } else if (type === "email") {
      e.target.value = e.target.value.replace(email, "");
    } else if (type === "name" || type === "surname") {
      e.target.value = e.target.value.replace(nameOrSurname, "");
    }
  };

  const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
    mutate(data);
    console.log(data);
  };
  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1
          className={`${LOBSTER_FONT.className} font-thin mb-5 text-center text-2xl border-b-2 border-black pb-2`}
        >
          {isLoginForm ? "Авторизация" : "Регистрация"}
        </h1>
        <form className={`${styles.authForm} font-thin`} onSubmit={handleSubmit(onSubmit)}>
          {isLoginForm ? (
            <>
              <input
                type="text"
                placeholder="Введите логин"
                {...register("login", {
                  required: true,
                  maxLength: 20,
                  minLength: 5,
                  onChange: (e) => changeInput("login", e),
                })}
              />
              {errors.login?.message}
              <input
                type="password"
                placeholder="Введите пароль"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 8,
                  onChange: (e) => changeInput("password", e),
                })}
              />
              {errors && (
                <span className="text-center text-xl font-thin">Проверьте введенные данные</span>
              )}
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

                  onChange: (e) => changeInput("login", e),
                })}
              />
              <input
                type="password"
                placeholder="Введите пароль"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 5,

                  onChange: (e) => changeInput("password", e),
                })}
              />
              <input
                type="email"
                placeholder="Введите email"
                {...register("email", {
                  required: true,
                  onChange: (e) => changeInput("email", e),
                })}
              />
              <input
                type="text"
                placeholder="Введите ваше имя"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  onChange: (e) => changeInput("name", e),
                })}
              />
              <input
                type="text"
                placeholder="Введите вашу фамилию"
                {...register("surname", {
                  required: true,
                  maxLength: 20,
                  onChange: (e) => changeInput("surname", e),
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
                    pattern: /^[^\s]+$/,
                  })}
                >
                  <option value={EnumRoles.PROVIDER}>Исполнитель заказа</option>
                  <option value={EnumRoles.CLIENT}>Клиент</option>
                </select>
              </div>
              {errors && (
                <span className="text-center text-xl">
                  Кирилица разрешена только в полях - 'имя', 'фамилия'
                </span>
              )}
            </>
          )}

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
