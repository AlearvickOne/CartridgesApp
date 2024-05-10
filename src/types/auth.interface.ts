import { FieldErrors, UseFormRegister } from "react-hook-form";
import { EnumRoles } from "./enums";
import { ChangeEvent } from "react";

export interface ILoginForm {
  login: string;
  password: string;
}

export interface IRegisterForm {
  login: string;
  password: string;
  email?: string;
  name?: string;
  surname?: string;
  role?: EnumRoles;
}

export interface IUser {
  id: string;
  login?: string;
  name?: string;
  surname?: string;
  role: EnumRoles;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

export interface IAuthComponents {
  register: UseFormRegister<IRegisterForm>;
  changeInput: (type: string, e: ChangeEvent<HTMLInputElement>) => void;
  errors: FieldErrors<IRegisterForm>;
  isError: boolean;
}

export interface IUserNotPass extends Omit<IUser, "password"> {}
