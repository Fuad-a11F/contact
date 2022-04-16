import axios from "axios";

import { Contact, ContactTypes } from "../types/contant";

export const ContactApi = {
  addContact: async (data: Contact) => {
    return await axios.post("http://localhost:5000/contact", {
      ...data,
      userId: localStorage.getItem("id"),
      key: Date.now(),
    });
  },

  getContact: async (id: string) => {
    return await axios.get(`http://localhost:5000/contact?userId=${id}`);
  },

  deleteContact: async (id: string) => {
    return await axios.delete(`http://localhost:5000/contact/${id}`);
  },

  updateContact: async (date: ContactTypes) => {
    return await axios.put(`http://localhost:5000/contact/${date.id}`, {
      ...date,
    });
  },
};
