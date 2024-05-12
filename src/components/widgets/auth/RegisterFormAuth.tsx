import { IAuthComponents } from "@/types/auth.interface";
import { EnumRoles } from "@/types/enums";

export const RegisterFormAuth = ({ register, changeInput, errors, isError }: IAuthComponents) => {
  return (
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
        <span className="text-center text-xl mb-2 ">
          Кирилица разрешена только в полях - 'имя', 'фамилия'
        </span>
      )}
      {isError && (
        <p className="text-center text-xl text-red-500">
          Ошибка! Проверьте введенные данные! Возможно Логин или Email уже зарегистрированы.
        </p>
      )}
    </>
  );
};
