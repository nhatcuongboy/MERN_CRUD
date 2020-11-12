import { put, takeLatest, all, call } from "redux-saga/effects";
import * as api from "./api";
import * as action from "./action";
import { setToken } from "../../configures/axios";
// import jwt from "jsonwebtoken";

export default function* rootSaga() {
  yield all([
    yield takeLatest("LOGIN_REQUEST", loginRequest),
    yield takeLatest("LOGOUT_REQUEST", logoutRequest)
  ]);
}

function* loginRequest({ data, actionSuccess }) {
  try {
    const user = yield call(api.login, data);
    yield put(action.loginSuccess(user));
    setToken(user.token);
    localStorage.setItem("jwtToken", user.token);
    localStorage.setItem("currentUser", user);
    if (actionSuccess) {
      actionSuccess(user);
    }
  } catch (error) {
    yield put(action.loginFailure(error));
    setToken("");
  }
}

function* logoutRequest({ actionSuccess }) {
  try {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('currentUser');
    setToken('');
    yield put(action.logoutSuccess());
    if (actionSuccess) {
      actionSuccess();
    }
  } catch (error) {
    yield put(action.logoutFailure(error));
    setToken('');
  }
}
