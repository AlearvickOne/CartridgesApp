export interface IUsersAuth {
  id: string;
  login: string;
  password: string;
  info: {
    name: string;
    surname: string;
  };
}

export interface IUsersInfo {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
}
