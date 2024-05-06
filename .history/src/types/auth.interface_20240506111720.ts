export interface IUser {
  id: string;
  login?: string;
  info?: {
    userName?: string;
    userSurname?: string;
  };
}

export interface IUserNotPass extends Omit<IUser, "password"> {}
