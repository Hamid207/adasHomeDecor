import axios from "axios";

export const CategoriesService = {
  async getCategories() {
    const responce = await axios.get("http://localhost:3001/categories");
    return responce.data;
  },
};

export interface Categorie {
  id: number;
  catTitle: string;
  image: string;
}
