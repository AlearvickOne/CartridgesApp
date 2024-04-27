"use client";
import styles from "@/styles/home/Home.module.scss";
import { useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import { deleteSpaceInText } from "@/utils/deleteSpaceInText";
import { useConnectSocket } from "@/hooks/useConnectSocket";
import { SocketApiClass } from "@/app/api/socket-api";

function AuthorizationPage() {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | unknown>("");

  useConnectSocket();

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

          <button
            onClick={() =>
              SocketApiClass.createOrder({ title: "lest", description: "desc lets", price: 200 })
            }
          >
            Create
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