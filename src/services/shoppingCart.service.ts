import axios from "axios";

export const ShoppingCartService = {
  async getShoppingCarts() {
    const responce = await axios.get("http://localhost:3001/cart");
    return responce.data;
  },

  async postShoppingCart(props: ShoppingCartModel) {
    await axios.post("http://localhost:3001/cart", {
      id: props.id,
      title: props.title,
      image: props.image,
      price: props.price,
      count: props.count,
      countPrice: props.countPrice,
    });
  },

  async deleteShoppingCart(id: number) {
    await axios.delete(`http://localhost:3001/cart/${id}`);
  },
};

export interface ShoppingCartModel {
  id: number;
  title: string;
  image: string;
  price: string;
  count: number;
  countPrice: number;
}
