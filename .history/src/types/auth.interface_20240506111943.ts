export interface IAuth {
  login: string;
  password: string;
}

export interface IUser {
  id: string;
  login?: string;
  userName?: string;
  userSurname?: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

export interface IUserNotPass extends Omit<IUser, "password"> {}
