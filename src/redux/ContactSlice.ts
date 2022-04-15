import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ContactTypes } from "../shared/types/contant";

const initialState: any = {
  contact: [],
  copy_contact: [],
};

export const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, payload: PayloadAction<any>) => {
      state.contact.push(payload.payload);
    },

    getContact: (state, payload: PayloadAction<any>) => {
      state.contact = payload.payload;
    },

    deleteContact: (state, payload: PayloadAction<string>) => {
      state.contact = state.contact.filter(
        (item: ContactTypes) => item.id !== payload.payload
      );
    },

    updateContact: (state, payload: PayloadAction<any>) => {
      state.contact = state.contact.map((item: ContactTypes) => {
        if (item.id !== payload.payload.id) {
          return item;
        }

        item.name = payload.payload.name;
        item.lastname = payload.payload.lastname;
        item.number = payload.payload.number;
        item.userId = payload.payload.userId;

        return item;
      });
    },

    searchContact: (state, payload: PayloadAction<string>) => {
      if (state.copy_contact.length === 0)
        state.copy_contact = [...state.contact];

      state.contact = state.copy_contact.filter((item: ContactTypes) =>
        item.name.includes(payload.payload)
      );
    },

    clearSearchContact: (state) => {
      state.contact = [...state.copy_contact];
      state.copy_contact = [];
    },
  },
});

export const {
  addContact,
  getContact,
  deleteContact,
  updateContact,
  clearSearchContact,
  searchContact,
} = ContactSlice.actions;

export default ContactSlice.reducer;
