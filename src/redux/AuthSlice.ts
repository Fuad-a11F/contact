import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PayloadData, UserState } from "../shared/types/user";

const initialState: UserState = {
  user: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, payload: PayloadAction<PayloadData>) => {
      state.user = payload.payload;
    },
  },
});

export const { getUser } = authSlice.actions;

export default authSlice.reducer;
