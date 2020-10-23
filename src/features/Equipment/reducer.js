const defaultState = {
  equipments: [],
  equipment: {},
  isLoadingEquipments: false,
  isLoadingEquipment: false,
  isAddingEquipment: false,
  isSavingEquipment: false,
  error: "",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    //GET EQUIPMENTS
    case "GET_EQUIPMENTS_REQUEST":
      return { ...state, isLoadingEquipments: true };
    case "GET_EQUIPMENTS_SUCCESS":
      return {
        ...state,
        isLoadingEquipments: false,
        equipments: action.equipments,
      };
    case "GET_EQUIPMENTS_FAILURE":
      return { ...state, isLoadingEquipments: false, error: action.error };

    //GET EQUIPMENT BY ID
    case "GET_EQUIPMENT_BY_ID_REQUEST":
      return { ...state, isLoadingEquipment: true };
    case "GET_EQUIPMENT_BY_ID_SUCCESS":
      return {
        ...state,
        isLoadingEquipment: false,
        equipment: action.equipment,
      };
    case "GET_EQUIPMENT_BY_ID_FAILURE":
      return { ...state, isLoadingEquipment: false, error: action.error };

    //ADD EQUIPMENT
    case "ADD_EQUIPMENT_REQUEST":
      return { ...state, isAddingEquipment: true };
    case "ADD_EQUIPMENT_SUCCESS":
      return {
        ...state,
        isAddingEquipment: false,
        equipments: [...state.equipments, action.equipment],
      };
    case "ADD_EQUIPMENT_FAILURE":
      return { ...state, isAddingEquipment: false, error: action.error };
    //EDIT EQUIPMENT
    case "EDIT_EQUIPMENT_REQUEST":
      return { ...state, isSavingEquipment: true };
    case "EDIT_EQUIPMENT_SUCCESS":
      return {
        ...state,
        isSavingEquipment: false,
        equipment: action.equipment,
      };
    case "EDIT_EQUIPMENT_FAILURE":
      return { ...state, isSavingEquipment: false, error: action.error };

    default:
      return state;
  }
};

export default reducer;
