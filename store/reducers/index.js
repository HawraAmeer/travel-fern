import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
  authReducer,
  locationReducer,
});

export default rootReducer;
