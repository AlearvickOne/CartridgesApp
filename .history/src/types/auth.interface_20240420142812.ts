export interface IUser {
  id1: string;
  name?: string;
  password?: string;
  info?: {
    userName?: string;
    userSurname?: string;
  };
}

export interface IUserNotPass extends Omit<IUser, "password"> {}
