import { EnumRoles } from "./enums";

export interface ILoginForm {
  login: string;
  password: string;
}

export interface IRegisterForm {
  login: string;
  password: string;
  email: string;
  name: string;
  surname: string;
  role: EnumRoles;
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

export interface IUserNotPass extends Omit<IUser, "password"> {}
