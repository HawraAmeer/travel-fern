import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

// Reducers
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
