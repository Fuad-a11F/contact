import { call, takeEvery, put } from "redux-saga/effects";

import { sagaActions } from "./sagaAction";
import { AuthApi } from "../../shared/api/authApi";
import { getUser } from "../AuthSlice";
import { ArrayUser } from "../../shared/types/user";

function* fetchUser() {
  const user: ArrayUser = yield call(() =>
    AuthApi.getById(localStorage.getItem("id")!)
  );

  yield put(getUser(user));
}

function* getUserSaga() {
  yield takeEvery(sagaActions.FETCH_CONTACT, fetchUser);
}

export default getUserSaga;
