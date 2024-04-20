import { IUsersAuth } from "@/types/auth.interface";
import axios from "axios";

class Requires {
  private URL = "https://661e51d298427bbbef042f3e.mockapi.io/";

  async getUserAuthInfo() {
    return await axios.get<IUsersAuth[]>(`${this.URL}users`);
  }
}

export const RequiresClass = new Requires();
