export const getEquipmentsRequest = (actionSuccess) => ({
  type: "GET_EQUIPMENTS_REQUEST",
  actionSuccess,
});

export const getEquipmentsSuccess = (equipments) => ({
  type: "GET_EQUIPMENTS_SUCCESS",
  equipments,
});

export const getEquipmentsFailure = (error) => ({
  type: "GET_EQUIPMENTS_FAILURE",
  error,
});

export const getEquipmentByIdRequest = (equipmentId, actionSuccess) => ({
  type: "GET_EQUIPMENT_BY_ID_REQUEST",
  actionSuccess,
  equipmentId,
});

export const getEquipmentByIdSuccess = (equipment) => ({
  type: "GET_EQUIPMENT_BY_ID_SUCCESS",
  equipment,
});

export const getEquipmentByIdFailure = (error) => ({
  type: "GET_EQUIPMENT_BY_ID_FAILURE",
  error,
});

export const addEquipmentRequest = (data, actionSuccess) => ({
  type: "ADD_EQUIPMENT_REQUEST",
  data,
  actionSuccess,
});

export const addEquipmentSuccess = (equipment) => ({
  type: "ADD_EQUIPMENT_SUCCESS",
  equipment,
});

export const addEquipmentFailure = (error) => ({
  type: "ADD_EQUIPMENT_FAILURE",
  error,
});

export const editEquipmentRequest = (equipmentId, data, actionSuccess) => ({
  type: "EDIT_EQUIPMENT_REQUEST",
  equipmentId,
  data,
  actionSuccess,
});

export const editEquipmentSuccess = (equipment) => ({
  type: "EDIT_EQUIPMENT_SUCCESS",
  equipment,
});

export const editEquipmentFailure = (error) => ({
  type: "EDIT_EQUIPMENT_FAILURE",
  error,
});

export const testGraphqlRequest = (data, actionSuccess) => ({
  type: "TEST_GRAPHQL_REQUEST",
  data,
  actionSuccess,
});

export const testGraphqlSuccess = (result) => ({
  type: "TEST_GRAPHQL_SUCCESS",
  result,
});

export const testGraphqlFailure = (error) => ({
  type: "TEST_GRAPHQL_FAILURE",
  error,
});
