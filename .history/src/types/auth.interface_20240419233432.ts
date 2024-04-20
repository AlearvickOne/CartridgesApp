export interface IUser {
  name: string;
  password: string;
  info: {
    name: string;
    surname: string;
  };
}

export interface IUserNotPass extends Omit<IUser, "password"> {}
