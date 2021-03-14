import * as types from "../actions/types";

const initialState = {
  flights: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_FLIGHT:
      return {
        ...state,
        flights: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
