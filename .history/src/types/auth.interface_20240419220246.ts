export interface IUser {
  id: string;
  login: string;
  password: string;
  info: {
    name: string;
    surname: string;
  };
}
