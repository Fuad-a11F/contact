import axios from "axios";

import { Contact, ContactTypes } from "../types/contant";
import { openNotification } from "../../components/Notifications";

export const ContactApi = {
  addContact: async (data: Contact) => {
    try {
      return await axios.post("http://localhost:5000/contact", {
        ...data,
        userId: localStorage.getItem("id"),
        key: Date.now(),
      });
    } catch (e) {
      openNotification("Ошибка", "Произошла непредвиденная ошибка!");
      console.error(e);
    }
  },

  getContact: async (id: string) => {
    try {
      return await axios.get(`http://localhost:5000/contact?userId=${id}`);
    } catch (e) {
      openNotification("Ошибка", "Произошла непредвиденная ошибка!");
      console.error(e);
    }
  },

  deleteContact: async (id: string) => {
    try {
      return await axios.delete(`http://localhost:5000/contact/${id}`);
    } catch (e) {
      openNotification("Ошибка", "Произошла непредвиденная ошибка!");
      console.error(e);
    }
  },

  updateContact: async (date: ContactTypes) => {
    try {
      return await axios.put(`http://localhost:5000/contact/${date.id}`, {
        ...date,
      });
    } catch (e) {
      openNotification("Ошибка", "Произошла непредвиденная ошибка");
      console.error(e);
    }
  },
};
