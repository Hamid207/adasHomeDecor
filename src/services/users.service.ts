import axios from "axios";

export const UsersService = {
  async getUsers() {
    const responce = await axios.get("http://localhost:3001/users");
    return responce.data;
  },
};

export interface UserModel {
  id: string;
  fullname: string;
  email: string;
  password: string;
  userToken: string;
}
