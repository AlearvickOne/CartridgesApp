export interface IUsersAuth {
  id: string;
  login: string;
  password: string;
  role: string;
  isAuth: boolean;
}

export interface IUsers {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
}
