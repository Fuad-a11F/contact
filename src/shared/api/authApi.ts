import axios from "axios";

import { Auth } from "../types/auth";
import { openNotification } from "../../components/Notifications";

export const AuthApi = {
  register: async (data: Auth) => {
    try {
      return await axios.post("http://localhost:5000/users", {
        ...data,
      });
    } catch (e) {
      console.error(e);
      openNotification("Ошибка", "Произошла непредвиденная ошибка!");
    }
  },

  login: async (data: Auth) => {
    try {
      return await axios.get(
        `http://localhost:5000/users?login=${data.login}&password=${data.password}`
      );
    } catch (e) {
      console.error(e);
      openNotification("Ошибка", "Произошла непредвиденная ошибка!");
    }
  },

  getById: async (id: string) => {
    try {
      return await axios.get(`http://localhost:5000/users?id=${id}`);
    } catch (e) {
      console.error(e);
      openNotification("Ошибка", "Произошла непредвиденная ошибка!");
    }
  },
};
