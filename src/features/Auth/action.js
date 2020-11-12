// import * as ActionTypes from "../constants/actionTypes";

export const checkLoginRequest = () => ({
  type: "CHECK_LOGIN",
});

export const loginRequest = (data, actionSuccess) => ({
  type: "LOGIN_REQUEST",
  data,
  actionSuccess,
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  user,
});

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  error,
});

// Logout
export const logoutRequest = (actionSuccess) => ({
  type: "LOGOUT_REQUEST",
  actionSuccess,
});

export const logoutSuccess = () => ({
  type: "LOGOUT_SUCCESS",
});

export const logoutFailure = (error) => ({
  type: "LOGOUT_FAILURE",
  error,
});
