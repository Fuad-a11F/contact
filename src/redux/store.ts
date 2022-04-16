import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import AuthReducer from "./AuthSlice";
import ContactReducer from "./ContactSlice";
import getContactSaga from "./saga/sagaContact";
import getUserSaga from "./saga/sagaUser";

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  sagaMiddleware,
];

export const store = configureStore({
  reducer: { AuthReducer, ContactReducer },
  middleware,
});

sagaMiddleware.run(getContactSaga);
sagaMiddleware.run(getUserSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
