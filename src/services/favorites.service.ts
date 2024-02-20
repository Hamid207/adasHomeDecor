import axios from "axios";

export const FavoritesService = {
  async getFavorites() {
    const responce = await axios.get("http://localhost:3001/favorites");
    return responce.data;
  },

  async getAddFavorites(props: FavoritespsuhModel) {
    await axios.post("http://localhost:3001/favorites", {
      image: props.image,
      title: props.title,
      price: props.price,
      productId: props.productId,
    });
  },

  async getDeleteFavorites(productId: number) {
    await axios.delete(`http://localhost:3001/favorites/1`);
  },
};

export interface FavoritesModel {
  id: number;
  image: string;
  title: string;
  price: string;
  desc: string;
  productId: number;
}

interface FavoritespsuhModel {
  image: string;
  title: string;
  price: string;
  desc: string;
  productId: number;
}
