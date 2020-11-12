import { put, takeLatest, all, call } from "redux-saga/effects";
import * as api from "./api";
import * as action from "./action";

export default function* rootSaga() {
  yield all([
    yield takeLatest("GET_EQUIPMENTS_REQUEST", getEquipmentsRequest),
    yield takeLatest("ADD_EQUIPMENT_REQUEST", addEquipmentRequest),
    yield takeLatest("GET_EQUIPMENT_BY_ID_REQUEST", getEquipmentByIdRequest),
    yield takeLatest("EDIT_EQUIPMENT_REQUEST", editEquipmentRequest),
    yield takeLatest("TEST_GRAPHQL_REQUEST", testGraphqlRequest),
  ]);
}

function* testGraphqlRequest({ actionSuccess }) {
  try {
    const query = {
      title: "GraphQL note1s",
      body: "A long body of text about GraphQL"
    }
    const result = yield call(api.testGraphql, query);
    yield put(action.testGraphqlSuccess(result));
    if (actionSuccess) {
      actionSuccess(result);
    }
  } catch (error) {
    console.log(error)
    yield put(action.testGraphqlFailure(error));
  }
}

function* getEquipmentsRequest({ actionSuccess }) {
  try {
    const equipments = yield call(api.getEquipments);
    yield put(action.getEquipmentsSuccess(equipments));
    if (actionSuccess) {
      actionSuccess(equipments);
    }
  } catch (error) {
    yield put(action.getEquipmentsFailure(error));
  }
}

function* getEquipmentByIdRequest({ equipmentId, actionSuccess }) {
  try {
    const equipment = yield call(api.getEquipmentById, equipmentId);
    yield put(action.getEquipmentByIdSuccess(equipment));
    if (actionSuccess) {
      actionSuccess(equipment);
    }
  } catch (error) {
    yield put(action.getEquipmentByIdFailure(error));
  }
}

function* addEquipmentRequest({ data, actionSuccess }) {
  try {
    const equipment = yield call(api.addEquipment, data);
    yield put(action.addEquipmentSuccess(equipment));
    if (actionSuccess) {
      actionSuccess(equipment);
    }
  } catch (error) {
    yield put(action.addEquipmentFailure(error));
  }
}

function* editEquipmentRequest({ equipmentId, data, actionSuccess }) {
  try {
    const equipment = yield call(api.editEquipment, equipmentId, data);
    yield put(action.editEquipmentSuccess(equipment));
    if (actionSuccess) {
      actionSuccess(equipment);
    }
  } catch (error) {
    yield put(action.editEquipmentFailure(error));
  }
}
