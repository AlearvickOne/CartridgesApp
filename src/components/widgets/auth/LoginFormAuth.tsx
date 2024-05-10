import { IAuthComponents } from "@/types/auth.interface";

export const LoginFormAuth = ({ register, changeInput, errors, isError }: IAuthComponents) => {
  return (
    <>
      <input
        type="text"
        placeholder="Введите логин"
        autoComplete="frgtgtsgsg"
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
        autoComplete="off"
        {...register("password", {
          required: true,
          maxLength: 20,
          minLength: 8,
          onChange: (e) => changeInput("password", e),
        })}
      />
      {errors && <></>}
      {isError && <p className="text-center text-xl text-red-500">Неверный логин или пароль</p>}
    </>
  );
};
