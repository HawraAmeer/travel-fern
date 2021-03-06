import * as types from "../actions/types";

const initialState = {
  flights: [],
  searchedFlight: null,
  departureFlight: null,
  returnFlight: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FLIGHT:
      if (state.departureFlight)
        return { ...state, returnFlight: action.payload };
      else return { ...state, departureFlight: action.payload };

    case types.SEARCH_FLIGHT:
      return {
        ...state,
        flights: action.payload.flights,
        loading: false,
        searchedFlight: action.payload.searchedFlight,
      };

    default:
      return state;
  }
};

export default reducer;
