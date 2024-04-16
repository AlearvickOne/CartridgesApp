import React, { useState } from "react";

// Немного измененный useState переделанный под авторизационное окно
export const useAuthState = () => {
  const [inputsAuth, setInputsAuth] = useState({
    login: "",
    password: "",
  });

  const setInputLogin = (inputValue: string) => {
    setInputsAuth((prev) => ({
      ...prev,
      login: inputValue,
    }));
  };

  const setInputPassword = (inputValue2: string) => {
    setInputsAuth((prev) => ({
      ...prev,
      password: inputValue2,
    }));
  };

  return { inputsAuth, setInputLogin, setInputPassword };
};
