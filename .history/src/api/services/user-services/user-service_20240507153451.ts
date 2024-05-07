import { IUser } from "@/types/auth.interface";
import { axiosWithAuth } from "../interceptors";

class UserService {
  private BASE_URL = "user";

  async getUser() {
    const response = await axiosWithAuth.get<IUser>(this.BASE_URL);
    return response.data;
  }
}

export const UserServiceClass = new UserService();
