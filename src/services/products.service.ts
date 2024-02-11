import axios from "axios";

export const ProductsService = {
  async getProducts() {
    const responce = await axios.get("http://localhost:3001/products");
    return responce.data;
  },
};
