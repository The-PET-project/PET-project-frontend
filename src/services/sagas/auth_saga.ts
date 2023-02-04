import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { RegistrationPayload } from "../../store/slices/entry_process_slice";
import { registrateAccount } from "../auth_service";

function* registrationWatcher() {
  yield takeLatest("entryProcess/registrationStarted", registrationWorker);
}

function* registrationWorker(action: PayloadAction<RegistrationPayload>) {
  try {
    const response = yield call(
      registrateAccount,
      action.payload.user,
      action.payload.userType
    );
    if (response) {
      yield put({ type: "entryProcess/registrationEnded", payload: true });
    } else {
      yield put({ type: "entryProcess/registrationEnded", payload: false });
    }
  } catch (e) {
    yield put({ type: "entryProcess/registrationEnded", payload: false });
  }
}

export default function* authSaga() {
  yield all([registrationWatcher()]);
}
