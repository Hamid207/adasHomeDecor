import axios from "axios";

export const UsersService = {
  async getUsers() {
    const responce = await axios.get("http://localhost:3001/users");
    return responce.data;
  },

  async getAddUser(props: AddNewUserModel) {
    const responce = await axios.post("http://localhost:3001/users", {
      fullname: props.fullname,
      email: props.email,
      password: props.password,
      userToken: props.userToken,
    });

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

interface AddNewUserModel {
  fullname: string;
  email: string;
  password: string;
  userToken: string;
}
