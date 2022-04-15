import axios from "axios";

import { Auth } from "../types/auth";

export const AuthApi = {
  register: async (data: Auth) => {
    return await axios.post("http://localhost:5000/users", {
      ...data,
    });
  },

  login: async (data: Auth) => {
    return await axios.get(
      `http://localhost:5000/users?login=${data.login}&password=${data.password}`
    );
  },

  getById: async (id: string) => {
    return await axios.get(`http://localhost:5000/users?id=${id}`);
  },
};
