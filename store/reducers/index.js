import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
// import flightReducer from "./flightReducer";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
  authReducer,
  // flightReducer,
  locationReducer,
});

export default rootReducer;
