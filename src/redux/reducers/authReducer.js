import * as ACTIONS from "../constants/constants";

const authState = {
  isLoggedIn: false,
  isMessageCodeAllowed: false,
  isSignupAllowed: false,
};

const authReducer = (state = { ...authState }, action) => {
  if (action.type === ACTIONS.SIGNIN_SUCCESS) {
    return {
      ...state,
      isLoggedIn: true,
    };
  }
  else if (action.type === ACTIONS.LOGOUT_SUCCESS) {
    return {
      ...state,
      isLoggedIn: false,
    };
  }
  else if (action.type === ACTIONS.TOKEN_EXPIRED) {
    return {
      ...state,
      isLoggedIn: false,
    };
  }
  return state;
};

export default authReducer;
