import * as types from "./types";
import instance from "./instance";

// FETCH lOCATIONS
export const fetchLocations = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/locations");
      dispatch({ type: types.FETCH_LOCATIONS, payload: res.data });
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
