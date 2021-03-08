import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

// Reducers
import reducer from "./reducers";

// Actions
import { checkForToken } from "./actions/authActions";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(checkForToken());

export default store;
