import axios from "axios";

export const HeadingsService = {
  async getHeading() {
    const responce = await axios.get("http://localhost:3001/heading");
    return responce.data;
  },
};
