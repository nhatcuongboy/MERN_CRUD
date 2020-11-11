const defaultState = {
  isLogging: false,
  isLogoutting: false,
  error: "",
  user: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // LOGIN
    case "LOGIN_REQUEST":
      return { ...state, isLogging: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogging: false,
        user: action.user,
      };
    case "LOGIN_FAILURE":
      return { ...state, isLogging: false, error: action.error };

    // LOGOUT
    case "LOGOUT_REQUEST":
      return { ...state, isLogoutting: true };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        isLogoutting: false,
        user: {},
      };
    case "LOGOUT_FAILURE":
      return { ...state, isLogoutting: false, error: action.error };

    default:
      return state;
  }
};

export default reducer;
