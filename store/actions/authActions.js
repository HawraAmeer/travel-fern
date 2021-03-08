import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as types from "./types";

const setUser = (token) => {
  AsyncStorage.setItem("token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signin = (userData, navigation) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", userData);
    dispatch(setUser(res.data.token));
    // navigation.goBack();
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime < user.exp) {
      dispatch(setUser(token));
    } else {
      //   dispatch(signout());
    }
  }
};
