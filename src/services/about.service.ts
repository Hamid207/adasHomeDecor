import axios from "axios";

export const AboutService = {
  async getAbout() {
    const responce = await axios.get("http://localhost:3001/about");
    return responce.data;
  },
};

export interface AboutModel {
  image: string;
  desc: string;
}
