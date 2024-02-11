import axios from "axios";

export const ProductsService = {
  async getProducts() {
    const responce = await axios.get("http://localhost:3001/products");
    return responce.data;
  },
};

export interface Product {
  id: number;
  collectionId: number;
  categoriesId: number;
  image: string;
  title: string;
  desc: string;
  price: string;
  views: number;
}
