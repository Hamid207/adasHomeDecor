import axios from "axios";

export const DiscountService = {
  async getDiscount() {
    const responce = await axios.get("http://localhost:3001/discount ");
    return responce.data;
  },
};

export interface DiscountModel {
  sale: string;
  image: string;
  desc: string;
}
