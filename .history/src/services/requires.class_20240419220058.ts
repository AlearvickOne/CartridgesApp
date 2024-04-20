import { IUsersAuth } from "@/types/auth.interface";
import axios from "axios";

class Requires {
  private URL = "https://661e51d298427bbbef042f3e.mockapi.io/";

  async getUsersAuthData() {
    return await axios.get<IUsersAuth[]>(`${this.URL}usersAuth`).then(({ data }) => data);
  }
}

export const RequiresClass = new Requires();
