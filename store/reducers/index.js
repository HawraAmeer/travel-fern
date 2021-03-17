import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import flightReducer from "./flightReducer";
import locationReducer from "./locationReducer";
import passengerReducer from "./passengerReducer";

const rootReducer = combineReducers({
  authReducer,
  flightReducer,
  locationReducer,
  passengerReducer,
});

export default rootReducer;
