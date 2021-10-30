import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    { id: 1, message: "Hi! how are you?" },
    { id: 2, message: "Hi! It is my post" },
  ],
  profileData: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: action.newPostBody,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profileData: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostBody) => {
  return {
    type: ADD_POST,
    newPostBody: newPostBody,
  };
};

export const setUserProfileAC = (profile) => {
  debugger;
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  };
};

export const setStatusAC = (status) => {
  return {
    type: SET_STATUS,
    status: status,
  };
};

export const getUserPageThunkAC = (userId) => async (dispatch) => {
  let response = await usersAPI.getUserProfile(userId);
  debugger
  dispatch(setUserProfileAC(response));
};

export const getStatusThunkAC = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  debugger
    dispatch(setStatusAC(response));
};

export const updateStatusThunkAC = (status) => async (dispatch) => {
    let response = profileAPI.updateStatus(status)
      if (response.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
  };

export default profileReducer;
