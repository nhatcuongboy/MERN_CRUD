import { put, takeLatest, all, call } from "redux-saga/effects";
import * as api from "./api";
import * as action from "./action";
import { setToken } from "../../configures/axios";

export default function* rootSaga() {
  yield all([yield takeLatest("LOGIN_REQUEST", loginRequest)]);
}

function* loginRequest({ data, actionSuccess }) {
  try {
    const user = yield call(api.login, data);
    yield put(action.loginSuccess(user));
    setToken(user.token);
    localStorage.setItem("token", user.token);
    if (actionSuccess) {
      actionSuccess(user);
    }
  } catch (error) {
    yield put(action.loginFailure(error));
    setToken("");
  }
}
