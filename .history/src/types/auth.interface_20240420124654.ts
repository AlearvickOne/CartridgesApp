export interface IUser {
  id: string;
  name: string;
  password: string;
  info: {
    name: string;
    surname: string;
  };
}

export interface IUserNotPass extends Omit<IUser, "password"> {}
