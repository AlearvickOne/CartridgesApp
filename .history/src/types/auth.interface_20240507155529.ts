export interface IAuthForm {
  login: string;
  password: string;
}

export interface IUser {
  id: string;
  login?: string;
  userName?: string;
  userSurname?: string;
  role: EnumRoles;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

export interface IUserNotPass extends Omit<IUser, "password"> {}
