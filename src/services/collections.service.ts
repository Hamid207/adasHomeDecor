import axios from "axios";

export const CollectionsService = {
  async getCollctions() {
    const responce = await axios.get("http://localhost:3001/collections");
    console.log(responce.data);

    return responce.data;
  },
};

export interface Collection {
  id: number;
  image: string;
  colTitle: string;
}
