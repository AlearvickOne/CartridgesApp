export interface IUser {
  id: string;
  name?: string;
  password?: string;
  info?: {
    userName?: string;
    userSurname?: string;
  };
}

export interface IUserNotPass extends Omit<IUser, "password"> {
  id1: "";
}
