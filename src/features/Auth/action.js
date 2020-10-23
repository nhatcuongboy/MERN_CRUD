// import * as ActionTypes from "../constants/actionTypes";

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
