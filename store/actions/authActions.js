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
    navigation.replace("Home");
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const signup = (newUser, navigation) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/signup", newUser);
      dispatch(setUser(response.data.token));
      alert("Signed up sucessfully");
      navigation.replace("Home");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = (navigation) => {
  removeToken();
  delete instance.defaults.headers.common.Authorization;
  alert("See you again");
  navigation.replace("Home");
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const updateUser = (updatedUser, navigation) => async (dispatch) => {
  try {
    const res = await instance.put(`/`, updatedUser);
    dispatch(setUser(res.data.token));
    navigation.replace("Home");
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
      dispatch(signout());
    }
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("token");
  } catch (e) {
    console.log(e);
  }
};

export const fetchHistory = () => async (dispatch) => {
  try {
    const res = await instance.get(`/`);
    dispatch({
      type: types.FETCH_HISTORY,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
