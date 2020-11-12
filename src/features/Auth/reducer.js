const defaultState = {
  isLogging: false,
  isLogoutting: false,
  error: "",
  user: {},
  isLogged: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHECK_LOGIN":
      return { ...state, isLogged: localStorage.getItem('jwtToken') ? true : false, user: localStorage.getItem('currentUser') };
    // LOGIN
    case "LOGIN_REQUEST":
      return { ...state, isLogging: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogging: false,
        user: action.user,
        isLogged: true,
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
        isLogged: false,
      };
    case "LOGOUT_FAILURE":
      return { ...state, isLogoutting: false, error: action.error };

    default:
      return state;
  }
};

export default reducer;
