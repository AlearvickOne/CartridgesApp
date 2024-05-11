import { axiosWithAuth } from "@/api/interceptors";
import { IUser } from "@/types/auth.interface";

class UserServiceForAdmin {
  private BASE_URL = "users/for/admin";

  async getUsers() {
    const response = await axiosWithAuth.get<IUser[]>(this.BASE_URL);
    return response.data;
  }

  async deleteUsers(arrayId: number[]) {
    const response = await axiosWithAuth.delete<IUser[]>(`${this.BASE_URL}/delete/users`, {
      data: arrayId,
    });

    return response;
  }
}

export const UserServiceForAdminClass = new UserServiceForAdmin();
