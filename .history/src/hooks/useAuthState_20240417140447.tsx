"use client";
import { useCallback, useMemo, useState } from "react";

// Немного измененный useState переделанный под авторизационное окно
export const useAuthState = () => {
  const [inputsAuth, setInputsAuth] = useState({
    login: "",
    password: "",
  });
  const dontSpace = useMemo(() => /\s/g, []);

  const setInputLogin = useCallback(
    (inputValue: string) => {
      if (inputValue.length > 20) return;

      setInputsAuth((prev) => ({
        ...prev,
        login: inputValue.replace(dontSpace, ""),
      }));
    },
    [dontSpace]
  );

  const setInputPassword = useCallback(
    (inputValue: string) => {
      if (inputValue.length > 20) return;

      setInputsAuth((prev) => ({
        ...prev,
        password: inputValue.replace(dontSpace, ""),
      }));
    },
    [dontSpace]
  );

  return { inputsAuth, setInputLogin, setInputPassword };
};
