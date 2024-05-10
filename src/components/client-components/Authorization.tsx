"use client";
import styles from "@/styles/home/Home.module.scss";
import { ChangeEvent, useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import { IRegisterForm } from "@/types/auth.interface";
import { useForm, SubmitHandler } from "react-hook-form";
import { LOBSTER_FONT } from "@/constants/constants";
import { useMutationAuth } from "@/hooks/Auth/useMutationAuth";
import { LoginFormAuth } from "../widgets/auth/LoginFormAuth";
import { RegisterFormAuth } from "../widgets/auth/RegisterFormAuth";

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
            <LoginFormAuth
              register={register}
              changeInput={changeInput}
              errors={errors}
              isError={isError}
            />
          ) : (
            <RegisterFormAuth
              register={register}
              changeInput={changeInput}
              errors={errors}
              isError={isError}
            />
          )}

          <button type="submit" className={`${isClick ? styles.disabled : ""} mt-2`}>
            {isClick ? (
              <SyncIcon className="animate-spin" />
            ) : (
              `${isLoginForm ? "Войти в систему" : "Зарегистрироваться"}`
            )}
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
