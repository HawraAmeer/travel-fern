import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

// Reducers
import reducer from "./reducers";

// Actions
import { checkForToken } from "./actions/authActions";
import { fetchLocations } from "./actions/locationActions";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(checkForToken());
store.dispatch(fetchLocations());

export default store;
