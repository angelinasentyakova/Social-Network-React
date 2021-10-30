import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (data) => {
  debugger;
  return {
    type: SET_USER_DATA,
    data: data,
  };
};

export const getAuthUserDataThuckAC = () => async (dispatch) => {
  let response = await authAPI.getMyProfile();
  debugger;
  if (response.resultCode === 0)
    dispatch(setAuthUserDataAC({ ...response.data, isAuth: true }));
};

export const loginThunkAC =
  (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
      dispatch(getAuthUserDataThuckAC());
    } else {
      let message =
        response.messages.length > 0
          ? response.messages[0]
          : "Email or password is incorrect";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const logOutThunkAC = () => async (dispatch) => {
  let response = await authAPI.logOut();
  if (response.resultCode === 0)
    dispatch(
      setAuthUserDataAC({
        id: null,
        email: null,
        login: null,
        isAuth: false,
      })
    );
};

export default authReducer;
