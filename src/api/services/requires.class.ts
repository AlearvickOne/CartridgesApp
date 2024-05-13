import { KeysClass } from "@/constants/constants";
import axios from "axios";

class Requires {
  async getAddressFromCartCoordinate(
    selectedAdress: number[],
    setAddress: (address: string) => void
  ) {
    const apikey = KeysClass.API_KEY_YANDEX_MAP;

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
