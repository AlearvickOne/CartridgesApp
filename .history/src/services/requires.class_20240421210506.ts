import { IUser } from "@/types/auth.interface";
import axios from "axios";

class Requires {
  private URL = "https://661e51d298427bbbef042f3e.mockapi.io/";
  private URL_USER_AUTH = `${this.URL}usersAuth`;
  private URL_ORDERS = `${this.URL}orders`;

  async getUsersData() {
    return await axios.get<IUser[]>(this.URL_USER_AUTH).then(({ data }) => data);
  }

  async getOrdersData() {
    return await axios.get(this.URL_ORDERS);
  }
}

export const RequiresClass = new Requires();
