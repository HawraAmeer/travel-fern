import instance from "./instance";

import * as types from "./types";

// SET FLIGHTS
export const setFlight = (flight) => {
  return { type: types.SET_FLIGHT, payload: flight };
};

// SEARCH FLIGHTS
export const searchFlight = (flight) => async (dispatch) => {
  // fixing date component issue
  if (!flight.returnDate && flight.type === "roundtrip")
    flight = { ...flight, returnDate: flight.depDate };
  try {
    const res = await instance.post("/flights/search", flight);
    dispatch({
      type: types.SEARCH_FLIGHT,
      payload: { flights: res.data, searchedFlight: flight },
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

// BOOK FLIGHTS
export const bookFlight = (booking) => async () => {
  try {
    const res = await instance.post("/booking", booking);
    alert("Successfully Booked");
  } catch (error) {
    console.log("Error:", error);
  }
};
