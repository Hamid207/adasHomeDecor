import axios from "axios";

export enum Test {
  null = "",
  collectionId = "collectionId",
  categoriesId = "categoriesId",
}

export const ProductsService = {
  async getProducts() {
    const responce = await axios.get("http://localhost:3001/products");
    return responce.data;
  },

  async getById(id: string) {
    const responce = await axios.get(`http://localhost:3001/products?id=${id}`);
    return responce.data[0];
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
