import { all } from "redux-saga/effects";
import equipmentSaga from "../features/Equipment/saga";
import authSaga from "../features/Auth/saga";

export default function* root() {
  yield all([equipmentSaga(), authSaga()]);
}
