import { createStore } from "redux";
import secureLs from "../../common/helper";
import authReducer from "../reducers/authReducer";



const configureStore = () => {

  const flexAuth = secureLs.get("flex-auth");

  let authState = {
    isLoggedIn: false,
    isMessageCodeAllowed: false,
    isSignupAllowed: false,
    isAdmin: false
  }

  if(flexAuth){
      authState = flexAuth;
  }

  const store =  createStore(
    authReducer,
    authState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
      secureLs.set("flex-auth", store.getState())
  })

  return store;
};

export default configureStore;
