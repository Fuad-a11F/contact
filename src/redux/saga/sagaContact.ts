import { call, takeEvery, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { getContact } from "../ContactSlice";
import { sagaActions } from "./sagaAction";
import { ContactApi } from "../../shared/api/contactApi";
import { ContactTypes } from "../../shared/types/contant";

function* fetchContact() {
  const contact: AxiosResponse<ContactTypes[]> = yield call(() =>
    ContactApi.getContact(localStorage.getItem("id")!)
  );

  yield put(getContact(contact.data));
}

function* getContactSaga() {
  yield takeEvery(sagaActions.FETCH_CONTACT, fetchContact);
}

export default getContactSaga;
