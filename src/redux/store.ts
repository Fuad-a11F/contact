import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./AuthSlice";
import ContactReducer from "./ContactSlice";

export const store = configureStore({
  reducer: { AuthReducer, ContactReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
