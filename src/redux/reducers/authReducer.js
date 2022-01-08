import * as ACTIONS from "../constants/constants";

const authState = {
  isLoggedIn: false,
  isMessageCodeAllowed: false,
  isSignupAllowed: false,
  isAdmin: false
};

const authReducer = (state = { ...authState }, action) => {
  if (action.type === ACTIONS.SIGNIN_SUCCESS) {
    return {
      ...state,
      isLoggedIn: true
    };
  }
  else if(action.type === ACTIONS.ADMIN_SIGNIN_SUCCESS){
    return {
      ...state,
      isLoggedIn: true,
      isAdmin: true
    };
  }
  else if (action.type === ACTIONS.PHONE_NUMBER_VERIFICATION_SUCCESS) {
    return {
      ...state,
      isMessageCodeAllowed: true
    };
  }
  else if (action.type === ACTIONS.SMS_CODE_VERIFICATION_SUCCESS) {
    return {
      ...state,
      isSignupAllowed: true
    };
  }
  else if (action.type === ACTIONS.SIGNUP_VERIFICATION_SUCCESS) {
    return {
      ...state,
      isMessageCodeAllowed: false,
      isSignupAllowed: false
    };
  }
  else if (action.type === ACTIONS.LOGOUT_SUCCESS) {
    return {
      ...state,
      isLoggedIn: false
    };
  }
  else if (action.type === ACTIONS.TOKEN_EXPIRED) {
    return {
      ...state,
      isLoggedIn: false
    };
  }
  return state;
};

export default authReducer;
