import instance from "./instance";

import * as types from "./types";

//----------Search Flights----------//
export const searchFlight = (flight) => async (dispatch) => {
  if (!flight.returnDate && flight.type === "roundtrip")
    flight = { ...flight, returnDate: flight.depDate };
  try {
    const res = await instance.post("/flights/search", flight);
    dispatch({
      type: types.SEARCH_FLIGHT,
      payload: res.data,
      searchedFlight: flight,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
//----------SET Flight----------//
export const setFlight = (flight) => {
  return {
    type: types.SET_FLIGHT,
    payload: flight,
  };
};
