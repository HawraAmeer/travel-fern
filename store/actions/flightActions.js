import instance from "./instance";

import * as types from "./types";

//----------Search Flights----------//
export const searchFlight = (flight, navigation) => async (dispatch) => {
  try {
    const res = await instance.get("/flights/search", flight);

    dispatch({
      type: types.SEARCH_FLIGHT,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
