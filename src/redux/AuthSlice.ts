import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ArrayUser, User, UserState } from "../shared/types/user";

const initialState: UserState = {
  user: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, payload: PayloadAction<ArrayUser>) => {
      state.user = payload.payload.data[0];
    },

    getUserRegister: (state, payload: PayloadAction<User>) => {
      state.user = payload.payload.data;
    },
  },
});

export const { getUser, getUserRegister } = authSlice.actions;

export default authSlice.reducer;
