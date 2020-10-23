const defaultState = {
  isLogging: false,
  error: "",
  user: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default reducer;
