import { IUser } from "@/types/auth.interface";
import axios from "axios";

class Requires {
  private URL = "https://661e51d298427bbbef042f3e.mockapi.io";
  private URL_USER_AUTH = `${this.URL}/usersAuth`;
  private URL_ORDERS = `${this.URL}/orders`;

  async getUsersData() {
    return await axios.get<IUser[]>(this.URL_USER_AUTH).then(({ data }) => data);
  }

  async getOrdersData() {
    return await axios.get(this.URL_ORDERS);
  }

  async setOrderDataIsPaidInDb(id: string | number, isPaid: boolean) {
    if (!id) return;
    else if (typeof id !== "number") id = id.toString();

    return await axios.put(`${this.URL_ORDERS}/${id}`, {
      isPaid: isPaid,
    });
  }

  // ------------------------------------------------

  async getAddressFromCartCoordinate(setAddress: () => void) {
    axios
      .get(
        `https://geocode-maps.yandex.ru/1.x/?apikey=${apikey}&format=json&geocode=${selectedAdress[1]},${selectedAdress[0]}`
      )
      .then(({ data }) => {
        const address =
          data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty
            .GeocoderMetaData.text;
        setAddress(address);
      })
      .catch((error) => console.error(error));
  }
}

export const RequiresClass = new Requires();
