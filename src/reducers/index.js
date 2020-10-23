import { combineReducers } from "redux";
import equipmentReducer from "../features/Equipment/reducer";
import authReducer from "../features/Auth/reducer";

export default combineReducers({
  equipmentReducer,
  authReducer,
});
